<template>
    <div class="rha-page">
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
                            <h1 class="display-3 text-white">Resident Health Advisors
                            </h1>
                            <p class="lead text-white">Feeling unwell? Need health supplies? Talk to
                            one of our RHAs!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg pt-lg-0 mt-5 pb-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <p class="text-dark">Rice Health Advisors, or RHAs, are students who have been trained 
                        on a variety of wellbeing topics, and are here to support you and your mental and physical 
                        wellbeing. These students work at their college to provide health education opportunities, 
                        peer guidance, and act as liaisons between the Student Wellbeing Office and the residential 
                        colleges. Feel free to talk to them, or contact them, if you need some guidance, need 
                        health supplies, or just want to chat!</p>
                    </div>
                </div>
            </div>
        </section>
        <hr class="my-0" />
        <section class="section section-lg pt-lg-4">
            <div class="container justify-content-center text-center">
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-md-12 col-sm-12 my-3" v-for="(member, index) in rha" :key="index">
                        <card class="border-0 text-center" hover shadow>
                            <h6 class="font-weight-bold text-uppercase mt-3">{{member.name}}</h6>
                            <p class="description smaller">{{member.email}}</p>
                            <p class="description smaller">{{member.year}}</p>
                        </card>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Tabs from '@/components/Tabs/Tabs';
import TabPane from '@/components/Tabs/TabPane';

import rha from '@/data/rha.data';

export default {
  components: { Tabs, TabPane },
  data() {
    return {
      rha: []
    }
  },
  created() {
    this.rha = rha
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