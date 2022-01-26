<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <p>
            Interactive articles exploring different ideas in the field of
            <a
              href="https://journals.sagepub.com/doi/abs/10.1177/0266382115592536?journalCode=bira"
              >Heuristics and Biases</a
            >
          </p>
          <v-row>
            <router-link class="listitem" to="explorable">
              <v-hover v-slot="{ hover }">
                <v-list-item
                  :class="
                    hover
                      ? 'lime lighten-1 font-weight-bold'
                      : 'lime lighten-4 font-weight-bold'
                  "
                  three-line
                >
                  <v-list-item-content>
                    <v-list-item-title> Attentional Bias </v-list-item-title>
                    <v-list-item-subtitle
                      >Our perception about the world and subsequently our
                      decisions are heavily shaped by biases in how we pay
                      attention.
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-hover>
            </router-link>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a:hover {
  text-decoration: none;
}
</style>
