<template>
    <div class="bg-oweek">
        <section class="section-lg splash">
            <img :src="require('../../public/img/oweek/network.png')" class="network" />
            <div class="container-fluid d-flex mt-5">
                <div class="col px-0">
                    <div class="row justify-content-center">
                        <div class="col-sm-12 col-md-1"></div>
                        <div class="col-md-5 col-sm-12 d-flex align-items-center justify-content-center mb-4">
                            <card class="px-5 pb-4 pt-3" shadow>
                                <img :src="require('../../public/img/oweek/logo.png')" class="logo d-block mx-auto mb-4" />
                                <b-nav vertical class="text-center mb-3">
                                    <b-nav-item class="nav-item">
                                        <router-link to="/oweek/theme" class="nav-link">Theme</router-link>
                                    </b-nav-item>
                                    <b-nav-item class="nav-item">
                                        <router-link to="/oweek/coords" class="nav-link">Coordinators</router-link>
                                    </b-nav-item>
                                    <!-- <b-nav-item class="nav-item">Advisors & Groups</b-nav-item> -->
                                    <b-nav-item class="nav-item">
                                        <router-link to="/oweek/room" class="nav-link">Tour of Duncan</router-link>
                                    </b-nav-item>
                                    <!-- <b-nav-item class="nav-item">
                                        <router-link to="/oweek/movein" class="nav-link">Move-In Instructions</router-link>
                                    </b-nav-item> -->
                                    <!-- <b-nav-item class="nav-item">O-Week Book</b-nav-item> -->
                                    <b-nav-item class="nav-item">
                                        <router-link to="/oweek/contact" class="nav-link">Contact Us</router-link>
                                    </b-nav-item>
                                </b-nav>
                                <span class="text-center">
                                  <small><em>psst...<br/>this page will update as you get more info...<br/>keep checking back for more</em></small>
                                </span>
                            </card>
                        </div>
                        <div class="col-md-5 col-sm-12 d-flex align-items-center justify-content-center">
                            <transition name="custom-classes-transition"
                              enter-active-class="animate__animated animate__lightSpeedInLeft">
                                <div class="titles" v-if="countdownstr">
                                    <h1 class="display-1 robotic">MetrO-Week '21</h1>
                                    <h3 class="font-weight-normal display-4 mb-5">The Journey Begins Here</h3>

                                    <span class="lead">We leave the station in approximately...</span>
                                    <h1 class="display-1">{{ countdownstr }}</h1>
                                </div>
                            </transition>
                        </div>
                        <div class="col-sm-12 col-md-1"></div>
                    </div>
                </div>
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
      modals: { blm: false },
      timer: null,
      countdownstr: ""
    }
  },
  created() {
    this.timer = setInterval(this.computeTimeRemaining, 1000)
  },
  methods: {
    computeTimeRemaining() {
      let oweek = new Date("Aug 15, 2021 00:00:01").getTime()
      let now = new Date().getTime()
      let dt = oweek - now

      if (dt < 0) { // if oweek has started
        clearInterval(timer)
        this.countdownstr = "00:00:00:00"
        return
      }

      let units = [0, 0, 0, 0]
      units[0] = Math.floor(dt / (1000 * 60 * 60 * 24)) // days
      units[1] = Math.floor((dt % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) // hours
      units[2] = Math.floor((dt % (1000 * 60 * 60)) / (1000 * 60)) // minutes
      units[3] = Math.floor((dt % (1000 * 60)) / 1000) // seconds

      this.buildCountdownString(units)
    },
    buildCountdownString(time) {
      this.countdownstr = this.padNumber(time[0]) + ":" + this.padNumber(time[1]) + ":"
        + this.padNumber(time[2]) + ":" + this.padNumber(time[3])
    },
    padNumber(number) {
      if (number < 10) return "0" + number.toString()
      else return number.toString()
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@600&display=swap');

.splash {
  height: 100vh;
  display: flex;
  align-items: center;
}

.splashimg {
  height: 70vh;
}

.robotic {
  font-family: 'Exo', sans-serif;
  font-size: 5rem;
  color: #000;
}

.network {
  position: fixed;
  z-index: -1;
  margin-top: 5rem;
  margin-right: 7rem;
  height: 70rem;
  right: 0;
  opacity: .75;
}

.nav-item {
  font-size: 1.5rem;
}

.text-black {
  color: #000;
}

.logo {
  width: 5rem;
}

@media only screen and (max-width: 576px) {
  .titles {
    text-align: center;
  }

  .bg-oweek {
    padding-top: 10rem;
    padding-bottom: 10rem;
  }
}

@media only screen and (min-width: 768px) {
  .titles {
    text-align: left;
  }
}

.section-green {
    background: #b8deb8;
}
</style>
