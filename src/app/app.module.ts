import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import bootstrap from "bootstrap";
import { DecisionPointAssignmentComponent } from './decision-point-assignment/decision-point-assignment.component';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { UserDetailsComponent } from './user-details/user-details.component'

const route: Routes = [
  {
    path: 'dpAssignment',
    component:DecisionPointAssignmentComponent
  },{
    path: 'userDeials',
    component:UserDetailsComponent
    
  }
]
@NgModule({
  declarations: [
    AppComponent,
    DecisionPointAssignmentComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(route),
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
