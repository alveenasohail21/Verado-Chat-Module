import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
Router
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((param)=>{
      console.log(param.id);
    })
  }

}
