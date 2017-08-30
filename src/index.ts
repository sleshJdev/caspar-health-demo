import 'core-js'
import 'zone.js'
import 'rxjs'

require('bootstrap.min.css');
require('ng2-toasty-style-bootstrap.css');


import {AppModule} from './app/app.module';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

platformBrowserDynamic().bootstrapModule(AppModule);



