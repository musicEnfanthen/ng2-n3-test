import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { Routes, RouterModule, Router } from '@angular/router';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { AppShellComponent } from './app-shell/app-shell.component';
import { TwelveToneSpinnerComponent } from './twelve-tone-spinner/twelve-tone-spinner.component';


const routes: Routes = [ { path: 'shell', component: AppShellComponent }];

@NgModule({
    imports: [
        AppModule,
        ServerModule,
        RouterModule.forRoot(routes),
    ],
    bootstrap: [AppComponent],
    declarations: [AppShellComponent, TwelveToneSpinnerComponent],
})
export class AppServerModule {
    constructor(private router: Router) {
        this.router.resetConfig(routes);
    }
}
