import { Component, OnInit,ViewChild } from '@angular/core';
import { SearchService } from '../../../search.service';

interface Place {
  name: string;
  bio: string;
  login: string;
  type: string;
  company:string;
  location:string

}



@Component({
  selector: 'app-shortener',
  templateUrl: './shortener.component.html',
  styleUrls: ['./shortener.component.scss']
})

export class ShortenerComponent implements OnInit {
url:string
urlreduit:string
  constructor(public searchAoi:SearchService) {}
  ngOnInit() {

  }


  transform(url: string) {
    if (url) {
      const len = url.length;
      if (len > 30) // only shorten if greater than 30
        // change value 21 and 9 as per requirement
        this.urlreduit= url.substr(0, 21) + '...' + url.substring(len - 9, len);

    }

  }


  copyMessage(val: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

}
