// ****************************************************************************
// ****************************************************************************
// NO TOCAR
// ****************************************************************************
// ****************************************************************************

class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    // *************************************************************************
    // *************************************************************************
    // HASTA AQUI
    // *************************************************************************
    // *************************************************************************
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }

    return this.items;
  }
}



console.log('OMGHAI!');

items = [];

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Sulfuras, Hand of Ragnaros', -1, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49));
// this conjured item does not work properly yet
items.push(new Item('Conjured Mana Cake', 3, 6));


gildedRose = new Shop(items);

var days = 31;

for (var i = 0; i < days; i++) {
  showHeaderFor(i);
  showItemsFor(i);
  gildedRose.updateQuality();
}

function showHeaderFor(day) {
  console.log('-------- day ' + day + ' --------');
}

function showItemsFor(day) {
  console.log('name, sellIn, quality');
  for (var j = 0; j < gildedRose.items.length; j++) {
    var item = gildedRose.items[j];
    console.log(item.name + ', ' + item.sellIn + ', ' + item.quality);
  }
  console.log('\n');
}
