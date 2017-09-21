<template>
  <div class="arrow animated bounce"></div>
</template>

<script>
  import debounce from 'lodash.debounce';
  import scroll from 'scroll';

  export default {
    name: 'scroll-arrow',
    methods: {
      scrollController(event) {
        if (window.scrollY + window.innerHeight > document.getElementById('js-main').outerHeight()) {
          document.body.classList.add('tight')
        } else {
          document.body.classList.remove('tight')
        }
      },
      clickController(event) {
        // Back to browsing mode
        console.log('event target:', event.target)
        console.log('event src:', event.srcElement)
        // $("html").on("click", "body.tight .wrapper", function() {
        if (event.srcElement.id === 'js-main' && event.srcElement.classList.contains('tight')) {
          scroll.top(document.getElementById('js-main').outerHeight() - window.innerHeight)
        }
      }
    },
    mounted() {
      window.onscroll = debounce(this.scrollController, 200)
      document.body.addEventListener('click', clickController)
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
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjYgMjYiIHZlcnNpb249IjEuMSI+CiAgPGc+CiAgICA8cGF0aCBzdHlsZT0iICIgZD0iTSA2LjQxNDA2MyA3LjU4NTkzOCBMIDMuNTg1OTM4IDEwLjQxNDA2MyBMIDEzIDE5LjgyODEyNSBMIDIyLjQxNDA2MyAxMC40MTQwNjMgTCAxOS41ODU5MzggNy41ODU5MzggTCAxMyAxNC4xNzE4NzUgWiAiPjwvcGF0aD4KICA8L2c+Cjwvc3ZnPg==);
    background-size: contain;
  }

  .bounce {
    animation: bounce 2s infinite;
  }
</style>