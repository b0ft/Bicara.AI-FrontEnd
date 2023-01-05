<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div class="top-bar" id="top">
                <div class="top-bar" id="top">
                    <ion-img
                        src="assets/img/bicara-color.svg"
                        class="bicara-ai-top"
                    ></ion-img>
                </div>
                <ion-row class="ion-justify-content-end">
                    <div class="for-landscape">
                        <a href="homepage/#features">Features</a>
                        <a href="homepage/#steps">About</a>
                    </div>
                    <ion-button @click="setSignInOpen(true)" color="im-in"
                        >Sign in</ion-button
                    >

                    <ion-modal class="sign-in" :is-open="isSignInOpen">
                        <ion-content class="ion-padding">
                            <div>
                                <h1>Sign in</h1>
                                <ion-text>Welcome to Bicara.ai</ion-text>
                            </div>
                            <ion-card>
                                <ion-text>Email<br /></ion-text>
                                <ion-input
                                    type="email"
                                    placeholder="Enter email"
                                    v-model="emailLogin"
                                ></ion-input>
                                <ion-text>Password<br /></ion-text>
                                <ion-input
                                    type="password"
                                    placeholder="Enter password"
                                    v-model="passwordLogin"
                                ></ion-input>
                                <ion-text class="error">{{ errorLogin }}</ion-text><br>
                                <ion-button
                                    color="notify"
                                    @click.prevent="signInMethod"
                                    >Sign in</ion-button
                                >
                            </ion-card>
                            <div class="to-sign-up">
                                Don't have an account?
                                <a @click="setSignUpOpen(true)" color="white"
                                    >Sign up</a
                                >
                            </div>
                        </ion-content>
                    </ion-modal>
                    <ion-modal class="sign-up" :is-open="isSignUpOpen">
                        <ion-content class="ion-padding">
                            <div>
                                <h1>Sign up</h1>
                                <ion-text>Welcome to Bicara.ai</ion-text>
                            </div>
                            <ion-card>
                            <Form>
                                <ion-text>First name<br /></ion-text>
                                <Field v-model="firstName" name="First Name" v-slot="{field}" 
                                  rules="required|alpha">
                                <ion-input 
                                    v-bind="field"
                                    name="First Name"
                                    type="text"
                                    placeholder="Enter first name"
                                    
                                ></ion-input>
                                </Field>
                                <ErrorMessage name="First Name" class="error" /><br>
                                <ion-text>Last name<br /></ion-text>
                                <Field v-model="lastName" name="Last Name" v-slot="{field}" 
                                  rules="required|alpha">
                                <ion-input
                                    v-bind="field"
                                    name="Last Name"
                                    type="text"
                                    placeholder="Enter last name"
                                    
                                ></ion-input>
                                </Field>
                                <ErrorMessage name="Last Name" class="error" /><br>
                                <ion-text>Email<br /></ion-text>
                                <Field v-model="email" name="Email" v-slot="{field}" 
                                  rules="required|email">
                                <ion-input
                                    v-bind="field"
                                    name="Email"
                                    type="email"
                                    placeholder="Enter email"
                                    
                                ></ion-input>
                                </Field>
                                <ErrorMessage name="Email" class="error" /><br>
                                <ion-text>Password<br /></ion-text>
                                <Field v-model="password" name="password" v-slot="{field}" 
                                  rules="required|min:6">
                                <ion-input
                                    v-bind="field"
                                    name="password"
                                    type="password"
                                    placeholder="Enter password"
                                    
                                ></ion-input>
                                </Field>
                                <ErrorMessage name="password" class="error" /><br>
                                <ion-text>Confirm password<br /></ion-text>
                                <Field name="Confirm Password" v-slot="{field}" 
                                  rules="required|confirmed:@password">
                                <ion-input
                                    v-bind="field"
                                    name="Confirm Password"
                                    type="password"
                                    placeholder="confirm password"
                                ></ion-input>
                                </Field>
                                <ErrorMessage name="Confirm Password" class="error" /><br>
                                <ion-button @click.prevent="signUpMethod"
                                    >Sign up</ion-button
                                >
                              </form>
                            </ion-card>
                        </ion-content>
                    </ion-modal>
                </ion-row>
            </div>

            <div class="top-gradient">
                <div class="top-content">
                    <ion-row>
                        <ion-col size="12" size-lg="5" class="title-top1"
                            >Improve your</ion-col
                        >
                    </ion-row>
                    <ion-row>
                        <ion-col
                            size=""
                            size-lg="6"
                            class="title-top2"
                            color="secondary"
                            >communication skills</ion-col
                        ></ion-row
                    >
                    <ion-row class="half">
                        <ion-col size="12" class="desc-top"
                            >Bicara.ai is an education platform. Bicara.ai aim
                            to improve indviduals comunication skills with
                            judgement free feedback from our AI-powered speech
                            coach.</ion-col
                        >
                    </ion-row>
                    <ion-row>
                        <ion-col
                            size="12"
                            size-md="12"
                            size-lg="5"
                            class="email"
                        >
                            <div class="email-regist">
                                <ion-img src="assets/icon/email.svg"></ion-img>
                                <ion-input
                                    class="email-input"
                                    placeholder="Your email address"
                                ></ion-input>
                                <ion-button
                                    size="large"
                                    color="notify"
                                    class="notify"
                                    @click="setSignUpOpen(true)"
                                    >Try for free</ion-button
                                >
                            </div>
                        </ion-col>
                    </ion-row>
                </div>
                <div class="hero-img for-landscape">
                    <ion-img src="assets/img/hero.svg"></ion-img>
                </div>
            </div>
            <div class="for-portrait">
                <ion-img class="hero-img" src="assets/img/hero.svg"></ion-img>
            </div>

            <div class="one">
                <!-- ganti icon-->
                <h1>Why you should use Bicara.ai</h1>
                <div class="num-back">
                    <ion-img src="assets/img/1.svg"></ion-img>
                </div>
                <ion-row class="for-landscape">
                    <ion-col size="4">
                        <ion-card class="card-one">
                            <ion-img
                                class="small-icon"
                                src="assets/icon/filler.svg"
                            ></ion-img>
                            <ion-card-title
                                >Filler words detection</ion-card-title
                            >
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

                <ion-img
                    src="assets/icon/arrow-left.svg"
                    class="for-portrait"
                    style="
                        height: 2vh;
                        z-index: 2;
                        position: absolute;
                        left: 3vh;
                        margin-top: 10vh;
                    "
                ></ion-img>

                <ion-img
                    src="assets/icon/arrow-right.svg"
                    class="for-portrait"
                    style="
                        height: 2vh;
                        z-index: 2;
                        position: absolute;
                        right: 3vh;
                        margin-top: 10vh;
                    "
                ></ion-img>

                <ion-slides class="for-portrait">
                    <ion-slide>
                        <ion-card class="card-one">
                            <ion-img
                                class="big-icon"
                                src="assets/icon/filler.svg"
                            ></ion-img>
                            <ion-card-title
                                >Filler words detection</ion-card-title
                            >
                            <ion-card-content>
                                Lorem ipsum dolor sit amet.
                            </ion-card-content>
                        </ion-card>
                    </ion-slide>
                    <ion-slide>
                        <ion-card class="card-one">
                            <ion-img
                                class="big-icon"
                                src="assets/icon/Pacing.svg"
                            ></ion-img>
                            <ion-card-title>Pacing</ion-card-title>
                            <ion-card-content>
                                Lorem ipsum dolor sit amet.
                            </ion-card-content>
                        </ion-card>
                    </ion-slide>
                    <ion-slide>
                        <ion-card class="card-one">
                            <ion-img
                                class="big-icon"
                                src="assets/icon/eye.svg"
                            ></ion-img>
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
                <div class="num-back">
                    <ion-img src="assets/img/2.svg"></ion-img>
                </div>
                <div>
                    <div class="video">
                        <iframe
                            src="https://www.youtube.com/embed/fpI8Jx65W18"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </div>
                </div>
            </div>

            <div class="three">
                <h1>How it works</h1>
                <div id="steps" class="num-back">
                    <ion-img src="assets/img/3.svg"></ion-img>
                </div>
                <div class="green-bar">
                    <ion-img
                        src="assets/img/Union.png"
                        class="for-landscape"
                    ></ion-img>
                </div>

                <ion-img
                    src="assets/icon/arrow-left.svg"
                    class="for-portrait"
                    style="
                        height: 2vh;
                        z-index: 2;
                        position: absolute;
                        left: 3vh;
                        margin-top: 5vh;
                    "
                ></ion-img>

                <ion-img
                    src="assets/icon/arrow-right.svg"
                    class="for-portrait"
                    style="
                        height: 2vh;
                        z-index: 2;
                        position: absolute;
                        right: 3vh;
                        margin-top: 5vh;
                    "
                ></ion-img>

                <ion-row class="for-landscape">
                    <ion-col size="12" size-lg="2"></ion-col>
                    <ion-col size="6" size-lg="2">
                        <p class="card-desc">Step 1</p>
                        <ion-card class="card-three"></ion-card>
                    </ion-col>
                    <ion-col size="6" size-lg="2">
                        <p class="card-desc">Step 2</p>
                        <ion-card class="card-three"></ion-card>
                    </ion-col>
                    <ion-col size="6" size-lg="2">
                        <p class="card-desc">Step 3</p>
                        <ion-card class="card-three"></ion-card>
                    </ion-col>
                    <ion-col size="6" size-lg="2">
                        <p class="card-desc">Step 4</p>
                        <ion-card class="card-three"></ion-card>
                    </ion-col>
                    <ion-col size="12" size-lg="2"></ion-col>
                </ion-row>

                <ion-slides class="for-portrait">
                    <ion-slide size="6" size-lg="2">
                        <p class="card-desc">Step 1</p>
                        <ion-card class="card-three"></ion-card>
                    </ion-slide>
                    <ion-slide size="6" size-lg="2">
                        <p class="card-desc">Step 2</p>
                        <ion-card class="card-three"></ion-card>
                    </ion-slide>
                    <ion-slide size="6" size-lg="2">
                        <p class="card-desc">Step 3</p>
                        <ion-card class="card-three"></ion-card>
                    </ion-slide>
                    <ion-slide size="6" size-lg="2">
                        <p class="card-desc">Step 4</p>
                        <ion-card class="card-three"></ion-card>
                    </ion-slide>
                </ion-slides>

                <div class="center">
                    <ion-text class="kucing">
                        Are you ready to be <br />
                        <div class="kelinci">
                            <ion-text class="highlight">
                                a better speaker </ion-text
                            ><ion-text>?</ion-text>
                        </div>
                    </ion-text>
                    <div class="kucing">
                        <ion-button
                            class="to-top"
                            size="large"
                            color="im-in"
                            href="homepage/#top"
                        >
                            Yes I'm in!
                        </ion-button>
                    </div>
                </div>
            </div>

            <ion-row class="footer">
                <ion-col size="12" size-lg="6" class="bicara-ai-bot"
                    >Bicara.ai</ion-col
                >
                <ion-col size="12" size-lg="6" class="copyright">
                    © 2022 Bicara.ai
                </ion-col>
            </ion-row>
        </ion-content>
    </ion-page>
