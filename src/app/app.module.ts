import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './app-components/home-component/home.component';
import { MembershipComponent as MembershipComponent } from './app-components/membership-component/membership.component';
import { DonationsComponent } from './app-components/donations-component/donations.component';
import { WaiverCheckinComponent as WaiverCheckinComponent } from './app-components/waiver-checkin-component/waiver-checkin.component';
import { SiteInfoComponent as SiteInfoComponent } from './app-components/site-info-component/site-info.component';
import { MembersComponent as MembersComponent } from './app-components/members-component/members.component';
import { LinksComponent } from './app-components/links-component/links.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MembershipComponent,
    DonationsComponent,
    WaiverCheckinComponent,
    SiteInfoComponent,
    MembersComponent,
    LinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
