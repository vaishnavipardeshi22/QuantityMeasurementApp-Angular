import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantity-type',
  templateUrl: './quantity-type.component.html',
  styleUrls: ['./quantity-type.component.sass']
})
export class QuantityTypeComponent implements OnInit {

  constructor() { }

  quantityUnit = [];
  input = 0;
  output = 0;

  length:boolean = false;
  temperature:boolean = false;
  volume:boolean = false;

  onLengths: string = 'card';
  onTemperatures: string = 'card';
  onVolumes: string = 'card';

  lengthChange:boolean = false;
  temperatureChange:boolean = false;
  volumeChange:boolean = false;

  lengthOut(): void{
    if(this.lengthChange === true){
        this.length = true;
    }
    else{
      this.length = false;
    }
  }

  temperatureOut(): void{
    if(this.temperatureChange === true){
      this.temperature = true;
    }
    else{
      this.temperature = false;
    }
  }

  volumeOut(): void{
    if(this.volumeChange === true){
      this.volume = true;
    }
    else{
      this.volume = false;
    }
  }

  onLength(): void{
    if(this.onLengths === 'card') 
    {
      this.onLengths='card HOLD-LENGTH';
      this.onTemperatures='card';
      this.onVolumes='card';
      this.temperature=false;
      this.volume=false;
      this.lengthChange=true;
      this.temperatureChange=false;
      this.volumeChange=false;
      this.quantityUnit=['Foot', 'Kilometer', 'Meter', 'Millimeter', 'Inch'];
      this.input=1;
      this.output=12;
    }
    else{
      this.onLengths='card';
      this.lengthChange= false;
    }
  }

  onTemperature(): void{
    if(this.onTemperatures === 'card')
    {
      this.onTemperatures='card HOLD-TEMPERATURE';
      this.onLengths='card';
      this.onVolumes='card';
      this.length=false;
      this.volume=false;
      this.temperatureChange = true;
      this.lengthChange=false;
      this.volumeChange=false;
      this.quantityUnit=['Celsius', 'Fahrenheit'];
      this.input=0;
      this.output=32;
    }
    else{
      this.onTemperatures='card';
      this.temperatureChange = false;
    }
  }

  onVolume(): void{
    if(this.onVolumes === 'card')
    {
      this.onVolumes='card HOLD-VOLUME';
      this.onLengths='card';
      this.onTemperatures='card';
      this.length = false;
      this.temperature = false;
      this.volumeChange = true;
      this.lengthChange=false;
      this.temperatureChange=false;
      this.quantityUnit=['Litre', 'Millilitre', 'Gallon'];
      this.input=1;
      this.output=1000;
    }
    else{
      this.onVolumes='card';
      this.volumeChange = false;
    }
  }

  ngOnInit(): void {
  }

}
