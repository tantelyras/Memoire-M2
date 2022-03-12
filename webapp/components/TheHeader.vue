<template>
  <header>

    <div class="container fixed-top">
      <div class="row">
        <div class="col-lg-7">
          <div class="colorlib-navbar-brand " style="margin-left: 20px;">
            <nuxt-link class="colorlib-logo" to="/" style="font-weight:600;letter-spacing:1px;">
              <span
                class="logo-img"
                style="background-image: url(images/get2.jpg)"
              ></span 
              >Tantelinirina RASOLONIAINA
            </nuxt-link>
          
          <!-- <a href="#" class="js-colorlib-nav-toggle  colorlib-nav-toggle">
            <i></i>
          </a> -->
          </div>
        </div>
        <div class="col-lg-5" style="font-weight:500;letter-spacing:0px; line-height: 52px;padding-left: 60px;">
          <div class="colorlib-navbar-brand" style="text-align:right; ">
            <div id="act1">
            <nuxt-link to="/" >
              <span class="nov active" @click="action1">ACCUEIL</span>
            </nuxt-link>
            <nuxt-link to="/master_list" >
                  <span class="nov" @click="action2">LISTE</span>
                </nuxt-link>
            <nuxt-link to="/search" >
                  <span class="nov" @click="action3">RECHERCHE</span>
                </nuxt-link>
            <nuxt-link to="/about" >
                  <span class="nov" @click="action4">A-PROPOS</span>
                </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  head:{
    link:[
      {
      rel:"icon",
      href:require("/home/tantely/Desktop/Mémoire M2/webapp/static/images/apple-touch-icon.png")
      },
    ]
  },
  methods:{
      action1:function (){
            var x = document.getElementsByClassName("nov");

            x[x.length - 4].style.color = "rgb(132, 97, 0)";
            x[x.length - 4].style.paddingBottom = "1px";
            x[x.length - 4].style.paddingBottom = "1px";
            x[x.length - 4].style.borderBottomStyle = "solid";
            x[x.length - 4].style.borderBottomWidth = "2px";
            x[x.length - 4].style.paddingBottom = "5px";
            x[x.length - 4].style.paddingBottom = "5px";
            x[x.length - 3].style.fontSize = "14px";
            

            x[x.length - 3].style.color = "#393535";
            x[x.length - 3].style.paddingBottom = "0px";
            x[x.length - 3].style.paddingBottom = "0px";
            x[x.length - 3].style.borderBottomStyle = "none";
            x[x.length - 3].style.borderBottomWidth = "0px";
            x[x.length - 3].style.paddingBottom = "0px";

            x[x.length - 2].style.color = "#393535";
            x[x.length - 2].style.paddingBottom = "0px";
            x[x.length - 2].style.paddingBottom = "0px";
            x[x.length - 2].style.borderBottomStyle = "none";
            x[x.length - 2].style.borderBottomWidth = "0px";
            x[x.length - 2].style.paddingBottom = "0px";

            x[x.length - 1].style.color = "#393535";
            x[x.length - 1].style.paddingBottom = "0px";
            x[x.length - 1].style.paddingBottom = "0px";
            x[x.length - 1].style.borderBottomStyle = "none";
            x[x.length - 1].style.borderBottomWidth = "0px";
            x[x.length - 1].style.paddingBottom = "0px";

      },
      action2:function (){
            var x = document.getElementsByClassName("nov");
            
            x[x.length - 3].style.color = "rgb(132, 97, 0)";
            x[x.length - 3].style.paddingBottom = "1px";
            x[x.length - 3].style.paddingBottom = "1px";
            x[x.length - 3].style.borderBottomStyle = "solid";
            x[x.length - 3].style.borderBottomWidth = "2px";
            x[x.length - 3].style.paddingBottom = "5px";

            x[x.length - 4].style.color = "#393535";
            x[x.length - 4].style.paddingBottom = "0px";
            x[x.length - 4].style.paddingBottom = "0px";
            x[x.length - 4].style.borderBottomStyle = "none";
            x[x.length - 4].style.borderBottomWidth = "0px";
            x[x.length - 4].style.paddingBottom = "0px";

            x[x.length - 2].style.color = "#393535";
            x[x.length - 2].style.paddingBottom = "0px";
            x[x.length - 2].style.paddingBottom = "0px";
            x[x.length - 2].style.borderBottomStyle = "none";
            x[x.length - 2].style.borderBottomWidth = "0px";
            x[x.length - 2].style.paddingBottom = "0px";

            x[x.length - 1].style.color = "#393535";
            x[x.length - 1].style.paddingBottom = "0px";
            x[x.length - 1].style.paddingBottom = "0px";
            x[x.length - 1].style.borderBottomStyle = "none";
            x[x.length - 1].style.borderBottomWidth = "0px";
            x[x.length - 1].style.paddingBottom = "0px";
      },
      action3:function (){
            var x = document.getElementsByClassName("nov");
            
            x[x.length - 2].style.color = "rgb(132, 97, 0)";
            x[x.length - 2].style.paddingBottom = "1px";
            x[x.length - 2].style.paddingBottom = "1px";
            x[x.length - 2].style.borderBottomStyle = "solid";
            x[x.length - 2].style.borderBottomWidth = "2px";
            x[x.length - 2].style.paddingBottom = "5px";

            x[x.length - 4].style.color = "#393535";
            x[x.length - 4].style.paddingBottom = "0px";
            x[x.length - 4].style.paddingBottom = "0px";
            x[x.length - 4].style.borderBottomStyle = "none";
            x[x.length - 4].style.borderBottomWidth = "0px";
            x[x.length - 4].style.paddingBottom = "0px";

            x[x.length - 3].style.color = "#393535";
            x[x.length - 3].style.paddingBottom = "0px";
            x[x.length - 3].style.paddingBottom = "0px";
            x[x.length - 3].style.borderBottomStyle = "none";
            x[x.length - 3].style.borderBottomWidth = "0px";
            x[x.length - 3].style.paddingBottom = "0px";

            x[x.length - 1].style.color = "#393535";
            x[x.length - 1].style.paddingBottom = "0px";
            x[x.length - 1].style.paddingBottom = "0px";
            x[x.length - 1].style.borderBottomStyle = "none";
            x[x.length - 1].style.borderBottomWidth = "0px";
            x[x.length - 1].style.paddingBottom = "0px";
      },
      action4:function (){
            var x = document.getElementsByClassName("nov");
            
            x[x.length - 1].style.color = "rgb(132, 97, 0)";
            x[x.length - 1].style.paddingBottom = "1px";
            x[x.length - 1].style.paddingBottom = "1px";
            x[x.length - 1].style.borderBottomStyle = "solid";
            x[x.length - 1].style.borderBottomWidth = "2px";
            x[x.length - 1].style.paddingBottom = "5px";

            x[x.length - 4].style.color = "#393535";
            x[x.length - 4].style.paddingBottom = "0px";
            x[x.length - 4].style.paddingBottom = "0px";
            x[x.length - 4].style.borderBottomStyle = "none";
            x[x.length - 4].style.borderBottomWidth = "0px";
            x[x.length - 4].style.paddingBottom = "0px";

            x[x.length - 2].style.color = "#393535";
            x[x.length - 2].style.paddingBottom = "0px";
            x[x.length - 2].style.paddingBottom = "0px";
            x[x.length - 2].style.borderBottomStyle = "none";
            x[x.length - 2].style.borderBottomWidth = "0px";
            x[x.length - 2].style.paddingBottom = "0px";

            x[x.length - 3].style.color = "#393535";
            x[x.length - 3].style.paddingBottom = "0px";
            x[x.length - 3].style.paddingBottom = "0px";
            x[x.length - 3].style.borderBottomStyle = "none";
            x[x.length - 3].style.borderBottomWidth = "0px";
            x[x.length - 3].style.paddingBottom = "0px";
      },
  }
}


  


