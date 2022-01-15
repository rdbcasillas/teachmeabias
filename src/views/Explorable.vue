<template>
  <div>
    <v-container>
      <v-row>
        <v-col md="10">
          <div class="mx-auto text-center mb-4">
            <h2>Attentional Bias</h2>
          </div>
          <p>
            The following table captures numbers from 100 patients in a
            hospital:
          </p>
          <v-row justify="center">
            <v-col md="5">
              <v-simple-table class="mytable ma-6" dense border="top">
                <thead>
                  <tr>
                    <th class="text-left"></th>
                    <th class="text-left subtitle-2">Disease Present</th>
                    <th class="text-left subtitle-2">Disease Absent</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="subtitle-2">Symptom Present</td>
                    <td>37</td>
                    <td>17</td>
                  </tr>
                  <tr>
                    <td class="subtitle-2">Symptom Absent</td>
                    <td>33</td>
                    <td>13</td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-col>
          </v-row>
          <p>
            Does the table tell you any correlation between the Symptom and the
            Disease? High correlation? Some correlation? No correlation? What do
            you think?
          </p>

          <v-radio-group v-model="radioValue">
            <v-radio
              v-for="option in options1"
              :key="option.value"
              :label="option.text"
              :value="option.value"
            ></v-radio>
          </v-radio-group>
          <v-btn outlined color="primary" @click="checkAnswer1"> Check! </v-btn>
          <v-alert
            v-show="answer === '0'"
            class="ma-6"
            border="top"
            color="pink darken-1"
            dark
          >
            Oops, that's incorrect!
          </v-alert>
          <v-alert
            v-show="answer === '1'"
            class="ma-6"
            border="top"
            color="green lighten-2"
            dark
          >
            You were right!
          </v-alert>
          <p class="mt-6">
            Multiple studies have highlighted that when people are shown a table
            like this, they do find some correlation. For instance, Smedslund
            et. al found that 85% of the nurses said that there was a
            relationship between the symptom and the disease.
          </p>
          <p>
            The reason for responding incorrectly to this problem is that people
            focus more on top-left cell of the table (Disease/Symptom Present).
            If the symptom and disease are both frequently present, people think
            there is some relationship. Their overemphasis on a particular cell
            instead of paying attention to the whole table causes them to
            conclude incorrectly.
          </p>
          <p>
            When we see a correlation between two entities, we have this strong
            urge to conclude some kind of causation. And the reason for thinking
            correlation = causation, is a common bias:
            <span>attentional bias</span>. Here's a decent description of this
            bias:
          </p>
          <div>
            <blockquote>
              <p>
                Attentional bias refers to how a person's perception is affected
                by selective factors in their attention. Attentional biases may
                explain an individual's failure to consider alternative
                possibilities when occupied with an existing train of
                thought.For example, cigarette smokers have been shown to
                possess an attentional bias for smoking-related cues around
                them, due to their brain's altered reward sensitivity
              </p>
            </blockquote>
          </div>
          <p>
            Let's take a look at another example of this bias that I see often
            in the real world. If you ask people who believe in God, "Does God
            answer prayers?", they tend to mostly agree. They believe God
            answers prayers due to multiple reasons but one of them is this:
          </p>
          <blockquote>
            <p>
              Many times I've asked God for something and He's given it to me
            </p>
          </blockquote>
          <p>
            Now, are they being reasonable here? Or are they falling in the same
            trap that those 85% nurses fell into when looking for correlation
            between the symptom and the disease? Well, we can just fill up our
            table with new values:
          </p>

          <v-row justify="center">
            <v-col md="7">
              <v-simple-table class="mytable ma-6" dense border="top">
                <thead>
                  <tr>
                    <th class="text-left"></th>
                    <th class="text-left subtitle-2">
                      Prayed to God for my want
                    </th>
                    <th class="text-left subtitle-2">
                      Did not pray to God for my want
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="subtitle-2">My want satisfied</td>
                    <td>45</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td class="subtitle-2">My want not satisfied</td>
                    <td>20</td>
                    <td>12</td>
                  </tr>
                </tbody>
              </v-simple-table>
              <p>
                A theist when answering the question, primarily focuses on the
                top-left cell (Prayed and My want satisfied). Of course there is
                no such table in their minds but it is a simple heuristic that
                their minds use to validate their cherished beliefs. To be
                clear, a motivated atheist would do a similar thing, but instead
                of focusing only on the top-left cell, they would focus only on
                the bottom-left cell (Prayed and want not satisfied).
              </p>
              <p></p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radioValue: 1,
      answer: "",
      options1: [
        { text: "High Correlation", value: 1 },
        { text: "Some Correlation", value: 2 },
        { text: "No Correlation", value: 3 },
      ],
    };
  },
  methods: {
    checkAnswer1() {
      if (this.radioValue == 3) {
        this.answer = "1";
      } else {
        this.answer = "0";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  font-size: 1.1rem;
}
.mytable {
  border: 1px solid grey;
}
span {
  font-weight: bold;
}
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400italic);
blockquote {
  font-size: 1.4em;
  width: 60%;
  margin: 50px auto;
  font-family: Open Sans;
  font-style: italic;
  color: #555555;
  padding: 1.2em 30px 1.2em 75px;
  border-left: 8px solid #78c0a8;
  line-height: 1.6;
  position: relative;
  background: #ededed;
}

blockquote::before {
  font-family: Arial;
  content: "\201C";
  color: #78c0a8;
  font-size: 4em;
  position: absolute;
  left: 10px;
  top: -10px;
}

blockquote::after {
  content: "";
}

blockquote span {
  display: block;
  color: #333333;
  font-style: normal;
  font-weight: bold;
  margin-top: 1em;
}
</style>
