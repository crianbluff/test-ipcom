import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  // Communication with the parent component
  @Input() minDate:Date;
  @Input() maxDate:Date;
  @Input() dateByDefault:FormControl;
  @Input() title:string;
  @Input() pageIndex:number = 0;
  @Input() totalClients:string;
  @Input() pageSize:number = 15;

  // Emmit events from this component to the parent component
  @Output() captureChangeDate = new EventEmitter();
  @Output() capturePage = new EventEmitter();
  
  // Give back event of datepicker to the parent component
  changeDate(event) {
    this.captureChangeDate.emit(event);
  }

  // Give back event of pagination to the parent component
  pageEvent(event) {
    this.capturePage.emit(event);
  }
}