<template>
  <MasterList></MasterList>
</template>

<script>
import MasterList from '@/components/MasterList'
import { mounted } from '../../global/init'
export default {
  components: { MasterList },
  head: {
    title: 'Liste'
  }
}
</script>

<style>
</style>