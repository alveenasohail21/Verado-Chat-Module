import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConversationsService {
  startChat: boolean = true;
  activeChatId: Number;

  /**
   * Mock Conversations
   */
  conversations: Array<Object> = [
    { id: 1, username: 'Alveena Sohail Ahmed', description: 'alveena.sohail@gmail.com', avatar: 'http://emilcarlsson.se/assets/mikeross.png' },
    { id: 2, username: 'Muhammad Nauman', description: 'muhammadnauman@gmail.com', avatar: 'http://emilcarlsson.se/assets/mikeross.png' },
    { id: 3, username: 'Ahmed Waqas Nasir', description: 'ahmedwaqasnasir@gmail.com', avatar: 'http://emilcarlsson.se/assets/mikeross.png' },
    { id: 4, username: 'Taha Qadri', description: 'tahaqadri@gmail.com', avatar: 'http://emilcarlsson.se/assets/mikeross.png' },
    { id: 5, username: 'Muhammad Asif', description: 'asf@gmail.com', avatar: 'http://emilcarlsson.se/assets/mikeross.png' },
  ];

  /**
   * Returning conversations
   */
  getConversations = () => {
    return this.conversations;
  }

  /**
   * Setting the id of active chat
   */
  setActiveChatId = (id) =>
    this.activeChatId = id;

  /**
   * Getting the id of active chats
   */
  getActiveChatId = (): Number =>
    this.activeChatId;
}
