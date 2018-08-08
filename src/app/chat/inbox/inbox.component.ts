import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

Router
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  conversationId: Number;

  constructor(public router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.conversationId = params.id;
    });

  }

  ngOnInit() {
  }

}
