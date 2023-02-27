import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{ 
  taskList : string [] = []; 
  inputvalue : string = "" ;  


  deletetask(name:string){
    this.taskList = this.taskList.filter(value => value !== name)
  } 

  addtask(){
    if(this.inputvalue != ""){ 
      this.taskList.push(this.inputvalue);
    this.inputvalue="";

    }
    else{
      alert("please enter vendor")
    }
    
    
  }
  constructor(){  }  
  ngOnInit(): void{
    this.taskList = ["Task1","Task 2"]
  }

}
