import { ConversationsService } from './../services/conversations.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.css']
})
export class ConversationsComponent implements OnInit {
  conversations: Array<Object>;

  constructor(conversationService: ConversationsService) {
    this.conversations = conversationService.getConversations();
  }

  ngOnInit() {

  }

}
