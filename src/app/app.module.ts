import { ChatModule } from './chat/chat.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { ChatComponent } from './components/chat/chat.component';
import { AppRoutingModule } from './app.routing';
// import { InboxComponent } from './components/inbox/inbox.component';
// import { ConversationsComponent } from './components/conversations/conversations.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    // ChatComponent,
    // InboxComponent,
    // ConversationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
