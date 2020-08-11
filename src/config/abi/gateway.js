const abi = [
    {
       "constant":true,
       "inputs":[
 
       ],
       "name":"dcocosTotalSupply",
       "outputs":[
          {
             "name":"",
             "type":"uint256"
          }
       ],
       "payable":false,
       "stateMutability":"view",
       "type":"function"
    },
    {
       "constant":true,
       "inputs":[
 
       ],
       "name":"governance",
       "outputs":[
          {
             "name":"",
             "type":"address"
          }
       ],
       "payable":false,
       "stateMutability":"view",
       "type":"function"
    },
    {
       "constant":true,
       "inputs":[
 
       ],
       "name":"dcocosMaxSupply",
       "outputs":[
          {
             "name":"",
             "type":"uint256"
          }
       ],
       "payable":false,
       "stateMutability":"view",
       "type":"function"
    },
    {
       "constant":true,
       "inputs":[
 
       ],
       "name":"dcocos",
       "outputs":[
          {
             "name":"",
             "type":"address"
          }
       ],
       "payable":false,
       "stateMutability":"view",
       "type":"function"
    },
    {
       "constant":false,
       "inputs":[
          {
             "name":"supply",
             "type":"uint256"
          }
       ],
       "name":"addDCOCOSSupply",
       "outputs":[
 
       ],
       "payable":false,
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "constant":true,
       "inputs":[
 
       ],
       "name":"cocos",
       "outputs":[
          {
             "name":"",
             "type":"address"
          }
       ],
       "payable":false,
       "stateMutability":"view",
       "type":"function"
    },
    {
       "constant":false,
       "inputs":[
          {
             "name":"amount",
             "type":"uint256"
          }
       ],
       "name":"swapDCOCOS",
       "outputs":[
          {
             "name":"",
             "type":"bool"
          }
       ],
       "payable":false,
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "constant":false,
       "inputs":[
          {
             "name":"_governance",
             "type":"address"
          }
       ],
       "name":"setGovernance",
       "outputs":[
 
       ],
       "payable":false,
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "constant":false,
       "inputs":[
          {
             "name":"amount",
             "type":"uint256"
          }
       ],
       "name":"swapCOCOS",
       "outputs":[
          {
             "name":"",
             "type":"bool"
          }
       ],
       "payable":false,
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
 
       ],
       "payable":false,
       "stateMutability":"nonpayable",
       "type":"constructor"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":false,
             "name":"amount",
             "type":"uint256"
          }
       ],
       "name":"MintDCOCOS",
       "type":"event"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":true,
             "name":"user",
             "type":"address"
          },
          {
             "indexed":false,
             "name":"amount",
             "type":"uint256"
          }
       ],
       "name":"SwapDCOCOS",
       "type":"event"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":true,
             "name":"user",
             "type":"address"
          },
          {
             "indexed":false,
             "name":"amount",
             "type":"uint256"
          }
       ],
       "name":"SwapCOCOS",
       "type":"event"
    }
 ]

export default abi;