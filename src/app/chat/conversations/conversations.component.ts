import { ConversationsService } from './../services/conversations.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.css']
})
export class ConversationsComponent implements OnInit {
  conversations: Array<Object>;
  originalConversations: Array<Object>;
  startChat: boolean;
  searchKey: String;

  constructor(public router: Router, public conversationService: ConversationsService) {
    this.conversations = this.conversationService.getConversations();
    this.startChat = conversationService.startChat;
    this.originalConversations = this.conversations;

  }

  ngOnInit() {

  }

  search() {
    if (this.searchKey === '')
      this.conversations = this.originalConversations;
    else
      this.conversations = this.originalConversations.filter((convo: any) => (
        convo.username.toLowerCase().includes(this.searchKey.toLowerCase())
      ));
  }

  toInbox() {
    this.router.navigate(['./chat/inbox/123'])
  }

}
