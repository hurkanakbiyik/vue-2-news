<template>
  <v-layout>
    <v-card contextual-style="dark">
      <span slot="header">
        SHARE
      </span>
      <div slot="body" class="article">
        <div v-show="article" class="media rounded flex-column flex-md-row">
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
            <div class="sharebuttons btn-group">
              <a class="btn btn-like" target="_blank"><i class="fa fa-heart"></i></a>
              <a v-bind:href="'https://twitter.com/intent/tweet?text=' + article.description + ' ' + article.url" class="btn btn-twitter" target="_blank"><i class="fa fa-twitter"></i> <span>Tweet</span></a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=<?php the_permalink(); ?>" class="btn btn-facebook" target="_blank"><i class="fa fa-facebook"></i> <span>Share</span></a>
              <a href="https://plus.google.com/share?url=<?php the_permalink(); ?>" class="btn btn-google"><i class="fa fa-google-plus" target="_blank"></i> <span>Plus 1</span></a>
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=<?php the_permalink(); ?>&title=<?php the_title(); ?>&source=<?php the_title(); ?>" class="btn btn-linkedin"><i class="fa fa-linkedin" target="_blank"></i> <span>Link</span></a>
              <a href="https://pinterest.com/pin/create/button/?url=<?php the_permalink(); ?>&description=<?php bloginfo('description'); ?>&media=<?php echo $image[0]; ?>" class="btn btn-pinterest" target="_blank"><i class="fa fa-pinterest"></i> <span>Pin</span></a>
            </div>
          </div>
        </div>

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
   * Page where the user can view the Share information.
   */

  import VLayout from '@/layouts/Default';
  import VCard from '@/components/Card';

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
    },
    data() {
      return {
        article: {},
      };
    },
    methods: {
    },
    beforeMount() {
      this.article = {
        urlToImage: this.$route.query.urlToImage,
        title: this.$route.query.title,
        source: {
          name: this.$route.query.sourceName,
        },
        author: this.$route.query.author,
        description: this.$route.query.description,
        url: this.$route.query.url,
      };
    },
  };
</script>
