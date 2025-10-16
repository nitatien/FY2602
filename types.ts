export type ViewType = 'overview' | 'transport' | 'daily' | 'food';

export interface Event {
  time: string;
  activity: string;
  description: string;
  // FIX: Added 'Dessert' to the event type to allow for dessert-related activities, aligning it with the FoodSpot type and fixing errors in travelData.ts.
  type: 'Travel' | 'Lodging' | 'Dining' | 'Sightseeing' | 'Activity' | 'Shopping' | 'Dessert';
  photo_spot?: string;
  details?: string;
}

export interface DailyPlan {
  day: number;
  date: string;
  title: string;
  theme: string;
  events: Event[];
}

export interface TransportationOption {
  name: string;
  description: string;
  cost: string;
}

export interface Accommodation {
  name: string;
  dates: string;
  notes: string;
}

export interface FoodSpot {
    name: string;
    type: 'Restaurant' | 'Dessert' | 'Sake' | 'Market';
    specialty: string;
    day_mentioned: number;
}

export interface TravelData {
  tripTitle: string;
  summary: string;
  transportation: {
    recommendation: string;
    options: TransportationOption[];
  };
  accommodations: Accommodation[];
  dailyPlan: DailyPlan[];
  foodGuide: FoodSpot[];
}
