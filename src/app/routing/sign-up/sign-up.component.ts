import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(private router: Router, private http: HttpClient) { }

  onSubmit(formData: any): void {
    this.http.post<any>('http://localhost:8080/AngularShop/signup.php', formData).subscribe(response => {
      console.log(response);
    });
  }

  goToAccount() {
    this.router.navigate(['/account']);
  }

}
