<template>
  <section class="ftco-section">
    <div class="container">
      <div class="row text-center">
        <h4 class="bold">Recherche</h4>
      </div>
      <div class="row">
        <div class="col-md-12 ftco-animate" id="one">
          <p>S'il vous plaît insérer une image sous le format 'jpg', 'jpeg', 'png' uniquement.</p>
          <div class="row it">
            <div class="col-sm-4"></div>
            <div class="col-sm-4" style="text-align:center">
              <div class="error_msg"></div>
              <div class="button_outer btn-warning">
                <div class="btn_upload">
                  <form enctype="multipart/form-data" v-on:change="upload">
                    <input type="file" id="upload_file" name accept='image/*'/>
                  </form>
                  <i class="icon icon-photo"></i>
                  <span>Insérer l'image</span>
                </div>
                <div class="processing_bar"></div>
                <div class="success_box"></div>
              </div>
            </div>
            <div class="col-sm-4"></div>
          </div>
        </div>
        <FaceSuggs />
      </div>
    </div>
  </section>
  <!-- <div>
      <input type="file" name="file" id="file" />
    <FaceSuggs></FaceSuggs>
  </div>-->
</template>

<script>
import { post_file } from '../utils/request'
import store from '../global/store'
import FaceSuggs from './FacesSuggs'
export default {
  name: 'SearchUpload',
  components: { FaceSuggs },
  mounted() {
    // btnUpload.on('change', function(e) {})!
    // $('.file_remove').on('click', function(e) {
    //   $('#uploaded_view').removeClass('show')
    //   $('#uploaded_view')
    //     .find('img')
    //     .remove()
    //   btnOuter.removeClass('file_uploading')
    //   btnOuter.removeClass('file_uploaded')
    // })
  },
  methods: {
    upload(e) {
      const upload = document.getElementById('upload_file')
      const btnUpload = $('#upload_file'),
        btnOuter = $('.button_outer')
      const fmdt = new FormData()
      fmdt.append('file', upload.files[0])
      const ext = btnUpload
        .val()
        .split('.')
        .pop()
        .toLowerCase()
      if ($.inArray(ext, ['gif', 'png', 'jpg', 'jpeg']) == -1) {
        $('.error_msg').text('Not an Image...')
      } else {
        $('.error_msg').text('')
        $('#ftco-loader').addClass('show')
        post_file('faces', fmdt, response => {
          $('#ftco-loader').removeClass('show')
          store.state.faces = response.data
        })
        // setTimeout(function() {}, 3000)
        // var uploadedFile = URL.createObjectURL(e.target.files[0])
        // setTimeout(function() {
        //   $('#uploaded_view')
        //     .append('<img src="' + uploadedFile + '" />')
        //     .addClass('show')
        // }, 3500)
      }
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
/*slide button*/

.btn-view {
  letter-spacing: 2px;
  font-size: 13px;
  color: rgba(255, 252, 252, 0.5);
  text-transform: uppercase;
  border: 1px solid rgba(255, 252, 252, 0.5);
  border-radius: 2px;
  padding: 7px;
  text-decoration: none;
}

.btn-view:hover {
  letter-spacing: 2px;
  font-size: 14px;
  color: rgba(252, 252, 252, 0.5);
  background: rgba(255, 255, 255, 0.2);
  text-transform: uppercase;
  border: 1px solid rgba(255, 252, 252, 0.5);
  border-radius: 2px;
  padding: 7px;
  text-decoration: none;
}
/*for searching image*/

#one {
  margin-top: 70px;
  background: rgb(208, 207, 207);
  text-align: left;
  box-shadow: 0px 0px 5px 2px rgba(216, 216, 216, 0.2);
}

.it {
  display: flex;
  align-items: center;
  justify-content: center;
}

p {
  font-size: 16px;
  text-align: center;
  margin: 30px 0px;
}
/*work style*/

.bold {
  font-size: 5em;
  position: absolute;
  font-weight: 700 !important;
  color: rgba(151, 149, 149, 0.397);
  text-transform: uppercase;
  top: 59px;
  
}
/*upload image*/

.panel {
  margin: 100px auto 40px;
  max-width: 500px;
  text-align: center;
}

.button_outer {
  border-radius: 100px;
  text-align: center;
  display:inherit;
  transition: 0.2s;
  position: relative;
  overflow: hidden;
  /*rajout*/
  border:double;
  line-height: 22px;
  border-left-width: 3px;
  border-left-style: solid;
  margin-left: 20px;
  margin-right: 20px;
  border-bottom-width: 3px;
  border-bottom-style: solid;
  border-top-width: 3px;
  border-top-style: solid;
  border-right-width: 3px;
  border-right-style: solid;
  
}

.btn_upload {
  padding: 17px 30px 12px;
  color: #fff;
  text-align: center;
  position: relative;
  display: inline-block;
  overflow: hidden;
  z-index: 3;
  white-space: nowrap;
}

.btn_upload input {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  height: 100px;
  width: 200px;
  cursor: pointer;
  opacity: 0;
}

.file_uploading {
  width: 100%;
  height: 10px;
  margin-top: 20px;
  background: #ccc;
}

.file_uploading .btn_upload {
  display: none;
}

.processing_bar {
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 100%;
  border-radius: 30px;
  background: #dbce0f;
  transition: 3s;
}

.file_uploading .processing_bar {
  width: 100%;
}

.success_box {
  display: none;
  width: 50px;
  height: 50px;
  position: relative;
}

.success_box:before {
  content: '';
  display: block;
  width: 9px;
  height: 18px;
  border-bottom: 6px solid #fff;
  border-right: 6px solid #fff;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  position: absolute;
  left: 20px;
  top: 10px;
}
</style>