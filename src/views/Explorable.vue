<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col md="10">
          <div class="mx-auto text-center mb-4">
            <h2>Attentional Bias</h2>
          </div>
          <p>
            Have a look at this data about a particular symptom and a disease,
            from 90 patients in a hospital:
          </p>
          <v-row justify="center">
            <v-col md="5">
              <v-simple-table class="mytable ma-6" dense border="top">
                <thead>
                  <tr>
                    <th class="text-left"></th>
                    <th class="text-left subtitle-2">Disease Present</th>
                    <th class="text-left subtitle-2">Disease Absent</th>
                    <th v-if="showAnswer" class="text-left subtitle-2"></th>
                    <th v-if="showAnswer" class="text-left subtitle-2"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="subtitle-2">Symptom Present</td>
                    <td :class="{ color: flag }">37</td>
                    <td>17</td>
                  </tr>
                  <tr>
                    <td class="subtitle-2">Symptom Absent</td>
                    <td>23</td>
                    <td>13</td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-col>
          </v-row>
          <p>
            Does the table tell you any relationship between the existence of
            the symptom and the patience suffering from the disease? High
            correlation? Some correlation? No correlation? What do you think?
          </p>

          <v-radio-group v-model="radioValue">
            <v-radio
              v-for="option in options1"
              :key="option.value"
              :label="option.text"
              :value="option.value"
            ></v-radio>
          </v-radio-group>
          <v-btn outlined color="primary" @click="checkAnswer1"> Check </v-btn>
          <v-alert
            v-show="answer === '0'"
            class="ma-6"
            border="top"
            color="pink darken-1"
            dark
          >
            Oops, that's incorrect! (Try to find % of patients with and without
            symptoms, irrespective of presence of disease. Are the percentages
            similar?)
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
            et. al found that when a group of nurses were shown this data, 85%
            of them said that there was a relationship between the symptom and
            the disease.
          </p>
          <p>
            The reason for this incorrect conclusion is that people focus more
            on the
            <span @click="flag = true"><a href="#">top-left cell</a></span> of
            the table (Symptom Present/Disease Present). If both the symptom and
            the disease are frequently present in patients, people tend to see
            some relationship between the two. This overemphasis on a particular
            cell instead of paying attention to the other parts of the table
            causes them to conclude incorrectly.
          </p>
          <p>
            This study underscores a particular
            <a
              class="keyword"
              href="https://en.wikipedia.org/wiki/Heuristic_(psychology)"
              >heuristic</a
            >
            in human thinking. When we see a correlation between two entities,
            we have this strong urge to conclude some kind of causation. And one
            of the reasons for thinking correlation to be same as causation, is
            a bias known as
            <span>attentional bias</span>. Here's a decent description:
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
            Let's take a look at another example of this bias that I often see
            among people. If you ask people who believe in God, "Does God answer
            prayers?", they tend to mostly agree. They believe God answers
            prayers due to multiple reasons but one of them is this:
          </p>
          <blockquote>
            <p>
              Many times I've asked God for something and He's given it to me
            </p>
          </blockquote>
          <p>
            Now, are they being reasonable here? Or are they falling to the same
            trap that those 85% nurses fell into when looking for a relationship
            between the symptom and the disease? Let's just recreate the same
            table as above:
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
            </v-col>
          </v-row>

          <p>
            A theist when answering the question, primarily focuses on the
            top-left cell (Prayed and My want satisfied). Of course there is no
            such table in their mind but it is a simple heuristic that their
            mind uses to validate their cherished beliefs (that God exists). To
            be clear, a motivated atheist would do a similar thing, but instead
            of focusing only on the top-left cell, they would focus only on the
            bottom-left cell (Prayed and want not satisfied).
          </p>
          <p>
            Although the two questions above underscore the same bias, you will
            notice that there is an important difference between the two. We are
            more vulnerable to attentional bias, when we have an emotional need
            for a particular answer to be true. Most people don't really care if
            there is a relationship between the symptom and disease but they
            care a lot (and strongly hope) that the answer to "Does God answer
            my prayers" is yes. This difference in hope (and prior expectation)
            for an answer makes us more readily fall for this bias.
          </p>
          <p>Let's look at a thought experiment to hone in on this point.</p>
          <p>
            Imagine that you really like a political leader. She promises to
            work on and make progress on many issues that are important to you.
            She wins the election and becomes the President or Prime Minister of
            your country. During her tenure, she avoids any big scandals but
            when it comes to actual work, she only gets around to addressing
            only two of your demands. In fact, she also ends up making progress
            on few issues you didn't support. Re-election time comes around.
            What do you think your mind will do when trying to decide whether to
            vote for her or not? Think about it for few seconds and then
            <span class="keyword" @click="showPara = true">click here.</span
            ><span v-show="showPara">
              Chances are that it will attach much higher weight to the top-left
              cell of that table (My Demands + She Fulfilled). In this case
              though, your mind focuses on that part of the table not just
              because of attentional bias but also because that top-left cell
              provides emotional comfort. You want to believe that the
              politician worked on your issues and cares about you. You want to
              believe that you made the right decision when you supported her
              last time. In short, attentional bias becomes much more potent
              when combined with confirmation bias.</span
            >
          </p>
          <h5>Attentional bias in anxiety</h5>
          <p>
            Attentional bias is also shown to be exhibited by people with high
            levels of anxiety. Multiple studies have found that clinically
            anxious people pay more attention towards "threat cues" than normal
            people. They have a tendency to interpret ambiguous (neutral for
            most people) information in a threatening manner and also happen to
            have an increased propensity to remember dangerous experiences. This
            bias can then create a positive feedback loop for someone with
            clinical anxiety. More attention towards threatening cues leads to
            more anxiety which in turn makes their attention more biased towards
            threatening cues (which then further increases anxiety).
          </p>
          <h5>Attentional bias in our cravings?</h5>
          <p>
            Our environment plays a huge role in manipulating our behavior. This
            manipulation becomes clear whenever we enter a grocery store. We
            arrive with healthy intentions to avoid buying junk food but once
            the
            <a href="https://www.lesswrong.com/tag/superstimuli"
              >Superstimuli</a
            >
            starts entering our vision, we find it hard to control ourselves.
            This is especially true for items that we promise ourselves to not
            buy (chips, ice cream etc.) But it is not just the grocery store
            itself that is trying to entice you. Our minds develop a bias
            towards our cravings and we tend to notice them more than the items
            we don't actively crave (fruits for instance). Researchers have
            extesively studied attentional bias in addictive behavior using
            clever techniques like
            <a href="https://en.wikipedia.org/wiki/Stroop_effect"
              >Stroop effect
            </a>
            and
            <a href="https://en.wikipedia.org/wiki/Dot-probe_paradigm"
              >Dot-probe paradigm</a
            >. Consistently, results show that smokers and drug users in general
            develop attentional bias which makes it harder for them to let go of
            their addiction.
          </p>
          <blockquote>
            <p>
              Drug addiction is also an example of attentional bias in that
              certain memories or objects can prompt intense cravings for one's
              drug of choice. It is easier for individuals who experience this
              to relapse and begin their drug use again, because the urges given
              off by that initial stimuli can prove to be too strong to curb
            </p>
          </blockquote>
          <hr />
          <h5>References</h5>
          <ol style="list-style: decimal inside">
            <li>
              <a href="https://en.wikipedia.org/wiki/Attentional_bias"
                >Wikipedia page for Attentional Bias</a
              >
            </li>
            <li>
              <a href="https://psycnet.apa.org/record/2019-52029-012"
                >American Psychological Association's definition of "attention
                bias" is useful in understanding anxiety</a
              >
            </li>
            <li>
              <a
                href="https://sci-hub.ru/https://doi.org/10.1016/s0005-7967(98)00063-1"
                >Paper that reviews different models for understanding
                attentional bias in anxiety</a
              >
            </li>
          </ol>
        </v-col>
        <v-col>
          <v-row>
            <v-card class="card1" max-width="200" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="text-overline">Heuristic</div>
                  A process by which humans use mental short cuts to arrive at
                  decisions.
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-row>
          <v-row>
            <v-card class="card2" max-width="200" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="text-overline" style="font-size: 11px !important">
                    Confirmation Bias
                  </div>
                  tendency to search for, interpret, favor, and recall
                  information in a way that confirms or supports one's prior
                  beliefs or values.
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-row>
          <v-row>
            <v-card class="card3" max-width="200" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="text-overline" style="font-size: 11px !important">
                    AB + Anxiety
                  </div>
                  People who worry a lot have attentional biases toward
                  threatening cues. This makes them anticipate catastrophic
                  outcomes way more than normal people.
                </v-list-item-content>
              </v-list-item>
            </v-card>
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
      flag: false,
      showPara: false,
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
.color {
  background: rgb(167, 81, 81);
}
.card1 {
  margin-top: 750px;
  margin-left: 15px;
  font-size: 12px;
}
.card2 {
  margin-top: 1000px;
  margin-left: 15px;
  font-size: 12px;
}
.card3 {
  margin-top: 260px;
  margin-left: 15px;
  font-size: 12px;
}
.list-group {
  list-style: decimal inside;
}

.list-group-item {
  display: list-item;
}
.keyword {
  font-weight: bold;
  color: steelblue;
}
</style>
