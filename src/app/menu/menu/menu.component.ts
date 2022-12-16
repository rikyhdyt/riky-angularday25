import { Component, OnInit } from '@angular/core';
import { IMenu } from 'src/app/interface/imenu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  menus:IMenu[]=[];
  menu: IMenu;
  pajak:number=11/100;
  total:number=0;
  bayar:number=0;
  kembalian:number=0;
  notif:string="";

  constructor(){
    this.menu = {
      name:"",
      qty:0,
      price:0,
      subTotal:0
    }
  }

  ngOnInit(): void {
  }

  addMenu():void{
    let temp:IMenu = {
      name:this.menu.name,
      price:this.menu.price,
      qty:this.menu.qty,
      subTotal:this.menu.price * this.menu.qty
      
    }
    if(this.menu.name == "" || this.menu.price==0 || this.menu.qty==0 ){
      this.notif=`Mohon isi form pesanan dengan lengkap`;
    }else{
      this.menus.push(temp);
      this.total += temp.subTotal;
    }
  }

  removeMenu(index:number): void {
    let temp:IMenu = this.menus[index];
    this.menus.splice(index, 1);
    this.total-= temp.subTotal;
  }

  bayarTagihan():void{
    let temp:IMenu = {
      name:this.menu.name,
      price:this.menu.price,
      qty:this.menu.qty,
      subTotal:this.menu.price * this.menu.qty,
      
    }
    this.kembalian = this.bayar-this.total;
  }

}
