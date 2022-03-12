<template>
  <div>
    <p>Editer</p>
    <br />images :
    <img
      v-for="(face, index) in person.faces"
      :src="`${FILE_URL}/faces/${face.image}.png`"
      :key="`face-${index}`"
    />
    <div v-if="person.new_face">
      <br />Nouvelle image :
      <img :src="'data:image/jpeg;base64,'+person.new_face" alt />
    </div>
    <br />Nom :
    <input type="text" v-model="person.name" />
    <br />
    <button @click="save">Enregistrer</button>
    <button @click="cancel">Annuler</button>
  </div>
</template>

<script>
import store from '../global/store'
import { FILE_URL } from '../utils/config'
import { post } from '../utils/request'
export default {
  name: 'EditDialog',
  data: function() {
    return {
      state: store.state,
      FILE_URL
    }
  },
  computed: {
    person: function() {
      return this.state.person
    }
  },
  methods: {
    cancel() {
      this.$router.push({
        path: 'search'
      })
    },
    save() {
      post('save', this.person, response => {
        this.$router.push({
          path: 'search'
        })
        store.set_default()
      })
    }
  },
  mounted: function() {
    console.log(store.state.person)

    const REDIRECT = !(
      store.state.person &&
      store.state.person.faces &&
      store.state.person.faces.length
    )
    if (REDIRECT)
      this.$router.push({
        path: 'search'
      })
  }
}
</script>
