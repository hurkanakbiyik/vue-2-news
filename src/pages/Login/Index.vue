<template>
  <v-layout>
    <grid-loader v-show="$store.state.auth.loading === true"></grid-loader>
    <v-card contextual-style="dark">
      <span slot="header">
        Login
      </span>
      <div slot="body">
        <form @submit.prevent="login(user)">
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-addon">
                <i class="fa fa-envelope fa-fw"></i>
              </div>
              <input
                v-model="user.email"
                type="email"
                placeholder="Email"
                class="form-control"
              >
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-addon">
                <i class="fa fa-lock fa-fw"></i>
              </div>
              <input
                v-model="user.password"
                type="password"
                placeholder="Password"
                class="form-control"
              >
            </div>
          </div>
          <div class="form-group">
            <button class="btn btn-outline-primary">
              Login
            </button>
          </div>
        </form>
      </div>
      <div slot="footer">
        No account?
        <router-link :to="{ name: 'register.index' }">Register</router-link>
      </div>
    </v-card>
    <div v-show="$store.state.auth.error === true" class="alert alert-danger" role="alert">
      <strong>Oh snap!</strong> Wrong username or password!
    </div>
    <div v-show="$store.state.auth.authenticated === true" class="alert alert-success" role="alert">
      <strong>Login success!</strong> Redirecting to home!
    </div>
  </v-layout>
</template>

<script>
  /* ============
   * Login Index Page
   * ============
   *
   * Page where the user can login.
   */

  import VLayout from '@/layouts/Minimal';
  import VCard from '@/components/Card';
  import GridLoader from '@/components/GridLoader/GridLoader';

  export default {
    /**
     * The name of the page.
     */
    name: 'login-index',

    /**
     * The data that can be used by the page.
     *
     * @returns {Object} The view-model data.
     */
    data() {
      return {
        user: {
          email: 'test@gmail.com',
          password: 'test',
        },
      };
    },

    /**
     * The methods the page can use.
     */
    methods: {
      /**
       * Will log the user in.
       *
       * @param {Object} user The user to be logged in.
       */
      login(user) {
        this.$store.dispatch('auth/login', user);
      },
    },

    /**
     * The components the page can use.
     */
    components: {
      VLayout,
      VCard,
      GridLoader,
    },
  };
</script>
