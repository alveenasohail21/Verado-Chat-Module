import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConversationsService {

  conversations: Array<Object> = [
    { id: 1, username: 'Alveena Sohail Ahmed', email: 'alveena.sohail@gmail.com', avatar: 'http://emilcarlsson.se/assets/mikeross.png' },
    { id: 2, username: 'Muhammad Nauman', email: 'muhammadnauman@gmail.com', avatar: 'http://emilcarlsson.se/assets/mikeross.png' },
    { id: 3, username: 'Ahmed Waqas Nasir', email: 'ahmedwaqasnasir@gmail.com', avatar: 'http://emilcarlsson.se/assets/mikeross.png' },
    { id: 4, username: 'Taha Qadri', email: 'tahaqadri@gmail.com', avatar: 'http://emilcarlsson.se/assets/mikeross.png' },
    { id: 5, username: 'Asif', email: 'asf@gmail.com', avatar: 'http://emilcarlsson.se/assets/mikeross.png' },
  ];

  getConversations = () => {
    return this.conversations;
  }
}
