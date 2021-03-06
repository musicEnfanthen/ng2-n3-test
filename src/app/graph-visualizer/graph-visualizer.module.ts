import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CodemirrorModule } from '@ctrl/ngx-codemirror';

import { GraphVisualizerRoutingModule, routedGraphVisualizerComponents } from './graph-visualizer-routing.module';
import { RdfEditorComponent } from './rdf-editor/rdf-editor.component';
import { SparqlEditorComponent } from './sparql-editor/sparql-editor.component';
import { ResultTableComponent } from './result-table/result-table.component';

@NgModule({
    imports: [
        CommonModule,
        CodemirrorModule,
        FormsModule,
        GraphVisualizerRoutingModule
    ],
    declarations: [routedGraphVisualizerComponents, RdfEditorComponent, SparqlEditorComponent, ResultTableComponent]
})
export class GraphVisualizerModule { }
