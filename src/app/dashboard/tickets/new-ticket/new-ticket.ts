import { Component, output } from '@angular/core';
import { Button } from "../../../shared/button/button";
import { Control } from "../../../shared/control/control";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  imports: [Button, Control, FormsModule],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css',
})
export class NewTicket {
  
  add = output<{ title: string; text: string }>();

  onSubmit(ticketTitle: string, ticketRequest: string) {
    this.add.emit({ title: ticketTitle, text: ticketRequest });
  }
}
