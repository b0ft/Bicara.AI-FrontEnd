<template>
  <ion-page>    
    <ion-content :fullscreen="true">
      <div class="top-bar" id="top">
        <ion-img src="assets/img/bicara-color.svg" class="bicara-ai-top"></ion-img>
      </div>

      <div class="top-gradient">
        <div class="top-content">
          <ion-row>
            <ion-col size="12" size-lg="5" class="title-top1">Improve your</ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="" size-lg="6" class="title-top2" color="secondary">communication skills</ion-col></ion-row>
          <ion-row class="half">
            <ion-col size="12" class="desc-top">Bicara.ai is an education platform. Bicara.ai aim to improve indviduals comunication skills with judgement free feedback from our AI-powered speech coach.</ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="12" size-md="12" size-lg="5" class="email">
              <div class="email-regist">
                <ion-img src="assets/icon/email.svg"></ion-img>
                <ion-input class="email-input" placeholder="Your email address" v-model="email"></ion-input>
                <ion-button size="large" color="notify" class="notify" @click="emailSubmit" href="/">Notify me</ion-button>
              </div>
            </ion-col>
          </ion-row>
        </div>
        <div class="hero-img for-landscape">
          <ion-img src="assets/img/hero.svg"></ion-img>
        </div>
      </div>

      <div class="one">
        <!-- ganti icon-->
        <h1>Why you should use Bicara.ai</h1>
        <div class="num-back"><ion-img src="assets/img/1.svg"></ion-img></div>
        <ion-row class="for-landscape">
          <ion-col size="4">
            <ion-card class="card-one">
              <ion-img class="small-icon" src="assets/icon/filler.svg"></ion-img>
              <ion-card-title>Filler words detection</ion-card-title>
              <ion-card-content>
                Lorem ipsum dolor sit amet.
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col size="4">
            <ion-card class="card-one">
              <ion-img src="assets/icon/pacing.svg"></ion-img>
              <ion-card-title>Pacing</ion-card-title>
              <ion-card-content>
                Lorem ipsum dolor sit amet.
              </ion-card-content>
            </ion-card>            
          </ion-col>
          <ion-col size="4">
            <ion-card class="card-one">
              <ion-img src="assets/icon/eye.svg"></ion-img>
              <ion-card-title>Eye detection</ion-card-title>
              <ion-card-content>
                Lorem ipsum dolor sit amet.
              </ion-card-content>
            </ion-card>            
          </ion-col>
        </ion-row>

        <ion-img src="assets/icon/arrow-left.svg" class="for-portrait" style="height: 2vh; z-index: 2; position: absolute; left: 3vh; margin-top: 10vh;"></ion-img>
        
        <ion-img src="assets/icon/arrow-right.svg" class="for-portrait" style="height: 2vh; z-index: 2; position: absolute; right: 3vh; margin-top: 10vh;"></ion-img>

        <ion-slides class="for-portrait">
          <ion-slide>
            <ion-card class="card-one">
              <ion-img class="small-icon" src="assets/icon/filler.svg"></ion-img>
              <ion-card-title>Filler words detection</ion-card-title>
              <ion-card-content>
                Lorem ipsum dolor sit amet.
              </ion-card-content>
            </ion-card>
          </ion-slide>
          <ion-slide>
            <ion-card class="card-one">
              <ion-img class="big-icon" src="assets/icon/pacing.svg"></ion-img>
              <ion-card-title>Pacing</ion-card-title>
              <ion-card-content>
                Lorem ipsum dolor sit amet.
              </ion-card-content>
            </ion-card>
          </ion-slide>
          <ion-slide>
            <ion-card class="card-one">
              <ion-img class="big-icon" src="assets/icon/eye.svg"></ion-img>
              <ion-card-title>Body language</ion-card-title>
              <ion-card-content>
                Lorem ipsum dolor sit amet.
              </ion-card-content>
            </ion-card>            
          </ion-slide>
        </ion-slides>
      </div>

      <div class="two">
        <h1>See our analysis example</h1>
        <div class="num-back"><ion-img src="assets/img/2.svg"></ion-img></div>
        <div>
          <div class="video">
            <iframe src="https://www.youtube.com/embed/fpI8Jx65W18" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>

      <div class="three">
        <h1>How it works</h1>
        <div class="num-back"><ion-img src="assets/img/3.svg"></ion-img></div>
        <div class="green-bar">
          <ion-img src="assets/img/blue-union.svg" class="for-landscape"></ion-img>
        </div>
        
        <ion-img src="assets/icon/arrow-left.svg" class="for-portrait" style="height: 2vh; z-index: 2; position: absolute; left: 3vh; margin-top: 5vh;"></ion-img>
      
        <ion-img src="assets/icon/arrow-right.svg" class="for-portrait" style="height: 2vh; z-index: 2; position: absolute; right: 3vh; margin-top: 5vh;"></ion-img>

        <ion-row class="for-landscape">
          <ion-col size="12" size-lg="2"></ion-col>
          <ion-col size="6" size-lg="2">
            <ion-card class="card-three">
              <ion-card-header>
                <ion-img src="assets/icon/create-account.svg"></ion-img>
              </ion-card-header>
              <ion-card-content>Create account with your name and email adress</ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col size="6" size-lg="2">
            <ion-card class="card-three">
              <ion-card-header>
                <ion-img src="assets/icon/download.svg"></ion-img>
              </ion-card-header>
              <ion-card-content>Upload your video</ion-card-content></ion-card>
          </ion-col>
          <ion-col size="6" size-lg="2">
            <ion-card class="card-three">
              <ion-card-header>
                <ion-img src="assets/icon/analyze.svg"></ion-img>
              </ion-card-header>
              <ion-card-content>Our AI will work to analyze your video</ion-card-content></ion-card>            
          </ion-col>
          <ion-col size="6" size-lg="2">
            <ion-card class="card-three">
              <ion-card-header>
                <ion-img src="assets/icon/email-notification.svg"></ion-img>
              </ion-card-header><ion-card-content>Receive notification on your email when your video is analyzed</ion-card-content></ion-card>
          </ion-col>
          <ion-col size="12" size-lg="2"></ion-col>
        </ion-row>

        <ion-slides class="for-portrait">
          <!--step 1-->
          <ion-slide size="6" size-lg="2">
            <div class="steps">
              <ion-row>
                <ion-col size="4"></ion-col>
                <ion-col size="4" class="num-icon">
                  <ion-img src="assets/img/step1.svg"></ion-img>
                </ion-col>
                <ion-col size="4"></ion-col>
              </ion-row>
              <ion-row>
                <ion-col size="12"> <!--content-->
                  <ion-card class="card-three">
                    <ion-card-header>
                      <ion-img src="assets/icon/create-account.svg"></ion-img>
                    </ion-card-header>
                    <ion-card-content>Create account with your name and email adress</ion-card-content>
                  </ion-card>
                </ion-col>
              </ion-row>
            </div>
          </ion-slide>
          <!--step 2-->
          <ion-slide size="6" size-lg="2">
            <div>
              <ion-row>
                <ion-col size="4"></ion-col>
                <ion-col size="4" class="num-icon">
                  <ion-img src="assets/img/step2.svg"></ion-img>
                </ion-col>
                <ion-col size="4"></ion-col>
              </ion-row>
              <ion-row>
                <ion-col size="12"> <!--content-->
                  <ion-card class="card-three">
                    <ion-card-header>
                      <ion-img src="assets/icon/download.svg"></ion-img>
                    </ion-card-header>
                    <ion-card-content>Upload Your Video</ion-card-content>
                  </ion-card>
                </ion-col>
              </ion-row>
            </div>           
          </ion-slide>
          <!--step 3-->
          <ion-slide size="6" size-lg="2">
            <div class="steps">
              <ion-row>
                <ion-col size="4"></ion-col>
                <ion-col size="4" class="num-icon">
                  <ion-img src="assets/img/step3.svg"></ion-img>
                </ion-col>
                <ion-col size="4"></ion-col>
              </ion-row>
              <ion-row>
                <ion-col size="12"> <!--content-->
                  <ion-card class="card-three">
                    <ion-card-header>
                      <ion-img src="assets/icon/analyze.svg"></ion-img>
                    </ion-card-header>
                    <ion-card-content>Our AI Will Work to Analyze Your Video</ion-card-content>
                  </ion-card>
                </ion-col>
              </ion-row>
            </div>
          </ion-slide>
          <!--step 4-->
          <ion-slide size="6" size-lg="2">
            <div class="steps">
              <ion-row>
                <ion-col size="4"></ion-col>
                <ion-col size="4" class="num-icon">
                  <ion-img src="assets/img/step4.svg"></ion-img>
                </ion-col>
                <ion-col size="4"></ion-col>
              </ion-row>
              <ion-row>
                <ion-col size="12"> <!--content-->
                  <ion-card class="card-three">
                    <ion-card-header>
                      <ion-img src="assets/icon/email-notification.svg"></ion-img>
                    </ion-card-header>
                    <ion-card-content>Receive Feedback and Recommendation by Expert</ion-card-content>
                  </ion-card>
                </ion-col>
              </ion-row>
            </div>
          </ion-slide>
        </ion-slides>

        <div class="center">
          <ion-text class="kucing">
              Are you ready to be <br>
              <div class="kelinci"><ion-text class="highlight">
                a better speaker
              </ion-text><ion-text>?</ion-text>
              </div>
          </ion-text>
          <div class="kucing">
              <ion-button class="to-top" size="large" color="im-in" href="#top">
                Yes I'm in!
              </ion-button>
          </div>
        </div>
      </div>

      <ion-row class="footer">
        <ion-col size="12" size-lg="6" class="bicara-ai-bot">Bicara.ai</ion-col>
        <ion-col size="12" size-lg="6" class="copyright">
          © 2022 Bicara.ai
        </ion-col>
      </ion-row>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSlides,IonInput,IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from "axios";
