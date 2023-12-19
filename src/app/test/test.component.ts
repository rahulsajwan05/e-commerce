import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit{

  data: any[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
  ]; // Replace with your actual data source

  constructor() { }

  ngOnInit(): void {
    // Fetch or initialize your dynamic data here
    this.data = [
      { 
        value1: 'Data 1', 
        value2: 'Data 2', 
        value3: 'Data 3',
        value4: 'Data 1', 
        value5: 'Data 2', 
        value6: 'Data 3',
        value7: 'Data 1', 
        value8: 'Data 2', 
        value9: 'Data 3',
        value10: 'Data 1', 
        value11: 'Data 2', 
        value12: 'Data 3',
        value13: 'Data 3',
        value14: 'Data 3',
        value15: 'Data 3',
        value16: 'Data 3',
        value18: 'Data 3',
        value19: 'Data 3',
        value20: 'Data 3',
        
       },
      // Add more data items as needed
    ];
  }
}
