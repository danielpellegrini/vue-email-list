new Vue({
  el: '#app',
  data: {
    randomMail: []
  },
  mounted() {
    const self = this;
    let i = 0;

    while (i < 10) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(function(resp) {
        console.log(resp.data.response);
        self.randomMail.push(resp.data.response);
      });
      i++
    }

  }

})
Vue.config.devtools = true
