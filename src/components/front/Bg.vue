<template>
  <div id="bg"></div>
</template>

<script>
  module.exports = {
    name: 'bg'
  }
</script>

<style>
  /* BG */

  #bg {
    -moz-transform: scale(1.0);
    -webkit-transform: scale(1.0);
    -ms-transform: scale(1.0);
    transform: scale(1.0);
    -webkit-backface-visibility: hidden;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 1;
  }

  #bg:before, #bg:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  #bg:before {
    -moz-transition: background-color 2.5s ease-in-out;
    -webkit-transition: background-color 2.5s ease-in-out;
    -ms-transition: background-color 2.5s ease-in-out;
    transition: background-color 2.5s ease-in-out;
    -moz-transition-delay: 0.75s;
    -webkit-transition-delay: 0.75s;
    -ms-transition-delay: 0.75s;
    transition-delay: 0.75s;
    background-image: linear-gradient(to top, rgba(19, 21, 25, 0.5), rgba(19, 21, 25, 0.5)), url("../../images/overlay.png");
    background-size: auto, 256px 256px;
    background-position: center, center;
    background-repeat: no-repeat, repeat;
    z-index: 2;
  }

  #bg:after {
    -moz-transform: scale(1.125);
    -webkit-transform: scale(1.125);
    -ms-transform: scale(1.125);
    transform: scale(1.125);
    -moz-transition: -moz-transform 0.325s ease-in-out, -moz-filter 0.325s ease-in-out;
    -webkit-transition: -webkit-transform 0.325s ease-in-out, -webkit-filter 0.325s ease-in-out;
    -ms-transition: -ms-transform 0.325s ease-in-out, -ms-filter 0.325s ease-in-out;
    transition: transform 0.325s ease-in-out, filter 0.325s ease-in-out;
    background-image: url("../../images/bg.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1;
  }

  body.is-article-visible #bg:after {
    -moz-transform: scale(1.0825);
    -webkit-transform: scale(1.0825);
    -ms-transform: scale(1.0825);
    transform: scale(1.0825);
    -moz-filter: blur(0.2rem);
    -webkit-filter: blur(0.2rem);
    -ms-filter: blur(0.2rem);
    filter: blur(0.2rem);
  }

  body.is-loading #bg:before {
    background-color: #000000;
  }
</style>
