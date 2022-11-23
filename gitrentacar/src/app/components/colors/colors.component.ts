import { CarsService } from './../../services/cars.service';
import { ColorModel } from './../../models/ColorModel';
import { ActivatedRoute } from '@angular/router';
import { ColorsService } from './../../services/colors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {

  colors:ColorModel[]=[]
  colorName:string
  selectedColor:ColorModel
  constructor(private colorService:ColorsService, private activatedRoute:ActivatedRoute, private carsService:CarsService) { }

  ngOnInit(): void {
    this.getColors()
  }

 
  getColors(){
    this.colorService.getColors().subscribe(data=>{
      this.colors = data 
    })
  }
  selectColor(data:any){
    this.selectedColor=data
    this.carsService.setSelectColor(data)
  }

}
