import { createRouter, createWebHistory } from 'vue-router'

// Import các view (trang)
import HomeSearch from '@/views/HomeSearch.vue'
import Flashsale from '@/views/Flashsale.vue'
import SearchResult from '@/views/SearchResult.vue'
import SearchDay from '@/views/SearchDay.vue'

const routes = [
  {
    path: '/',
    name: 'HomeSearch',
    component: HomeSearch
  },
  {
    path: '/flashsale',
    name: 'Flashsale',
    component: Flashsale
  },
    {
    path: '/search-result',
    name: 'SearchResult',
    component: SearchResult
  },
     {
    path: '/search-day',
    name: 'SearchDay',
    component: SearchDay
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
