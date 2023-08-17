import { Component } from '@angular/core';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  constructor(private readonly appService:AppServiceService){}
  dark:boolean=false;
  burgerOn:boolean=false
  
  ngOnInit(): void {
    this.darMode();
    this.appService.burgerSubject.subscribe(data=>{
      if(data){
        this.burgerOn = data.burger
      }
    })
  }
  darMode(){
    const body = document.querySelector("body");
    const modeToggle =document.querySelector(".mode-toggle");
    modeToggle?.addEventListener("click",()=>{
      body?.classList.toggle("dark");
      this.dark = !this.dark
    })
  }
}
