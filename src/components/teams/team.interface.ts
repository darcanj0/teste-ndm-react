export interface Team {
  id: string;
  name: string;
  players: Player[];
}

export interface Player {
  id: string;
  age: number;
  name: string;
}
