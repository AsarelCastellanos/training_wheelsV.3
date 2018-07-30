import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TechCurriculumComponent } from './tech-curriculum/tech-curriculum.component';
import { ProductDevelopmentComponent } from './product-development/product-development.component';
import { YouthDevelopmentComponent } from './youth-development/youth-development.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TechCurriculumComponent,
    ProductDevelopmentComponent,
    YouthDevelopmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
