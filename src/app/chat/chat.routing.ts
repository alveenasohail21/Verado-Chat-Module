import { Component } from '@angular/core';
import { InboxComponent } from './inbox/inbox.component';
import { ChatComponent } from './chat.component';
import { Routes } from '@angular/router';
import { ConversationsComponent } from './conversations/conversations.component';

export const ChatRoutes: Routes = [
    {
        path: '', component: ChatComponent,
    },
    // {
    //     path: '',
    //     children: [{
    //         path: 'signUp',
    //         // component: SignUpComponent
    //     }]
    // }
];