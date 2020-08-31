import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'graph', pathMatch: 'full'},
    // lazy loaded
    { path: 'graph', loadChildren: () => import('./graph-visualizer/graph-visualizer.module').then(m => m.GraphVisualizerModule) }
];


@NgModule({
    imports: [RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'enabled', // restore scroll position
        preloadingStrategy: PreloadAllModules // preload all lazy modules
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
