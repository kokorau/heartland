<template>
  <!-- Wrapper -->
  <div id="wrapper">

    <fr-header></fr-header>

    <!-- Main -->
    <div id="main">

      <fr-intro></fr-intro>
      <fr-work></fr-work>
      <fr-about></fr-about>
      <fr-contact></fr-contact>
      <fr-elements></fr-elements>

    </div>

    <fr-footer></fr-footer>

  </div>
</template>

<script>
  import About from './front/About.vue';
  import Contact from './front/Contact.vue';
  import Elements from './front/Elements.vue';
  import Footer from './front/Footer.vue';
  import Header from './front/Header.vue';
  import Intro from './front/Intro.vue';
  import Work from './front/Work.vue';

  export default {
    name: 'front-contents',
    data () {
      return {}
    },
    props: [],
    components: {
      'fr-about': About,
      'fr-contact': Contact,
      'fr-elements': Elements,
      'fr-footer': Footer,
      'fr-header': Header,
      'fr-intro': Intro,
      'fr-work': Work
    }
  }
</script>

<style scoped>
  /* Wrapper */

  #wrapper {
    display: -moz-flex;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    -moz-flex-direction: column;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -moz-align-items: center;
    -webkit-align-items: center;
    -ms-align-items: center;
    align-items: center;
    -moz-justify-content: space-between;
    -webkit-justify-content: space-between;
    -ms-justify-content: space-between;
    justify-content: space-between;
    position: relative;
    min-height: 100vh;
    width: 100%;
    padding: 4rem 2rem;
    z-index: 3;
  }

  #wrapper:before {
    content: '';
    display: block;
  }

  @media screen and (max-width: 1680px) {

    #wrapper {
      padding: 3rem 2rem;
    }

  }

  @media screen and (max-width: 736px) {

    #wrapper {
      padding: 2rem 1rem;
    }

  }

  @media screen and (max-width: 480px) {

    #wrapper {
      padding: 1rem;
    }

  }

  /* Main */

  #main {
    -moz-flex-grow: 1;
    -webkit-flex-grow: 1;
    -ms-flex-grow: 1;
    flex-grow: 1;
    -moz-flex-shrink: 1;
    -webkit-flex-shrink: 1;
    -ms-flex-shrink: 1;
    flex-shrink: 1;
    display: -moz-flex;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    -moz-align-items: center;
    -webkit-align-items: center;
    -ms-align-items: center;
    align-items: center;
    -moz-justify-content: center;
    -webkit-justify-content: center;
    -ms-justify-content: center;
    justify-content: center;
    -moz-flex-direction: column;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    position: relative;
    max-width: 100%;
    z-index: 3;
  }

  #main article {
    -moz-transform: translateY(0.25rem);
    -webkit-transform: translateY(0.25rem);
    -ms-transform: translateY(0.25rem);
    transform: translateY(0.25rem);
    -moz-transition: opacity 0.325s ease-in-out, -moz-transform 0.325s ease-in-out;
    -webkit-transition: opacity 0.325s ease-in-out, -webkit-transform 0.325s ease-in-out;
    -ms-transition: opacity 0.325s ease-in-out, -ms-transform 0.325s ease-in-out;
    transition: opacity 0.325s ease-in-out, transform 0.325s ease-in-out;
    padding: 4.5rem 2.5rem 1.5rem 2.5rem ;
    position: relative;
    width: 40rem;
    max-width: 100%;
    background-color: rgba(27, 31, 34, 0.85);
    border-radius: 4px;
    opacity: 0;
  }

  #main article.active {
    -moz-transform: translateY(0);
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }

  #main article .close {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 4rem;
    height: 4rem;
    cursor: pointer;
    text-indent: 4rem;
    overflow: hidden;
    white-space: nowrap;
  }

  #main article .close:before {
    -moz-transition: background-color 0.2s ease-in-out;
    -webkit-transition: background-color 0.2s ease-in-out;
    -ms-transition: background-color 0.2s ease-in-out;
    transition: background-color 0.2s ease-in-out;
    content: '';
    display: block;
    position: absolute;
    top: 0.75rem;
    left: 0.75rem;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 100%;
    background-position: center;
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='20px' height='20px' viewBox='0 0 20 20' zoomAndPan='disable'%3E%3Cstyle%3Eline %7B stroke: %23ffffff%3B stroke-width: 1%3B %7D%3C/style%3E%3Cline x1='2' y1='2' x2='18' y2='18' /%3E%3Cline x1='18' y1='2' x2='2' y2='18' /%3E%3C/svg%3E");
    background-size: 20px 20px;
    background-repeat: no-repeat;
  }

  #main article .close:hover:before {
    background-color: rgba(255, 255, 255, 0.075);
  }

  #main article .close:active:before {
    background-color: rgba(255, 255, 255, 0.175);
  }

  @media screen and (max-width: 736px) {

    #main article {
      padding: 3.5rem 2rem 0.5rem 2rem ;
    }

    #main article .close:before {
      top: 0.875rem;
      left: 0.875rem;
      width: 2.25rem;
      height: 2.25rem;
      background-size: 14px 14px;
    }

  }

  @media screen and (max-width: 480px) {

    #main article {
      padding: 3rem 1.5rem 0.5rem 1.5rem ;
    }

  }

</style>
