<template>
  <a class="btn-social" title="Sign in with Facebook" @click="logInWithFacebook">
    <span class="sr-only">Sign in with Facebook</span>
    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" height="512pt" viewBox="0 0 512 512" width="512pt">
      <path
        d="m483.738281 0h-455.5c-15.597656.0078125-28.24218725 12.660156-28.238281 28.261719v455.5c.0078125 15.597656 12.660156 28.242187 28.261719 28.238281h455.476562c15.605469.003906 28.257813-12.644531 28.261719-28.25 0-.003906 0-.007812 0-.011719v-455.5c-.007812-15.597656-12.660156-28.24218725-28.261719-28.238281zm0 0"
        fill="#4267b2"
      />
      <path
        d="m353.5 512v-198h66.75l10-77.5h-76.75v-49.359375c0-22.386719 6.214844-37.640625 38.316406-37.640625h40.683594v-69.128906c-7.078125-.941406-31.363281-3.046875-59.621094-3.046875-59 0-99.378906 36-99.378906 102.140625v57.035156h-66.5v77.5h66.5v198zm0 0"
        fill="#fff"
      />
    </svg>
  </a>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class FaceBookButton extends Vue {
  async logInWithFacebook() {
    (window as any).FB.login(function (response: any) {
      if (response.authResponse) {
        console.log(response);
      } else {
        console.log('cancel');
      }
    });
  }

  async initFacebook() {
    (window as any).fbAsyncInit = async () => {
      const FB = (window as any).FB;

      await FB.init({
        appId: process.env.VUE_APP_FACEBOOK_APP_ID, //You will need to change this
        cookie: true, // This is important, it's not enabled by default
        xfbml: true,
        version: 'v13.0',
      });
    };
  }

  async loadFacebookSDK(d: Document, s: string, id: string) {
    let js,
      fjs = d.getElementsByTagName(s)[0] as any;
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s) as any;
    js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk.js';
    return await fjs.parentNode.insertBefore(js, fjs);
  }

  async created() {
    await this.loadFacebookSDK(document, 'script', 'facebook-jssdk');
    await this.initFacebook();
    // await this.initGoogleSDK();
  }
}
</script>

