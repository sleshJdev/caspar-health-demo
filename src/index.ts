import 'core-js'
import 'zone.js'
import 'rxjs'

require('./bower_components/bootstrap/dist/css/bootstrap.min.css');

import {AppModule} from './app/app.module';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

platformBrowserDynamic().bootstrapModule(AppModule);



