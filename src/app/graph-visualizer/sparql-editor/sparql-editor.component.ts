import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { EditorConfiguration } from 'codemirror';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/mode/sparql/sparql';

@Component({
    selector: 'app-sparql-editor',
    templateUrl: './sparql-editor.component.html',
    styleUrls: ['./sparql-editor.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SparqlEditorComponent implements OnInit {
    @Input() query: string;

    @Output() setInitialQueryRequest: EventEmitter<string> = new EventEmitter();
    @Output() updateQueryRequest: EventEmitter<string> = new EventEmitter();

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

    ngOnInit(): void {}

    setInitialQuery(): void {
        this.setInitialQueryRequest.emit();
    }

    updateQuery(): void {
        this.updateQueryRequest.emit(this.query);
    }
}
