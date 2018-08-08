import { ChatModule } from './chat/chat.module';
// import { ChatComponent } from './components/chat/chat.component';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// ChatModule
const routes: Routes = [
    {
        path: '',
        redirectTo: 'chat',
        pathMatch: 'full',
    },
    {
        path: 'chat', loadChildren: 'app/chat/chat.module#ChatModule'
    },
    // { path: '', component: ChatComponent },
    // { path: 'chat', component: ChatComponent },
    // { path: 'chat/:id', component: ChatComponent },

]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
        ChatModule,
        NgbModule
    ],
    exports: [
        RouterModule
    ],
})
export class AppRoutingModule { }
