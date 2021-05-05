var app = new Vue({
        el: '#app',
        data: {
           contador: 0,
           contador2: 0,
           nome : '',
           n1: 0,
           n2: 0
        },
        methods:{
                incrementar: function (){
                        this.contador += 1;
                },
                exibirNome: function (){
                        alert(this.nome);
                },
                somar: function (){
                        var total = parseInt(this.n1) + parseInt(this.n2);
                        alert(total);
                }
        }
});