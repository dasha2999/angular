import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  name = "nick"
  date = new Date().toLocaleString()
  data = [
    "one",
    "two",
    "three"
  ]
  href: string = "https://google.com"
  src = "https://n1s1.hsmedia.ru/7d/f4/65/7df465013dd467c13ab94d0ff1c2cd4d/1000x600_0xac120003_8887241501666366066.jpeg"
 

visible = true

hideBlock(): void {
  this.visible = !this.visible
  }
}