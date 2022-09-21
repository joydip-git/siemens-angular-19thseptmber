import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  appTitle = 'Product Management System'
  constructor() {
    console.log('[Dashboard] component created')
  }

  ngOnInit(): void {
  }

}
