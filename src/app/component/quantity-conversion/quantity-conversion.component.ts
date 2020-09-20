import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantity-conversion',
  templateUrl: './quantity-conversion.component.html',
  styleUrls: ['./quantity-conversion.component.sass']
})
export class QuantityConversionComponent implements OnInit {

  constructor() { }

  @Input() quantityUnit:any[];
  @Input() input:number;
  @Input() output:number;

  ngOnInit(): void {
  }

}
