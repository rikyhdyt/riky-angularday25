import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tugas',
  templateUrl: './tugas.component.html',
  styleUrls: ['./tugas.component.css']
})
export class TugasComponent implements OnInit {
  images:string[] =[
    "assets/images/angular.png",
    "assets/images/ts.png"
    // "assets/images/js.png",
    // "assets/images/html5.png"
  ]

  constructor(){}

  ngOnInit(): void {
  }

  addImage(){
    let randomNumber: number = Math.floor(Math.random()*50);
    this.images.push(`https://picsum.photos/200/300?random=${randomNumber}`);
  }

  // editImage(indeks:number, angkaRandom:number);
  // this.images.[indeks](`https://picsum.photos/200/300?random=${angkaRandom}`);

}
