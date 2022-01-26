<template>
  <v-app>
    <v-app-bar app color="indigo darken-1" dark>
      <div class="d-flex align-center"></div>

      <v-spacer class="sitename"
        ><a href="/" class="sitename">Teach Me A Bias</a>
      </v-spacer>

      <v-spacer class="sitename"
        ><a href="/articles" class="sitename">Articles</a>
      </v-spacer>
      <v-btn
        href="https://en.wikipedia.org/wiki/List_of_cognitive_biases"
        target="_blank"
        text
      >
        <span class="mr-2">Resources</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.sitename {
  font-family: fantasy;
  font-size: 20px;
  font-weight: bold;
  color: snow;
}
a {
  color: snow;
}
</style>
