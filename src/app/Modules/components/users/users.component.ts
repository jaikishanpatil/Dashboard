import { Component } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
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
