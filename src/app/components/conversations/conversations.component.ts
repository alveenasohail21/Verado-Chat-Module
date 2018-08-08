import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
Router
@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.css']
})
export class ConversationsComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }


  toInbox(){
    this.router.navigate(['/chat/123'])
  }

}
