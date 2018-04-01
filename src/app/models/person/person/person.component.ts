import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../person';
import { Strings } from '../../../../strings';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  constructor() { }

  t = Strings;
  @Input() person: Person;

  ngOnInit() {
  }

}
