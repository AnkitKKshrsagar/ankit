import { Component } from '@angular/core';
import { AlertmessageService } from './alertmessage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
constructor(ts:AlertmessageService){
ts.callMessageAPI()
}
}
