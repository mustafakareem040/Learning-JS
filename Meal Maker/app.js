let menu = {
  _meal: "",
  _price: 0,
  set meal(mealToCheck) {
    if (typeof mealToCheck == "string") {
      this._meal = mealToCheck;
      return this._meal;
    }
  },
  set price(priceToCheck) {
    if (typeof priceToCheck == "number") {
      this._price = priceToCheck;
      return this._price;
    }
  },
  get todaysSpecial() {
    return this._meal && this._price
      ? `Today's Special is ${this._meal} for ${this._price}`
      : "Meal or price was not set correctly!";
  },
};

menu.meal = "Fresto Spaghetti";
menu.price = 4.99;
console.log(menu);
console.log(menu.todaysSpecial);
