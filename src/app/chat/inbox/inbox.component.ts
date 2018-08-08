/**
 * Importing Modules
 */
import { ConversationsService } from './../services/conversations.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InboxService } from '../services/inbox.service'
import {
  FormGroup,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})

/**
 * This is a component for doing and showing the conversations
 */
export class InboxComponent implements OnInit {
  conversationId: Number;
  message: FormGroup;
  conversations: Array<Object>;
  name = '';
  avatar = '';

  constructor(public router: Router, private route: ActivatedRoute, private conversationsService: ConversationsService, private inbox: InboxService, private fb: FormBuilder, ) {
    this.conversationsService.startChat = false; // Check whether a chat is selected or not

    /**
     * Listening to route changes and fetching conversations according to the id in the route
     */
    this.route.params.subscribe((params) => {
      this.conversationId = params.id;
      this.conversationsService.setActiveChatId(this.conversationId);
      let obj: any
      obj = this.inbox.getUsers(6, this.conversationId);
      this.name = obj.name
      this.conversations = obj.conversations
      this.avatar = obj.avatar;
    });

  }

  /**
   * Binding fields with form data fields
   */
  ngOnInit() {
    this.message = this.fb.group({
      'me': ['', Validators.required],
      'date': new Date(),
      'time': new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    });
  }

  /**
   * This function pushes a message in the current conversation array
   */
  send() {
    this.conversations.push(this.message.value);
    this.message.reset();
  }

}
