<template>
  <div>
    <p>Ajouter</p>image :
    <img :src="'data:image/jpeg;base64,'+person.new_face" />
    <br />Nom :
    <input type="text" v-model="person.name" />
    <br />
    <button @click="add">Enregistrer</button>
    <button @click="cancel">Annuler</button>
  </div>
</template>

<script>
import store from '../global/store'
import { post } from '../utils/request'
import { carousel } from '../global/init'
export default {
  data: function() {
    return {
      state: store.state
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
      store.set_default()
    },
    add() {
      post('add', this.person, response => {
        this.$router.push({
          path: 'search'
        })
        store.set_default()
      })
    }
  },
  mounted() {
    const REDIRECT = !this.person.new_face
    if (REDIRECT)
      this.$router.push({
        path: 'search'
      })
    $(window).bind('load', function() {
      carousel()
    })
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
  border-radius: 100px;
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