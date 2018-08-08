import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InboxService {

  constructor() { }

  users: Array<Object> = [
    {
      userID: 6,
      userEmail: 'xyz@gmail.com',
      username: 'asif123',
      chats: [
        {
          senderID: 2,
          conversations: [
            { date: '', me: 'HI' },
            { date: '', me: 'Hi I\'m sender two' },
            { date: '', sender: 'Hello' },
            { date: '', me: 'how are you' }
          ]
        },
        {
          senderID: 3,
          conversations: [
            { date: '', me: 'Hi I\'m sender three' },
            { date: '', sender: 'oye' },
            { date: '', me: 'han' },
            { date: '', me: 'kesa he :P' }
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

  getUsers(currentUser, conversationID) {
    let conversation = []
    this.users.map((user: any) => {
      if (user.userID == currentUser) {
        user.chats.map((chat: any) => {
          if (chat.senderID == conversationID) {
            conversation = chat.conversations
          }
        })
      }
    })
    return conversation


  }
}
