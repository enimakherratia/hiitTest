import { Component, OnInit,ViewChild } from '@angular/core';
import { SearchService } from '../../../search.service';
import { Router } from '@angular/router';
interface User {
  name: string;
  bio: string;
  login: string;
  type: string;
  company:string;
  location:string

}



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    displayedColumns: string[] = ['name', 'login', 'company', 'type','bio','location'];
  datasources: Array<User> = [];
  users=[];
  name:string;
  constructor(public searchAoi:SearchService,private router: Router) {}
  ngOnInit() {

  }

  /**
  * Création de la fonction search qui fait appelle au service searchService
  *le retour est un object
  *pusher l object dans la liste users et afferter cette dérniere à datasources

  */

  search(name){
    this.datasources=[];
    this.users=[];
    this.searchAoi.searchService(name).subscribe(
      data => {debugger
let row={name:data.name,login:data.login,company:data.company,type:data.type,bio:data.bio,location:data.location};
this.users.push(row)
this.datasources=this.users;
      },
      error => {},
      ()=>{}
    )
  }




  /**
  * utilisation du router angular pour aller à la page2
  */
  gotoPage2(){
      this.router.navigate(['/page2']);
  }
}
