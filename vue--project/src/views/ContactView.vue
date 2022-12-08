<template>

  <div class="footer_section layout_padding">
    <div class="container">
      <div class="footer_main">
        <div class="footer_left">
          <h1 class="contact_taital"><span>Contact </span> <img src="../assets/images/icon-2.png"> <span>Us</span></h1>
        </div>
        <div class="footer_left">
          <div class="location_text"><a href="#"><img src="../assets/images/map-icon.png"><span
                class="padding_left_15">Locations</span></a></div>
        </div>
        <div class="footer_left">
          <div class="location_text"><a href="#"><img src="../assets/images/call-icon.png"><span
                class="padding_left_15">+71 9876543210</span></a></div>
        </div>
        <div class="footer_left">
          <div class="location_text"><a href="#"><img src="../assets/images/map-icon.png"><span
                class="padding_left_15">demo@gmail.com</span></a></div>
        </div>
      </div>
      <div class="contact_section">
        <div class="row">
          <div class="col-md-6">
            <div class="mail_section">
              <input type="text" class="email_text" placeholder="Name" name="Name" v-model="name" />
              <input type="email" class="email_text" placeholder="Email" name="Email" id="email" v-model="email" />
              <input type="number" class="email_text" placeholder="Phone Number" name="Phone Number"
                v-model="phone_number" />
              <textarea class="massage_text" placeholder="Message" rows="5" v-model="message" name="Message"></textarea>
              <div class="send_bt"><a href="#" @click="getFormValues">send</a></div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="map_main">
              <div class="map-responsive">
                <iframe
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                  width="600" height="280" frameborder="0" style="border:0; width: 100%;" allowfullscreen></iframe>
              </div>
            </div>
            <div class="social_icon">
              <ul>
                <li><a href="#"><img src="../assets/images/fb-icon1.png"></a></li>
                <li><a href="#"><img src="../assets/images/twitter-icon1.png"></a></li>
                <li><a href="#"><img src="../assets/images/linkden-icon1.png"></a></li>
                <li><a href="#"><img src="../assets/images/instagram-icon1.png"></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: "ContactView",
  data() {
    return {
      name: "",
      email: "",
      phone_number: "",
      message: "",
      errors: []
    };
  },


  methods: {

    getFormValues(e) {
      this.errors = []

      if (this.name && this.email && this.phone_number && this.message) {

        let new_email = this.email.toLowerCase()

        // eslint-disable-next-line
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(new_email)) {
          console.log("\nName:" + this.name);
          console.log("\nEmail:" + this.email);
          console.log("\nPhone Number:" + this.phone_number);

          console.log("\nMessage:" + this.message);
        } else {
          alert("Email invalid!")
          this.errors.push("Invalid Email")
        }






      }
      if (!this.name) {

        this.errors.push("Please fill your name")
      }
      if (!this.email) {
        this.errors.push("Please fill your email")

      }
      if (!this.phone_number) {
        this.errors.push("Please fill your phone number")
      }
      if (!this.message) {
        this.errors.push("Please fill your message")
      }
      console.warn("errors", this.errors)
      e.preventDefault();

    },
  }



};

</script>

<style>

</style>