import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TwelveToneSpinnerComponent } from './twelve-tone-spinner/twelve-tone-spinner.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule.withServerTransition({appId: 'serverApp'}),
        AppRoutingModule
    ],
    declarations: [AppComponent, TwelveToneSpinnerComponent],
    providers: [],
    exports: [
        TwelveToneSpinnerComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
