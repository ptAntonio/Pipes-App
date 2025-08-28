import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

//locales registrados en la app para poder cambiar su idioma
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
import { LocaleService } from './services/locale.service';

registerLocaleData(localeEs, 'es');
registerLocaleData(localeFr, 'fr');

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),


    // Registrar idiomas para cambiar el locale de la aplicación,
    {
      provide: LOCALE_ID, // esto se importa de @angular/core
      // useValue: 'fr'
      deps: [LocaleService],
      useFactory: (localService: LocaleService) => localService.getLocale,
    }
  ]
};
