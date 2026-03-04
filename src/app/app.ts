import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { ServerStatus } from "./dashboard/server-status/server-status";
import { Traffic } from "./dashboard/traffic/traffic";
import { DashboardItem } from "./dashboard/dashboard-item/dashboard-item";
import { Ticket } from './dashboard/tickets/ticket/ticket';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, ServerStatus, Traffic, DashboardItem, Ticket],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  
}
