import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GraphCardComponent } from './graph-card/graph-card.component';
import { NotificationBoxComponent } from './notification-box/notification-box.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChartModule } from 'angular2-chartjs';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    GraphCardComponent,
    NotificationBoxComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartModule,
    RouterModule.forRoot([
      { 
        path: '**', redirectTo: 'login', pathMatch: 'full' 
      },
      { 
        path: 'dashboard', component: DashboardComponent 
      },
      { 
        path: 'login', component: LoginComponent 
      }
    ]),
  ],
	exports: [FormsModule, ChartModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
