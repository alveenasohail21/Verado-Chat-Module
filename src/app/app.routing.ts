import { ChatComponent } from './components/chat/chat.component';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    { path: '', component: ChatComponent },
    { path: 'chat', component: ChatComponent },
    { path: 'chat/:id', component: ChatComponent },

]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule
    ],
})
export class AppRoutingModule { }
