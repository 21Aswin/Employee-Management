import { Component, OnInit } from '@angular/core';
import { Workers } from '../workers';
import { WrokerService } from '../wroker.service';
import { subscribe } from 'diagnostics_channel';
import { error } from 'console';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  worker:Workers=new Workers();

  constructor(private wrokerService :WrokerService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.worker);
    this.saveWorker();
    
  }
  saveWorker(){
    this.wrokerService.createWorker(this.worker).subscribe(data => {
      console.log(data);
      this.goToWorkerList();
    })
  }
  goToWorkerList(){
    this.router.navigate(['/employee-list']);
  }
}
