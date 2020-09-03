import { Component, OnInit } from '@angular/core';

import * as N3 from 'n3';

const { DataFactory } = N3 ;
const { namedNode, literal, defaultGraph } = DataFactory;

@Component({
    selector: 'app-rdf-editor',
    templateUrl: './rdf-editor.component.html',
    styleUrls: ['./rdf-editor.component.css']
})
export class RdfEditorComponent implements OnInit {

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

    triples = `PREFIX c: <http://example.org/cartoons#>

            c:Tom a c:Cat.
            c:Jerry a c:Mouse;
                    c:smarterThan c:Tom.`;

    parser = new N3.Parser();
    store = new N3.Store();
    writer = new N3.Writer();

    ngOnInit(): void {
        this.parseTriples();
    }


    parseTriples(): void {
        this.parser.parse(this.triples, (error, quad, prefixes) => {
                if (quad) {
                    console.log(quad);
                    this.store.addQuad(quad);
                }
                else {
                    console.log('# That\'s all, folks! ', prefixes);
                    this.writer.addPrefixes(prefixes);
                    this.writeTriples();

                }
            });
    }

    writeTriples(): void {
        const quads = this.store.getQuads(null, null, null);
        console.log('quads:', quads);
        this.writer.addQuads(quads);
        this.writer.end((e, result) => {
            if (result) {
                console.log('result', result);
                this.triples = result;
            }
        });
    }

}
