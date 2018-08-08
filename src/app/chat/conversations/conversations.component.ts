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
  startChat:boolean; 

  constructor(public router:Router,public conversationService: ConversationsService) {
    this.conversations = this.conversationService.getConversations();
    this.startChat = conversationService.startChat;

  }

  ngOnInit() {

  }

  toInbox(){
    this.router.navigate(['./chat/inbox/123'])
  }

}
