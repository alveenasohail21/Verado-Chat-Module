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

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';



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
  name:string ;

  closeResult: string;





  constructor(public router: Router,
    private route: ActivatedRoute,
    private conversationsService: ConversationsService,
    private inbox: InboxService,
    private fb: FormBuilder,
    private modalService: NgbModal
  ) {
    this.conversationsService.startChat = false;
    this.route.params.subscribe((params) => {
      this.conversationId = params.id;
      this.conversationsService.setActiveChatId(this.conversationId);
      let obj :any
      obj = this.inbox.getUsers(6, this.conversationId);
      this.name = obj.name
      this.conversations = obj.conversations;
       this.show = this.conversations.length > 0 ? false : true;
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
      me: ['', Validators.required],
      date: new Date(),
      time: new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
      amount:'',
      specialOffer: false,
    })

    
  }

  send() {
    this.conversations.push(this.message.value);
    this.message.reset();

  
  }
  sendSpecialOffer(){
    if(this.message.value.me){
      this.message.patchValue({
        specialOffer : true
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
      return  `with: ${reason}`;
    }
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }





}
