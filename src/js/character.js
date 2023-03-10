class Character {
  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Ошибка в параметре name');
    }
    const checkTypes = [
      'Bowman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];

    if (!checkTypes.includes(type)) {
      throw new Error('Ошибка в типе игрока');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 10;
    this.defence = 10;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Нельзя повысить левел умершего');
    }

    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    let healthOfPlayer = this.health;
    healthOfPlayer -= points * (1 - this.defence / 100);
    if (healthOfPlayer <= 0) {
      this.health = 0;
      return;
    }
    // проверка на параметр healthOfPlayer > 100 так понимаю не нужна.
    this.health = healthOfPlayer;
  }
}

export default Character;
