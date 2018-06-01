
import { platformBrowser } from "@angular/platform-browser";
import {AppModuleNgFactory} from "./aot/app/app.module.ngfactory";
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from './app/app.module';

enableProdMode();
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);