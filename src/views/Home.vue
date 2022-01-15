<template>
  <div>
    <v-container>
      <v-row>
        <v-col v-for="(bias, index) in biases" :key="index">
          <v-card class="mx-auto mt-5" max-width="344" :color="bias.color">
            <v-img
              :src="require(`@/assets/Images/${bias.id}.png`)"
              height="200px"
            ></v-img>

            <v-card-title> {{ bias.Name }} </v-card-title>

            <v-card-subtitle> {{ bias.Subtitle }} </v-card-subtitle>

            <v-card-actions>
              <v-btn color="" text> Learn More </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="bias.show = !bias.show">
                <v-icon>{{
                  bias.show ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="bias.show">
                <v-divider></v-divider>

                <v-card-text>
                  {{ bias.Definition }}
                </v-card-text>
                <p class="ml-5">
                  Watch a <v-icon class="mr-2">mdi-video-box</v-icon>
                  <a :href="bias.videolink">here </a>
                </p>
                <p class="ml-5">
                  Read a <v-icon class="mr-2">mdi-note-text-outline</v-icon>
                  <a :href="bias.paperlink">here</a>
                </p>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import * as d3 from "d3";
import * as _ from "lodash";
//const accent = d3.scaleOrdinal(d3.schemeAccent);
export default {
  data: () => ({
    pathtofile: "./biasesdata.csv",
    biases: [],
  }),
  methods: {
    loadData() {
      d3.csv(this.pathtofile).then((data) => {
        console.log(data);
        _.mapValues(data, (item) => {
          item.show = false;
          //item.color = ;
        });
        this.biases = data;
      });
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>

<style scoped>
p {
  margin: 0;
}
</style>
