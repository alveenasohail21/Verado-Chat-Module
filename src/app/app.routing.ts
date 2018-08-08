import { ChatModule } from './chat/chat.module';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// ChatModule
const routes: Routes = [
    {
        path: '',
        redirectTo: 'chat',
        pathMatch: 'full',
    },
    {
        path: 'chat', loadChildren: './chat/chat.module#ChatModule'
    },
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
