<template>
    <div class="faq-page">
        <section class="section-faq-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
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
                            <h1 class="display-3 text-white">Frequently Asked Questions
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
                        <div class="row row-grid justify-content-center">
                            <div class="col-lg-6 mb-3" v-for="(question, index) in questions" :key="index">
                                <card class="border-0 faq" hover shadow body-classes="py-5">
                                    <h6 class="text-uppercase font-weight-bold">{{ question.question }}</h6>
                                    <p class="description mt-3">{{ question.answer }}</p>
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
import faq from '../../data/faq.data';

export default {
  data() {
    return {
      questions: []
    }
  },
  created() {
    this.questions = faq
  }
}
</script>

<style scoped>
.faq {
    min-height: 15rem;
}
</style>
