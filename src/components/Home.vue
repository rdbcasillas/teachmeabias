<template>
  <div>
    <v-card class="mx-auto mt-5" max-width="344">
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        height="200px"
      ></v-img>

      <v-card-title> Fundamental Attribution Error </v-card-title>

      <v-card-subtitle> Environment >>> Personality </v-card-subtitle>

      <v-card-actions>
        <v-btn color="orange lighten-2" text> Learn More </v-btn>

        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            Tendency for people to under-emphasize situational and environmental
            explanations for an individual's observed behavior while
            over-emphasizing dispositional and personality-based explanations.
          </v-card-text>
          <p class="ml-5">
            Watch a <v-icon class="mr-2">mdi-video-box</v-icon>
            <a href="google.com">here </a>
          </p>
          <p class="ml-5">
            Read a <v-icon class="mr-2">mdi-note-text-outline</v-icon>
            <a href="google.com">here</a>
          </p>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: false,
  }),
};
</script>

<style scoped>
p {
  margin: 0;
}
</style>
