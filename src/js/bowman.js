import Character from './character';

class Bowman extends Character {
  constructor(name) {
    super(name, 'Bowman');

    this.attack = 25;
    this.defence = 25;
  }
}
export default Bowman;
