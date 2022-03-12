<template>
  <div>
    <section class="home-slider owl-carousel js-fullheight">
      <div class="slider-item js-fullheight">
        <div class="overlay"></div>
        <div class="container">
          <div
            class="row slider-text align-items-center text-center justify-content-center"
            data-scrollax-parent="true"
          >
            <div
              class="col-md-12 ftco-animate"
              data-scrollax=" properties: { translateY: '70%' }"
            >
              <p>
                <a href="#" class="scroll">Plateforme de gestion d'identité</a>
              </p>
              <h1
                class="mb-3"
                data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
              >
                MEMOIRE M2-TCO
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div class="slider-item js-fullheight">
        <div class="overlay"></div>
        <div class="container">
          <div
            class="row slider-text align-items-center text-center justify-content-center"
            data-scrollax-parent="true"
          >
            <div
              class="col-md-12 ftco-animate"
              data-scrollax=" properties: { translateY: '70%' }"
            >
              <p>
                <a href="#" class="scroll">TITRE DE PROJET:</a>
              </p>
              <h1
                class="mb-3"
                data-scrollax="properties: {translateY: '30%', opacity: 1.6}"
              >
                RECHERCHE D'IDENTITÉ PAR RECONNAISSANCE FACIALE
              </h1>
              <p>
                <nuxt-link to="/master_list" class="btn-view">
                  Consulter la liste
                  <i class="ion ion-ios-arrow-round-forward"></i>
                </nuxt-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- END slider -->

    <section class="ftco-section about-section">
      <div class="container">
        <div class="row d-flex" data-scrollax-parent="true">
          
          <div class="col-md-6 wrap ftco-animate">
            <div class="about-desc">
              <h5 class="bold-text">Mémoire M2</h5>
              <div class="p-5">
                <h2 class="mb-5" style="text-align:right; color:rgb(0,0,0)">Déscription du projet :</h2>
                <p style="text-align:right">
                  <!-- The ability to map facial features mathematically and store
                  data as face prints to uniquely identify and verify a face
                  based on 128 values is Facial Recognition. It’s a biometric
                  based software application technology that functions based on
                  nodal points of a human face. The values associated with these
                  nodal points help to identify or verify each unique face. -->
                  La capacité de cartographier les fonctionnalités du visage mathématiquement et stocker des données comme des impressions pour s'adapter et vérifier un accès basé sur 128 valeurs est la reconnaissance faciale. C'est une technologie d'application logicielle basée en biométrie qui fonde en fonction des points nodaux d'un visage humain. Les valeurs associées à ces points nodaux aident à identifier ou vérifier chaque visage unique.
                </p>
                <!-- <p>
                  <a href="#">Checkout my work</a> 
                </p>
                <ul class="ftco-footer-social list-unstyled mt-4">
                  <li>
                    <a href="https://gitlab.com/mig.razafimanjato">
                      <span class="icon-gitlab"></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/maevairina">
                      <span class="icon-github"></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/maevairina/">
                      <span class="icon-linkedin"></span>
                    </a>
                  </li>
                </ul>  -->
                <h2 class="mb-5" style="text-align:right;color:rgb(0,0,0)">Contact :</h2>
                <p style="text-align:right">Email : 
                  <a href="#" style="color:rgb(105, 108, 1)">ttlrasoloniaina@gmail.com</a> 
                </p>
                <p style="text-align:right"> Tél : 
                  <a href="#" style="color:rgb(105, 108, 1)">(+261) 34 43 897 49</a></p>
                <p style="text-align:right"> Site web : 
                  <a href="https://tantelyrasoloniaina.ml" style="color:rgb(105, 108, 1)">https://tantelyrasoloniaina.ml</a> 
                </p>
              </div>
            </div>
          </div>
          <div
            class="col-md-6 author-img"
            style="background-image: url(images/face1.png)"
            data-scrollax=" properties: { translateY: '-40%'}"
          ></div>
        </div>
      </div>
    </section>
    <!--END Section-->
  </div>
</template>

<script>
import SearchUpload from '@/components/SearchUpload'
import FacesSuggs from '@/components/FacesSuggs'
import AddDialog from '@/components/AddDialog'
import EditDialog from '@/components/EditDialog'
import { mounted } from '../global/init'

export default {
  components: {
    'search-upload': SearchUpload,
    'faces-suggs': FacesSuggs,
    'add-dialog': AddDialog,
    'edit-dialog': EditDialog,
  },
  mounted,
  head: {
    title: 'Accueil',
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

/* slide button */
.btn-view {
  letter-spacing: 1px;
  font-size: 13px;
  color: rgb(123, 110, 1);
  text-transform: uppercase;
  border: 2px solid rgb(123, 110, 1);
  border-radius: 50px;
  padding: 15px;
  text-decoration: none;
  width:100%;
  font-weight: 600;
}

.btn-view:hover {
  letter-spacing: 1px;
  font-size: 14px;
  color: rgba(252, 252, 252, 0.993);
  background: rgb(123, 110, 1);
  text-transform: uppercase;
  border: 2px solid rgb(123, 110, 1);
  border-radius: 50px;
  padding: 15px;
  text-decoration: none;
  font-weight: 600;
}
</style>