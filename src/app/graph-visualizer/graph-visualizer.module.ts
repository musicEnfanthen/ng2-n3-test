import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CodemirrorModule } from '@ctrl/ngx-codemirror';

import { GraphVisualizerRoutingModule, routedGraphVisualizerComponents } from './graph-visualizer-routing.module';

@NgModule({
    imports: [
        CommonModule,
        CodemirrorModule,
        FormsModule,
        GraphVisualizerRoutingModule
    ],
    declarations: [routedGraphVisualizerComponents]
})
export class GraphVisualizerModule { }
