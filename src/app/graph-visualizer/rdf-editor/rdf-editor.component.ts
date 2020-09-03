import { Component, OnInit } from '@angular/core';

import { EditorConfiguration } from 'codemirror';
import 'codemirror/mode/turtle/turtle';
import 'codemirror/addon/edit/matchbrackets';

import * as N3 from 'n3';

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
    cmTriplesConfig: EditorConfiguration = {
        mode: 'turtle',
        lineNumbers: true,
        firstLineNumber: 1,
        lineWrapping: true,
        matchBrackets: true
    };

    initialTriples = `@prefix c: <http://example.org/cartoons#> .

        c:Tom a c:Cat .
        c:Jerry a c:Mouse ;
                c:smarterThan c:Tom .`;

    triples: string;

    parser: N3.Parser;
    store: N3.Store;
    writer: N3.Writer;

    ngOnInit(): void {
        this.setInitialTriples();
    }

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
            return;
        }
        this.triples = this.initialTriples;
        this.updateTriples();
    }

    updateTriples(): void {
        this.parseTriples(this.triples);
    }
}
