<template>
    <div>
        <div class="position-relative">
            <section class="section-shaped my-0 mx-5 section-lg mt-3">
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
                                                 type="warning">
                                        <router-link to="/login" class="text-white">Explore Our College</router-link>
                                    </base-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <section class="section section-lg pt-lg-0 mx-5 mt-5">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4 d-flex align-items-center justify-content-center">
                                <h1 class="font-weight-bold text-center"> Black Lives Matter </h1>
                            </div>
                            <div class="col-lg-4 d-flex align-items-center text-left">
                                <span class="text-muted">"<em>To be silent is to be complicit, and we as a college will not stay silent
                                on issues that affect our family and the Black community.</em>"</span>
                            </div>
                            <div class="col-lg-4 d-flex align-items-center justify-content-center">
                                <button class="btn btn-dark mb-sm-0" @click="modals.blm = true">
                                    <span class="text-white">Read Full Statement</span>
                                </button>
                                <modal :show.sync="modals.blm" :modalClasses="'modal-lg'">
                                    <template slot="header">
                                        <h3 class="modal-title">Black Lives Matter</h3>
                                    </template>
                                    <div>
                                        <p>
                                            To the Duncan Family,
                                        </p>
                                        <p>
                                            The recent surfacing of the senseless killings of George Floyd, Ahmaud Aubrey, Breonna Taylor and several 
                                            others have further emphasized the issues of racial inequality that our country has and continues to face. 
                                            As a community, we are deeply impacted by these tragedies and the reminder they bring of the social injustice 
                                            that exists in the world and in the Rice community.
                                        </p>
                                        <p>
                                            We strive to raise awareness for these injustices and are dedicated to starting within our residential college. 
                                            We write this to state that Duncan is committed to creating an environment that values and supports our Black 
                                            Duncaroos. We are challenging our non-Black Duncaroos to commit to being anti-racist, inclusive, and unwavering 
                                            in their allyship. We will have zero tolerance for discrimination and will make efforts to amplify Black voices 
                                            and encourage inclusivity.
                                        </p>
                                        <p>
                                            We understand that this burden is not for Black Americans to take alone. We stand in active solidarity with the 
                                            Black community. We realize that many of our fellow Black Duncaroos are grieving and exhausted from taking on 
                                            this fight alone. It is up to us to stand with our peers and promise to extend allyship beyond our words. With 
                                            this in mind, we have included a <a class="font-weight-bold" href="https://docs.google.com/document/d/13BkbPEdAuDS0brRYgEkS9nfIsk-NgNMuIXc6cyXva1A/edit">
                                            thorough list of resources</a> to do that. We encourage you to review all contents of this document. We understand 
                                            the work that it will take to fix the problems of racism in this country, but we also understand that change starts 
                                            with action. This document is full of ways to actively support the Black community and improve allyship through 
                                            education, voting, signing petitions and much more.
                                        </p>
                                        <p>
                                            To be silent is to be complicit, and we as a college will not stay silent on issues that affect our family and 
                                            the Black community.
                                        </p>
                                        <p>
                                            Somos Equipos, Somos Familia
                                        </p>
                                    </div>
                                </modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg pt-lg-0">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4">
                                <card class="border-0 text-center" hover shadow body-classes="py-5">
                                    <icon name="ni ni-favourite-28" type="warning" rounded class="mb-4">
                                    </icon>
                                    <h6 class="font-weight-bold text-uppercase">Explore O-Week</h6>
                                    <p class="description mt-3">Access all O-Week resources such as move-in instructions, 
                                      the packing list, and the 2020 O-Week book.</p>
                                    <base-button type="success" class="mt-4">
                                        <router-link to="/about/faq" class="text-white">Let's Go!</router-link>
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0 text-center" hover shadow body-classes="py-5">
                                    <icon name="ni ni-calendar-grid-58" type="warning" rounded class="mb-4">
                                    </icon>
                                    <h6 class="font-weight-bold text-uppercase">Reserve a Room</h6>
                                    <p class="description mt-3">Go to the room reservation form to reserve a space for
                                      gatherings, large and small.</p>
                                    <base-button type="success" class="mt-4">
                                        <a href="https://duncancollege.skedda.com/booking" class="text-white">Continue To Form</a>
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0 text-center" hover shadow body-classes="py-5">
                                    <icon name="ni ni-controller" type="warning" rounded class="mb-4">
                                    </icon>
                                    <h6 class="font-weight-bold text-uppercase">Look For Events</h6>
                                    <p class="description mt-3">Check out what's in store for Duncaroos, featuring 
                                        everything from movie and game nights to FITQs!</p>
                                    <base-button type="success" class="mt-4">
                                        <a href="https://calendar.google.com/calendar/embed?src=ntl9mmnbh7i9mtug1naihr78mk%40group.calendar.google.com&ctz=America%2FChicago"
                                           class="text-white">Find Out More</a>
                                    </base-button>
                                </card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <hr class="my-0" />
        <section class="section section-lg pt-lg-4 mt-5">
            <div class="container justify-content-center">
                <b-carousel controls indicators :interval="0" ref="carousel">
                    <b-carousel-slide img-src="img/carousel/all.jpg"></b-carousel-slide>
                    <b-carousel-slide img-src="img/carousel/group.jpg"></b-carousel-slide>
                    <b-carousel-slide img-src="img/carousel/kangaroo.jpg"></b-carousel-slide>
                </b-carousel>
            </div>
        </section>
    </div>
</template>

<script>
import Modal from '@/components/Modal';

export default {
  components: { Modal },
  data() {
    return {
      modals: { blm: false }
    }
  },
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
