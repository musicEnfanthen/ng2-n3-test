import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { EditorConfiguration } from 'codemirror';
import 'codemirror/mode/turtle/turtle';
import 'codemirror/addon/edit/matchbrackets';

@Component({
    selector: 'app-rdf-editor',
    templateUrl: './rdf-editor.component.html',
    styleUrls: ['./rdf-editor.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RdfEditorComponent implements OnInit {
    @Input() triples: string;

    @Output() setInitialTriplesRequest: EventEmitter<string> = new EventEmitter();
    @Output() updateTriplesRequest: EventEmitter<string> = new EventEmitter();

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

    ngOnInit(): void {}

    setInitialTriples(): void {
        this.setInitialTriplesRequest.emit();
    }

    updateTriples(): void {
        this.updateTriplesRequest.emit(this.triples);
    }
}
