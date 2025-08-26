import { LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-basic-component',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe],
  templateUrl: './basic-component.component.html',
})
export default class BasicComponentComponent {

  nameLower = signal('Antonio');
  nameUpper = signal('ANTONIO');
  fullName  = signal('anTOniO pEreZ');

}
