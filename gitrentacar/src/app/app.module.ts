import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CarsComponent } from './components/cars/cars.component';
import { NaviComponent } from './components/layouts/navi/navi.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { FilterPipe } from './pipes/filter.pipe';
import { BrandFilterPipe } from './pipes/brand-filter.pipe';
import { ColorsComponent } from './components/colors/colors.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandsComponent,
    CarsComponent,
    NaviComponent,
    CardetailComponent,
    BrandAddComponent,
    CarAddComponent,
    CarUpdateComponent,
    BrandUpdateComponent,
    FilterPipe,
    BrandFilterPipe,
    ColorsComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
