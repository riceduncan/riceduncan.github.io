<template>
    <div class="paa-page">
        <section class="section-people-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-default alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container shape-container d-flex py-5">
                <div class="col px-0">
                    <div class="row">
                        <div class="col-lg-6">
                            <h1 class="display-3 text-white">Academic Advising
                            </h1>
                            <p class="lead text-white">Overwhelmed by four years of classes? Confused about majors?
                            Schedule a session with an academic advisor today!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg pt-lg-4 mt-5">
            <div class="container justify-content-center text-center">
                <div class="row justify-content-center">
                    <tabs fill class="flex-column flex-md-row">
                        <tab-pane v-for="(type, index) in advisors" :key="index">
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

import advisors from '../../data/advisors.data';

export default {
  components: { Tabs, TabPane },
  data() {
    return {
      advisors: []
    }
  },
  created() {
    this.advisors = advisors
  }
}
</script>