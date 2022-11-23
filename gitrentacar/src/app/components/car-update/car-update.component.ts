import { CarsService } from './../../services/cars.service';
import { CardetailService } from './../../services/cardetail/cardetail.service';
import { CarModel } from './../../models/CarModel';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private formBuilder:FormBuilder, private carService:CarsService) { }

  car:CarModel
  carForm:FormGroup

  ngOnInit(): void {
    this.brandGetById()
  }

  brandGetById(){
    // console.log("1");
    this.activatedRoute.params.subscribe((params)=>{
      this.getBrands(params['id'])
    })
  }
  getBrands(id){
    this.carService.carGetById(id).subscribe((data)=>{
      this.car=data
      this.updateBrandForm()
    })
    // console.log("2");
  }
  updateBrandForm(){
    this.carForm=this.formBuilder.group({
      carName:[this.car.carName,[Validators.required]],
      carDetail:[this.car.carDetail,[Validators.required]],
      colorId:[this.car.colorId,[Validators.required]],
      brandId:[this.car.brandId,[Validators.required]],
      carDescription:[this.car.carDescription,[Validators.required]],
      description:[this.car.description,[Validators.required]],
      plate:[this.car.plate,[Validators.required]],
      state:[this.car.state,[Validators.required]],
      image:[this.car.image,[Validators.required]]
    })
    // console.log("3");
    // console.log(this.car.carName);
    // console.log(this.car.carDetail);
    // console.log(this.car.carDescription);
  }
  update(){
    this.carService.update(this.activatedRoute.snapshot.params["id"],this.carForm.value).subscribe((response)=>{
    })
  }


}
