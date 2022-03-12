<template>
  <nav id="colorlib-main-nav" role="navigation">
    <a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle active">
      <i></i>
    </a>
    <div class="js-fullheight colorlib-table">
      <div class="colorlib-table-cell js-fullheight">
        <div class="row no-gutters">
          <div class="col-md-12 text-center">
            <ul>
              <li @click="close">
                <nuxt-link to="/">
                  <span>Accueil</span>
                </nuxt-link>
              </li>
              <li @click="close">
                <nuxt-link to="/master_list" @click="close">
                  <span>Liste</span>
                </nuxt-link>
              </li>
              <li @click="close">
                <nuxt-link to="/search" @click="close">
                  <span>Recherche</span>
                </nuxt-link>
              </li>
              <li @click="close">
                <nuxt-link to="/about" @click="close">
                  <span>A-propos</span>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="js-fullheight colorlib-table">
      <div class="colorlib-table-cell js-fullheight">
        <div class="row no-gutters">
          <div class="col-md-12 text-center">
            <ul>
              <li @click="close">
                <nuxt-link to="/">
                  <span>Accueil</span>
                </nuxt-link>
              </li>
              <li @click="close">
                <nuxt-link to="/master_list" @click="close">
                  <span>Liste</span>
                </nuxt-link>
              </li>
              <li @click="close">
                <nuxt-link to="/search" @click="close">
                  <span>Recherche</span>
                </nuxt-link>
              </li>
              <li @click="close">
                <nuxt-link to="/about" @click="close">
                  <span>A-propos</span>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div> -->
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  methods: {
    close() {
      $('body').removeClass('menu-show')
      $('#colorlib-main-nav > .js-colorlib-nav-toggle').removeClass('show')
    },
  },
}
</script>
