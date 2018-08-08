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

  constructor(public router:Router, conversationService: ConversationsService) {
    this.conversations = conversationService.getConversations();
  }

  ngOnInit() {

  }

  toInbox(){
    this.router.navigate(['./chat/inbox/123'])
  }

}
