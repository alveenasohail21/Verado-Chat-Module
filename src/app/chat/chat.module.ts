import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversationsComponent } from './conversations/conversations.component';
import { InboxComponent } from './inbox/inbox.component';
import { ChatComponent } from './chat.component';
import { RouterModule } from '@angular/router';
import { ChatRoutes } from './chat.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



RouterModule
@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forChild(ChatRoutes),
    

  ],
  declarations: [ConversationsComponent, InboxComponent, ChatComponent]
})
export class ChatModule { }
