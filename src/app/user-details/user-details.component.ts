import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DecisionPointService } from '../service/decision-point.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user_id: number;
  user_specfic_details:any=[];
  constructor(private activatedRoute: ActivatedRoute,private DPservice:DecisionPointService) {}

  ngOnInit() {
    this.user_id = +this.activatedRoute.snapshot.paramMap.get('id');
    console.log("data-",this.user_id);
    this.DPservice.getsSpecificUserDetails(this.user_id).subscribe(response=>{
      this.user_specfic_details=response
    })

  }
}
