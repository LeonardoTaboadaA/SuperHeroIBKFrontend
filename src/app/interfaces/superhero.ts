import { PowerLevel } from "./powerlevel";

export interface Superhero {
  id?: number; // El signo de interrogación indica que el campo es opcional
  name: string;
  description: string;
  powerLevel: PowerLevel; // Puedes usar "string" para representar el Enum de manera similar
  enabled?: boolean; // También puedes marcar campos como opcionales en TypeScript
}
