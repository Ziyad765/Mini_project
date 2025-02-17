export type UserRole = 'user' | 'organizer';

export interface Profile {
  id: string;
  username: string;
  full_name: string | null;
  avatar_url: string | null;
  role: UserRole;
  bio: string | null;
  created_at: string;
  updated_at: string;
}

export interface Event {
  id: string;
  organizer_id: string;
  title: string;
  description: string;
  category_id: string;
  location: string;
  start_date: string;
  end_date: string;
  image_url: string | null;
  max_capacity: number;
  created_at: string;
  updated_at: string;
  profiles?: Profile;
}

export interface Ticket {
  id: string;
  event_id: string;
  type: string;
  price: number;
  quantity: number;
  status: 'available' | 'reserved' | 'sold';
  created_at: string;
  updated_at: string;
}

export interface TicketPurchase {
  id: string;
  ticket_id: string;
  user_id: string;
  quantity: number;
  total_price: number;
  purchase_date: string;
  booking_id: string;
}