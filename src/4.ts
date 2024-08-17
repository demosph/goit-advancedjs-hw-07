class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random(); // Генеруємо випадковий підпис при створенні ключа
  }

  public getSignature(): number {
    return this.signature; // Повертаємо значення підпису
  }
}

class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key; // Зберігаємо ключ у приватній властивості
  }

  public getKey(): Key {
    return this.key; // Повертаємо збережений ключ
  }
}

abstract class House {
  protected door: boolean = false; // Двері закриті за замовчуванням
  protected key: Key;
  protected tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key; // Зберігаємо ключ
  }

  public comeIn(person: Person): void {
    if (this.door) { // Перевіряємо, чи двері відчинені
      this.tenants.push(person); // Якщо так, додаємо людину в список мешканців
      console.log(`${person.getKey().getSignature()} entered the house.`);
    } else {
      console.log('The door is closed, you cannot enter.');
    }
  }

  public abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  public openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) { // Перевіряємо підпис ключа
      this.door = true; // Якщо збігається, відчиняємо двері
      console.log('The door is open.');
    } else {
      console.log('The key does not fit.');
    }
  }
}

// Створюємо об'єкти класів
const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

//Намагаємося увійти додому
house.openDoor(person.getKey()); // Відчиняємо двері за допомогою ключа
house.comeIn(person); // Входимо у дім

export {};