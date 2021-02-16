import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notification-box',
  templateUrl: './notification-box.component.html',
  styleUrls: ['./notification-box.component.css']
})
export class NotificationBoxComponent implements OnInit {
  @Input() type: string;
  @Input() heading: string;
  @Input() description: string;
  @Input() buttonText: string;
  @Input() buttonImage: string;
  @Input() _background: string;
  @Input() url: string;
  constructor() { }

  ngOnInit() {
  }

}
