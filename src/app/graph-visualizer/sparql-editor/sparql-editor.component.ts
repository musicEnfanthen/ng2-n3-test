import { Component, OnInit } from '@angular/core';

import { EditorConfiguration } from 'codemirror';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/mode/sparql/sparql';

@Component({
    selector: 'app-sparql-editor',
    templateUrl: './sparql-editor.component.html',
    styleUrls: ['./sparql-editor.component.css']
})
export class SparqlEditorComponent implements OnInit {
    /**
     * Public variable: cmSparqlConfig.
     *
     * It keeps the Codemirror configuration for the sparql panel.
     */
    cmSparqlConfig: EditorConfiguration = {
        mode: 'sparql',
        lineNumbers: true,
        firstLineNumber: 1,
        lineWrapping: true,
        matchBrackets: true
    };

    initialQuery = `PREFIX c: <http://example.org/cartoons#>

        SELECT DISTINCT *
        WHERE {
            ?s ?p ?o .
        }
        LIMIT 50
    `;

    query: any;

    ngOnInit(): void {
        this.setInitialQuery();
    }

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
            return;
        }
        this.query = this.initialQuery;
        this.doQuery();
    }

    doQuery(): void {
        console.log('query', this.query);
    }
}
