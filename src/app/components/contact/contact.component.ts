import { Component, OnInit } from '@angular/core';
import { faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  faWhatsapp = faWhatsapp;
  faInstagram = faInstagram;
  faTelegram = faTelegram;

  constructor() { }

  ngOnInit(): void {
  }

}
