import { Component, OnInit } from '@angular/core';
import { WrokerService } from '../wroker.service';
import { Workers } from '../workers';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
   id!: number;
   worker:Workers=new Workers();

  constructor(private workerService : WrokerService,
    private route: ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.workerService.getWorkerid(this.id).subscribe(data => {
      this.worker=data;
    })
  }


  onSubmit(){
   this.workerService.updateWorker(this.id,this.worker).subscribe(data => {
    this.goToWorkerList();
   })
  }

   goToWorkerList(){
    this.router.navigate(['/employee-list']);
  }
 
}
