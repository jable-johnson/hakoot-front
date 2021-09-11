<template>
  <div class="mx-auto w-full max-w-sm lg:w-96">
    <div>
      <img class="h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
      <h2 class="mt-6 text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
      <p class="mt-2 text-sm text-gray-600">
        Or
        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> start your 14-day free trial </a>
      </p>
    </div>

    <div class="mt-8">
      <div>
        <div>
          <p class="text-sm font-medium text-gray-700">Sign in with</p>

          <div class="mt-1 grid grid-cols-2 gap-3">
            <div>
              <a
                class="
                  w-full
                  inline-flex
                  justify-center
                  py-2
                  px-4
                  border border-gray-300
                  rounded-md
                  shadow-sm
                  bg-white
                  text-sm
                  font-medium
                  text-gray-500
                  hover:bg-gray-50
                "
                title="Sign in with Facebook"
                @click="logInWithFacebook"
              >
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
            </div>

            <div>
              <GoogleButton />
            </div>
          </div>
        </div>

        <div class="mt-6 relative">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="w-full border-t border-gray-300" />
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-white text-gray-500"> Or continue with </span>
          </div>
        </div>
      </div>

      <div class="mt-6">
        <form action="#" method="POST" class="space-y-6">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700"> Email address </label>
            <div class="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required=""
                class="
                  appearance-none
                  block
                  w-full
                  px-3
                  py-2
                  border border-gray-300
                  rounded-md
                  shadow-sm
                  placeholder-gray-400
                  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
                  sm:text-sm
                "
              />
            </div>
          </div>

          <div class="space-y-1">
            <label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
            <div class="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required=""
                class="
                  appearance-none
                  block
                  w-full
                  px-3
                  py-2
                  border border-gray-300
                  rounded-md
                  shadow-sm
                  placeholder-gray-400
                  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
                  sm:text-sm
                "
              />
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label for="remember-me" class="ml-2 block text-sm text-gray-900"> Remember me </label>
            </div>

            <div class="text-sm">
              <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="
                w-full
                flex
                justify-center
                py-2
                px-4
                border border-transparent
                rounded-md
                shadow-sm
                text-sm
                font-medium
                text-white
                bg-indigo-600
                hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
              "
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';

// shared component
import GoogleButton from '@/components/shared/utils/GoogleButton.vue';
@Options({
  components: { GoogleButton },
})
export default class Login extends Vue {
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
