<template>
  <EditPage />
</template>

<script>
import EditPage from '@/components/EditPage'
import { mounted } from '../../global/init'
import $ from 'jquery'
export default {
  components: { EditPage },
  head: {
    title: 'Edit'
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
