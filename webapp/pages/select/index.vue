<template>
  <SelectPage />
</template>

<script>
import SelectPage from '@/components/SelectPage'
import { mounted } from './../../global/init'
export default {
  name: 'SelectPerson',
  components: { SelectPage },
  mounted,
  head: {
    title: 'Select Person'
  }
}
</script>
