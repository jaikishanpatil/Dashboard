import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  burgerOn:boolean=false
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.sliderMenu();
  }
  sliderMenu(){
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector("nav");
    sidebarToggle?.addEventListener('click',()=>{
      sidebar?.classList.toggle('close');
      sidebarToggle?.classList.toggle('close')
      this.burgerOn = !this.burgerOn
    })
  }
}
