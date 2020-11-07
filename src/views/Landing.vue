<template>
    <div>
        <div class="position-relative">
            <section class="section-shaped my-0 mx-5 section-lg">
                <div class="shape shape-style-1 splash">
                </div>
                <div class="container shape-container d-flex">
                    <div class="col px-0">
                        <div class="row">
                            <div class="col-lg-6">
                                <h1 class="display-3 text-white">Welcome to Duncan
                                    <span>Welcome Home</span>
                                </h1>
                                <p class="lead text-white"><em>Somos Equipos, Somos Familia.</em>
                                Whether online or in-person, we are always one team, one family.</p>
                                <div class="btn-wrapper">
                                    <base-button class="mb-3 mb-sm-0"
                                                 type="white">
                                        <router-link to="/login">Explore Our College</router-link>
                                    </base-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <section class="section section-lg pt-lg-0 mt-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-check-bold" type="primary" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-primary text-uppercase">Download Argon</h6>
                                    <p class="description mt-3">Argon is a great free UI package based on Bootstrap 4
                                        that includes the most important components and features.</p>
                                    <div>
                                        <badge type="primary" rounded>design</badge>
                                        <badge type="primary" rounded>system</badge>
                                        <badge type="primary" rounded>creative</badge>
                                    </div>
                                    <base-button tag="a" href="#" type="primary" class="mt-4">
                                        Learn more
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-istanbul" type="success" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-success text-uppercase">Build Something</h6>
                                    <p class="description mt-3">Argon is a great free UI package based on Bootstrap
                                        4 that includes the most important components and features.</p>
                                    <div>
                                        <badge type="success" rounded>business</badge>
                                        <badge type="success" rounded>vision</badge>
                                        <badge type="success" rounded>success</badge>
                                    </div>
                                    <base-button tag="a" href="#" type="success" class="mt-4">
                                        Learn more
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-planet" type="warning" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-warning text-uppercase">Prepare Launch</h6>
                                    <p class="description mt-3">Argon is a great free UI package based on Bootstrap
                                        4 that includes the most important components and features.</p>
                                    <div>
                                        <badge type="warning" rounded>marketing</badge>
                                        <badge type="warning" rounded>product</badge>
                                        <badge type="warning" rounded>launch</badge>
                                    </div>
                                    <base-button tag="a" href="#" type="warning" class="mt-4">
                                        Learn more
                                    </base-button>
                                </card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <hr />
        <section class="section section-lg pt-lg-4 mt-5">
            <div class="container justify-content-center">
                <b-carousel indicators :interval="0" ref="carousel">
                    <b-carousel-slide img-src="img/carousel/all.jpg"></b-carousel-slide>
                    <b-carousel-slide img-src="img/carousel/group.jpg"></b-carousel-slide>
                    <b-carousel-slide img-src="img/carousel/kangaroo.jpg"></b-carousel-slide>
                </b-carousel>
                <div class="d-flex justify-content-center">
                    <base-button type="warning" class="mt-4" icon="ni ni-bold-left" @click="this.incrCarousel"></base-button>
                    <base-button type="warning" class="mt-4" icon="ni ni-bold-right" @click="this.decrCarousel"></base-button>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
  methods: {
    incrCarousel() {
      this.$refs.carousel.prev()
    },
    decrCarousel() {
      this.$refs.carousel.next()
    }
  }
};
</script>

<style scoped>
.splash {
    background-image: url("../../public/img/splash.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: inset 0 0 0 45rem rgba(0,0,0,.6);
}

.section-green {
    background: #b8deb8;
}
</style>
