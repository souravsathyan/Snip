//JIT compilation
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

//bootstrap module function load our app and angular features
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
