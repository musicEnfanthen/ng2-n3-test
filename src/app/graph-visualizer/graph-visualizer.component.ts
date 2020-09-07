import { Component, OnInit } from '@angular/core';

import * as N3 from 'n3';

@Component({
    selector: 'app-graph-visualizer',
    templateUrl: './graph-visualizer.component.html',
    styleUrls: ['./graph-visualizer.component.css']
})
export class GraphVisualizerComponent implements OnInit {
    parser: N3.Parser;
    store: N3.Store;
    writer: N3.Writer;

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

    ngOnInit(): void {
        this.setInitialTriples();
        this.setInitialQuery();
    }

    /**
     * TRIPLES
     */
    parseTriples(triples: string): void {
        this.parser = new N3.Parser();
        this.store = new N3.Store();
        this.writer = new N3.Writer();

        this.parser.parse(triples, (error: Error, quadValue: N3.Quad, prefixes: N3.Prefixes) => {
            if (quadValue) {
                console.log(quadValue);
                this.store.addQuad(quadValue);
            } else {
                console.log('That is all, folks!', prefixes);
                this.writer.addPrefixes(prefixes);
                this.writeTriples();
            }
        });
    }

    writeTriples(): void {
        const quads = this.store.getQuads(null, null, null, N3.DataFactory.defaultGraph());
        console.log('quads:', quads);
        this.writer.addQuads(quads);
        this.writer.end((e, result) => {
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

    doQuery(query: string): void {
        console.log('query', query);
        this.query = query;
    }
}
