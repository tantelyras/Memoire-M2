<template>
  <SearchUpload />
</template>

<script>
import SearchUpload from '@/components/SearchUpload'
import MasterList from '@/components/MasterList'
import { mounted } from './../../global/init'
export default {
  name: 'Search',
  components: { SearchUpload, MasterList },
  mounted,
  head: {
    title: 'Recherche'
  }
}
</script>
