import { Component, Input, OnInit } from '@angular/core';
import { Strings } from '../../../../strings';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-new',
  templateUrl: './client-new.component.html',
  styleUrls: ['./client-new.component.scss']
})
export class ClientNewComponent implements OnInit {

  constructor(
    private service: ClientService
  ) { }

  t = Strings;
  @Input() client: Client;

  ngOnInit() {
    this.client = new Client();
  }

  Add() {
    this.service.Post(this.client)
      .subscribe(hero => {
        console.log(hero);
      });

    this.client = new Client();
  }
}
