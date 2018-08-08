/**
 * Importing Modules
 */
import { ConversationsService } from './../services/conversations.service';
import {
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.css']
})
/**
 * Class for showing all the conversatiosn
 */
export class ConversationsComponent implements OnInit {
  conversations: Array<Object>;
  originalConversations: Array<Object>;
  startChat: boolean;
  searchKey: String;
  selectedConversation: Number;

  constructor(public router: Router, public conversationService: ConversationsService) {
    this.conversations = this.conversationService.getConversations(); // Getting all the conversations
    this.startChat = conversationService.startChat; // Checking for conversations
    this.originalConversations = this.conversations; // Setting conversation to local variable for searching and filering
  }

  /**
   * Selecting a conversation and changing routes
   */
  selectConversation = (conversation) => {
    this.router.navigate([`./chat/inbox/${conversation.id}`]);
    this.selectedConversation = conversation.id;
  }

  /**
   * Set the active class on the selected conversations
   */
  ngOnInit() {
    this.selectedConversation = this.conversationService.getActiveChatId();
  }

  /**
   * Doing search on email and username
   */
  search() {
    if (this.searchKey === '')
      this.conversations = this.originalConversations;
    else
      this.conversations = this.originalConversations.filter((convo: any) => (
        convo.username.toLowerCase().includes(this.searchKey.toLowerCase()) ||
        convo.description.toLowerCase().includes(this.searchKey.toLowerCase())
      ));
  }
}
