class Storage {

  constructor(array) {
    this.items = array;
  }

  getItems() {
    return this.items
  }

  addItem(item) {
    return this.items.push(item);
  }

  removeItem(item) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] === item) {
        return this.items.slice(i,1)
      }
    }
  }
}


const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

console.log(storage);
const items = storage.getItems();
console.table(items);

storage.addItem('Дроид');
console.table(storage.items);

storage.removeItem('Пролонгер');
console.table(storage.items);