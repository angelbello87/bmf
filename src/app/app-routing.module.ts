import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './app-components/home-component/home.component';
import { MembersComponent } from './app-components/members-component/members.component';
import { DonationsComponent } from './app-components/donations-component/donations.component';
import { WaiverCheckinComponent } from './app-components/waiver-checkin-component/waiver-checkin.component';
import { LinksComponent } from './app-components/links-component/links.component';
import { MembershipComponent } from './app-components/membership-component/membership.component';


const routes: Routes = [
  { path: "home", component:HomeComponent}, 
  { path:"membership", component:MembershipComponent},
  { path:"donations", component:DonationsComponent},
  { path:"sitecheckin", component:WaiverCheckinComponent},
  { path:"members", component:MembersComponent},
  { path:"links", component:LinksComponent},
  {path: "**", component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
