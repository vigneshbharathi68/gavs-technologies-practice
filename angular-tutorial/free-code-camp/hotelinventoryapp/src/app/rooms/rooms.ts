export interface Room {
    totalRooms?: number;
    avaliableRooms: number;
    bookedRooms?: number;
}

export interface RoomList {
    roomNumber: number;
    roomType: string;
    amenties: string;
    price: number;
    photos: string;
    checkinTime: Date;
    checkoutTime: Date; 
}