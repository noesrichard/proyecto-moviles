import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-priority-picker',
  templateUrl: './priority-picker.component.html',
  styleUrls: ['./priority-picker.component.scss'],
})
export class PriorityPickerComponent implements OnInit {

  @Output() onPriorityChange: EventEmitter<any> = new EventEmitter(); 
  @Input() priority: string = "Importante"; 

  constructor() { }

  ngOnInit() {}

  sendPriorityChange(event: any){ 
    console.log(event)
    this.onPriorityChange.emit(event);
  }

}
