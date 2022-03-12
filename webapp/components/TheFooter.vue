<template>
  <footer class="ftco-footer ftco-bg-dark ftco-section">
    <div class="container">
      <div class="row mb-5 justify-content-center">
        <div class="col-md-5 text-center">
          <div class="ftco-footer-widget mb-5">
            <ul class="ftco-footer-social list-unstyled">
            
              <li class="ftco-animate">
                <a href="https://www.linkedin.com/in/tantelinirina-rasoloniaina-711a7720a/">
                  <span class="icon-linkedin"></span>
                </a>
              </li>
              <li class="ftco-animate">
                <a href="https://www.facebook.com/profile.php?id=100006639226760/">
                  <span class="icon-facebook"></span>
                </a>
              </li>
              <li class="ftco-animate">
                <a href="https://www.instagram.com/tantelyrasoloniaina/">
                  <span class="icon-instagram"></span>
                </a>
              </li>
              <li class="ftco-animate">
                <a href="https://www.skypeusernames.com/profile/116103/tantelinirina-rasoloniaina">
                  <span class="icon-skype"></span>
                </a>
              </li>
            </ul>
          </div> 
          <!-- <div class="ftco-footer-widget">
            <h2 class="mb-3">Contactez-moi</h2>
            <p class="h3 email">
              <a href="#">ttlrasoloniaina@gmail.com</a>
            </p> -->
            <!--<p class="h3 website">
              <a href="#">http://tantelyrasoloniaina.cf</a>
            </p>
          </div>-->
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 text-center">
          <p>
            Copyright &copy; 2021
            <!-- {{ year }} -->
            <script></script>
            All rights reserved || Mémoire M2
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
}
</script>
