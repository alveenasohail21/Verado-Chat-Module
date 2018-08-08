import { ConversationsService } from './../services/conversations.service';
import { Component, AfterViewInit, OnInit } from '@angular/core';
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
  selectedConversation: Number;

  constructor(public router: Router, public conversationService: ConversationsService) {
    this.conversations = this.conversationService.getConversations();
    this.startChat = conversationService.startChat;
    // this.selectedConversation = 1;
    this.originalConversations = this.conversations;

  }

  selectConversation = (conversation) => {
    this.router.navigate([`./chat/inbox/${conversation.id}`]);
    this.selectedConversation = conversation.id;
  }

  ngOnInit() {
    this.selectedConversation = this.conversationService.getActiveChatId();
    console.log(this.selectedConversation)
  }



  search() {
    if (this.searchKey === '')
      this.conversations = this.originalConversations;
    else
      this.conversations = this.originalConversations.filter((convo: any) => (
        convo.username.toLowerCase().includes(this.searchKey.toLowerCase()) ||
        convo.description.toLowerCase().includes(this.searchKey.toLowerCase())
      ));
  }


  toInbox() {
    this.router.navigate(['./chat/inbox/123'])
  }

}
