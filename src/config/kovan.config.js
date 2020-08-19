
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

  dCOCOSAddress: '0x693e7b6ae1ddff051d232076ccad485ae94ae45f',
  dCOCOSABI: dcocosABI,
  
  COCOSAddress: '0x104b5bd75f5c509703858434408cb5a23b15cd7e',



  COCOSGatewayAddress: '0xa08280b4391550200e8e16074d4bf80c466dd8f8',
  COCOSGatewayABI: gateway,

  dCOCOSOperateURL: "https://github.com/dcocos-finance/doc/blob/master/how-to-swap.md",

  DAIAddress: "0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa",
  
  uniswapPool:{
    erc20Address: '0xd17599A79834B255723335F6b5A3dB46aeb8A3b4',
    erc20ABI: unsiwapv2lpABI,
	  rewardContract:"0xe49cC4b8917f47778d45d6fDb9128061A645b913", 
	  rewardContractABI: rewardABI,
    poolLink: "https://app.uniswap.org/#/add?0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa/0x693e7b6ae1ddff051d232076ccad485ae94ae45f",
    yieldCalculatorLink: "https://yieldfarming.info/dcocos/uniswap/",
    isStart:true,
  },


  balancePool:{
    erc20Address: '0xf6563ad97522ae3695994c36dd4413fce6c92c26',
    erc20ABI: btpABI,
	  rewardContract: "0xd9e1bf85458f7c37ac5d7014a9f2d9c5dfce270b",
	  rewardContractABI: rewardABI,
    poolLink: "https://app.uniswap.org/#/swap",
    yieldCalculatorLink: "https://yieldfarming.info/yfii/ycrv/",
    isStart:false,
  },  
};
  
export default config;