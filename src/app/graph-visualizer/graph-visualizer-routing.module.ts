import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GraphVisualizerComponent } from './graph-visualizer.component';

/* routes of the GraphVisualizerModule */
const graphVisualizerRoutes: Routes = [
    {
        path: '',
        component: GraphVisualizerComponent
    }
];

/**
 * Routed components of the {@link GraphVisualizerModule}:
 * {@link GraphVisualizerComponent}.
 */
export const routedGraphVisualizerComponents = [GraphVisualizerComponent];

/**
 * GraphVisualizer module routing.
 *
 * It activates the graphVisualizerRoutes.
 */
@NgModule({
    imports: [RouterModule.forChild(graphVisualizerRoutes)],
    exports: [RouterModule]
})
export class GraphVisualizerRoutingModule {}
