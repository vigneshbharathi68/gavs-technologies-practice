import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  hotelName = 'Hilton Hotel';
  numberOfRooms: number = 10;
  hideRooms: boolean = false;

  rooms: Room = {
    totalRooms: 20,
    avaliableRooms: 10,
    bookedRooms: 5
  }

  roomsList: Array<RoomList> = [
    {
      roomNumber: 1,
      roomType: 'Deluxe',
      amenties: 'AC, TV, Wifi',
      price: 2000,
      // Get some hotel photo from https://unsplash.com/
      photos: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021')
    },
    {
      roomNumber: 2,
      roomType: 'Deluxe',
      amenties: 'AC, TV, Wifi',
      price: 3000,
      // Get some hotel photo from https://unsplash.com/
      photos: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021')
    },
    {
      roomNumber: 3,
      roomType: 'Deluxe',
      amenties: 'AC, TV, Wifi',
      price: 5000,
      // Get some hotel photo from https://unsplash.com/
      photos: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021')
    }
  ]

  constructor() { }

  ngOnInit(): void {
    console.log('Hotel Name =====>', this.hotelName);
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

}
