<template>
  <div class="col-sm-12">
    <div
      class="uploaded_file_view show"
      id="uploaded_view"
      v-for="(face, index) in faces"
      :key="index"
    >
      <span class="file_remove" @click="remove(index)">X</span>
      <div class="image-action select-btn text-center">
        <button
          type="button"
          class="btn btn-info btn-process"
          @click="search(face)"
        >
          <i class="icon icon-check button"></i> Sélectionner
        </button>
      </div>
      <img :src="'data:image/jpeg;base64,' + face" alt class="face" style="margin-bottom:14px;border-top-width: 3px;
border-top-style: solid;
border-right-width: 3px;
border-right-style: solid;
border-left-width: 3px;
border-left-style: solid;
border-bottom-width: 3px;
border-bottom-style: solid;"/>
    </div>
  </div>
</template>

<script>
import store from '../global/store'
import { post } from '../utils/request'
import { person } from '../global/default'
export default {
  data: function () {
    return {
      state: store.state,
    }
  },
  computed: {
    faces: function () {
      return this.state.faces
    },
    person: function () {
      return this.state.person
    },
  },
  watch: {
    faces(value) {
      if (value.length) {
        $('#uploaded_view').addClass('show')
      }
    },
  },
  methods: {
    remove(i) {
      store.state.faces = store.state.faces.filter((face, index) => {
        return index != i
      })
    },
    search(face) {
      $('#ftco-loader').addClass('show')
      post('search', { face }, (response) => {
        $('#ftco-loader').removeClass('show')
        store.state.person.new_face = face
        // store.state.faces = store.state.faces.filter(f => f != face)
        const self = this
        if (response.data.id) {
          // Known person
          store.state.person = Object.assign(store.state.person, response.data)
          console.log(store.state.person)

          $.confirm({
            title: 'Identité trouvée',
            content: `
              Nom : <strong>
              ${store.state.person.name} 
              ${store.state.person.last_name}
              </strong>
            `,
            theme: 'supervan',
            typeAnimated: true,
            buttons: {
              tryAgain: {
                text: 'Oui',
                btnClass: 'btn-green',
                action() {
                  // Unknown person
                  self.$router.push({
                    path: 'edit',
                  })
                },
              },
              close: {
                text: 'Non',
                btnClass: 'btn-red',
                action() {
                  $.confirm({
                    title: 'Nouvel ajout',
                    content: 'Enregistrer une Personne ou sélectionnez-en une déjà existante',
                    theme: 'supervan',
                    typeAnimated: true,
                    buttons: {
                      select_person: {
                        text: 'Sélectionner',
                        btnClass: 'btn-green',
                        action() {
                          self.$router.push({
                            path: 'select',
                          })
                        },
                      },
                      new_person: {
                        text: 'Nouvelle Personne',
                        btnClass: 'btn-green',
                        action() {
                          // Unknown person
                          self.$router.push({
                            path: 'add',
                          })
                        },
                      },
                    },
                  })
                },
              },
            },
          })
        } else {
          store.state.person = person
          store.state.person.sex = response.data.sex
          $.confirm({
            title: 'Identité non trouvée',
            content: `
              Enregistrer une nouvelle Personne ou sélectionnez-en une déjà existante

            `,
            theme: 'supervan',
            typeAnimated: true,
            buttons: {
              select_person: {
                text: 'Sélectionner',
                btnClass: 'btn-green',
                action() {
                  self.$router.push({
                    path: 'select',
                  })
                },
              },
              new_person: {
                text: 'Nouvelle Personne',
                btnClass: 'btn-green',
                action() {
                  // Unknown person
                  self.$router.push({
                    path: 'add',
                  })
                },
              },
            },
          })
        }
      })
    },
  },
}
</script>


<style>
.file_uploaded .success_box {
  display: inline-block;
}

.file_uploaded {
  margin-top: 0;
  width: 50px;
  background: #dbce0f;
  height: 40px;
  border-radius: 50px;
}

.uploaded_file_view {
  max-width: 300px;
  margin: 40px auto;
  text-align: center;
  position: relative;
  transition: 0.2s;
  opacity: 0;
  border: 2px solid #047793;
  padding: 15px;
}

.file_remove {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: block;
  position: absolute;
  background: #047793;
  line-height: 30px;
  color: #fff;
  font-size: 12px;
  cursor: pointer;
  right: -15px;
  top: -15px;
}

.file_remove:hover {
  background: #024052;
  transition: 0.2s;
}

.uploaded_file_view img {
  max-width: 100%;
}

.uploaded_file_view.show {
  opacity: 1;
}

.error_msg {
  text-align: center;
  color: #f00;
}
.select-btn button {
  border-radius: 30px;
  width: 200px;
  height: 50px;
  display: block;
  position: absolute;
  line-height: 30px;
  cursor: pointer;
  left: -20px;
  right: -20px;
  margin-left: 70px;
  bottom: -26px;
}
.face {
  width: 100%;
  height: 100%;
  border-color:#a7b903;
  
}
</style>