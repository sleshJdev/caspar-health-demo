import {NgModule} from '@angular/core';
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutesModule} from "./app-routes.module";
import {AboutComponent} from "./components/about/about.component";
import {HomeComponent} from "./components/home/home.component";

@NgModule({
    imports: [
        BrowserModule,
        AppRoutesModule
    ],
    providers: [AppComponent],
    declarations: [AppComponent, HomeComponent, AboutComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}