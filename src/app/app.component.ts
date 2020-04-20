import { Component } from '@angular/core';
import { MyDet } from './shared/model/det.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  detArray:MyDet[] = [];
  inputName = "Новый Датчик";
  inputValue = 'test';
  screenWidth = 10;

  constructor(){
    for(let i = 1; i <= 10; i++){
      this.detArray.push(new MyDet(i,`Датчик №${i}`));
    }
  }

  deleteDet(item){
    let index = this.detArray.indexOf(item,0);
    this.detArray.splice(index,1);
  }

  newDet(){ 
    if (this.detArray.length != 0){
      let id = this.detArray[this.detArray.length-1].id;
      this.detArray.push(new MyDet(id + 1, this.inputName));
    }else{
      this.detArray.push(new MyDet(1, this.inputName));
    }
  }

}
