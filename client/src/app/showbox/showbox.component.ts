import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from "./../main.service";
import { ProductItem } from "../model/products";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-showbox',
  templateUrl: './showbox.component.html',
  styleUrls: ['./showbox.component.css']
})
export class ShowboxComponent implements OnInit, OnDestroy {
  homeImageList: [ProductItem] = [] as [ProductItem];

  private req: any;
  prevented = false;
  defaultImg = "assets/images/products/1.jpg";
  videoTag;

  constructor(private _router: Router, private _service: MainService, private _sanitizer: DomSanitizer) {
    this.videoTag = this.getVideoLoad();
  }

  ngOnInit() {
    this.req = this._service.list().subscribe(data => {
      console.log(data);
      data.filter(item => {
        if (item.featured) {
          let dataItem = item;
          this.homeImageList.push(dataItem);
        }
      })
    })
  }

  ngOnDestroy() {
    this.req.unsubscribe()
  }


  // preventNormal(event: MouseEvent, image: any) {
  //   console.log(image);
  //   if (!image.prevented) {
  //     event.preventDefault();
  //     this._router.navigate(['/templates']);
  //   }
  // }

  private getVideoLoad() {
    return this._sanitizer.bypassSecurityTrustHtml(
      `<video id="videoDis" muted loop autoplay>
        <source src="assets/videos/design.mp4" type="video/mp4">
      </video>
      `
    );
  }

}
