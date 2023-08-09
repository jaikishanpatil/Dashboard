import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  constructor(){}
  dark:boolean=false;
  burgerOn:boolean=false
  
  ngOnInit(): void {
    this.darMode();
    this.sliderMenu();
  }

  sliderMenu(){
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector("nav");
    sidebarToggle?.addEventListener('click',()=>{
      sidebar?.classList.toggle('close');
      this.burgerOn = !this.burgerOn
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
