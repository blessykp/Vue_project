<template>
<div class="header_section background_bg">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3">
          <div class="logo"><a href="index.html"><img src="src/assets/images/logo.png"></a></div>
        </div>
        <div class="col-md-9">
          <div class="menu_text">
            <ul>
              <div class="togle_3">
                <div class="menu_main">
                  <div class="padding_left0"><a href="#">Register</a>
                  <span class="padding_left0"><a href="#">Login</a></span></div>
                </div>
                <div class="shoping_bag"><img src="src/assets/images/search-icon.png"></div>
              </div> 
              <div id="myNav" class="overlay">
              <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
              <div class="overlay-content">
                <a href="index.html">Home</a>
                <a href="services.html">Services</a>
                <a href="about.html">About</a>
                <a href="choose.html">Choose</a>
                <a href="team.html">Team</a>
                <a href="contact.html">Contact Us</a>
              </div>
              </div>
              <span class="navbar-toggler-icon"></span>
              <span onclick="openNav()"><img src="src/assets/images/toggle-icon.png" class="toggle_menu"></span>
            </ul>
          </div>      
        </div>
      </div>
    </div>
  </div>

</template>
<script>
export default{
    name:"headerComponent"
}
</script>
<style>
* {
     box-sizing: border-box !important;
     transition: ease all 0.5s;
}
.logo {
    width: 100%;
    float: left;
    padding-left: 30px;
}
.menu_text {
    float: right;
    width: 30%;
    padding-top: 15px;
}
.padding_left0{
    padding-left: 20px;
}
.shoping_bag {
    float: right;
    text-align: right;
    padding-left: 30px;
    padding-top: 8px;
}
.header_section {
    width: 100%;
    float: left;
    background-image: url(src/assets/images/banner-bg.png);
    height: auto;
    padding-top: 27px;
    padding-bottom: 25px;
    background-size: 100%;
    padding-bottom: 201px;
}
.overlay {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 4;
    top: 0;
    left: 0;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0, 0.9);
    overflow-x: hidden;
    transition: 0.5s;
}
.overlay .closebtn {
    position: absolute;
    top: 20px;
    right: 45px;
    font-size: 60px;
}
.overlay a {
    padding: 0px;
    text-decoration: none;
    font-size: 22px;
    color: #f1f1f1;
    display: block;
    transition: 0.3s;
}
.toggle_menu {
    top: 8px;
    position: relative;
    left: 0px;
}
</style>