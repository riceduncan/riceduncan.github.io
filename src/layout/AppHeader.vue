<template>
    <header class="header-global sticky-top">
        <base-nav id="navbar" type="" class="navbar-main bg-white" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img src="/img/logo/dunc_gold.png" alt="logo" class="logo">
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <router-link to="/">
                        <img src="/img/logo/dunc_gold.png">
                    </router-link>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <base-dropdown tag="li" class="nav-item">
                    <router-link slot="title" to="/about" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="fa fa-info-circle d-lg-none"></i>
                        <span class="nav-link-inner--text font-weight-bold">About</span>
                    </router-link>
                    <router-link to="/about/traditions" class="dropdown-item">Traditions</router-link>
                    <router-link to="/about/faq" class="dropdown-item">FAQ</router-link>
                    <router-link to="/about/contact" class="dropdown-item">Contact</router-link>
                </base-dropdown>
                <base-dropdown tag="li" class="nav-item">
                    <router-link slot="title" to="/government" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="fa fa-comments d-lg-none"></i>
                        <span class="nav-link-inner--text font-weight-bold">Government</span>
                    </router-link>
                    <router-link to="/government/committees" class="dropdown-item">Committees</router-link>
                    <router-link to="/government/representatives" class="dropdown-item">Representatives</router-link>
                    <a href="https://drive.google.com/file/d/0B5jtzpRA-PYPa1VGWHhkcVlFd29FQ2NvSUlkRks4WExkMW9v/view?usp=sharing" class="dropdown-item">Constitution</a>
                    <a href="https://docs.google.com/document/d/16b0xmeFPF07ZnMb53IsfF-v7DQ3f_M51vUWjrnOTXfc/edit?usp=sharing" class="dropdown-item">Code of Conduct</a>
                </base-dropdown>
                <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="fa fa-users d-lg-none"></i>
                        <span class="nav-link-inner--text font-weight-bold">People</span>
                    </a>
                    <router-link to="/login" class="dropdown-item">DuncSquad</router-link>
                    <router-link to="/" class="dropdown-item">Associates</router-link>
                    <router-link to="/profile" class="dropdown-item">Academic Advisors</router-link>
                    <router-link to="/profile" class="dropdown-item">RHAs</router-link>
                </base-dropdown>
                <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="fa fa-bookmark d-lg-none"></i>
                        <span class="nav-link-inner--text font-weight-bold">Resources</span>
                    </a>
                    <router-link to="/login" class="dropdown-item">Room Reservations</router-link>
                    <router-link to="/" class="dropdown-item">Forms</router-link>
                </base-dropdown>
            </ul>
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.facebook.com/groups/201995963184811/" target="_blank" rel="noopener"
                       data-toggle="tooltip" title="Join our Facebook group">
                        <i class="fa fa-facebook-square"></i>
                        <span class="nav-link-inner--text d-lg-none">Facebook</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.instagram.com/duncancollege/"
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Follow us on Instagram">
                        <i class="fa fa-instagram"></i>
                        <span class="nav-link-inner--text d-lg-none">Instagram</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.facebook.com/duncanhistory/" target="_blank" rel="noopener"
                       data-toggle="tooltip" title="Keep up with Duncan life">
                        <i class="fa fa-image"></i>
                        <span class="nav-link-inner--text d-lg-none">Duncan History</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://github.com/riceduncan/duncan-website"
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Star us on Github">
                        <i class="fa fa-github"></i>
                        <span class="nav-link-inner--text d-lg-none">Github</span>
                    </a>
                </li>
            </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  }
};
</script>

<style scoped>
.logo {
    height: 3rem;
}
</style>
