<template>
    <div class="traditions-page">
        <section class="section-traditions-cover section-shaped my-0">
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
                            <h1 class="display-3 text-white">Duncan Traditions
                            </h1>
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
                            <div class="col-lg-4 mb-3" v-for="(tradition, index) in traditions" :key="index">
                                <card class="border-0 tradition" hover shadow body-classes="py-5">
                                    <icon :name="tradition.icon" :type="index % 2 == 0 ? 'warning' : 'success'" rounded class="mb-4">
                                    </icon>
                                    <h6 :class="index % 2 == 0 ? 'text-warning text-uppercase' : 'text-success text-uppercase'">{{ tradition.name }}</h6>
                                    <p class="description mt-3">{{ tradition.description }}</p>
                                </card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import traditions from '../../data/traditions.data';

export default {
  data() {
    return {
      traditions: []
    }
  },
  created() {
    this.traditions = traditions
  }
}
</script>

<style scoped>
.tradition {
    min-height: 30rem;
}
</style>
