import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { ServerStatus } from "./dashboard/server-status/server-status";
import { Traffic } from "./dashboard/traffic/traffic";
import { Ticket } from "./dashboard/ticket/ticket";
import { DashboardItem } from "./dashboard/dashboard-item/dashboard-item";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, ServerStatus, Traffic, Ticket, DashboardItem],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  
}
