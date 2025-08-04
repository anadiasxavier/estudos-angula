import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  name = "Leo";
  idButton = "befdhsf";
  deveMostrarTitulo = true;

  submit() {
    console.log("video");
  }
}
