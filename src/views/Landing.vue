<template>
    <div>

        <div class="position-relative">
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <div class="shape shape-style-1 shape-default shape-skew">
                    <span></span>
                    <span></span>
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
                                <h1 class="display-3 text-white">Welcome to Duncan
                                    <span>Welcome Home</span>
                                </h1>
                                <p class="lead text-white"><em>Somos Equipos, Somos Familia.</em>
                                Whether online or in-person, we are always one team, one family.</p>
                                <div class="btn-wrapper">
                                    <base-button class="mb-3 mb-sm-0"
                                                 type="white"
                                                 icon="fa fa-calendar">
                                        <router-link to="/login">O-Week</router-link>
                                    </base-button>
                                    <base-button class="mb-3 mb-sm-0"
                                                 type="white"
                                                 icon="fa fa-pencil">
                                        <router-link to="/login">Reservations</router-link>
                                    </base-button>
                                    <base-button class="mb-3 mb-sm-0"
                                                 type="white"
                                                 icon="fa fa-phone">
                                        <router-link to="/login">Contact</router-link>
                                    </base-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <section class="section section-lg pt-lg-0 mt--200">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-12">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <b-carousel controls indicators>
                                        <b-carousel-slide img-src="img/carousel/all.jpg"></b-carousel-slide>
                                        <b-carousel-slide img-src="img/carousel/group.jpg"></b-carousel-slide>
                                        <b-carousel-slide img-src="img/carousel/kangaroo.jpg"></b-carousel-slide>
                                    </b-carousel>
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
export default {
  name: "home",
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
};
</script>
