import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AboutComponent} from "./components/about/about.component";
import {HomeComponent} from "./components/home/home.component";
import {ClinicComponent} from "./components/clinic/clinic.component";

const routes: Routes = [
    {
        path: 'clinic',
        component: ClinicComponent
    }, {
        path: 'about',
        component: AboutComponent
    }, {
        path: '',
        component: HomeComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutesModule {

}