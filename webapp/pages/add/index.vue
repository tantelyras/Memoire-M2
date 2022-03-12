<template>
  <AddPage />
</template>

<script>
import AddPage from '@/components/AddPage'
import { mounted } from '../../global/init'
import $ from 'jquery'
export default {
  components: { AddPage },
  head() {
    return {
      title: 'Add'
    }
  },
  mounted() {
    try {
      mounted()
    } catch (error) {
      $(window).bind('load', function() {
        mounted()
      })
    }
  }
}
</script>
