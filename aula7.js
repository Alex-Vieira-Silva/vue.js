var app = new Vue({
    el: '#app',
    data: {
        company: 'RL System',
        firstName: 'Rafael',
        lastName: 'Leal',
        fullName: 'Rafael Leal'
    },
    watch:{
      firstName: function(val){
          this.fullName = val + ' ' + this.lastName;
      },
      lastName: function (val){
          this.fullName = this.firstName + ' ' + val;
      }
    }
});
Dados Computados vs Observadores....