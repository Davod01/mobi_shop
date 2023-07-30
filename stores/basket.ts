/* eslint-disable camelcase */
import { defineStore } from 'pinia'
import { basketItems, basketItem } from '~/types/types'

export const useBasket = defineStore('counter', () => {
  const items = reactive<basketItems>([])

  function push_item (item: basketItem) {
    for (const data of items) {
      if (data.name === item.name) {
        if (data.quantity + item.quantity > 10) { return }
        data.quantity += item.quantity

        return
      }
    }

    items.push(item)
  }

  function remove_item (index:number) {
    items.splice(index, 1)
  }

  return { items, push_item, remove_item }
})
