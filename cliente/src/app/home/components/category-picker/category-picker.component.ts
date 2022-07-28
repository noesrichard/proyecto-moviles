import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-category-picker',
  templateUrl: './category-picker.component.html',
  styleUrls: ['./category-picker.component.scss'],
})
export class CategoryPickerComponent implements OnInit {

  @Output() onCategoryChange: EventEmitter<any> = new EventEmitter(); 
  @Input() category: string = "Hogar"; 

  constructor() { }

  ngOnInit() {}

  sendCategoryChange(event: any){ 
    this.onCategoryChange.emit(event);
  }

}
