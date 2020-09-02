import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white;
    }
  `]
})
export class ServerComponent implements OnInit {
  serverID: number = 10;
  serverStatus: string = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus == 'online' ? '#7cd992' : '#eb6060';
  }

  constructor() { }

  ngOnInit(): void {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

}
