Vue.component("botao-contador", {
    data: function(){
        return {
            contador: 0
        }
    },
    template: '<button v-on:click="contador++">Clicar {{ contador }}</button>'
});

new Vue( { el: '#app'} );
