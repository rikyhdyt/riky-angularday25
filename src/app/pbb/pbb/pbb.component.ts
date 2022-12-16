import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pbb',
  templateUrl: './pbb.component.html',
  styleUrls: ['./pbb.component.css']
})
export class PbbComponent implements OnInit{

  luasTanah:number=0;
  luasBangunan:number=0;
  njopTanah:number=0;
  njopBangunan:number=0;
  njopPTK:number=12_000_000;
  pajakPBB:number=0.5/100;
  stimulus:number=15_000;
  njkp:number=20/100;
  info:any;
  pbb:number=0;
  hargaTanah:number=0;
  hargaBangunan:number=0;
  // result:number=0;

  constructor(){}

  ngOnInit(): void {
    
  }

  hitungPbb(){
    this.hargaTanah=this.luasTanah * this.njopTanah;
    this.hargaBangunan=this.luasBangunan * this.njopBangunan;

    this.pbb= ((((this.hargaTanah+this.hargaBangunan)-this.njopPTK)*this.njkp)*this.pajakPBB)-this.stimulus;
    // if(this.pbb > 0){
    //   this.luasTanah=0;
    //   this.luasBangunan=0;
    //   this.njopTanah=0;
    //   this.njopBangunan=0;
    // }else{
    //   this.luasTanah=0;
    //   this.luasBangunan=0;
    //   this.njopTanah=0;
    //   this.njopBangunan=0;
    // }
    

  }

}
