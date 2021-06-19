import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-outpu',
  templateUrl: './outpu.component.html',
  styleUrls: ['./outpu.component.css']
})
export class OutpuComponent implements OnInit {
  @Input() listOfEmpdata!: any[];
  constructor() { }

  ngOnInit(): void {
  }

}
