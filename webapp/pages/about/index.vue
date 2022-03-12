<template>
  <About></About>
</template>

<script>
import About from '@/components/About'
import { mounted } from '../../global/init'
import $ from 'jquery'
export default {
  components: { About },
  mounted() {
    console.log('about mounted')
    try {
      mounted()
    } catch (error) {
      $(window).bind('load', function() {
        mounted()
      })
    }
  },
  head: {
    title: 'A-propos'
  }
}
</script>

<style>
</style>