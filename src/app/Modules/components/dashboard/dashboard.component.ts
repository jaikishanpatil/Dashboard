import { Component } from '@angular/core';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  burgerOn:boolean=false
  constructor(private readonly appService:AppServiceService){}
  ngOnInit(): void {
    this.appService.burgerSubject.subscribe(data=>{
      if(data){
        this.burgerOn = data.burger;
      }
    })
  }
  checkBurgerClicked():boolean{
    return this.burgerOn
  }
}
