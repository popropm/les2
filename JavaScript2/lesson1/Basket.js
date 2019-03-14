class Basket {
constructor(item){
this.items = item;
    }
    bask (items = []) {
        this.items = this.items.concat(items)
    };
    removeItems  (items = []) {

    };
    getCost  () {
        return this.cost
    };
}