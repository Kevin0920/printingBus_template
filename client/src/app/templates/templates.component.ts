import { Component, OnInit, OnDestroy } from '@angular/core';
import { MainService } from "./../main.service";
import { ProductItem } from "../model/products";

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit, OnDestroy {

  private req: any;
  title = "Sample Templates";
  productList: [ProductItem];

  constructor(private _service: MainService) { }

  ngOnInit() {
    this.req = this._service.list().subscribe(data => {
      this.productList = data as [ProductItem];
      console.log(this.productList);
    })

  }

  ngOnDestroy() {
    this.req.unsubscribe()
  }  

}
