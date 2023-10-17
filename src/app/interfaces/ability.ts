import { PowerLevel } from "./powerlevel";

export interface Ability {
  id?: number; // El campo id es opcional ya que podría no estar presente en la creación de una nueva habilidad
  name: string;
  powerLevel: PowerLevel;
}
