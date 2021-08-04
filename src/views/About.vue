<template>
    <div class="about-page">
        <section class="section-about-cover section-shaped my-0">
            <div class="shape shape-style-1 splash">
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
                            <h1 class="display-3 text-white">About Duncan
                            </h1>
                            <p class="lead text-white">Newest, LEED-Gold certified, and our doubles have private bathrooms. Are any
                            other colleges even worth visiting?</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-12 col-lg-3">
                        <div class="card-profile-image">
                            <img v-lazy="'img/logo/crest.jpg'" class="img-fluid rounded d-block mx-auto">
                        </div>
                    </div>
                    <div class="col-sm-12 col-lg-9 text-black">
                        <p>Duncan College is named after Charles William Duncan, Jr., the U.S. Secretary of Energy under Jimmy Carter and former 
                        chairman of the Rice Board of Governors, and his wife, Anne. They have been extraordinarily generous to Rice: helping to 
                        establish the James A. Baker III Institute of Public Policy and supporting the Shepherd School of Music. In 2007, they 
                        donated $30 million to establishing new residential colleges to expand the student body while maintaining Rice's uniqueness. 
                        Their passion for environmental sustainability drove Duncan College to be designed as Rice’s “green” college - we are one 
                        of the first buildings in Houston to receive Leadership in Energy and Environmental Design Gold Certification.</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg pt-lg-0">
            <div class="container justify-content-center text-center">
                <div class="row justify-content-center">
                    <tabs fill class="flex-column flex-md-row">
                        <tab-pane>
                            <span slot="title">
                                Green Additions
                            </span>
                            <div class="row justify-content-center mt-4">
                                <div class="col-sm-12 col-lg-3 mx-2" v-for="(prop, index) in green" :key="index">
                                    <TextCard :text="prop" />
                                </div>
                            </div>
                        </tab-pane>
                        <tab-pane>
                            <span slot="title">
                                Common Areas
                            </span>
                            <div class="row justify-content-center mt-4">
                                <div class="col-sm-12 col-lg-3 mx-2" v-for="area in areas" :key="area.name">
                                    <ImageCard :image="area.image" :name="area.name" />
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
import Tabs from '../components/Tabs/Tabs';
import TabPane from '../components/Tabs/TabPane';

import TextCard from './components/Cards/TextCard';
import ImageCard from './components/Cards/ImageCard';

import areas from '../data/areas.data';
import green from '../data/green.data';

export default {
    components: { Tabs, TabPane, TextCard, ImageCard },
    data() {
        return {
            areas: [],
            green: []
        }
    },
    created() {
        this.areas = areas
        this.green = green
    }
}
</script>

<style scoped>
.splash {
    background-image: url("../../public/img/tank.jpeg");
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: inset 0 0 0 45rem rgba(0,0,0,.6);
}
</style>
