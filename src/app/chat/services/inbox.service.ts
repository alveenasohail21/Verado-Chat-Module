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
          senderID: 1,
          name: 'Alveena Sohail Ahmed',
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

  getUsers(currentUser, conversationID) {
    let conversations = [];
    let name = ''
    this.users.map((user: any) => {
      if (user.userID == currentUser) {
        user.chats.map((chat: any) => {
          if (chat.senderID == conversationID) {
            conversations = chat.conversations;
            name = chat.name
          }
        })
      }
    })
    return {conversations,name}


  }
}
