import { BrandsService } from './../../services/brands.service';
import { Brand } from './../../models/BrandModel';
import { CarsService } from './../../services/cars.service';
import { CarModel } from './../../models/CarModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  currentCar:CarModel
  cars:CarModel[] = []
  cardetail:string
  filterText:string
  constructor(private carsService:CarsService, private brandService:BrandsService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      //  if(params["brand"], params["state"]){
      //    console.log(1);      
      //    this.getByCategoryId(params["brand"], params["state"])
      //  }
      //  else if(params["brand"], params["color"]){
      //    console.log(2);
      //   this.getByColorId(params["id"])
      // }
      //  else if(params["id"]){
      //    console.log(3);       
      //    this.getBrandId(params["id"])
      //  }
      //  else if(params["colorId"]){
      //    this.getByColorId(params["colorId"])
      //    console.log(4);
      //  }
      //  else{
      //    this.getCars()
      //   }
      this.getCars()
     })
  
  }

  getCars(){
    this.carsService.getCars().subscribe(data=>{
      this.cars=data
    })
  }
  getByCategoryId(brandid:number, state:number){
    this.carsService.getByCategoryId(brandid, state).subscribe(data=>{
      this.cars=data
    })
  }
  getByColorId(id){
    this.carsService.getByColorId(id).subscribe(data=>{
      this.cars=data
    })
  }
  getBrandId(id){
    this.carsService.getBrandId(id).subscribe(data=>{
      this.cars=data
    })
  }
  selectCarDetail(dataa:any){
    this.cardetail=dataa
  }
  delete(cars:CarModel):void {
    if(confirm("Silmek istediğinize emin misiniz?")){
      this.cars = this.cars.filter(c => c !== cars)
      this.carsService.delete(cars).subscribe()
    }
  }
 

}
