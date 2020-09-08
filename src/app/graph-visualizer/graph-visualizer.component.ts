import { Component, OnInit } from '@angular/core';

import * as N3 from 'n3';
import {
    Parser as SPARQLParser,
    SparqlParser,
    Generator as SPARQLGenerator,
    SparqlGenerator,
    SparqlQuery,
    Pattern,
    Query,
    Update,
    BgpPattern,
    BlockPattern,
    GraphPattern,
    ServicePattern,
    FilterPattern,
    BindPattern,
    ValuesPattern,
    SelectQuery,
    Triple
} from 'sparqljs';

@Component({
    selector: 'app-graph-visualizer',
    templateUrl: './graph-visualizer.component.html',
    styleUrls: ['./graph-visualizer.component.css']
})
export class GraphVisualizerComponent implements OnInit {
    N3Parser: N3.Parser;
    N3Store: N3.Store;
    N3Writer: N3.Writer;

    defaultGraph: N3.DefaultGraph = N3.DataFactory.defaultGraph();
    resultGraph;

    sparqlParser: SparqlParser = new SPARQLParser();
    sparqlGenerator: SparqlGenerator = new SPARQLGenerator();

    initialTriples = `@prefix c: <http://example.org/cartoons#> .

        c:Tom a c:Cat .
        c:Jerry a c:Mouse ;
                c:smarterThan c:Tom .`;

    initialQuery = `PREFIX c: <http://example.org/cartoons#>

        SELECT DISTINCT *
        WHERE {
            ?s ?p ?o .
        }
        LIMIT 50
    `;

    triples: string;
    query: string;

    results: N3.Quad[];

    ngOnInit(): void {
        this.setInitialTriples();
        this.setInitialQuery();
    }

    /**
     * TRIPLES
     */
    async parseTriples(triples: string): Promise<void> {
        this.N3Parser = new N3.Parser();
        this.N3Store = new N3.Store();
        this.N3Writer = new N3.Writer();

        await this.N3Parser.parse(triples, (error: Error, quadValue: N3.Quad, prefixes: N3.Prefixes) => {
            if (quadValue) {
                console.log(quadValue);
                this.N3Store.addQuad(quadValue);
            } else {
                console.log('That is all, folks!', prefixes);
                this.N3Writer.addPrefixes(prefixes);
                this.writeTriples();
            }
        });
    }

    writeTriples(): void {
        const quads = this.N3Store.getQuads(null, null, null, this.defaultGraph);
        console.log('quads:', quads);
        this.N3Writer.addQuads(quads);
        this.N3Writer.end((e, result) => {
            if (result) {
                console.log('result', result);
                this.triples = result;
            }
        });
    }

    setInitialTriples(): void {
        if (!this.initialTriples) {
            console.warn('no initial triples: ', this.triples);
            return;
        }
        this.triples = this.initialTriples;
        this.updateTriples(this.triples);
    }

    updateTriples(triples: string): void {
        this.parseTriples(triples);
    }

    /**
     * SPARQL
     */
    /**
     * Public method: setInitialQuery.
     *
     * It sets the initial value of the query variable
     * from the RDF input data.
     *
     * @returns {void} Sets the initial query.
     */
    setInitialQuery(): void {
        if (!this.initialQuery) {
            console.warn('no initial query: ', this.query);
            return;
        }
        this.query = this.initialQuery;
        this.doQuery(this.query);
    }

    async doQuery(query: string): Promise<void> {
        console.log('query', query);
        this.query = query;

        const t = await this.N3Store.countQuads(null, null, null, this.defaultGraph);
        console.log(t);

        const parsedQuery: SparqlQuery = this.sparqlParser.parse(query);
        console.log('parsed query', parsedQuery, typeof parsedQuery);

        const type: string = this.getQueryType(parsedQuery);
        console.log('type', type);

        const whereClause = this.getWhereClause(parsedQuery);
        console.log('whereClause', whereClause[0].type);

        whereClause.map(pattern => {
            this.isPattern(pattern);

            if ('triples' in pattern) {
                pattern.triples.map((triplet: Triple) => {
                    const bindingSign = '?';
                    const s = triplet.subject['id'].includes(bindingSign)
                        ? null
                        : N3.DataFactory.namedNode(triplet.subject['id']);
                    const p = triplet.predicate['id'].includes(bindingSign)
                        ? null
                        : N3.DataFactory.namedNode(triplet.predicate['id']);
                    const o = triplet.object['id'].includes(bindingSign)
                        ? null
                        : N3.DataFactory.namedNode(triplet.object['id']);

                    console.log(s);
                    console.log(p);
                    console.log(o);

                    const test: N3.Quad[] = this.N3Store.getQuads(s, p, o, this.defaultGraph);
                    this.results = test;
                    console.log(this.results);
                });
            }
        });
    }

    getQueryType(parsedQuery: SparqlQuery): string {
        if (this.isQueryType(parsedQuery)) {
            return parsedQuery.queryType;
        } else if (this.isUpdateType(parsedQuery)) {
            console.log('got Update type');
            return '';
        }
    }

    getWhereClause(parsedQuery: SparqlQuery): Pattern[] {
        if (this.isQueryType(parsedQuery)) {
            return parsedQuery.where;
        } else if (this.isUpdateType(parsedQuery)) {
            console.log('got Update type');
            return [];
        }
    }

    isQueryType(query: Query | Update): query is Query {
        return (query as Query) !== undefined;
    }

    isUpdateType(query: Query | Update): query is Update {
        return (query as Update) !== undefined;
    }

    isPattern(pattern: Pattern): pattern is Pattern {
        switch (pattern.type) {
            case 'bgp': {
                return (pattern as BgpPattern) !== undefined;
            }
            case 'bind': {
                break;
            }
            case 'filter': {
                break;
            }
            case 'graph': {
                break;
            }
            case 'group': {
                break;
            }
            case 'minus': {
                break;
            }
            case 'optional': {
                break;
            }
            case 'query': {
                break;
            }
            case 'service': {
                break;
            }
            case 'union': {
                break;
            }
            case 'values': {
                break;
            }
            default:
                return (pattern as BgpPattern) !== undefined;
        }
    }
}
