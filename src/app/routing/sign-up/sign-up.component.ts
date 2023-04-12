import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NewUserServiceService } from 'src/app/backend/services/new-user-service/new-user-service.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  user = {
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  };


  constructor(private router: Router, private http: HttpClient, private newUserService: NewUserServiceService) { }

  

  onSubmit(formData: any): void {
    this.newUserService.createNewUser(formData.value).subscribe((response: any) => {
      console.log(response);
    });
  }
  

  goToAccount() {
    this.router.navigate(['/account']);
  }
}
