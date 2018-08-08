import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InboxService {

  /**
   * Mock conversaions and user data
   */
  users: Array<Object> = [
    {
      userID: 6,
      userEmail: 'xyz@gmail.com',
      username: 'asif123',
      chats: [
        {
          senderID: 1,
          name: 'Alveena Sohail Ahmed',
          avatar: 'data:image/png;base64,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',
          conversations: [
            { date: '', me: 'HI' },
            { date: '', me: 'Hi I\'m sender two' },
            { date: '', sender: 'Hello' },
            { date: '', sender: 'Hello' },
            { date: '', sender: 'how are you' },
            { date: '', me: 'Hi I\'m sender two' },
            { date: '', sender: 'Hi I\'m sender two' },
            { date: '', me: 'Hi I\'m sender two' },
            { date: '', sender: 'Hi I\'m sender two' },
            { date: '', me: 'Hi I\'m sender two' },
          ]
        },
        {
          senderID: 2,
          name: 'Muhammad Nauman',
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbx1dHZr8Y-PjrdNjN_DPcP0ABDXXJrmrIqeMUOwron2LEAwOD',
          conversations: [
            { date: '', me: 'Hi I\'m sender three' },
            { date: '', sender: 'oye' },
            { date: '', me: 'han' },
            { date: '', sender: 'han' },
            { date: '', me: 'kesa he :P' },
            { date: '', sender: 'kesa he :P' },
            { date: '', me: 'kesa he :P' },
            { date: '', sender: 'kesa he :P' }
          ]
        },
        {
          senderID: 3,
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIq85_6BRPPZxIv3lLDExgVx6VqrSNIqPzBs0TK-i_ZHBtCzDf',
          name: 'Ahmed Waqas Nasir',
          conversations: [
            { date: '', sender: 'Hi I\'m sender three' },
            { date: '', me: 'Fine' },
            { date: '', sender: 'Hi I\'m sender three' },
            { date: '', me: 'Hi I\'m sender three,How are you' },
            { date: '', sender: 'oye' },
            { date: '', me: 'han' },
            { date: '', sender: ':P' }
          ]
        },
        {
          senderID: 4,
          name: 'Taha Qadri',
          avatar: 'data:image/png;base64,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',
          conversations: [
            { date: '', me: 'Hi I\'m sender three' },
            { date: '', sender: 'oye' },
            { date: '', me: 'han' },
            { date: '', me: 'kesa he :P' },
            { date: '', sender: 'Hi I\'m sender three' },
            { date: '', me: 'Fine' },
            { date: '', sender: 'Hi I\'m sender three' },
            { date: '', me: 'Hi I\'m sender three,How are you' },
            { date: '', sender: 'oye' },
            { date: '', me: 'han' },
            { date: '', sender: ':P' }

          ]
        },
        {
          senderID: 5,
          name: 'Muhammad Asif',
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcjnJjqtDcLFBhyb6t4COQ9R41BeP4m7of6vywM8wte94WcTEM',
          conversations: [
            { date: '', me: 'Hi I\'m sender three' },
            { date: '', sender: 'oye' },
            { date: '', me: 'han' },
            { date: '', me: 'kesa he :P' },
            { date: '', me: 'Hi I\'m sender three' },
            { date: '', sender: 'oye' },
            { date: '', me: 'han' },
            { date: '', me: 'kesa he :P' },
            { date: '', sender: 'Hi I\'m sender three' },
            { date: '', me: 'Fine' },
          ]
        },
      ]
    }, {
      userID: 2,
      userEmail: 'abc@gmail.com',
      username: 'seerat123',
      chats: [
        {
          senderID: 1,
          name: 'Ahmed Waqas Nasir',
          conversations: [
            { date: '', me: 'Hi I\'m sender one' },
            { date: '', me: 'HI' },
            { date: '', sender: 'Hello' },
            { date: '', me: 'how are you' }
          ]
        },
        {
          senderID: 3,
          conversations: [
            { date: '', sender: 'oye' },
            { date: '', me: 'han' },
            { date: '', me: 'kesa he :P' }
          ]
        },
      ]
    }, {
      userID: 3,
      userEmail: 'asd@gmail.com',
      username: 'taha123',
      chats: [
        {
          senderID: 1,
          conversations: [
            { date: '', me: 'HI' },
            { date: '', sender: 'Hello' },
            { date: '', me: 'how are you' }
          ]
        },
        {
          senderID: 2,
          conversations: [
            { date: '', sender: 'oye' },
            { date: '', me: 'han' },
            { date: '', me: 'kesa he :P' }
          ]
        },
      ]
    },
  ];

  /**
   * Returning conversations accordng to the given user and conversation id
   */
  getUsers = (currentUser, conversationID) => {
    let conversations = [];
    let name = '';
    let avatar = '';
    this.users.map((user: any) => {
      if (user.userID == currentUser) {
        user.chats.map((chat: any) => {
          if (chat.senderID == conversationID) {
            conversations = chat.conversations;
            name = chat.name;
            avatar = chat.avatar;
          }
        })
      }
    })
    return { conversations, name, avatar };
  }
}
