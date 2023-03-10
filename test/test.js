import Character from "../src/js/character";
import Bowman from "../src/js/bowman";
import Swordsman from "../src/js/swordsman";
import Magician from "../src/js/magician";
import Daemon from "../src/js/daemon";
import Undead from "../src/js/undead";
import Zombie from "../src/js/zombie";

const playersList = [
  [
    Bowman,
    "Ivan",
    {
      name: "Ivan",
      type: "Bowman",
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
  ],
  [
    Swordsman,
    "Yana",
    {
      name: "Yana",
      type: "Swordsman",
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    },
  ],
  [
    Magician,
    "Alexander",
    {
      name: "Alexander",
      type: "Magician",
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
  ],
  [
    Daemon,
    "Tanya",
    {
      name: "Tanya",
      type: "Daemon",
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
  ],
  [
    Undead,
    "Valya",
    {
      name: "Valya",
      type: "Undead",
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
  ],
  [
    Zombie,
    "Oleg",
    {
      name: "Oleg",
      type: "Zombie",
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    },
  ],
];

const testHandler = test.each(playersList);

testHandler(
  "testing player %q created by %w",
  (Type, createdObject, expectedObject) => {
    const result = new Type(createdObject);
    expect(result).toEqual(expectedObject);
  }
);

test("test for class Character", () => {
  const result = new Character("Matvey", "Daemon");
  expect(result).toEqual({
    name: "Matvey",
    type: "Daemon",
    health: 100,
    level: 1,
    attack: 10,
    defence: 10,
  });
});

const characterErrorList = [
  ["Error - name isn't string", 1, "Daemon", "Ошибка в параметре name"],
  ["Error - name is too short", "a", "Daemon", "Ошибка в параметре name"],
  [
    "Error - name is too long",
    "AAAAAAAAAbbbbbddddduuuuullllaaaaeeevvvvv",
    "Daemon",
    "Ошибка в параметре name",
  ],
  [
    "Error - incorrect type of player",
    "Matvey",
    "Demon",
    "Ошибка в типе игрока",
  ],
];

const testCharacterErrors = test.each(characterErrorList);

testCharacterErrors(
  "test Errors of class Character by name is %q type is %w",
  (error, name, type, expected) => {
    expect(() => {
      const result = new Character(name, type);
      console.log(result);
    }).toThrowError(expected);
  }
);

test("test for method levelUp of class Character", () => {
  const result = new Character("Matvey", "Daemon");

  result.levelUp();

  expect(result).toEqual({
    name: "Matvey",
    type: "Daemon",
    health: 100,
    level: 2,
    attack: 12,
    defence: 12,
  });
});

test("test of Error by the method levelUp in the class Character", () => {
  expect(() => {
    const result = new Character("Matvey", "Daemon");
    result.health = 0;
    result.levelUp();
  }).toThrowError("Нельзя повысить левел умершего");
});

const damageList = [
  [
    "Damage is 50 points",
    50,
    {
      name: "Matvey",
      type: "Daemon",
      health: 55,
      level: 1,
      attack: 10,
      defence: 10,
    },
  ],
  [
    "Damage is 500 points",
    500,
    {
      name: "Matvey",
      type: "Daemon",
      health: 0,
      level: 1,
      attack: 10,
      defence: 10,
    },
  ],
];

const damageTestHandler = test.each(damageList);

damageTestHandler(
  "Test %q in class Character",
  (checkName, points, expected) => {
    const result = new Character("Matvey", "Daemon");
    console.log(checkName);
    result.damage(points);
    expect(result).toEqual(expected);
  }
);
