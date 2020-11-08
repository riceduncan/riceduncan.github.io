<template>
    <footer class="footer text-white bg-dark py-3">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-1 text-center">
                    <img src="/img/logo/crest.png" class="img-fluid" />
                </div>
                <div class="col-md-3 text-left my-1">
                    <div class="copyright">
                        &copy; {{year}}
                        Duncan College
                    </div>
                </div>
                <div class="col-md-8 text-right my-1">
                    <div class="self-promotion">
                        <a href="https://github.com/awangg" class="text-white" target="_blank" rel="noopener">&lt;/&gt; with &lt;3 by Andy Wang</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>

<style>
.crest {
    height: 5rem;
}
</style>
