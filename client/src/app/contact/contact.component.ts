import { Component, OnInit } from '@angular/core';
import { MainService } from "./../main.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  latitude: number = 37.7956;
  longitude: number = -122.4062;
  zoom: number = 14;
  showmsg: boolean = false;
  successCommment: string = 'Email has been sent!';

  contactInfo = {
    name: "",
    email: "",
    subject: "",
    message: ""
  }

  constructor(private _service: MainService, private _router: Router) { }

  ngOnInit() {
  }



  formSend() {
    console.log('form', this.contactInfo);
    this._service.infoSend(this.contactInfo, (res) => {
      if (res.success === "success send message") {
        this.showmsg = true;
        this.contactInfo = {
          name: "",
          email: "",
          subject: "",
          message: ""
        }
      }
    })
  }

}
