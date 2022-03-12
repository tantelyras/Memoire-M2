<template>
  <section class="ftco-section">
    <div class="container">
      <div class="row text-center">
        <h4 class="bold">Enregistrer</h4>
      </div>
      <div class="row">
        <div class="col-md-12 ftco-animate" id="one">
          <div class="row it">
            <div class="col-sm-12">
              <form action class="form-sample">
                <p class="card-description" style="font-size: 22px;margin-left: -10px;margin-right: -10px">COORDONNEES DE LA PERSONNE</p>
                <div class="row">
                  <div class="col-md-4" style="margin-bottom: 20px;">
                    <!--Carousel Gallery-->
                    <div class="wrapper ftco-animate">
                      <div class="carousel list-image align-self-md-center">
                        <button
                          type="button"
                          id="carousel-arrow-prev"
                          class="carousel-arrow carousel-arrow-prev"
                          arial-label="Image précédente"
                        >
                          <i class="icon icon-chevron-left"></i>
                        </button>
                        <button
                          type="button"
                          id="carousel-arrow-next"
                          class="carousel-arrow carousel-arrow-next"
                          arial-label="Image suivante"
                        >
                          <i class="icon icon-chevron-right"></i>
                        </button>

                        <img
                          id="carousel-0"
                          class="img-fluid carousel-img carousel-img-displayed"
                          :src="`data:image/jpeg;base64,${new_face}`"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-8">
                    <!-- <div v-if="!cin">
                      <div class="form-group">
                        <p>
                          Please upload image of person only in 'jpg', 'jpeg',
                          'png' format.
                        </p>
                        <div class="row it">
                          <div class="col-sm-12">
                            <div class="error_msg"></div>
                            <div class="button_outer btn-danger">
                              <div
                                class="btn_upload"
                                style="padding-bottom: 10px"
                              >
                                <form>
                                  <input
                                    type="file"
                                    id="upload_cin"
                                    name
                                    accept="image/*"
                                    v-on:change="upload"
                                  />
                                </form>
                                <i class="icon icon-photo"></i>
                                <span>Upload CIN</span>
                              </div>
                              <div class="processing_bar"></div>
                              <div class="success_box"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> 
                    <div v-if="cin">
                      <img :src="cin" alt="" srcset="" style="width: 60%" />
                    </div>-->
                  
                  <div class="form-group">
                      <label class="label" style="color:rgb(39, 40, 40);font-weight: 600">Nom : </label>
                      <input
                        type="text"
                        v-model="person.name"
                        class="form-control form-control-sm uppercase"
                        aria-label="Name"
                        oninput="this.value = this.value.toUpperCase()"
                      />
                    </div>
                    <div class="form-group">
                      <label class="label" style="color:rgb(39, 40, 40);font-weight: 600">Prénom : </label>
                      <input
                        v-model="person.last_name"
                        type="text"
                        class="form-control form-control-sm"
                        aria-label="Last name"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label class="label" style="color:rgb(39, 40, 40);font-weight: 600">Date de naissance : </label>
                      <input
                        v-model="person.birth_date"
                        type="date"
                        class="form-control form-control-sm"
                        aria-label="dateOfBirth"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label class="label" style="color:rgb(39, 40, 40);font-weight: 600">Lieu de naissance : </label>
                      <input
                        v-model="person.birth_place"
                        type="text"
                        class="form-control form-control-sm"
                        aria-label="placeOfBirth"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label class="label" style="color:rgb(39, 40, 40);font-weight: 600">Sexe : </label>
                      <select
                        class="form-control form-control-sm"
                        v-model="person.sex"
                        id="sex"
                      >
                        <option>Homme</option>
                        <option>Femme</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row">
                  
                  <div class="col-md-12">
                    <div class="form-group">
                      <label class="label" style="color:rgb(39, 40, 40);font-weight: 600">Adresse : </label>
                      <input
                        v-model="person.address"
                        type="text"
                        class="form-control form-control-sm"
                        aria-label="address"
                      />
                    </div>
                  </div>
                </div>
                
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label class="label" style="color:rgb(39, 40, 40);font-weight: 600">N°CIN : </label>
                      <input
                        v-model="person.cin_no"
                        type="text"
                        class="form-control form-control-sm"
                        aria-label="cin"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label class="label" style="color:rgb(39, 40, 40);font-weight: 600">Délivré le : </label>
                      <input
                        v-model="person.cin_date"
                        type="date"
                        class="form-control form-control-sm"
                        aria-label="issue"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label class="label" style="color:rgb(39, 40, 40);font-weight: 600">A : </label>
                      <input
                        type="text"
                        v-model="person.cin_place"
                        class="form-control form-control-sm"
                        aria-label="deliveryPlace"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="label" style="color:rgb(39, 40, 40);font-weight: 600">Fonction : </label>
                      <input
                        v-model="person.career_name"
                        type="text"
                        class="form-control form-control-sm"
                        aria-label="career"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="label" style="color:rgb(39, 40, 40);font-weight: 600">A : </label>
                      <input
                        v-model="person.career_place"
                        type="text"
                        class="form-control form-control-sm"
                        aria-label="careerPlace"
                      />
                    </div>
                  </div>
                </div>

                  <!-- </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="label">First Name</label>
                      <input
                        v-model="person.name"
                        type="text"
                        class="form-control form-control-sm uppercase"
                        aria-label="Name"
                        oninput="this.value = this.value.toUpperCase()"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="label">Last Name</label>
                      <input
                        type="text"
                        v-model="person.last_name"
                        class="form-control form-control-sm"
                        aria-label="Last name"
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <label class="label">Address</label>
                      <input
                        type="text"
                        v-model="person.address"
                        class="form-control form-control-sm"
                        aria-label="address"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label class="label">Date of birth</label>
                      <input
                        v-model="person.birth_date"
                        type="date"
                        class="form-control form-control-sm"
                        aria-label="dateOfBirth"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label class="label">At</label>
                      <input
                        v-model="person.birth_place"
                        type="text"
                        class="form-control form-control-sm"
                        aria-label="placeOfBirth"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label class="label">Sex</label>
                      <select
                        v-model="person.sex"
                        class="form-control form-control-sm"
                        id="sex"
                      >
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label class="label">CIN No</label>
                      <input
                        v-model="person.cin_no"
                        type="text"
                        class="form-control form-control-sm"
                        aria-label="cin"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label class="label">Issued to</label>
                      <input
                        v-model="person.cin_date"
                        type="date"
                        class="form-control form-control-sm"
                        aria-label="issue"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label class="label">At</label>
                      <input
                        type="text"
                        v-model="person.cin_place"
                        class="form-control form-control-sm"
                        aria-label="deliveryPlace"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="label">Career</label>
                      <input
                        v-model="person.career_name"
                        type="text"
                        class="form-control form-control-sm"
                        aria-label="career"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="label">At</label>
                      <input
                        v-model="person.career_place"
                        type="text"
                        class="form-control form-control-sm"
                        aria-label="careerPlace"
                      />
                    </div>
                  </div>
                </div> -->
                <div class="image-action text-right">
                  <button
                    @click="cancel"
                    type="button"
                    class="btn btn-outline-danger btn-uploading mb-3"
                  >
                    <i class="icon icon-cancel"></i> Annuler
                  </button>
                  <button
                    @click="add"
                    type="button"
                    class="btn btn-outline-warning btn-process mr-3 mb-3"
                  >
                    <i class="icon-save"></i> Enregistrer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { person } from '../global/default'
