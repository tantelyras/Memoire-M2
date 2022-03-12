<template>
  <section class="ftco-section">
    <div class="container">
      <div class="row text-center">
        <h4 class="bold">Sélectionner</h4>
      </div>
      <div class="card one ftco-animate">
        <div class="card-body" style="overflow-x:auto;">
          <div class="row">
            <div class="col-md-12">
              <table class="table table-hover" id="editableTable">
                <thead>
                  <tr>
                    <th></th>
                    <th>Nom de la personne</th>
                  </tr>
                </thead>
                <tbody>
                  <tr :data-id="index" v-for="(person, index) in persons" :key="`${person.id}`" @click=edit(person)>
                    <td align="center" style="border-bottom-width: 1px;
border-bottom-style: solid;">
                      <div class="list-image master-list align-self-md-center">
                        <img
                          :src="`data:image/jpeg;base64,${person.face}`"
                          alt="Image placeholder"
                          class="img-fluid"
                          style="border-radius: 50%;
                          "
                        />
                      </div>
                    </td>
                    <td style="border-bottom-width: 1px;
border-bottom-style: solid;"> 
                      <div class="desc align-self-md-center">
              
                        <h5 data-field="name" style="color: #242526">{{ person.name }}</h5>
                        <span data-field="lastName" style="color: #242526">{{ person.last_name }}</span>
                      </div>
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
import { mounted } from '../global/init'
import { get } from '../utils/request'
import { FILE_URL, API_URL } from '../utils/config'
import store from '../global/store'
export default {
  data() {
    return {
      persons: [],
      FILE_URL,
      API_URL
    }
  },
  name: 'SelectPage',
  mounted(){
    get('master_list', response => {
      this.persons = response.data
        console.log(response.data)
    })
  },
  methods : {
      edit(person){
        console.log(store.state.person)

        get(`person/${person.id}`, response =>{
            store.state.person = Object.assign(store.state.person, response.data)
            this.$router.push({
                path: 'edit'
            })
            console.log(response.data)
        })

      }
  }
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

.table th .table td{
 padding: 0.75rem;
vertical-align: top;
border-top: 1px solid #242526;
  
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
