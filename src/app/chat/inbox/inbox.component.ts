import { ConversationsService } from './../services/conversations.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {InboxService} from '../services/inbox.service'
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators, FormBuilder } from '@angular/forms';

Router
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  conversationId: Number;
  message: FormGroup;
  conversations: Array<Object>;
  name  = '';


  constructor(public router: Router, private route: ActivatedRoute, private conversationsService: ConversationsService, private inbox: InboxService, private fb: FormBuilder, ) {
    this.conversationsService.startChat = false;
    this.route.params.subscribe((params) => {
      this.conversationId = params.id;
      let obj :any
      obj = this.inbox.getUsers(6, this.conversationId);
      this.name = obj.name
      this.conversations = obj.conversations

      console.log(this.name ,this.conversations)
    });

  }

  ngOnInit() {
    this.message = this.fb.group({
      'sender': ['', Validators.required],
      'date': new Date(),
      'time' : new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    })
  }

  send(){
    console.log("this.message.value",this.message.value)
    this.message.reset();

  }

}
