var app = new Vue({
        el: '#app',
        data: {
            questao: '',
            resposta: ''
        },
        watch: {
            // Quando houver uma pergunta ele vai cair AQUI..
            questao: function (){
                this.resposta = 'Esperando você parar de escrever...'
                this.debouncedGetResposta()
            }
        },
        created: function (){
            this.debouncedGetResposta = _.debounce(this.getResposta, 500);
        },
        methods:{
            getResposta: function (){
                if (this.questao.indexOf('?') === -1){
                    this.resposta = 'Sua pergunta deve ter um ?';
                    return;
                }
                this.resposta = 'Pensando...';
                var vm = this;
                axios.get("https://yesno.wtf/api").then( function (response){
                    //vm.resposta = response.data.answer === 'yes' ? 'Sim.' : response.data.answer === 'no' ? 'Não' : 'Talvez';

                    if (response.data.answer == 'yes'){
                        vm.resposta = 'Sim';
                    } else  if (response.data.answer == 'no'){
                        vm.resposta = 'Não';
                    }
                })
            }
        }
});