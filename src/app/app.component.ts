import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tic-tac-toe';
  winMessage = '';
  isCross = false;
  itemsArray :string[] = new Array(9).fill('empty');
  constructor(private toastrService:ToastrService){}
  handleClick(itemNumber:number){
    if(this.winMessage){
      return this.toastrService.success(this.winMessage);
    }
    
    if(this.itemsArray[itemNumber] === 'empty'){
      this.itemsArray[itemNumber] = this.isCross ? "cross" : "zero";
      this.isCross = !this.isCross
    }
    else{
      return this.toastrService.warning("alraedy filled")
    }
    this.checkWinner();
  }
  checkWinner = () => {
    //  checking  winner of the game
    if (
      this.itemsArray[0] === this.itemsArray[1] &&
      this.itemsArray[0] === this.itemsArray[2] &&
      this.itemsArray[0] !== 'empty'
    ) {
      this.winMessage = `${this.itemsArray[0]} won`;
    } else if (
      this.itemsArray[3] !== 'empty' &&
      this.itemsArray[3] === this.itemsArray[4] &&
      this.itemsArray[4] === this.itemsArray[5]
    ) {
      this.winMessage = `${this.itemsArray[3]} won`;
    } else if (
      this.itemsArray[6] !== 'empty' &&
      this.itemsArray[6] === this.itemsArray[7] &&
      this.itemsArray[7] === this.itemsArray[8]
    ) {
      this.winMessage = `${this.itemsArray[6]} won`;
    } else if (
      this.itemsArray[0] !== 'empty' &&
      this.itemsArray[0] === this.itemsArray[3] &&
      this.itemsArray[3] === this.itemsArray[6]
    ) {
      this.winMessage = `${this.itemsArray[0]} won`;
    } else if (
      this.itemsArray[1] !== 'empty' &&
      this.itemsArray[1] === this.itemsArray[4] &&
      this.itemsArray[4] === this.itemsArray[7]
    ) {
      this.winMessage = `${this.itemsArray[1]} won`;
    } else if (
      this.itemsArray[2] !== 'empty' &&
      this.itemsArray[2] === this.itemsArray[5] &&
      this.itemsArray[5] === this.itemsArray[8]
    ) {
      this.winMessage = `${this.itemsArray[2]} won`;
    } else if (
      this.itemsArray[0] !== 'empty' &&
      this.itemsArray[0] === this.itemsArray[4] &&
      this.itemsArray[4] === this.itemsArray[8]
    ) {
      this.winMessage = `${this.itemsArray[0]} won`;
    } else if (
      this.itemsArray[2] !== 'empty' &&
      this.itemsArray[2] === this.itemsArray[4] &&
      this.itemsArray[4] === this.itemsArray[6]
    ) {
      this.winMessage = `${this.itemsArray[2]} won`;
    }
    
  };

  reloadGame = () =>{
    this.winMessage = '';
    this.isCross = false;
    this.itemsArray = new Array(9).fill('empty');
  }
}
