import { Component } from '@angular/core';

@Component({
  selector: 'app-toast-notification',
  templateUrl: './toast-notification.component.html',
  styleUrls: ['./toast-notification.component.scss'],
})
export class ToastNotificationComponent {
  timer1: any;
  timer2: any;

  ngOnInit(): void {
  }
  clickTost(){
    const button: any = document.querySelector('button');
    const toast: any = document.querySelector('.toast-notify');
    const closeIcon: any = document.querySelector('.close');
    const progress: any = document.querySelector('.progress');
    toast.classList.add('active');
    progress.classList.add('active');

    this.timer1 = setTimeout(() => {
      toast.classList.remove('active');
    }, 5000); //1s = 1000 milliseconds

    this.timer2 = setTimeout(() => {
      progress.classList.remove('active');
    }, 5300);
  }
  onClickCloseIcon(){
    const toast: any = document.querySelector('.toast-notify');
    const progress: any = document.querySelector('.progress');
    toast.classList.remove('active');

    setTimeout(() => {
      progress.classList.remove('active');
    }, 300);

    clearTimeout(this.timer1);
    clearTimeout(this.timer2);
  }
}
