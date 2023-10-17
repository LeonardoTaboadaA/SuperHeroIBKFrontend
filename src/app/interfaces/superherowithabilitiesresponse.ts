import { Ability } from "./ability";
import { PowerLevel } from "./powerlevel";

export interface SuperheroWithAbilitiesResponse {
  id: number;
  name: string;
  description: string;
  powerLevel: PowerLevel;
  abilities: Ability[];
}
