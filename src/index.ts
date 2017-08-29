import 'core-js'
import 'zone.js'
import 'rxjs'

import {AppModule} from './app/app.module';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

platformBrowserDynamic().bootstrapModule(AppModule)
    .then(() => console.log("App is starter"))
    .catch((e) => console.log("App is failed", e));



