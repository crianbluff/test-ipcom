import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {

  // Communication with the parent component
  @Input() loading:boolean = false;
  @Input() error:boolean = false;
  @Input() showViewColumns:boolean = false;
  @Input() dataSource:any[] = [];
  @Input() displayedColumns:string[] = [];
  // Emmit events from this component to the parent component
  @Output() captureClickDetail = new EventEmitter();
  
  // Give back clientId to the parent component
  clickEvent(clientId) {
    this.captureClickDetail.emit(clientId);
  }
}