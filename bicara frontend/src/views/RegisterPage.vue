<template>
    <ion-app>
      <ion-page>
        <ion-content class="ion-padding">
          <h1>REGISTER</h1>
          <Form v-slot="{ errors, values }" @submit="handleSubmit">
            <ion-item>
              <ion-label position="floating" >Email</ion-label>
              <Field name="email" v-slot="{field}" 
                rules="required|email" >
                <ion-input v-bind="field"  name="email" ></ion-input>
              </Field>
            </ion-item>
            <ErrorMessage name="email" class="error" />
            <ion-item>
              <ion-label position="floating" >First Name</ion-label>
              <Field name="Firstname" v-slot="{field}" 
              rules="required|alpha">
                <ion-input v-bind="field" name="Firstname" ></ion-input>
              </Field>
            </ion-item>
            <ErrorMessage name="Firstname" class="error" />
            <ion-item>
              <ion-label position="floating" >Last Name</ion-label>
              <Field name="Lastname" v-slot="{field}" 
              rules="required|alpha">
                <ion-input v-bind="field" name="Lastname" ></ion-input>
              </Field>
            </ion-item>
            <ErrorMessage name="Lastname" class="error" />
            <ion-item>
              <ion-label position="floating" >Password</ion-label>
              <Field name="password" v-slot="{field}" 
              rules="required|min:8">
                <ion-input v-bind="field" name="password" ></ion-input>
              </Field>
            </ion-item>
            <ErrorMessage name="password" class="error" />
            <ion-item>
              <ion-label position="floating" >Confirm Password</ion-label>
              <Field name="password confirmation" v-slot="{field}" 
              rules="required|confirmed:@password">
                <ion-input v-bind="field" name="password confirmation" ></ion-input>
              </Field>
            </ion-item>
            <ErrorMessage name="password confirmation" class="error" />
            <p>
              <ion-button type="submit" >Save</ion-button>
            </p>
            <pre>
              {{ values }}
              {{ errors }}
            </pre>
          </Form>
        </ion-content>
      </ion-page>
    </ion-app>
  </template>
  
  <script lang="ts">
  import { defineComponent, onMounted } from "vue";
  import { configure, Form, Field, defineRule, ErrorMessage,} from "vee-validate";
  import { required, min, email,confirmed, alpha } from "@vee-validate/rules";
  import { localize } from '@vee-validate/i18n';
  import {
    IonApp,
    IonPage,
    IonContent,
    IonButton,
    IonInput,
    IonLabel,
    IonItem,
  } from "@ionic/vue";
  export default defineComponent({
    name: "App",
    setup() {
      
      
    
      onMounted(() => {
        configure({
          
          validateOnInput: true,
          generateMessage: localize('en', {
        messages: {
        // interpolates the field name
        required: 'The {field} is required',
        // interpolates the min, max params
        between: 'The {field} value must be between 0:{min}, 1:{max}',
        // Interpolates another field value in the form
        confirmed: 'The {field} value must match {age}',
        // Interpolates the field name and the rule name
        alpha: 'The {field} value may only contain alphabetic characters',
    }}),
        });
  
        // rules
        defineRule("required", required);
        defineRule("min", min);
        defineRule("email", email);
        defineRule("confirmed", confirmed);
        defineRule("alpha", alpha);
      });
      return {
        
      };
    },
    components: {
      IonApp,
      Form,
      Field,
      IonPage,
      IonContent,
      IonButton,
      IonInput,
      IonLabel,
      IonItem,
      ErrorMessage,
      
    },
  });
  </script>
  
  <style>
  button {
    margin: 8px;
  }
  input {
    margin: 8px;
    display: block;
  }
  input[type="text"] {
    width: 200px;
    height: 30px;
  }
  input[type="email"] {
    width: 200px;
    height: 30px;
  }
  label {
    margin: 8px;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 30px;
    color: #2c3e50;
  }
  .error {
    font-size: smaller;
    color: red;
  }
  </style>
  