import { post } from '../utils/request'
import { carousel, clone } from '../global/init'
import store from '../global/store'
import $ from 'jquery'
export default {
  data() {
    return {
      person: clone(person),
      state: store.state,
      cin: '',
    }
  },
  computed: {
    new_face() {
      return this.state.person.new_face
    },
  },

  methods: {
    upload(e) {
      //const upload_cin = document.getElementById('upload_cin')
      var file = e.target.files[0]
      let reader = new FileReader()
      reader.onload = (e) => {
        let image = e.target.result
        //console.log(image)
        this.cin = image
        post('cin', { image: image.split('base64,')[1] }, (response) => {
          console.log(response.data)
          this.person = {
            name: response.data.nom,
            last_name: response.data.prenom,
            cin_no: response.data.cin_no,
          }
          this.$forceUpdate()
        })
      }
      reader.readAsDataURL(file)
    },
    cancel() {
      this.$router.push({
        path: 'master_list',
      })
    },
    add() {
      $('#ftco-loader').addClass('show')
      post('add', this.person, (response) => {
        $('#ftco-loader').removeClass('show')
        this.$router.push({
          path: 'master_list',
        })
        this.person = clone(person)
        console.log(this.person)
      })
    },
  },
  mounted() {
    const REDIRECT = !store.state.person.new_face
    if (REDIRECT)
      this.$router.push({
        path: 'master_list',
      })
    this.person = clone(person)
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
/*for searching image*/

#one {
  margin-top: 70px;
  background: rgba(107, 107, 107, 0.2);
  box-shadow: 0px 0px 5px 2px rgba(216, 216, 216, 0.2);
}

.it {
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-description {
  text-align: center;
  margin: 30px 0px;
  color: rgb(219, 216, 216);
  background-color:rgb(85, 87, 26);
  border-radius: 1px 1px 45px 45px;
  font-size: 21px;/*rajout*/
  font-weight: 600;
  line-height: 49px
}
/*table*/

.list-image {
  width: 100px;
}

.list-image img {
  vertical-align: middle;
  border-style: none;
}
/*title*/

.bold {
  font-size: 5em;
  position: absolute;
  font-weight: 700 !important;
  color: rgba(151, 149, 149, 0.397);
  text-transform: uppercase;
}

.form-group .label {
  color: #808080;
}

.label {
  text-align: left;
  margin-bottom: 0px;
}

.image-action button {
  border-radius: 30px;
  width: 200px;
  height: 50px;
}
/* Container */

.wrapper {
  width: 250px;
  border-radius: 1px;
  max-width: 100%;
  margin: auto;
  overflow: hidden;
  /* box-shadow: 0px 0px 5px 2px rgba(255, 255, 255, 0.2); */
  padding-left: 15px;
 padding-bottom: 15px;
 padding-right: 15px;
 padding-top: 15px;
 border: 2px solid #17a2b8;
}

.carousel {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 100%;
}
/* Images */

.carousel-img {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  max-width: 100%;
  -webkit-transition: opacity ease-out 0.5s;
  transition: opacity ease-out 0.5s;
}

.carousel-img-displayed {
  display: block;
  opacity: 1;
  z-index: 2;
}

.carousel-img-hidden {
  display: block;
  opacity: 0;
  z-index: 1;
}

.carousel-img-noDisplay {
  display: none;
}
/* Flèches de défilement */

.carousel-arrow {
  z-index: 3;
  display: block;
  position: absolute;
  width: 36px;
  height: 36px;
  top: 50%;
  margin-top: -18px;
  border-radius: 40%;
  border: 0;
  color: rgb(255, 255, 255);
  background-color: rgba(255, 255, 255, 0);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 16px 16px;
  cursor: pointer;
  -webkit-transition: background-size 0.15s ease-out;
  transition: background-size 0.15s ease-out;
}

.carousel-arrow-next {
  right: 0px;
}

.carousel-arrow-prev {
  left: 0px;
}
</style>
