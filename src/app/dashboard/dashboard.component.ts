import { Component, OnInit, Input, Output } from '@angular/core';
import { GraphCardComponent } from '../graph-card/graph-card.component';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  showSidebar: boolean = true;
  contentClass: string = 'col-md-9 main';
  playTitle: string = 'Annual Play Budget';
  workTitle: string = 'Annual Work Budget';
  assetTitle: string = 'Card Count';
  subTitles: string = 'Summary';

  playLabel: string = 'Total Play (NGN)';
  workLabel: string = 'Total Work (NGN)';
  spentLabel: string = 'Total Spent (NGN)';
  balanceLabel: string = 'Balance (NGN)';

  assetFirstLabel: string = 'Total Cards';
  assetSecondLabel: string = 'Cards in-use';
  assetThirdLabel: string = 'In-active';

  playTotal: number = 50000000;
  playSpent: number = 18000000;

  workTotal: number = 20000000;
  workSpent: number = 10000000;

  assetTotal: number = 392383;
  assetUsed: number = 342383;

  playChartData: any = [this.playSpent, this.playTotal - this.playSpent];
  playChartLabel: any = ['Total Spent', 'Balance'];
  playChartColor: any = ['#1B5BAC', '#E2EDF8'];
  playCardClass: string = 'play-card-body';

  workChartData: any = [this.workSpent, this.workTotal - this.workSpent];
  workChartLabel: any = ['Total Spent', 'Balance'];
  workChartColor: any = ['#FF6542', '#F8E9E2'];
  workCardClass: string = 'work-card-body';

  assetChartData: any = [this.assetUsed, this.assetTotal - this.assetUsed];
  assetChartLabel: any = ['In-use', 'In-active'];
  assetChartColor: any = ['#F6AE2D', '#FFFBF5'];
  assetCardClass: string = 'asset-card-body';
  assetCardBackgroundClass: string = 'asset-background';

  whiteBG = 'white-bg';

  allNotification: string = 'notification'
  allNotificationHeading: string = 'Notifications Center';
  allNotificationCount: number = 2;
  allNotificationDescription: string = 'Your have '+this.allNotificationCount+' unread notification';
  noIcon: string = 'no-image';
  notificationUrl: string = '#';
  allNotificationBackground: string = '../../assets/images/notification-icon.png';

  userNotification: string = 'user';
  userNotificationHeading: string = 'Chidimma Nwanya';
  userNotificationDescription: string = 'Vanity By Juls';
  logoutText: string = 'Log Out';
  logoutIcon: string = '../assets/images/logout-icon.png';
  logoutUrl: string = 'login';
  userNotificationBackground: string = '../../assets/images/user-icon.png';
  
  constructor() { }

  ngOnInit() {

  }

  toggleSidebar() {
    if(this.showSidebar) {
      this.showSidebar = false;
      this.contentClass = 'col-md-12 container main';
    } else {
      this.showSidebar = true;
      this.contentClass = 'col-md-9 main';
    }
  }

}
