<template>
  <section class="ftco-section">
    <div class="container">
      <div class="row text-center">
        <h4 class="bold">Liste ajoutée</h4>
      </div>
      <div class="card one ftco-animate">
        <div class="card-body" style="overflow-x: auto">
          <div class="row">
            <div class="col-md-12 text-right">
              <nuxt-link to="search">
                <button class="btn btn-outline-info add-new" style="margin-left:400px;">
                  <i class="icon icon-add"></i> Nouvelle recherche
                </button>
              </nuxt-link>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <table class="table table-hover" id="editableTable" >
                <thead >
                  <tr>
                    <th style="border-left-style: solid;border-left-width: 2px">Photo</th>
                    <th >Nom</th>
                    <th>N°CIN</th>
                    <th>Image disponible</th>
                    <th>Editer</th>
                    <th style="border-right-width: 2px;border-right-style: solid;">Supprimer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    :data-id="index"
                    v-for="(person, index) in persons"
                    :key="`${person.id}`"
                  >
                    <td align="center" style="border-bottom: 1px solid rgb(30, 31, 32);">
                      <div class="list-image master-list align-self-md-center">
                        <img
                          :src="`data:image/jpeg;base64,${person.face}`"
                          alt="Image placeholder"
                          class="img-fluid ov"
                          style="border-radius: 50%;
                                  border-color: rgb(147, 132, 11) ;
                                  border-top-style: solid;
                                  border-top-width: 2px;
                                  border-right-width: 2px;
                                  border-right-style: solid;
                                  border-bottom-width: 2px;
                                  border-bottom-style: solid;
                                  border-left-width: 2px;
                                  border-left-style: solid;
                                  padding-right: 4px;
                                  padding-bottom: 4px;
                                  padding-left: 4px;
                                  margin-top: 0px;
                                  margin-right: 0px;
                                  margin-bottom: 0px;
                                  margin-left: 0px;
                                  padding-top: 4px;
                                  "
                        />
                      </div>
                    </td>
                    <td style="border-bottom: 1px solid rgb(30, 31, 32);">
                      <div class="desc align-self-md-center">
                        <h5 data-field="name" style="color: rgba(17, 17, 17, 0.84)">
                          {{ person.name }}
                        </h5>
                        <p data-field="lastName" style="color: rgba(17, 17, 17, 0.84);text-align:left">{{ person.last_name }}</p>
                      </div>
                    </td>
                    <td style="border-bottom: 1px solid rgb(30, 31, 32);"><h5 data-field="" style="color: rgba(17, 17, 17, 0.84)">{{ person.cin_no }}</h5>
                      </td>
                    <td style="border-bottom: 1px solid rgb(30, 31, 32);"><h5 data-field="" style="color: rgba(17, 17, 17, 0.84);text-align:center">{{ person.face_length }}</h5></td>
                    <td style="border-bottom: 1px solid rgb(30, 31, 32);">
                      <a
                        class="button button-large edit"
                        title="Edit"
                        @click="open(person)"
                      >
                        <i class="icon icon-pencil" style="padding-left:20px;color:rgba(17, 17, 17, 0.84);font-size: 22px"></i>
                      </a>
                    </td>
                    <td style="border-bottom: 1px solid rgb(30, 31, 32);">
                      <a
                        class="button button-large edit"
                        title="Delete"
                        @click="del(person.id)"
                      >
                        <i class="icon icon-delete_forever" style="padding-left:30px;color:rgba(17, 17, 17, 0.84);font-size: 22px"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  </section>
</template>

<script>
import { get } from '../utils/request'
import { FILE_URL, API_URL } from '../utils/config'
import store from '../global/store'
import { mounted } from '../global/init'
export default {
  data: function () {
    return {
      persons: [],
      FILE_URL,
      API_URL,
    }
  },
  methods: {
    del(id) {
      const self = this
      $.confirm({
        title: 'Vous êtes sûr?',
        type: 'red',
        theme: 'supervan',
        typeAnimated: true,
        buttons: {
          tryAgain: {
            text: 'Oui',
            btnClass: 'btn-red',
            action() {
              console.log('delete')

              get(`delete/${id}`, (response) => {
                self.persons = self.persons.filter((person) => person.id != id)
              })
            },
          },
          close: {
            text: 'Non',
          },
        },
      })
    },
    open(person) {
      get(`person/${person.id}`, (response) => {
        store.state.person = response.data
        this.$router.push({
          path: 'edit',
        })
        // console.log(store.state.person)
      })
    },
  },
  mounted: function () {
    $('#ftco-loader').addClass('show')
    get('master_list', (response) => {
      console.log(response.data)
      $('#ftco-loader').removeClass('show')
      this.persons = response.data
    })
    mounted()
  },
}
</script>

<style>
html,
body {
  height: 100%;
  width: 100%;
}

body {
  font-family: 'Lato', sans-serif;
  -webkit-transition: background 0.5s ease;
  transition: background 0.5s ease;
}

.one {
  margin-top: 70px;
  background: rgba(209, 209, 209, 0.856);
  /*background-image:url("../static/images/face1.png"); */
  box-shadow: 0px 0px 5px 2px rgba(163, 163, 163, 0.2);
}
/*Mastble*/

.table td,
.table th {
  border-top: none;
  
}

.master-list {
  width: 100px;
}

.list-image img {
  vertical-align: middle;
  border-style: none;
  height: 100%;
  width: 100%;
}

.row {
  margin-bottom: 20px;
}

.add-new {
  height: 50px;
  width: 250px;
  border-radius: 30px;
  margin-right: 455px;
}
/*work style*/

.bold {
  font-size: 5em;
  position: absolute;
  /* top: 120px; */
  left: 50px;
  right: 50px;
  font-weight: 600 !important;
  color: rgba(151, 149, 149, 0.397);
  text-transform: uppercase;

}


</style>