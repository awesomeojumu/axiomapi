new Vue ({
    el: "#app",
    data() {
        return {
        exchangeRates: null
    }
},
created (){
    axios
    .get('https://api.exchangeratesapi.io/latest')
    .then(response => (this.exchangeRates = response.data.rates))
}
})