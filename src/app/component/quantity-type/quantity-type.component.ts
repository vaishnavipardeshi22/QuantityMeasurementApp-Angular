import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantity-type',
  templateUrl: './quantity-type.component.html',
  styleUrls: ['./quantity-type.component.sass']
})
export class QuantityTypeComponent implements OnInit {

  constructor() { }

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
    }
    else{
      this.onVolumes='card';
      this.volumeChange = false;
    }
  }

  ngOnInit(): void {
  }

}
