var app = new Vue({
    el: 'h1',
    data: {
        message: 'RL SYSTEM!'
    }
});
/*
Quando uma instância Vue é criada, ela adiciona todas as propriedades 
encontradas no objeto data ao sistema de reatividade do Vue. 
Quando os valores de qualquer destas propriedades muda
a camada visual “reage”, atualizando-se para condizer com os novos valores.
*/
