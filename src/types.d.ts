export {};

declare global {
  interface Passenger {
    id: string;
    name: string;
    checkedIn: boolean;
    checkInDate: string;
    baggage: "hand-only" | "hold-only" | "hand-hold" | "none";
  }
}
