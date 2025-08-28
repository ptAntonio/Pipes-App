import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe, PercentPipe } from '@angular/common';
import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { AvailableLocale, LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-basic-component',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-component.component.html',
})
export default class BasicComponentComponent {

  localeService = inject(LocaleService);
  currentLocale = signal(inject(LOCALE_ID));

  nameLower = signal('Antonio');
  nameUpper = signal('ANTONIO');
  fullName = signal('anTOniO pEreZ');

  customDate = signal(new Date());

  tickingDateEffect = effect((onCleanUp) => {

    const interval = setInterval(() => {
      this.customDate.set(new Date());
      console.log('tick');

      onCleanUp(() => {
        clearInterval(interval)
      });

    }, 1000);
  })

  changeLocale(locale: AvailableLocale) {
    console.log({ locale });
    this.localeService.changeLocale(locale);
  }

}


