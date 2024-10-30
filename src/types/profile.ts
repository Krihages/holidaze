export type Media = {
  url: string;
  alt?: string;
};

export type Avatar = Media;
export type Banner = Media;

export type Location = {
  address?: string;
  city?: string;
  zip?: string;
  country?: string;
  continent?: string;
  lat?: number;
  lng?: number;
};

export type VenueMeta = {
  wifi?: boolean;
  parking?: boolean;
  breakfast?: boolean;
  pets?: boolean;
};

export type Venue = {
  id: string;
  name: string;
  description: string;
  media: Media[];
  price: number;
  maxGuests: number;
  rating: number;
  created: string;
  updated: string;
  meta: VenueMeta;
  location?: Location;
};

export type Booking = {
  id: string;
  dateFrom: string;
  dateTo: string;
  guests: number;
  created: string;
  updated: string;
  venue: Venue;
};

export type ProfileCounts = {
  venues: number;
  bookings: number;
};

export type Profile = {
  name: string;
  email: string;
  bio?: string;
  avatar: Avatar;
  banner: Banner;
  venueManager: boolean;
  venues?: Venue[];
  bookings?: Booking[];
  _count?: ProfileCounts;
};
