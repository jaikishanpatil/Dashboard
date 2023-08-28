import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dynamic-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Input() isInputShown: boolean = false;
  @Input() placeholder: string = 'Search';
  @Output() change = new EventEmitter<any>();
  @ViewChild('input', { static: true }) input: ElementRef | any;
  searchKey: any;
  value: any;

  constructor(private router: Router) {}

  ngOnInit(): void {}
  isExpanded = false;
  toggleSearch() {
    this.isExpanded = !this.isExpanded;
  }

  showInput() {
    this.searchKey = this.value;
    this.isInputShown = true;
    this.input && this.input.nativeElement.focus();
  }
  hideInput() {
    this.searchKey = '';
    this.input.value = '';
    this.value = '';
  }

  onInput(val: string) {
    if (val !== this.value) {
      this.value = val;
      this.change.emit(val);
    }
  }
}
