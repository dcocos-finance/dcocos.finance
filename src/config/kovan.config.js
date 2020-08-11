
import unsiwapv2lpABI from './abi/uniswap-v2-lp';
import btpABI from './abi/bpt';
import dcocosABI from './abi/dcocos';
import rewardABI from './abi/uniswaprRewards';
import erc20 from "./abi/erc20";
import gateway from "./abi/gateway";

const config = {
  infuraProvider: 'https://mainnet.infura.io/v3/cd42b3642f1441629f66000f8e544d5d',

  etherscanSite:"https://kovan.etherscan.io",

  erc20ABI: erc20,
  
  uniswapPool:{
    erc20Address: '##',
    erc20ABI: unsiwapv2lpABI,
	  rewardContract:"###", 
	  rewardContractABI: rewardABI,
    poolLink: "https://app.uniswap.org/#/swap",
    yieldCalculatorLink: "https://yieldfarming.info/yfii/ycrv/",
    isStart:false,
  },


  balancePool:{
    erc20Address: '0xf6563ad97522ae3695994c36dd4413fce6c92c26',
    erc20ABI: btpABI,
	  rewardContract: "0xd9e1bf85458f7c37ac5d7014a9f2d9c5dfce270b",
	  rewardContractABI: rewardABI,
    poolLink: "https://app.uniswap.org/#/swap",
    yieldCalculatorLink: "https://yieldfarming.info/yfii/ycrv/",
    isStart:true,
  },

	dCOCOSAddress: '0x693e7b6ae1ddff051d232076ccad485ae94ae45f',
  dCOCOSABI: dcocosABI,
  
  COCOSAddress: '0x104b5bd75f5c509703858434408cb5a23b15cd7e',


  COCOSGatewayAddress: '0xa08280b4391550200e8e16074d4bf80c466dd8f8',
  COCOSGatewayABI: gateway,
  
};
  
export default config;