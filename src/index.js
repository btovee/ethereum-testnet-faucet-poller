const axios = require('axios');
const cron = require('node-cron');
const fs = require('fs');
const util = require('util');
const log_file = fs.createWriteStream(__dirname + '/debug.log', {flags : 'w'});
const log_stdout = process.stdout;

console.log = (d) => {
    log_file.write(util.format(d) + '\n');
    log_stdout.write(util.format(d) + '\n');
};

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



cron.schedule('0 14 * * *', async () => {
   await getEth();
});