</script>
<style>
.act{
  display:inline-block
}
.nov{
  font-weight: 600;
margin-right: 20px;
font-size: 14px;
color:#393535;;

}
.nov:hover{
  font-weight: 600;
margin-right: 20px;
font-size: 14px;
color:rgb(132, 97, 0);
padding-bottom: 1px;
border-bottom-style: solid;
border-bottom-width: 2px;
padding-bottom: 5px;
}
.nov:focus{
  font-weight: 600;
margin-right: 20px;
font-size: 14.5px;
color:rgb(211, 155, 3);
padding-bottom: 1px;
border-bottom-style: solid;
border-bottom-width: 2px;
padding-bottom: 5px;
}
.nov:not(disabled).active{
font-weight: 600;
margin-right: 20px;
font-size: 14.5px;
color:rgb(132, 97, 0);
padding-bottom: 1px;
border-bottom-style: solid;
border-bottom-width: 2px;
padding-bottom: 5px;
}
/* .active1{
  font-weight: 600;
margin-right: 20px;
font-size: 14px;
color:lavender;
padding-bottom: 1px;
border-bottom-style: solid;
border-bottom-width: 2px;
padding-bottom: 5px;
} */
.nov1{
  font-weight: 600;
margin-right: 20px;
font-size: 16.5px;
color:lavender;
padding-bottom: 1px;
border-bottom-style: solid;
border-bottom-width: 2px;
padding-bottom: 5px;
}

/* .nov:not(disabled).active, .nov:not(disabled):active{
  font-weight: 600;
margin-right: 20px;
font-size: 14.5px;
color:lavender;
padding-bottom: 1px;
border-bottom-style: solid;
border-bottom-width: 2px;
padding-bottom: 5px;
} */
.act:checked{
  font-weight: 600;
margin-right: 20px;
font-size: 14.5px;
color:lavender;
padding-bottom: 1px;
border-bottom-style: solid;
border-bottom-width: 2px;
padding-bottom: 5px;
}

.fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  background-color: #ece8e8;
  padding-top: 15px;
  padding-bottom: 1px;
  padding-right: 15px;
  border-left-style: solid;
  border-left-width: 0px
}
header{
  background-color: #ece8e8
}
</style>



