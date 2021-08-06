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
        <section class="section section-lg pt-lg-0 mt-5 pb-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <p class="text-dark">Peer Academic Advisors (PAAs) are an integral part of the advising community 
                        at Rice, and have been nationally recognized by the National Academic Advising Association (NACADA)! 
                        They are competitively selected and extensively trained by the Office of Academic Advising (OAA)
                        and serve their respective residential college community by providing peer advice to fellow 
                        students about a wide range of academically-related topics.</p>
                    </div>
                </div>
            </div>
        </section>
        <hr class="my-0" />
        <section class="section section-lg pt-lg-4">
            <div class="container justify-content-center text-center">
                <div class="row justify-content-center">
                    <tabs fill class="flex-column flex-md-row">
                        <tab-pane v-for="(type, index) in advisors" :key="index">
                            <span slot="title">
                                {{type.name}}
                            </span>
                            <div class="row justify-content-center">
                                <div class="col-lg-4 col-md-12 col-sm-12 my-3 paa-card" v-for="(member, index) in type.members" :key="index">
                                    <card class="border-0 text-center" hover shadow>
                                        <h6 class="font-weight-bold text-uppercase mt-3">{{member.name}}</h6>
                                        <p class="description smaller">{{member.email}}</p>
                                        <p>{{member.subjects.join(", ")}}</p>
                                    </card>
                                </div>
                            </div>
                        </tab-pane>
                    </tabs>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Tabs from '@/components/Tabs/Tabs';
import TabPane from '@/components/Tabs/TabPane';

import advisors from '@/data/acadvisors.data';

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

<style scoped>
@media only screen and (min-width: 768px) {
    .paa-card {
        min-width: 22rem;
    }
}
</style>