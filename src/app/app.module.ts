import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyRequestsService } from './my-requests.service';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [MyRequestsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
