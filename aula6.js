var app = new Vue({
    el: '#app',
    data: {
        message: 'RL SYSTEM!',
        msg: 'RAFAEL',
        title: 'TESTE'
    },
    computed:{
        reverter: function (){
            return Date.now() + ' - ' + this.message;
        }
    }
});