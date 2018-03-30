<template>
  <v-layout>
    <grid-loader v-show="$store.state.headline.loading === true"></grid-loader>
    <v-card contextual-style="dark">
      <span slot="header">
        HEADLINES
      </span>
      <div slot="body">
        <div class="col">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Search for..."
                   v-model="searchParam" v-on:keyup.enter="searchHeadlines">
            <span class="input-group-btn">
              <button v-on:click="searchHeadlines" class="btn btn-secondary" type="button">
                <i class="fa fa-search"></i>
              </button>
            </span>
          </div>
        </div>
        <ul class="article list-unstyled d-flex flex-column">
          <li v-on:click="goShare(article)" class="p-3" v-for="article in $store.state.headline.list">
            <div class="media rounded flex-column flex-md-row">
              <div class="d-flex">
                <img class="align-self-center mr-3"
                     v-bind:src="article.urlToImage" alt="Generic placeholder image">
              </div>
              <div class="p-2">
                <h5 class="mt-0 mb-1">{{article.title}}</h5>
                <div class="d-inline-flex flex-wrap text-center">
                  <span class="bg-dark text-white rounded border px-3 py-1">{{article.source.name}}</span>
                  <span class="bg-info text-white font-weight-bold rounded border px-3 py-1">{{article.author}}</span>
                </div>
                <p>
                  {{article.description}}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div slot="footer">
      </div>
    </v-card>
  </v-layout>
</template>

<script>
  /* ============
   * Headline Index Page
   * ============
   *
   * Page where the user can view the Headline information.
   */

  import VLayout from '@/layouts/Default';
  import VCard from '@/components/Card';
  import GridLoader from '@/components/GridLoader/GridLoader';

  export default {
    /**
     * The name of the page.
     */
    name: 'headline-index',

    /**
     * The components that the page can use.
     */
    components: {
      VLayout,
      VCard,
      GridLoader,
    },
    data() {
      return {
        searchParam: '',
      };
    },
    methods: {
      goShare(article) {
        const routeData = this.$router.resolve({
          name: 'share.index',
          query: {
            urlToImage: article.urlToImage,
            title: article.title,
            sourceName: article.source.name,
            author: article.author,
            description: article.description,
            url: article.url,
          },
        });
        window.open(routeData.href, '_blank');
      },
      loadHeadlines() {
        const sources = this.$route.query.sourceId;
        this.$store.dispatch('headline/all', { sources });
      },
      searchHeadlines() {
        const sources = this.$route.query.sourceId;
        this.$store.dispatch('headline/all', { sources, q: this.searchParam, sortBy: 'popularity' });
      },
    },
    beforeMount() {
      this.loadHeadlines();
    },
  };
</script>
