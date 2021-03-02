/**
 * SHOPPING CART
 * ----------------------------------------------------------------------
 * Handles the Shopping Cart which is made up of SHOPPING_PRODUCTs
 * ----------------------------------------------------------------------
 */
class SHOPPING_CART{
  constructor(){
    this._cart = [];
  }
 
  /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  ::::::::::::::::::::                                                                         ::::::::::::::::::::
  ::::::::::::::::::::  GETTERS & SETTERS                                                      ::::::::::::::::::::
  ::::::::::::::::::::                                                                         ::::::::::::::::::::
  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
  
  get cart(){ return this._cart }
  set cart(newCart){ this._cart = newCart }
}