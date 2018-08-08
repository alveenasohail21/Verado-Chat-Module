import { ConversationsService } from './../services/conversations.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {InboxService} from '../services/inbox.service'
Router
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  conversationId: Number;

  constructor(public router: Router, private route: ActivatedRoute,private  conversationsService: ConversationsService ,private inbox :InboxService) {
 this.conversationsService.startChat = false;
    this.route.params.subscribe((params) => {
      this.conversationId = params.id;

      console.log(this.inbox.getUsers(6,this.conversationId))
    });

  }

  ngOnInit() {
  }

}
