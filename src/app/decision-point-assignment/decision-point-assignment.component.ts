import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {debounceTime, map, distinctUntilChanged} from 'rxjs/operators';
import { DecisionPointService } from '../service/decision-point.service';



@Component({
  selector: 'app-decision-point-assignment',
  templateUrl: './decision-point-assignment.component.html',
  styleUrls: ['./decision-point-assignment.component.css']
})
export class DecisionPointAssignmentComponent implements OnInit {
  user_details:any;
  choosedUser: any;
  searched_employees: any=[];
  userName:string
  choosedUserFlag: boolean;
  constructor(private router: Router,private DPservice:DecisionPointService) { }

  ngOnInit() {
    this.userDetails();
    this.searched_employees=this.user_details;
    
  }

  formatter = (x: {name: string}) => x.name;
  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term === '' ? []
        : this.user_details.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )
  userDetails(){
    this.DPservice.getUserDetails().subscribe(user_data=>{
      this.user_details=user_data;
      this.searched_employees=user_data;
      
    })
  }
  selectedUser(item){
    this.choosedUserFlag=true;
    this.choosedUser=item.item;
    this.searched_employees=this.searchedEmployees(item.item.name);
  }
  searchedEmployees(searchedData:string){
    return this.user_details.filter(user=>user.name.toLowerCase().indexOf(searchedData.toLocaleLowerCase()) !==-1);
  }
  display_details(id:number){
    if(this.choosedUserFlag){
      this.router.navigate(["/userDeials",{id}]
      );
    }
  }
}
