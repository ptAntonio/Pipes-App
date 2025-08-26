/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import '@angular/common/locales/global/es';
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
