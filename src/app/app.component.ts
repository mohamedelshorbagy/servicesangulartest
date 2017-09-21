import { Component , OnInit} from '@angular/core';
import { MyRequestsService } from './my-requests.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data:any[];
  constructor(private services:MyRequestsService){}
  ngOnInit(){
    this.services.getRequest()
      .subscribe(res=>{
        this.data=res;
      })
  }
}