import { email } from '@vee-validate/rules';

export default defineComponent({
  name: 'LandingPage',
  data() {
    return {
      email: ''
    }
  },
  components: {
    IonContent,
    IonPage,
    IonInput,
    IonButton,
  },
  methods:{
    emailSubmit(){
      axios
      .post('http://127.0.0.1:5000/', {
        email: this.email
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;700&family=Krona+One&display=swap');

@media (min-width: 992px) {
  .bicara-ai-top {
  height: 10vh;
}

.top-bar {
  line-height: 10vh;
  height: 10vh;
  text-align: center;
}

.top-gradient {
  background: linear-gradient(180deg, rgba(21,205,203,1) -43.28%, rgba(243,244,248,1) 98%);
  height: 90vh;
  font-family: 'Inter', sans-serif;
  display: flex;
}

.top-content {
  padding-left: 5vw;
  padding-right: 5vw;
  padding-top: 6vh;
  padding-bottom: 6vh;
  width: 70%;
}

.hero-img {
  width: 30%;
  margin-left: -15vw;
}

.title-top1 {
  font-style: normal;
  font-weight: 700;
  font-size: 6vh;
  color: black;
  word-wrap: normal;
}
.title-top2 {
  margin-top: -3vh;
  font-style: normal;
  font-weight: 700;
  font-size: 6vh;
  color: #3F54D1;
  word-wrap: normal;
}

.half {
  width: 40vw;
}

.desc-top {
  padding-top: 2.5vh;
  font-size: 3vh;
  font-weight: 500;
  color: #6e7071;
  width: 40vw;
}

.email {
  width: 50vw;
}
.email-regist {
  display: flex;
  width: 30vw;
  height: 7vh;
  box-shadow: none;
  background-color: white;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  border-top-right: 0px;
  border-bottom-right: 0px;
  margin-top: 2vh;
  padding-left: 2.7vh;
  margin-left: 0px;
  font-size: 1.25rem;
  position: absolute;
}

.email-regist ion-img {
  background-color: white;
  height: 2.7vh;
  margin:auto;
}

.email-input {
  margin : 0px;
  height: 7vh;
  font-size: 2.7vh;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  color: black;
  z-index: 0;
}

.notify {
  position: absolute;
  margin-top: -0.1vh;
  right:-8vw;
  height: 7vh;
  width: 10vw;
  font-size: 2.5vh;
  font-family: 'Inter';
  text-transform: none;
  --border-radius: 30px;
  --line-height: 7vh;
  --box-shadow: none;
}

.one {
  background-color: #f3f4f8;
  height: 90vh;
}

.one h1 {
  color: #2c3b93;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  text-align: center;
  padding-top: 4rem;
  padding-bottom: 2.5em;
  margin-top: -1rem;
  font-size: 6vh;
  position: relative;
  z-index: 2;
}

.num-back {
  display: flex;
  margin-left: 35vw;
  text-align: center;
  width: 50%;
  margin-top: -30vh;
  height: 65vh;
  position: absolute;
  z-index: 0;
}

.one ion-row {
  margin-left: auto;
  margin-right: auto;
}

.one ion-col {
  display: flex;
  justify-content: center;
}

.for-portrait {
  display: none;
}

.card-one {
  background-color: white;
  width: 25vw;
  height: 15vw;
  border-radius: 40px;
  margin: 3vw;
}

.card-one ion-img {
  margin-top: 7vh;
  margin-bottom: 1.5vh;
  height: 5vh;
  align-content: center;
}

.small-icon {
  height: 6vh!important;
  margin-top: 6vh!important;
}

.card-one ion-card-title {
  color: black;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 700;
  text-align: center;
  font-size: 2vw;
}

.card-one ion-card-content {
  color: rgb(28, 28, 28);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 700;
  text-align: center;
  font-size: 1.25vw;
}

.two {
  background:#2c3b93;
  height: 110vh;
  padding-top: 20vh;
}

.two h1 {
  color: #15cdcb;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  text-align: center;
  font-size: 6vh;
  position: relative;
  z-index: 1;
  padding-bottom: 8vh;
}

 .video{
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
 }

 iframe{
  margin-top: 10vh;
  height: 50vh;
  width: 85vh;
 }

 .three {
  height: 120vh;
 }

 .three-content {
  display: flex;
  justify-content: center;
 }

 .three h1 {
  position: relative;
  color: #2c3b93;
  font-family: 'Inter', sans-serif;
  margin-top: 20vh;
  margin-bottom: 10vh;
  font-weight: 700;
  font-size: 6vh;
  text-align: center;
  position: relative;
  z-index: 1;
 }

 .green-bar  {
  width: 52vw;
  display: block;
  margin-top: 10vh;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 1;
 }

 .three ion-text {
  font-family: 'Inter', sans-serif;
  font-size: 6vh;
  font-weight: 700;
  color: black;
 }

 .highlight {
  background-color: #92ecd1;
 }

 .center {
  display: flex;
  justify-content: center;
  flex-direction: column;
 }

 .three ion-row ion-col {
  display: flex;
  justify-content: center;
  flex-direction: column;
 }

 .card-desc {
  font-size: 4vh;
  font-weight: 700;
  color: black;
  text-align: center;
 }

 .card-three {
  background-color: white;
  width: 12vw;
  height: 12vw;
  border-radius: 2vw;
  border-style: solid;
  border-color: #5280e2;
  border-width: 5px;
  box-shadow: none;
  align-self: center;
  margin-top: 30px;
  margin-bottom: 10vh;
 }

 .card-three ion-img {
  text-align: center;
  height: 3vw;
 }
 .card-three ion-card-content {
  text-align: center;
  font-size: 1vw;
  color: #151c43;
 }

 .kucing {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  margin-top: 1.25rem;
  text-align: center;
 }

 .kelinci {
  text-align: center;
  margin-bottom: 1.25rem;
 }

.to-top {
  --color: white;
  --background-color: #41dcbb;
  --border-radius: 5vh;
  --position: absolute;
  --right: 0px;
  --box-shadow: none;
  --margin: 0 auto;
  --display: block;
  font-size: 3vh;
  font-family: 'Inter';
  text-transform: none;
}

 .footer {
  background: linear-gradient(90deg, #2c3b93 57%, #33629c 81%, #0f908e 99.9%);
  height: 28vh;
 }

 .copyright {
  color: white;
  font-family: 'Inter', sans-serif;
  text-align: right;
  font-size: 3vh;
  line-height: 25vh;
  position: absolute;
  right: 5vw;
 }

 .bicara-ai-bot {
  color: white;
  font-family: 'Krona One', sans-serif;
  font-size: 4.5vh;
  line-height: 25vh;
  padding-left: 5vw;
 }
}

@media (max-width: 576px) {
  .bicara-ai-top {
  height: 6vh;
}

.top-bar {
  line-height: 6vh;
  height: 6vh;
  text-align: center;
}

.top-gradient {
  background: linear-gradient(180deg, rgba(21,205,203,1) -43.28%, rgba(243,244,248,1) 98%);
  font-family: 'Inter', sans-serif;
  height: 55vh;
}
.hero-img {
  height: 50vh;
  margin-top: 100vh;
  padding-top: 10vh;
}
.top-content {
  padding-left: 5vw;
  padding-right: 5vw;
  padding-top: 3vh;
  height: 50vh;
}

.title-top1 {
  font-style: normal;
  font-weight: 700;
  font-size: 2.8vh;
  color: black;
  text-align: center;
  margin-bottom: -2vh;
}
.title-top2 {
  font-style: normal;
  font-weight: 700;
  font-size: 2.8vh;
  color: #3F54D1;
  text-align: center;
}

.desc-top {
  padding-top: 1.5vh;
  font-size: 2vh;
  font-weight: 500;
  color: #6e7071;
  text-align: center;
}

.email {
  width: 80vw;
  display: flex;
  justify-content: center;
}
.email-regist {
  display: flex;
  width: 300px;
  height: 40px;
  box-shadow: none;
  background-color: white;
  border-radius: 30px;
  margin-top: 10px;
  padding-left: 2.7vh;
  margin-left: 0px;
  font-size: 1.25rem;
  position: absolute;
}

.email-regist ion-img {
  background-color: white;
  height: 2.7vh;
  margin:auto;
}

.email-input {
  margin : 0px;
  height: 40px;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  color: black;
  z-index: 0;
}

.notify {
  position: absolute;
  margin-top: 0px;
  right:-3vw;
  height: 40px;
  width: 80px;
  font-size: 12px;
  font-family: 'Inter';
  text-transform: none;
  --border-radius: 30px;
  --line-height: 40px;
  --box-shadow: none;
}
.one {
  background-color: #f3f4f8;
  height: 45vh;
}

.one h1 {
  color: #2c3b93;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  text-align: center;
  padding-top: 4vh;
  padding-bottom: 2vh;
  margin-top: -2vh;
  font-size: 2.8vh;
  position: relative;
  z-index: 1;
}

.one ion-row {
  margin-left: auto;
  margin-right: auto;
}

.one ion-col {
  display: flex;
  justify-content: center;
}

.for-landscape {
  display: none;
}


.card-one {
  background-color: white;
  width: 210px;
  height: 210px;
  border-radius: 25px;
  padding-top: 30px;
}

.big-icon {
  height: 30px;
  margin-top: 10px;
}

.small-icon {
  height: 35px;
  margin-top: 5px;
}
.card-one ion-card-title {
  color: rgb(0, 0, 0);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 700;
  text-align: center;
  font-size: 20px;
  margin-top: 10px;
  padding-left: 5px;
  padding-right: 5px;
  margin-bottom: -5px;
}
.card-one ion-card-content {
  color: rgb(28, 28, 28);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
  text-align: center;
  font-size: 18px;
}

.two {
  background:#2c3b93;
  height: 50vh;
  padding-top: 3vh;
}

.two h1 {
  color: #15cdcb;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  text-align: center;
  z-index: 1;
  padding-bottom: 2.8vh;
  position: relative;
  z-index: 1;
}

 .video{
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
 }

 .three {
  height: 60vh;
 }

 .three-content {
  display: flex;
  justify-content: center;
 }

 .three h1 {
  color: #2c3b93;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  text-align: center;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  position: relative;
  z-index: 1;
 }

 .green-bar  {
  width: 40.625rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
 }

 .three ion-text {
  font-family: 'Inter', sans-serif;
  font-size: 2.8vh;
  font-weight: 700;
  color: black;
 }

 .highlight {
  background-color: #92ecd1;
 }

 .center {
  display: flex;
  justify-content: center;
  flex-direction: column;
 }

 .three ion-slide ion-slides {
  flex-direction: row;
  display:contents;
 }

.three ion-slides {
  margin-top: -25px;
}

 .card-desc {
  font-size: 1.5rem;
  font-weight: 700;
  color: black;
  text-align: center;
 }

 .card-three {
  width: 140px;
  height: 140px;
  border-radius: 15px;
  align-self: center;
  box-shadow: none;
  background-color: white;
  border-color: #5280e2;
  border-style: solid
 }

 .num-icon ion-img {
  height: 40px;
 }


 .card-three ion-card-header {
  display: flex;
  justify-content: center;
  margin: -5px;
 }
 .card-three ion-img {
  text-align: center;
  height: 40px;
 }
 .card-three ion-card-content {
  text-align: center;
  font-size: 12px;
  color: #151c43;
 }

 .kucing {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  margin-top: 1.25rem;
  text-align: center;
 }

 .kelinci {
  text-align: center;
  margin-bottom: 1.25rem;
 }

.to-top {
  --border-radius: 30px;
  --position: absolute;
  --box-shadow: none;
  --font-family: 'Inter', sans-serif;
  --margin: 0 auto;
  --display: block;
  height: 3vh;
  width: 25vw;
  font-size: 1.5vh;
  text-transform: none;
}

 .footer {
  background: linear-gradient(90deg, #2c3b93 57%, #33629c 81%, #0f908e 99.9%);
  height: 10vh;
  margin-bottom: -10px;
 }

 .copyright {
  color: white;
  font-family: 'Inter', sans-serif;
  text-align: right;
  font-size: 1.5vh;
  line-height: 8vh;
  position: absolute;
  right: 10vw;
 }

 .bicara-ai-bot {
  color: white;
  font-family: 'Krona One', sans-serif;
  font-size: 2vh;
  line-height: 8vh;
  padding-left: 10vw;
 }

 .num-back {
  margin-top: -17vh;
  height: 55vh;
  position: absolute;
  margin-right: 20vw;
  margin-left: 20vw;
  z-index: 0;
  display: flex;
  justify-content: center;
}

}

@media (max-width: 992px) and (min-width: 576px) {
  .bicara-ai-top {
  height: 6vh;
}


.hero-img{
  height: 35vh;
  margin-top: -20vh;
  margin-bottom: 5vh;
}

.top-bar {
  line-height: 6vh;
  height: 6vh;
  text-align: center;
}

.top-gradient {
  background: linear-gradient(180deg, rgba(21,205,203,1) -43.28%, rgba(243,244,248,1) 98%);
  height: 50vh;
  font-family: 'Inter', sans-serif;
}

.top-content {
  padding-left: 5vw;
  padding-right: 5vw;
  padding-top: 3vh;
  padding-bottom: 1vh;
}

.title-top1 {
  font-style: normal;
  font-weight: 700;
  font-size: 2.8vh;
  color: black;
  text-align: center;
  margin-bottom: -1vh;
}
.title-top2 {
  font-style: normal;
  font-weight: 700;
  font-size: 2.8vh;
  color: #3F54D1;
  text-align: center;
}

.desc-top {
  padding-top: 1.5vh;
  font-size: 2vh;
  font-weight: 500;
  color: #6e7071;
  text-align: center;
}

.email {
  width: 50vh;
  display: flex;
  justify-content: center;
}
.email-regist {
  display: flex;
  width: 80%;
  height: 4vh;
  box-shadow: none;
  background-color: white;
  border-radius: 1.875rem;
  margin-top: 1vh;
  padding-left: 2.7vh;
  margin-left: 0px;
  font-size: 1.25rem;
  position: absolute;
}

.email-regist ion-img {
  background-color: white;
  height: 2vh;
  margin:auto;
}

.email-input {
  margin : 0px;
  height: 4vh;
  font-size: 2vh;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  color: black;
  z-index: 0;
}

.notify {
  position: absolute;
  margin: 0 auto;
  right:-3vw;
  height: 4vh;
  width: 20vw;
  font-family: 'Inter';
  font-size: 1.5vh;
  text-transform: none;
  --border-radius: 1.875rem;
  --line-height: 7vh;
  --box-shadow: none;
  --font-size: 2vh;
}

.one {
  background-color: #f3f4f8;
  height: 45vh;
}

.one h1 {
  color: #2c3b93;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  text-align: center;
  padding-top: 4vh;
  padding-bottom: 2vh;
  margin-top: -2vh;
  font-size: 2.8vh;
  position: relative;
  z-index: 1;
}

.one ion-row {
  margin-left: auto;
  margin-right: auto;
}

.one ion-col {
  display: flex;
  justify-content: center;
}

.for-landscape {
  display: none;
}


.card-one {
  background-color: white;
  width: 300px;
  height: 250px;
  border-radius: 25px;
}

.big-icon {
  margin-top: 40px;
  height: 50px;
}

.small-icon {
  margin-top: 35px;
  height: 45px;
}
.card-one ion-card-title {
  color: black;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 700;
  text-align: center;
  font-size: 3vh;
  margin-top: 0.75rem;
}
.card-one ion-card-content {
  color: black;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
  text-align: center;
  font-size: 2.5vw;
}

.two {
  background:#2c3b93;
  height: 50vh;
  padding-top: 3vh;
}

.two h1 {
  color: #15cdcb;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  text-align: center;
  z-index: 1;
  padding-bottom: 2.8vh;
  position: relative;
  z-index: 1;
}

 .video{
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
 }

 .iframe {
  width: 90vw;
 }

 .three {
  height: 60vh;
 }

 .three-content {
  display: flex;
  justify-content: center;
 }

 .three h1 {
  color: #2c3b93;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  text-align: center;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  position: relative;
  z-index: 1;
 }

 .green-bar  {
  width: 40.625rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
 }

 .three ion-text {
  font-family: 'Inter', sans-serif;
  font-size: 2.8vh;
  font-weight: 700;
  color: black;
 }

 .highlight {
  background-color: #92ecd1;
 }

 .center {
  display: flex;
  justify-content: center;
  flex-direction: column;
 }

 .three ion-slide ion-slides {
  flex-direction: column;
  display:flex;
 }

 .card-desc {
  font-size: 1.5rem;
  font-weight: 700;
  color: black;
  text-align: center;
 }

 .steps ion-img {
  width: 60px;
 }

 .card-three {
  background-color: white;
  width: 180px;
  height: 180px;
  border-radius: 15px;
  align-self: center;
  box-shadow: none;
  border-color: #5280e2;
  border-style: solid  
 }

 .card-three ion-card-header {
  display: flex;
  justify-content: center;
 }

 .card-three ion-img{
  height: 65px;
 }
 .card-three ion-card-content {
  text-align: center;
  font-size: 18px;
  color: #151c43;
 }

 .kucing {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  margin-top: 1.25rem;
  text-align: center;
 }

 .kelinci {
  text-align: center;
  margin-bottom: 1.25rem;
 }

.to-top {
  --border-radius: 30px;
  --position: absolute;
  --box-shadow: none;
  --font-family: 'Inter', sans-serif;
  --margin: 0 auto;
  --display: block;
  height: 3vh;
  width: 25vw;
  font-size: 1.5vh;
  text-transform: none;
}

 .footer {
  background: linear-gradient(90deg, #2c3b93 57%, #33629c 81%, #0f908e 99.9%);
  height: 10vh;
  margin-bottom: -10px;
 }

 .copyright {
  color: white;
  font-family: 'Inter', sans-serif;
  text-align: right;
  font-size: 1.5vh;
  line-height: 8vh;
  position: absolute;
  right: 10vw;
 }

 .bicara-ai-bot {
  color: white;
  font-family: 'Krona One', sans-serif;
  font-size: 2vh;
  line-height: 8vh;
  padding-left: 10vw;
 }

 .num-back {
  margin-top: -12vh;
  height: 55vh;
  position: absolute;
  margin-right: 25vw;
  margin-left: 25vw;
  z-index: 0;
  display: flex;
  justify-content: center;
}

}


</style>
