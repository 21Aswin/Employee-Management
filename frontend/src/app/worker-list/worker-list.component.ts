import { Component, OnInit } from '@angular/core';
import { Workers } from '../workers';
import { WrokerService } from '../wroker.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.css']
})
export class WorkerListComponent implements OnInit {

 workers: Workers[] = [];

  constructor(private workerService:WrokerService,
    private router : Router
  ){ }

  ngOnInit(): void {
    this.getWroker();
  }

   private getWroker(){
    this.workerService.getWorkerList().subscribe(data => {
      this.workers=data;


    })
  }
  updateWorker(id:number){
    this.router.navigate(['update',id]);
  }

  deleteWroker(id : number){
    this.workerService.deleteWorker(id).subscribe(data =>{
      console.log(data);
      this.getWroker();
    });
  }

}
