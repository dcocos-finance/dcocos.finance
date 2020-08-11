
import unsiwapv2lpABI from './abi/uniswap-v2-lp';
import btpABI from './abi/bpt';
import dcocosABI from './abi/dcocos';
import rewardABI from './abi/uniswaprRewards';
import erc20 from "./abi/erc20";

const config = {
  infuraProvider: 'https://mainnet.infura.io/v3/cd42b3642f1441629f66000f8e544d5d',

  etherscanSite:"https://kovan.etherscan.io",

  erc20ABI: erc20,
  
  uniswapPool:{
    erc20Address: '0xb81D3cB2708530ea990a287142b82D058725C092',
    erc20ABI: unsiwapv2lpABI,
	  rewardContract:"0xd9e1bf85458f7c37ac5d7014a9f2d9c5dfce270b", 
	  rewardContractABI: rewardABI,
    poolLink: "app.uniswap.org/#/swap",
    yieldCalculatorLink: "https://yieldfarming.info/yfii/ycrv/",
  },


  balancePool:{
    erc20Address: '0xAFfcD3D45cEF58B1DfA773463824c6F6bB0Dc13a',
    erc20ABI: btpABI,
	rewardContract: "0xAFfcD3D45cEF58B1DfA773463824c6F6bB0Dc13a",
	rewardContractABI: rewardABI,
    poolLink: "app.uniswap.org/#/swap",
    yieldCalculatorLink: "https://yieldfarming.info/yfii/ycrv/",
  },

	dCOCOSAddress: '0xAFfcD3D45cEF58B1DfA773463824c6F6bB0Dc13a',
	dCOCOSABI: dcocosABI,
  
};
  
export default config;