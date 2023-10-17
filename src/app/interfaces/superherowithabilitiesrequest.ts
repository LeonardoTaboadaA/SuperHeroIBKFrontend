import { PowerLevel } from "./powerlevel";

export interface SuperheroWithAbilitiesRequest {
  name: string;
  description: string;
  powerLevel: PowerLevel;
  selectedAbilities: number[]; // Suponiendo que los IDs de habilidades son números
}
