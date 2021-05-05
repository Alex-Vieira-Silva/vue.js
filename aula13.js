var app = new Vue({
    el: '#app',
    data: {
       isColor: true,
       haveError: false,
       txtNome: ""
    },
    methods: {
       salvar: function(){
           if (this.txtNome.length < 4){
             this.haveError = true;
           } else {
            this.haveError = false;
           }
       }
    }
});