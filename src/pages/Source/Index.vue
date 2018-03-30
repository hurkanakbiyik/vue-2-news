<template>
  <v-layout>
    <grid-loader v-show="$store.state.source.loading === true"></grid-loader>
    <v-card contextual-style="dark">
      <span slot="header">
        NEWS SOURCES
      </span>
      <div slot="body">
        <ul class="source list-unstyled row flex-wrap">
          <li v-on:click="goHeadlines(source)" class="col-sm-12 col-md-6 col-lg-3 p-3" v-for="source in $store.state.source.list">
            <div class="media rounded">
              <img style="width: 64px;height: 64px;" class="align-self-center mx-3 rounded-circle"
                   v-bind:src="'https://besticon-demo.herokuapp.com/icon?url=' +source.url+'&size=70..120..200'"
                   alt="Generic placeholder image">
              <div class="media-body align-self-center">
                <h5 class="mt-0 mb-1">{{source.name}}</h5>
                <span class="bg-dark text-white rounded border px-3 py-1">{{source.category}}</span>
                <p>
                  {{source.description}}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div slot="footer">
        <div v-show="$store.state.source.error === true" class="alert alert-danger" role="alert">
          <strong>Oh snap!</strong> Change a few things up and try submitting again.
        </div>
      </div>
    </v-card>
  </v-layout>
</template>

<script>
  /* ============
   * Source Index Page
   * ============
   *
   * Page where the user can view the source information.
   */

  import VLayout from '@/layouts/Default';
  import VCard from '@/components/Card';
  import GridLoader from '@/components/GridLoader/GridLoader';
  import Vue from 'vue';

  export default {
    /**
     * The name of the page.
     */
    name: 'source-index',

    /**
     * The components that the page can use.
     */
    components: {
      VLayout,
      VCard,
      GridLoader,
    },
    methods: {
      loadSources() {
        this.$store.dispatch('source/all');
      },
      goHeadlines(source) {
        this.$store.dispatch('source/all');
        Vue.router.push({
          name: 'headline.index',
          query: { sourceId: source.id },
        });
      },
    },
    beforeMount() {
      this.loadSources();
    },
  };
</script>