</template>
  
<script lang="ts">
import {
    IonContent,
    IonPage,
    IonInput,
    IonButton,
    IonImg,
    IonCol,
    IonRow,
    IonCard,
    IonCardTitle,
    IonCardContent,
    IonSlides,
    IonSlide,
    IonText,
    IonModal,
} from "@ionic/vue";
import { capitalize, defineComponent, onMounted } from "vue";
import axios from "axios";
import { configure,Form, Field, defineRule, ErrorMessage,} from "vee-validate";
import { required, min, email,confirmed, alpha } from "@vee-validate/rules";
import { localize } from '@vee-validate/i18n';

export default defineComponent({
    name: "HomePage",
    components: {
        IonContent,
        IonPage,
        IonInput,
        IonButton,
        IonImg,
        IonCol,
        IonRow,
        IonCard,
        IonCardTitle,
        IonCardContent,
        IonSlides,
        IonSlide,
        IonText,
        IonModal,
        Form,
        Field,
        ErrorMessage,
    },
    data() {
        return {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            emailLogin: "",
            passwordLogin: "",
            isSignInOpen: false,
            isSignUpOpen: false,
            errorLogin: "",
        };
    },
    setup() {
      onMounted(() => {
        configure({
          
          validateOnInput: true,
          generateMessage: localize('en', {
        messages: {
        required: 'The {field} is required',
        between: 'The {field} value must be between 0:{min}, 1:{max}',
        confirmed: 'The {field} does not match',
        alpha: 'The {field} value may only contain alphabetic characters',
    }}),
        });
  
        defineRule("required", required);
        defineRule("min", min);
        defineRule("email", email);
        defineRule("confirmed", confirmed);
        defineRule("alpha", alpha);
      });
      return {
        
      };
    },
    methods: {
        setSignInOpen(isSignInOpen: boolean) {
            this.isSignInOpen = isSignInOpen;
        },
        setSignUpOpen(isSignUpOpen: boolean) {
            this.isSignUpOpen = isSignUpOpen;
        },
        signUpMethod() {
            let data = {
                firstName: capitalize(this.firstName),
                lastName: capitalize(this.lastName),
                email: this.email,
                password: this.password,
            };
            console.log(data);
            axios
                .post("http://127.0.0.1:5000/signup",data)
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        signInMethod() {
            let session = new FormData();
            session.append("email", this.emailLogin);
            session.append("password", this.passwordLogin);
            axios
                .post("http://127.0.0.1:5000/signin", session)
                .then((res) => {
                    console.log(res.data.message);
                    if (
                        res.data.message == "User logged in successfully" ||
                        res.data.message == "User already logged in"
                    ) {
                        window.location.href = "/dashboard";
                        console.log(res.data.email);
                        localStorage.setItem("email", res.data.email);
                    } else {
                        console.log("User not logged in");
                        this.errorLogin = "Wrong email or password";
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
    mounted() {
        document.addEventListener("click", (e) => {
            if (e.target != document.querySelector(".sign-in")) {
                this.setSignInOpen(false);
                this.setSignUpOpen(false);
            }
        });
        axios
            .get("http://127.0.0.1:5000/signin")
            .then((res) => {
                if (
                    localStorage.getItem("email") != null 
                ) {
                    window.location.href = "/dashboard";
                } else {
                    console.log("User not logged in");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    },
});
</script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;700&family=Krona+One&display=swap');
  .error {
    color: red;
    font-size: 1.8vh;
    font-family: 'Inter', sans-serif;
    padding-left: 1vh;
  }
  @media (min-width: 992px) {
    .bicara-ai-top {
    background: #3F54D1;
    background: radial-gradient(70.14% 53.23% at 53.13% 91.67%, rgba(33,188,207,1) 10%, rgba(82,128,226,1) 79%, rgba(63,84,209,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'Krona One', sans-serif;
    position: absolute;
    z-index: 2;
    padding-left: 5vw;
    height: 10vh;
  }
  
  .ion-justify-content-end {
    position: relative;
    z-index: 0;
    margin-right: 5vw;
    margin-top: -10vh;
  }
  
  .top-bar {
    line-height: 10vh;
    height: 10vh;
  }
  
  .top-bar a {
    right: 90%;
    color: #2c3b93;
    position:static;
    padding-right: 2vw;
    font-family: 'Inter';
    text-decoration: none;
    font-weight: 700;
    font-size: 3vh;
    margin-right: 1vh;
  }

  .top-bar ion-row ion-button {
    --border-radius: 3vh;
    font-family: 'Inter';
    text-transform: none;
    margin-right: 5vw;
    margin-top: -2vh;
  }

  ion-modal.sign-in
  {
    --border-radius: 3vh;
    --height: 75vh;
  }

  .sign-in ion-content div {
    margin-left: 5vh;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-bottom: 5vh;
  }
  .sign-in h1 {
    font-weight: 700;
    color: black;
    font-size: 6vh;
  }
  .sign-in ion-text {
    font-weight: 600;
    color: black;
    font-size: 4vh;
  }
  
  .sign-in ion-content ion-card {
    background-color: white;
    font-family: 'Inter';
    font-weight: 700;
    color: black;
    border-radius: 15px;
    height: 32vh;
    padding-left: 2.5vh;
    padding-top: 2vh;
  }

  .sign-in ion-content ion-card ion-button {
    --border-radius: 25vh;
    padding-left: none!important;;
    font-family: 'Segoe UI';
    font-weight: 700;
    text-transform: none;
  }
  
  .sign-in ion-card ion-text {
    margin-left: 1vh;
    font-size: 2.3vh;
  }
  
  .sign-in ion-card ion-input {
    font-size: 2.3vh;
  }

  .to-sign-up {
    margin-top: 5vh;
    font-weight: 600;
    font-size: larger;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
    margin-left: 0vh!important;
  }
  
  .to-sign-up a {
    text-decoration:underline;
    color: black;
  }

  .top-bar ion-row ion-button {
    --border-radius: 3vh;
    margin-top: 3vh;
    font-family: 'Inter';
    font-size: 2.5vh;
    text-transform: none;
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
  }
  .title-top2 {
    margin-top: -3vh;
    font-style: normal;
    font-weight: 700;
    font-size: 6vh;
    color: #3F54D1;
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
    right:-3vw;
    height: 7vh;
    width: 10vw;
    font-size: 2.5vh;
    font-family: 'Inter';
    text-transform: none;
    --border-radius: 30px;
    --line-height: 7vh;
    --box-shadow: none;
  }
  
  ion-modal.sign-up
  {
    --border-radius: 3vh;
    --height: 100vh;
  }

  .sign-up ion-content div {
    margin-left: 5vh;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  .sign-up h1 {
    font-weight: 700;
    color: black;
    font-size: 6vh;
  }
  .sign-up ion-text {
    font-weight: 600;
    color: black;
    font-size: 4vh;
  }
  
  .sign-up ion-content ion-card {
    background-color: white;
    font-family: 'Inter';
    font-weight: 700;
    color: black;
    border-radius: 15px;
    padding-left: 2.5vh;
    padding-right: 2.5vh;
    padding-top: 2vh;
    height: 75vh;
  }

  .sign-up ion-content ion-card ion-button {
    --border-radius: 25vh;
    font-family: 'Segoe UI';
    font-weight: 700;
    text-transform: none;
    height: 6vh;
  }
  
  .sign-up ion-card ion-text {
    margin-left: 1vh;
    font-size: 2.3vh;
  }
  
  .sign-up ion-card ion-input {
    font-size: 2.3vh;
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
    margin-top: -30vh;
    height: 65vh;
    position:absolute;
    margin-left: 35vw;
    margin-right: 35vw;
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
  width: 30vw;
  height: 20vw;
  border-radius: 40px;
  margin: 3vw;
}

.card-one ion-img {
  margin-top: 12vh;
  margin-bottom: 1.5vh;
  height: 5vh;
  align-content: center;
}

.small-icon {
  height: 6vh!important;
  margin-top: 11vh!important;
}

.card-one ion-card-title {
  color: black;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 700;
  text-align: center;
  font-size: 2vw;
  margin-top: 0.75rem;
}

.card-one ion-card-content {
  color: rgb(28, 28, 28);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 700;
  text-align: center;
  font-size: 1.25vw;
  margin-top: 0.5rem;
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
    font-size: 5vh;
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
    background-color: #c8d6da;
    width: 8vw;
    height: 8vw;
    border-radius: 3vw;
    align-self: center;
    margin-bottom: 10vh;
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
  
   .top-bar ion-row ion-modal{
    --background: aliceblue;
   }
  }
  
  @media (max-width: 576px) {
    .bicara-ai-top {
    height: 6vh;
    position: absolute;
    z-index: 2;
    padding-left: 5vw;
  }
  
  .top-bar {
    line-height: 6vh;
    height: 6vh;
  }
  
  .top-gradient {
    background: linear-gradient(180deg, rgba(21,205,203,1) -43.28%, rgba(243,244,248,1) 98%);
    height: 55vh;
    font-family: 'Inter', sans-serif;
  }
  
  .top-content {
    padding-left: 5vw;
    padding-right: 5vw;
    padding-top: 3vh;
    padding-bottom: 1vh;
  }
  .top-bar ion-row ion-button {
    --border-radius: 3vh;
    font-family: 'Inter';
    font-size: 1vh;
    text-transform: none;
    height: 3vh;
    margin-right: 5vw;
    margin-top: -4vh!important;
  }
  
  
  ion-modal.sign-in
  {
    --border-radius: 2vh;
    --height: 80vw;
    --width: 90vw;
  }

  .sign-in ion-content div {
    margin-left: 5vh;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-bottom: 5vh;
  }
  .sign-in h1 {
    font-weight: 700;
    color: black;
    font-size: 4vh;
  }
  .sign-in ion-text {
    font-weight: 600;
    color: black;
    font-size: 3vh;
  }
  
  .sign-in ion-content ion-card {
    background-color: white;
    font-family: 'Inter';
    font-weight: 700;
    color: black;
    border-radius: 15px;
    height: 32vh;
    padding-left: 2.8vh;
    padding-top: 2vh;
  }

  .sign-in ion-content ion-card ion-button {
    --border-radius: 25vh;
    height: 4vh;
    width: 8vh;
    font-size: 1.7vh;
    font-family: 'Segoe UI';
    font-weight: 700;
    text-transform: none;
  }
  
  .sign-in ion-card ion-text {
    margin-left: 1vh;
    font-size: 2.3vh;
  }
  
  .sign-in ion-card ion-input {
    font-size: 2.3vh;
    margin-left: 0.2vh;
  }

  .to-sign-up {
    margin-top: 5vh;
    font-weight: 600;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 2vh;
    text-align: center;
    margin-left: 0vh!important;
  }
  
  .to-sign-up a {
    text-decoration:underline;
    color: black;
  }

  ion-modal.sign-up
  {
    --border-radius: 2vh;
    --height: 70vh;
  }

  .sign-up ion-content div {
    margin-left: 5vh;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-bottom: 5vh;
  }
  .sign-up h1 {
    font-weight: 700;
    color: black;
    font-size: 4vh;
  }
  .sign-up ion-text {
    font-weight: 600;
    color: black;
    font-size: 3vh;
  }
  
  .sign-up ion-content ion-card {
    background-color: white;
    font-family: 'Inter';
    font-weight: 700;
    color: black;
    border-radius: 15px;
    height: 45vh;
    padding-left: 2.8vh;
    padding-top: 2vh;
  }

  .sign-up ion-content ion-card ion-button {
    --border-radius: 25vh;
    height: 4vh;
    width: 8vh;
    font-size: 1.7vh;
    margin-top: 0.25rem;
    font-family: 'Segoe UI';
    font-weight: 700;
    text-transform: none;
  }
  
  .sign-up ion-card ion-text {
    margin-left: 1vh;
    font-size: 2.3vh;
  }
  
  .sign-up ion-card ion-input {
    font-size: 2.3vh;
    margin-left: 0.2vh;
  }

  .top-bar ion-row ion-button {
    --border-radius: 3vh;
    font-family: 'Inter';
    font-size: 1vh;
    text-transform: none;
    height: 3vh;
    margin-right: 5vw;
    margin-top: 1.5vh;
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
    width: 90vw;
    display: flex;
    justify-content: center;
  }
  .email-regist {
    display: flex;
    width: 90%;
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
  
  .hero-img {
    height: 30vh;
    margin-top: -10vh;
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
    width: 35vw;
    height: 10vh;
    border-radius: 25px;
  }
  
  .big-icon {
    margin-top: 5vh;
    height: 6vw;
  }
  
  .card-one ion-card-title {
    color: black;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 700;
    text-align: center;
    font-size: 4vw;
    margin-top: 0.75rem;
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
    height: 55vh;
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
  
   .card-desc {
    font-size: 1.5rem;
    font-weight: 700;
    color: black;
    text-align: center;
   }
  
   .card-three {
    background-color: #c8d6da;
    width: 5.625rem;
    height: 10vh;
    border-radius: 1.5625rem;
    align-self: center;
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
  }
  
  }
  @media (max-width: 992px) {
    .bicara-ai-top {
    height: 6vh;
    position: absolute;
    z-index: 2;
    padding-left: 5vw;
  }
  
  .hero-img{
  height: 35vh;
  margin-top: -20vh;
  margin-bottom: 5vh;
}

  .top-bar {
    line-height: 6vh;
    height: 6vh;
  }
  
  .top-gradient {
    background: linear-gradient(180deg, rgba(21,205,203,1) -43.28%, rgba(243,244,248,1) 98%);
    height: 55vh;
    font-family: 'Inter', sans-serif;
  }
  
  .top-content {
    padding-left: 5vw;
    padding-right: 5vw;
    padding-top: 3vh;
    padding-bottom: 1vh;
  }

  ion-modal.sign-in
  {
    --border-radius: 2vh;
    --height: 65vh;
  }

  .sign-in ion-content div {
    margin-left: 5vh;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-bottom: 5vh;
  }
  .sign-in h1 {
    font-weight: 700;
    color: black;
    font-size: 4vh;
  }
  .sign-in ion-text {
    font-weight: 600;
    color: black;
    font-size: 3vh;
  }
  
  .sign-in ion-content ion-card {
    background-color: white;
    font-family: 'Inter';
    font-weight: 700;
    color: black;
    border-radius: 15px;
    height: 32vh;
    padding-left: 2.8vh;
    padding-top: 2vh;
  }

  .sign-in ion-content ion-card ion-button {
    --border-radius: 25vh;
    height: 4vh;
    width: 8vh;
    font-size: 1.7vh;
    font-family: 'Segoe UI';
    font-weight: 700;
    text-transform: none;
  }
  
  .sign-in ion-card ion-text {
    margin-left: 1vh;
    font-size: 2.3vh;
  }
  
  .sign-in ion-card ion-input {
    font-size: 2.3vh;
    margin-left: 0.2vh;
  }

  .to-sign-up {
    margin-top: 5vh;
    font-weight: 600;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 2vh;
    text-align: center;
    margin-left: 0vh!important;
  }
  
  .to-sign-up a {
    text-decoration:underline;
    color: black;
  }

  ion-modal.sign-up
  {
    --border-radius: 2vh;
    --height: 70vh;
  }

  .sign-up ion-content div {
    margin-left: 5vh;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-bottom: 5vh;
  }
  .sign-up h1 {
    font-weight: 700;
    color: black;
    font-size: 4vh;
  }
  .sign-up ion-text {
    font-weight: 600;
    color: black;
    font-size: 3vh;
  }
  
  .sign-up ion-content ion-card {
    background-color: white;
    font-family: 'Inter';
    font-weight: 700;
    color: black;
    border-radius: 15px;
    height: 45vh;
    padding-left: 2.8vh;
    padding-top: 2vh;
  }

  .sign-up ion-content ion-card ion-button {
    --border-radius: 25vh;
    height: 4vh;
    width: 8vh;
    font-size: 1.7vh;
    font-family: 'Segoe UI';
    font-weight: 700;
    text-transform: none;
  }
  
  .sign-up ion-card ion-text {
    margin-left: 1vh;
    font-size: 2.3vh;
  }
  
  .sign-up ion-card ion-input {
    font-size: 2.3vh;
    margin-left: 0.2vh;
  }

  .top-bar ion-row ion-button {
    --border-radius: 3vh;
    font-family: 'Inter';
    font-size: 1vh;
    text-transform: none;
    height: 3vh;
    margin-right: 5vw;
    margin-top: -4vh;
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
  width: 35vw;
  height: 25vh;
  border-radius: 25px;
}

.big-icon {
  margin-top: 6vh;
  height: 6vw;
}

.card-one ion-card-title {
  color: black;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 700;
  text-align: center;
  font-size: 4vw;
  margin-top: 0.75rem;
}
.card-one ion-card-content {
  color: black;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 700;
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
  width: 70px;
 }

 .three {
  height: 55vh;
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

 .card-desc {
  font-size: 1.5rem;
  font-weight: 700;
  color: black;
  text-align: center;
 }

 .card-three {
  background-color: #c8d6da;
  width: 5.625rem;
  height: 10vh;
  border-radius: 1.5625rem;
  align-self: center;
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
