import { Component, OnInit } from '@angular/core';

import * as N3 from 'n3';

const { DataFactory } = N3 ;
const { namedNode, literal, defaultGraph, quad } = DataFactory;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    appName = 'RDF Graph Visualizer';

    title = 'Congratulations!!';

    triples: any;

    parser = new N3.Parser();
    store = new N3.Store();
    writer = new N3.Writer({ prefixes: { c: 'http://example.org/cartoons#' } });

    /**
     * Public variable: cmTriplesConfig.
     *
     * It keeps the Codemirror configuration for the triples panel.
     */
    cmTriplesConfig = {
        lineNumbers: true,
        firstLineNumber: 1,
        lineWrapping: true,
        matchBrackets: true,
        mode: 'turtle'
    };


    ngOnInit() {
        this.getData();
    }

    async getData(): Promise<void> {
        await this.parseTriples();

        this.writer.end((error, result) => {
            console.log('result', result);
            this.triples = result;
        });
    }


    parseTriples(): void {
        this.parser.parse(
            `PREFIX c: <http://example.org/cartoons#>

            c:Tom a c:Cat.
            c:Jerry a c:Mouse;
                    c:smarterThan c:Tom.`,
            (error, triples, prefixes) => {
                if (triples) {
                    console.log(triples);
                    this.writer.addQuad(triples);
                }
                else {
                    console.log('# That\'s all, folks! ', prefixes);
                }
            });
    }


}
