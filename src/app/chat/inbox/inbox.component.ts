import { ConversationsService } from './../services/conversations.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InboxService } from '../services/inbox.service'
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators, FormBuilder } from '@angular/forms';
// import {
//   trigger,
//   state,
//   style,
//   animate,
//   transition,
//   query,
//   stagger
// } from '@angular/animations';
import { trigger, state, style, transition, animate } from '@angular/animations';


Router
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css'],
  //   animations: [
  //     trigger('popOverState', [
  //       state('show', style({
  //         opacity: 1
  //       })),
  //       state('hide', style({
  //         opacity: 0
  //       })),
  //       transition('show => hide', animate('3000ms ease-out')),
  //       transition('hide => show', animate('3000ms ease-in'))
  //     ])
  //   ]
  // animations: [
  //   trigger('photosAnimation', [
  //     transition('* => *', [
  //       query('img',style({ transform: 'translateX(-100%)'})),
  //       query('img',
  //         stagger('600ms', [
  //           animate('900ms', style({ transform: 'translateX(0)'}))
  //       ]))
  //     ])
  //   ])
  // ]
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
// declare var chal: boolean ;


export class InboxComponent implements OnInit {
  conversationId: Number;
  message: FormGroup;
  conversations: Array<Object>;
  show = false;
  isMounted = false;
  state = 'hide';




  constructor(public router: Router,
    private route: ActivatedRoute,
    private conversationsService: ConversationsService,
    private inbox: InboxService,
    private fb: FormBuilder,
  ) {
    this.conversationsService.startChat = false;
    this.route.params.subscribe((params) => {
      this.conversationId = params.id;

      this.conversations = this.inbox.getUsers(6, this.conversationId);
      this.show = this.conversations.length > 0 ? false : true;
      console.log(this.show)

    });


  }
  get stateName() {
    return this.show ? 'show' : 'hide'
  }
  toggle() {
    this.show = !this.show;
  }

  ngOnInit() {
    this.message = this.fb.group({
      'me': ['', Validators.required],
      'date': new Date(),
      'time': new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    })
  }

  send() {
    this.conversations.push(this.message.value);
    this.message.reset();

  }



}
