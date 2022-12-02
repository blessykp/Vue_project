<template>

<div class="footer_section layout_padding">
      <div class="container">
        <div class="footer_main">
          <div class="footer_left">
            <h1 class="contact_taital"><span>Contact </span> <img src="src/assets/images/icon-2.png"> <span>Us</span></h1>
          </div>
          <div class="footer_left">
            <div class="location_text"><a href="#"><img src="src/assets/images/map-icon.png"><span class="padding_left_15">Locations</span></a></div>
          </div>
          <div class="footer_left">
            <div class="location_text"><a href="#"><img src="src/assets/images/call-icon.png"><span class="padding_left_15">+71 9876543210</span></a></div>
          </div>
          <div class="footer_left">
            <div class="location_text"><a href="#"><img src="src/assets/images/map-icon.png"><span class="padding_left_15">demo@gmail.com</span></a></div>
          </div>
        </div>
        <div class="contact_section">
          <div class="row">
            <div class="col-md-6">
              <div class="mail_section">
                <input type="" class="email_text" placeholder="Name" name="Name">
                <input type="" class="email_text" placeholder="Email" name="Email">
                <input type="" class="email_text" placeholder="Phone Number" name="Phone Number">
                <textarea class="massage_text" placeholder="Message" rows="5" id="comment" name="Message"></textarea>
                <div class="send_bt"><a href="#">send</a></div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="map_main">
                <div class="map-responsive">
                  <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width="600" height="280" frameborder="0" style="border:0; width: 100%;" allowfullscreen></iframe>
                </div>
              </div>
              <div class="social_icon">
                <ul>
                  <li><a href="#"><img src="src/assets/images/fb-icon1.png"></a></li>
                  <li><a href="#"><img src="src/assets/images/twitter-icon1.png"></a></li>
                  <li><a href="#"><img src="src/assets/images/linkden-icon1.png"></a></li>
                  <li><a href="#"><img src="src/assets/images/instagram-icon1.png"></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>

export default{
    name:"footerComponent"
}
</script>

<style>
* {
     box-sizing: border-box !important;
     transition: ease all 0.5s;
}

.footer_section{
    width: 100%;
    float: left;
    background-color: #282828;
    height: auto;
    padding: 45px 0px;
}
.footer_main{
    width: 100%;
    float: left;
}
.footer_left{
    width: 25%;
    float: left;
}
.layout_padding {
     padding-top: 90px;
     padding-bottom: 0px;
}
.contact_taital{
    width: 100%;
    float: left;
    font-size: 36px;
    color: #ffffff;
    font-weight: 600;
    border-bottom: 1px solid #ffffff;
    text-align: center;
}
.location_text {
    width: 100%;
    float: left;
    font-size: 18px;
    color: #fdfdfd;
    padding-top: 15px;
    text-align: center;
}
.location_text a{
    color: #fdfdfd;
}
.contact_section{
    width: 100%;
    float: left;
    padding-top: 40px;
}
.mail_section {
    width: 80%;
    float: left;
}
.email_text {
    width: 100%;
    float: left;
    font-size: 18px;
    color: #717471;
    background-color: transparent !important;
    border-bottom: 2px solid #6f6f6f !important;
    border: 0px;
    padding: 20px 15px 10px 15px;
    text-transform: uppercase;
    height: auto;
}
input.email_text::placeholder {
    color: #717471;
}
.massage_text {
    width: 100%;
    float: left;
    font-size: 18px;
    color: #717471;
    background-color: transparent !important;
    border-bottom: 2px solid #6f6f6f !important;
    border: 0px;
    height: 90px;
    text-transform: uppercase;
    padding: 40px 15px 0px 15px;  
}
textarea#comment::placeholder {
    color: #717471;
}
.send_bt {
    width: 150px;
    float: left;
    margin-top: 40px;
}
.send_bt a {
    width: 100%;
    float: left;
    font-size: 20px;
    color: #393a40;
    text-align: center;
    background-color: #89cbeb;
    padding: 10px 0px;
    text-transform: uppercase;
    border-radius: 40px;
}
.map_main {
    width: 100%;
    float: left;
    padding-top: 20px;
}
</style>