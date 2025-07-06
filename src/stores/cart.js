import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const cart = ref({
    items: [],
    total: 0,
  })
  function addToCart(book) {
    alert(book.title + " foi adicionado ao carrinho!")
    this.cart.items.push(book)
    this.cart.total += book.price
    console.log(this.cart)
  }
  return {
    cart,
    addToCart,
  }
})
