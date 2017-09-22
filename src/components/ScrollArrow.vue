<template>
  <div class="arrow animated bounce" v-show="showArrow">
    <Chevron />
  </div>
</template>

<script>
  import Chevron from '../assets/ico/chevron.svg'
  import debounce from 'lodash.debounce'
  import { scroll } from '../helpers/scroll'

  export default {
    name: 'scroll-arrow',
    components: { Chevron },
    data() {
      return {
        showArrow: true
      }
    },
    methods: {
      scrollController(event) {
        if (window.scrollY + window.innerHeight > document.getElementById('js-main').offsetHeight) {
          document.body.classList.add('tight')
          this.showArrow = false
        } else {
          document.body.classList.remove('tight')
          this.showArrow = true
        }
      },
      clickController(event) {
        event.srcElement.id === 'js-main' && document.body.classList.contains('tight') && scroll(0)
      }
    },
    mounted() {
      window.onscroll = debounce(this.scrollController, 100)
      document.body.addEventListener('click', this.clickController)
    }
  }
</script>

<style>
    @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }

  .arrow {
    position: absolute;
    bottom: 50px;
    left: 50%;
    margin-left: -20px;
    width: 20px;
    height: 20px;
    background-size: contain;
  }

  .arrow svg {
    fill: #fafafa;
  }

  .bounce {
    animation: bounce 2s infinite;
  }
</style>