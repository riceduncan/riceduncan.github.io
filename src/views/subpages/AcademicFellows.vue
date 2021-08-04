<template>
    <div class="fellow-page">
        <section class="section-people-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-default shape-skew alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container shape-container d-flex">
                <div class="col px-0">
                    <div class="row">
                        <div class="col-lg-6">
                            <h1 class="display-3 text-white">Academic Fellows
                            </h1>
                            <p class="lead text-white">The best and brightest students on campus, basically
                            experts in their fields. Schedule a session with one today!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg pt-lg-0 mt--200">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-12">
                                <card class="border-0" hover shadow body-classes="pt-5">
                                    <p>Stuck on chemistry homework? Don’t quite know how to start your physics 
                                    suggested problems? Are you totally lost in Math 102— and you have a test 
                                    in three days? The Academic Fellows are here to help!</p>
                                    <p>Each residential college has an Academic Fellows or Mentors Society: an 
                                    honorary service organization dedicated to enhancing the academic life in 
                                    the college. Academic Fellows at Duncan are sophomores, juniors, and seniors 
                                    who have been chosen to help you for their GPA, good judicial standing, 
                                    and commitment to mentoring. They can help you with anything, from studying 
                                    for midterms or revising a big paper to providing advice on subject-specific 
                                    internships and other extracurricular activities. You can find more information 
                                    about the Academic Fellows program in <a href="https://www.youtube.com/watch?v=auQOcthRVwQ">this short video</a> 
                                    and on the Office of Academic Advising’s webpage.</p>
                                    <p>This semester, your Academic Fellows will provide free academic assistance 
                                    on a regular basis through advertised review sessions, “office hours” through 
                                    Zoom, and individual tutoring by request. Traditionally, Academic Fellows 
                                    also host bi-weekly “Coffee in the Commons” help sessions on Sunday nights, 
                                    where you can find all the Fellows in one place, with coffee, snacks, and heaps 
                                    of knowledge -- and we'll be back with those next semester! Feel free to contact 
                                    us, and don’t be afraid to ask for help! You can also reach out to Head Fellows 
                                    Priyansh Lunia, Scott Lin, or Autumn Engebreston if you would like for them to 
                                    assist in matching you with a student in your major or subject area. We look 
                                    forward to working with you!</p>
                                </card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <hr class="my-0" />
        <section class="section section-lg pt-lg-4">
            <div class="container justify-content-center text-center">
                <div class="row justify-content-center">
                    <tabs fill class="flex-column flex-md-row">
                        <tab-pane v-for="(type, index) in fellows" :key="index">
                            <span slot="title">
                                {{type.name}}
                            </span>
                        </tab-pane>
                    </tabs>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Tabs from '../../components/Tabs/Tabs';
import TabPane from '../../components/Tabs/TabPane';

import fellows from '../../data/fellows.data';

export default {
  components: { Tabs, TabPane },
  data() {
    return {
      fellows: []
    }
  },
  created() {
    this.fellows = fellows
  }
}
</script>