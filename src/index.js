const axios = require('axios');

const kibisisLiquidityPoolAddress = '0x475eC28dDb314e349248ff4f4612FdE79717089B';
const faucet1 = 'https://faucet.ropsten.be/donate/';

const getEth = async () => {
    try {
        const response = await axios.get(`${faucet1}${kibisisLiquidityPoolAddress}`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

(async () => {
    try {
        const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
        console.log(response.data.explanation);
    } catch (error) {
        console.error(error);
    }
})()
