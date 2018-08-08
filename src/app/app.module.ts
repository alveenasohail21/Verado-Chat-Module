import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { AppRoutingModule } from './app.routing';
import { InboxComponent } from './components/inbox/inbox.component';
import { ConversationsComponent } from './components/conversations/conversations.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    InboxComponent,
    ConversationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
