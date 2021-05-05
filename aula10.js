var app = new Vue({
    el: '#app',
    data: {
        txtN1: '0',
        txtN2: '0',
        resultado: '0'
    },
    methods: {
        somar: function (){
            var total = parseInt(this.txtN1) + parseInt(this.txtN2);
            this.resultado = total;
        },
        diminuir: function (){
            var total = parseInt(this.txtN1) - parseInt(this.txtN2);
            this.resultado = total;
        }
    }
});