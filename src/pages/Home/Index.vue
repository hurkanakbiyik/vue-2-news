<template>
  <v-layout>
    <v-card contextual-style="dark">
      <span slot="header">
        Welcome!
      </span>
      <div slot="body">
        Hürkan AKBIYIK
      </div>
      <div slot="footer">
        Example of Vue
      </div>
    </v-card>
  </v-layout>
</template>

<script>
  /* ============
   * Home Index Page
   * ============
   *
   * The home index page.
   */

  import VLayout from '@/layouts/Default';
  import VCard from '@/components/Card';

  export default {
    /**
     * The name of the page.
     */
    name: 'home-index',

    /**
     * The components that the page can use.
     */
    components: {
      VLayout,
      VCard,
    },
  };
</script>
