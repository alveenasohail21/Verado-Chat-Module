import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConversationsService {
  startChat: boolean = true;
  activeChatId: Number;

  conversations: Array<Object> = [
    { id: 1, username: 'Alveena Sohail Ahmed', description: 'alveena.sohail@gmail.com', avatar: 'http://emilcarlsson.se/assets/mikeross.png' },
    { id: 2, username: 'Muhammad Nauman', description: 'muhammadnauman@gmail.com', avatar: 'http://emilcarlsson.se/assets/mikeross.png' },
    { id: 3, username: 'Ahmed Waqas Nasir', description: 'ahmedwaqasnasir@gmail.com', avatar: 'http://emilcarlsson.se/assets/mikeross.png' },
    { id: 4, username: 'Taha Qadri', description: 'tahaqadri@gmail.com', avatar: 'http://emilcarlsson.se/assets/mikeross.png' },
    { id: 5, username: 'Asif', description: 'asf@gmail.com', avatar: 'http://emilcarlsson.se/assets/mikeross.png' },
  ];

  getConversations = () => {
    return this.conversations;
  }

  setActiveChatId = (id) =>
    this.activeChatId = id;

  getActiveChatId = (): Number =>
    this.activeChatId;
}
