import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApppageComponent } from './pages/apppage/apppage.component';
import { OutpuComponent } from './pages/outpu/outpu.component';
import { HttpClientModule } from '@angular/common/http';
import { APIService } from 'src/services/API.service';
 import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ApppageComponent,
    OutpuComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
