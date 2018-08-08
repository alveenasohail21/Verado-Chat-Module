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
import { trigger, state, style, transition, animate } from '@angular/animations';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css'],
  animations: [
    trigger('smoothchange', [
      state('void', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(100%)' }),
        animate(400)
      ]),
      transition('* => void', [
        animate(250, style({ transform: 'translateX(100%)' }))
      ])
    ]),
    trigger('smooth', [
      state('void', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateY(-100%)' }),
        animate(400)
      ]),
      transition('* => void', [
        animate(250, style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
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
  show = false;
  isMounted = false;
  state = 'hide';

  constructor(public router: Router, private route: ActivatedRoute, private conversationsService: ConversationsService, private inbox: InboxService, private fb: FormBuilder, public modalService: NgbModal) {
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
      this.conversations = obj.conversations;
      this.show = this.conversations.length > 0 ? false : true;
      this.avatar = obj.avatar;
    });


  }
  get stateName() {
    return this.show ? 'show' : 'hide'
  }
  toggle() {
    this.show = !this.show;
  }

  /**
   * Binding fields with form data fields
   */
  ngOnInit() {
    this.message = this.fb.group({
      me: ['', Validators.required],
      date: new Date(),
      time: new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
      amount: null,
      specialOffer: false,
    })
  }

  /**
   * This function pushes a message in the current conversation array
   */
  send = () => {
    this.conversations.push(this.message.value);
    this.message.reset();
  }

  sendSpecialOffer = () => {
    if (this.message.value.me) {
      this.message.patchValue({
        specialOffer: true
      });
      console.log(this.message.value)
      this.conversations.push(this.message.value);

      this.message.reset();
    }

  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
}
