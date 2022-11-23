import { ColorModel } from './../models/ColorModel';
import { Brand } from './../models/BrandModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CarModel } from './../models/CarModel';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  apiUrl = "http://localhost:3000/cars";
  queryPath:string=""
  selectedBrand:Brand;
  selectedColor:ColorModel;
  constructor(private httpClient:HttpClient) { }

  carGetById(id):Observable<CarModel>{
    return this.httpClient.get<CarModel>(this.apiUrl + '/' + id);
  }
  getCars():Observable<CarModel[]>{
    return this.httpClient.get<CarModel[]>(this.createApiUrl())
  }
  getByCategoryId(brand:number, state:number):Observable<CarModel[]>{
    return this.httpClient.get<CarModel[]>(this.apiUrl + "?brandId=" + brand + "&state=" + state)
  }
  getByColorId(id){
    return this.httpClient.get<CarModel[]>(this.apiUrl + "?colorId=" + id)
  }
  getBrandId(id){
    return this.httpClient.get<CarModel[]>(this.apiUrl + "?brandId=" + id)
  }
  add(value:any){
    return this.httpClient.post(this.apiUrl,value)
  }
  delete(car){
    return this.httpClient.delete(this.apiUrl + "/" + car)
  }
  update(id, data:any){
    return this.httpClient.put<CarModel>(this.apiUrl + "/" + id ,data)
  }

  setSelectedBrand(brandSelect){
    this.selectedBrand=brandSelect;
  }
  setSelectColor(selectColor){
    this.selectedColor=selectColor

  }
  createApiUrl(){
    if(this.selectedBrand){
      // console.log(1);
      this.queryPath = this.apiUrl + "?brandId=" + this.selectedBrand.id
    }
    if(this.selectedColor){
      this.queryPath = this.apiUrl + "?colorId=" + this.selectedColor.id
    }
    if(this.selectedBrand && this.selectedColor){
      this.queryPath = this.apiUrl + "?brandId=" + this.selectedBrand.id + "&colorId=" + this.selectedColor.id
    }
    if(!this.selectedBrand && !this.selectedBrand){
      // console.log(3); 
      this.queryPath = this.apiUrl;
    }
    // console.log(4);
    return this.queryPath;
  }

}
