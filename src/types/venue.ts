export type User = {
  name: string;
  email: string;
  bio: string | null;
  avatar: Media;
  banner: Media;
};

export type Media = {
  url: string;
  alt: string;
};

export type Location = {
  address?: string;
  city?: string;
  zip?: string;
  country?: string;
  continent?: string;
  lat?: number;
  lng?: number;
};

export type Booking = {
  id: string;
  dateFrom: string;
  dateTo: string;
  guests: number;
  created: string;
  updated: string;
  /*  customer?: any; */
};

export type VenueType = {
  id: string;
  name: string;
  description: string;
  media: Media[];
  price: number;
  maxGuests: number;
  rating: number;
  created: string;
  updated: string;
  meta?: {
    wifi?: boolean;
    parking?: boolean;
    breakfast?: boolean;
    pets?: boolean;
  };
  location: Location;
  owner: User;
  bookings: Booking[];
  _count: {
    bookings: number;
  };
};
