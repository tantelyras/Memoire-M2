<template>
  <div>
    <div class="KW_progressContainer">
      <div class="KW_progressBar"></div>
    </div>
    <div class="page">
      <Navigation />
      <div id="colorlib-page">
        <TheHeader />
        <nuxt />
        <TheFooter />
        <!-- loader -->
        <Loader />
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import Navigation from '@/components/Navigation.vue'
import Loader from '@/components/Loader.vue'
import $ from 'jquery'
export default {
  name: 'default',
  components: {
    TheHeader,
    TheFooter,
    Navigation,
    Loader
  },
  mounted() {
    const burgerMenu = function() {
      $('.js-colorlib-nav-toggle').on('click', function(event) {
        event.preventDefault()
        var $this = $(this)

        if ($('body').hasClass('menu-show')) {
          $('body').removeClass('menu-show')
          $('#colorlib-main-nav > .js-colorlib-nav-toggle').removeClass('show')
        } else {
          $('body').addClass('menu-show')
          setTimeout(function() {
            $('#colorlib-main-nav > .js-colorlib-nav-toggle').addClass('show')
          }, 900)
        }
      })
    }

    $(window).bind('load', function() {
      burgerMenu()
    })
  },
  head() {
    return {
      script: [
        { src: 'js/jquery.min.js', body: true, defer: true },
        { src: 'js/jquery-migrate-3.0.1.min.js', body: true, defer: true },
        { src: 'js/bootstrap.min.js', body: true, defer: true },
        { src: 'js/jquery.easing.1.3.js', body: true, defer: true },
        { src: 'js/jquery.waypoints.min.js', body: true, defer: true },
        { src: 'js/jquery.stellar.min.js', body: true, defer: true },
        { src: 'js/jquery-confirm.min.js', body: true, defer: true },
        { src: 'js/owl.carousel.min.js', body: true, defer: true },
        { src: 'js/jquery.magnific-popup.min.js', body: true, defer: true },
        { src: 'js/aos.js', body: true, defer: true },
        { src: 'js/scrollax.min.js', body: true, defer: true },
        { src: 'js/canvas-nest.umd.js', body: true, defer: true },
        {
          src: 'js/canvas-nest.js',
          color: '0,0,0',
          pointColor: '0,0,0',
          opacity: '0.7',
          zIndex: '-2',
          count: '105',
          body: true,
          defer: true
        }
      ],
      link: [
        { rel: 'stylesheet', href: 'css/animate.css' },
        { rel: 'stylesheet', href: 'css/owl.carousel.min.css' },
        { rel: 'stylesheet', href: 'css/owl.theme.default.min.css' },
        { rel: 'stylesheet', href: 'css/magnific-popup.css' },
        { rel: 'stylesheet', href: 'css/aos.css' },
        { rel: 'stylesheet', href: 'css/ionicons.min.css' },
        { rel: 'stylesheet', href: 'css/icomoon.css' },
        { rel: 'stylesheet', href: 'css/style.css' },
        { rel: 'stylesheet', href: 'css/jquery-confirm.min.css' }
      ]
    }
  }
}
</script>
