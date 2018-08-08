import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversationsComponent } from './conversations/conversations.component';
import { InboxComponent } from './inbox/inbox.component';
import { ChatComponent } from './chat.component';
import { RouterModule } from '@angular/router';
import { ChatRoutes } from './chat.routing';

RouterModule
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ChatRoutes),

  ],
  declarations: [ConversationsComponent, InboxComponent, ChatComponent]
})
export class ChatModule { }
