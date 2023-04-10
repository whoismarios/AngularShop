import { Component } from '@angular/core';

@Component({
  selector: 'app-username-input-component',
  templateUrl: './username-input-component.component.html',
  styleUrls: ['./username-input-component.component.css']
})
export class UsernameInputComponentComponent {
  
  username: string = "";

  displayUsername(){
    if(this.username !== ""){
      return "Your Username is: " + this.username;
    }else{
      return "No Username set!";
    }
  }

  updateUsername(event: Event){
    this.username = (<HTMLInputElement>event.target).value; 
  }
}
