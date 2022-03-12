<template>
  <section class="ftco-section">
    <div class="container">
      <div class="row text-center">
        <h4 class="bold">Edition</h4>
      </div>
      <div class="row">
        <div class="col-md-12 ftco-animate" id="one">
          <div class="row it">
            <div class="col-sm-12">
              <form action class="form-sample">
                <p class="card-description" style="
                margin-left: -10px;margin-right: -10px">COORDONNEES DE LA PERSONNE</p>
                <div class="row">
                  <div class="col-md-4" style="margin-bottom: 20px;">
                    <!--Carousel Gallery-->
                    <div class="wrapper ftco-animate" style="border: 2px solid #047793">
                      <div class="carousel list-image align-self-md-center">
                        <button
                          type="button"
                          id="carousel-arrow-prev"
                          class="carousel-arrow carousel-arrow-prev"
                          arial-label="Image précédente"
                          @click="prev_carousel"
                        >
                          <i class="icon icon-chevron-left"></i>
                        </button>
                        <button
                          type="button"
                          id="carousel-arrow-next"
                          class="carousel-arrow carousel-arrow-next"
                          arial-label="Image suivante"
                          @click="next_carousel"
                        >
                          <i class="icon icon-chevron-right"></i>
                        </button>
                        <img
                          v-for="(face, index) in person.faces"
                          :id="`carousel-${index}`"
                          :key="`face-${index}`"
                          :class="`img-fluid carousel-img carousel-img-noDisplay`"
                          :src="`data:image/jpeg;base64,${face.image}`"
                          :alt="person.name"
                        />
                        <img
                          v-if="person.new_face"
                          :id="`carousel-${person.faces.length}`"
                          class="img-fluid carousel-img carousel-img-noDisplay"
                          :src="`data:image/jpeg;base64,${person.new_face}`"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-8">
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
                  <!-- <div class="col-md-6">
                    <div v-if="!cin">
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
                  </div>
                    <div v-if="cin">
                      <img :src="cin" alt="" srcset="" style="width: 60%" />
                    </div> -->
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
                  <!-- <div class="col-md-6">
                    <div class="form-group">
                      <label class="label">Nom</label>
                      <input
                        type="text"
                        v-model="person.name"
                        class="form-control form-control-sm"
                        aria-label="Name"
                        oninput="this.value = this.value.toUpperCase()"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="label">Prénom</label>
                      <input
                        v-model="person.last_name"
                        type="text"
                        class="form-control form-control-sm"
                        aria-label="Last name"
                      />
                    </div>
                  </div> -->
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

                <div class="image-action text-right">
                  <button
                    type="button"
                    class="btn btn-outline-light btn-uploading mb-3"
                    
                    @click="cancel"
                  >
                    <i class="icon icon-cancel" ></i> Annuler
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-info btn-process mr-3 mb-3"
                    @click="save"
                  >
                    <i class="icon icon-save"></i> Enregistrer
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
import { carousel } from '../global/init'
import { FILE_URL } from '../utils/config'
import { post } from '../utils/request'
import store from '../global/store'
import $ from 'jquery'
export default {
  name: 'EditPage',
  data: function () {
    return {
      state: store.state,
      FILE_URL,
    }
  },
  methods: {
    upload(e) {
      console.log('upload')
      // const file = document.getElementById('upload_cin').files[0]
      var reader = new FileReader()
      reader.onload = function (e) {
        const image = e.target.result
        // console.log(e.target.result);
        post(
          'cin',
          { image },
          ({ data }) => {
            console.log(data)
          },
          (error) => {
            console.log(error)
          }
        )
      }
      reader.onerror = function (error) {
        // alert(error);
      }
      reader.readAsDataURL(file)
    },
    next_carousel() {
      const currentImg = document
        .getElementsByClassName('carousel-img-displayed')[0]
        .id.substring(9)
      let newImg = parseInt(currentImg)
      const len = document.getElementsByClassName('carousel-img').length
      newImg++
      if (newImg >= len) {
        newImg = 0
      }
      if (len != 1) carousel(currentImg, newImg)
    },

    prev_carousel() {
      const currentImg = document
        .getElementsByClassName('carousel-img-displayed')[0]
        .id.substring(9)
      let newImg = parseInt(currentImg)

      const len = document.getElementsByClassName('carousel-img').length
      newImg--
      if (newImg < 0) {
        newImg = len - 1
      }
      if (len != 1) carousel(currentImg, newImg)
    },
    cancel() {
      this.$router.push({
        path: 'master_list',
      })
    },
    save() {
      $('#ftco-loader').addClass('show')
      post('save', this.person, (response) => {
        $('#ftco-loader').removeClass('show')
        this.$router.push({
          path: 'master_list',
        })
        store.set_default()
      })
    },
  },
  computed: {
    person: function () {
      return this.state.person
    },
  },
  mounted() {
    console.log(store.state.person)

    const REDIRECT = !(
      store.state.person &&
      store.state.person.faces &&
      store.state.person.faces.length
    )
    if (REDIRECT)
      this.$router.push({
        path: 'master_list',
      })

    const newImg = document.getElementsByClassName('carousel-img').length - 1
    const displayedCarousel = document.getElementById('carousel-' + newImg)
    if (displayedCarousel)
      displayedCarousel.className = 'carousel-img carousel-img-displayed'
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
  color: rgb(218, 196, 196);
  background-color: rgb(85, 87, 26);
  border-radius: 1px 1px 50px 50px;
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
  /* text-transform: uppercase; */
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
