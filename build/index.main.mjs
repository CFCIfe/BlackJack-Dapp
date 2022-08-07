// Automatically generated with Reach 0.1.11 (6e495417)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (6e495417)';
export const _backendVersion = 18;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      3: [ctc0, ctc1],
      5: [ctc0, ctc1, ctc0, ctc1],
      6: [ctc0, ctc1, ctc0, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Object({
    value: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
  
  const v107 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v107],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:47:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v107, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v111], secs: v113, time: v112, didSend: v29, from: v110 } = txn1;
      
      sim_r.txns.push({
        amt: v111,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v111], secs: v113, time: v112, didSend: v29, from: v110 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v120, time: v119, didSend: v38, from: v118 } = txn2;
  ;
  let v123 = stdlib.checkedBigNumberify('./index.rsh:57:19:decimal', stdlib.UInt_max, '0');
  let v124 = v119;
  
  while (await (async () => {
    const v135 = stdlib.lt(v123, stdlib.checkedBigNumberify('./index.rsh:60:22:decimal', stdlib.UInt_max, '2'));
    
    return v135;})()) {
    const v138 = stdlib.protect(ctc1, await interact.PlayerCard(), {
      at: './index.rsh:63:55:application',
      fs: ['at ./index.rsh:62:15:application call to [unknown function] (defined at: ./index.rsh:62:19:function exp)'],
      msg: 'PlayerCard',
      who: 'Alice'
      });
    stdlib.protect(ctc0, await interact.seeCardValue(), {
      at: './index.rsh:64:63:application',
      fs: ['at ./index.rsh:62:15:application call to [unknown function] (defined at: ./index.rsh:62:19:function exp)'],
      msg: 'seeCardValue',
      who: 'Alice'
      });
    
    const txn3 = await (ctc.sendrecv({
      args: [v110, v111, v118, v123, v138],
      evt_cnt: 1,
      funcNum: 4,
      lct: v124,
      onlyIf: true,
      out_tys: [ctc1],
      pay: [stdlib.checkedBigNumberify('./index.rsh:66:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v142], secs: v144, time: v143, didSend: v57, from: v141 } = txn3;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc2, ctc0, ctc2, ctc0, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [v142], secs: v144, time: v143, didSend: v57, from: v141 } = txn3;
    ;
    const v145 = stdlib.addressEq(v110, v141);
    stdlib.assert(v145, {
      at: './index.rsh:66:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc1],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v152], secs: v154, time: v153, didSend: v69, from: v151 } = txn4;
    ;
    const v155 = stdlib.addressEq(v118, v151);
    stdlib.assert(v155, {
      at: './index.rsh:72:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const v156 = stdlib.add(v123, stdlib.checkedBigNumberify('./index.rsh:73:29:decimal', stdlib.UInt_max, '1'));
    const cv123 = v156;
    const cv124 = v153;
    
    v123 = cv123;
    v124 = cv124;
    
    continue;
    
    
    
    }
  const v159 = stdlib.protect(ctc3, await interact.totalCardValue(), {
    at: './index.rsh:78:57:application',
    fs: ['at ./index.rsh:77:13:application call to [unknown function] (defined at: ./index.rsh:77:17:function exp)'],
    msg: 'totalCardValue',
    who: 'Alice'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v110, v111, v159],
    evt_cnt: 1,
    funcNum: 3,
    lct: v124,
    onlyIf: true,
    out_tys: [ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:80:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v163], secs: v165, time: v164, didSend: v82, from: v162 } = txn3;
      
      ;
      const v167 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:81:12:decimal', stdlib.UInt_max, '2'), v111);
      sim_r.txns.push({
        kind: 'from',
        to: v110,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v163], secs: v165, time: v164, didSend: v82, from: v162 } = txn3;
  ;
  const v166 = stdlib.addressEq(v110, v162);
  stdlib.assert(v166, {
    at: './index.rsh:80:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v167 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:81:12:decimal', stdlib.UInt_max, '2'), v111);
  ;
  return;
  
  
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Object({
    value: ctc0
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v111], secs: v113, time: v112, didSend: v29, from: v110 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v111), {
    at: './index.rsh:52:25:application',
    fs: ['at ./index.rsh:51:11:application call to [unknown function] (defined at: ./index.rsh:51:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v110, v111],
    evt_cnt: 0,
    funcNum: 1,
    lct: v112,
    onlyIf: true,
    out_tys: [],
    pay: [v111, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v120, time: v119, didSend: v38, from: v118 } = txn2;
      
      sim_r.txns.push({
        amt: v111,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v123 = stdlib.checkedBigNumberify('./index.rsh:57:19:decimal', stdlib.UInt_max, '0');
      const v124 = v119;
      
      if (await (async () => {
        const v135 = stdlib.lt(v123, stdlib.checkedBigNumberify('./index.rsh:60:22:decimal', stdlib.UInt_max, '2'));
        
        return v135;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v120, time: v119, didSend: v38, from: v118 } = txn2;
  ;
  let v123 = stdlib.checkedBigNumberify('./index.rsh:57:19:decimal', stdlib.UInt_max, '0');
  let v124 = v119;
  
  while (await (async () => {
    const v135 = stdlib.lt(v123, stdlib.checkedBigNumberify('./index.rsh:60:22:decimal', stdlib.UInt_max, '2'));
    
    return v135;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc2],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v142], secs: v144, time: v143, didSend: v57, from: v141 } = txn3;
    ;
    const v145 = stdlib.addressEq(v110, v141);
    stdlib.assert(v145, {
      at: './index.rsh:66:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const v148 = stdlib.protect(ctc2, await interact.PlayerCard(), {
      at: './index.rsh:69:53:application',
      fs: ['at ./index.rsh:68:13:application call to [unknown function] (defined at: ./index.rsh:68:17:function exp)'],
      msg: 'PlayerCard',
      who: 'Bob'
      });
    stdlib.protect(ctc0, await interact.seeCardValue(), {
      at: './index.rsh:70:61:application',
      fs: ['at ./index.rsh:68:13:application call to [unknown function] (defined at: ./index.rsh:68:17:function exp)'],
      msg: 'seeCardValue',
      who: 'Bob'
      });
    
    const txn4 = await (ctc.sendrecv({
      args: [v110, v111, v118, v123, v148],
      evt_cnt: 1,
      funcNum: 5,
      lct: v143,
      onlyIf: true,
      out_tys: [ctc2],
      pay: [stdlib.checkedBigNumberify('./index.rsh:72:9:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v152], secs: v154, time: v153, didSend: v69, from: v151 } = txn4;
        
        ;
        const v156 = stdlib.add(v123, stdlib.checkedBigNumberify('./index.rsh:73:29:decimal', stdlib.UInt_max, '1'));
        const cv123 = v156;
        const cv124 = v153;
        
        await (async () => {
          const v123 = cv123;
          const v124 = cv124;
          
          if (await (async () => {
            const v135 = stdlib.lt(v123, stdlib.checkedBigNumberify('./index.rsh:60:22:decimal', stdlib.UInt_max, '2'));
            
            return v135;})()) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.isHalt = false;
            }})();
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc3, ctc0, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [v152], secs: v154, time: v153, didSend: v69, from: v151 } = txn4;
    ;
    const v155 = stdlib.addressEq(v118, v151);
    stdlib.assert(v155, {
      at: './index.rsh:72:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const v156 = stdlib.add(v123, stdlib.checkedBigNumberify('./index.rsh:73:29:decimal', stdlib.UInt_max, '1'));
    const cv123 = v156;
    const cv124 = v153;
    
    v123 = cv123;
    v124 = cv124;
    
    continue;
    
    
    
    }
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 3,
    out_tys: [ctc4],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v163], secs: v165, time: v164, didSend: v82, from: v162 } = txn3;
  ;
  const v166 = stdlib.addressEq(v110, v162);
  stdlib.assert(v166, {
    at: './index.rsh:80:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v167 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:81:12:decimal', stdlib.UInt_max, '2'), v111);
  ;
  return;
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAIAAEFIAMCBkgmAgEAACI1ADEYQQJLKWRJIls1AYEIWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0khBAxAAQBJgQQMQACwSSQMQABKJBJEIQY0ARJENARJIhJMNAISEUQoZEk1A1coIDX/STUFNf6ABEG7PX00/lCwNP8xABJENANXACA0AyVbNP80AyEHWyMIMgZCASxIJDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/yVbNf5XKCA1/SEHWzX8STUFNfuABM48cGY0+1CwNP8xABJENP80/hZQNP1QNPwWUChLAVcAUGdIIQY1ATIGNQJCATFIIQQ0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/STUFNf6ABPql+rE0/lCwNP8xABJEsSKyASEFNAMlWwuyCCOyEDT/sgezQgDNSSMMQAA3IxJEIzQBEkQ0BEkiEkw0AhIRRChkSTUDJVs1/4AEmouRdLA0/4gBDDQDVwAgNP8xACIyBkIARkiBoI0GiAD1IjQBEkQ0BEkiEkw0AhIRREk1BRc1/4AEgsRh/jT/FlCwNP+IAM8xADT/FlAoSwFXAChnSCM1ATIGNQJCAGU1/zX+Nf01/DX7NP4hBQxBAB80+zT8FlA0/VA0/hZQKEsBVwBQZ0gkNQEyBjUCQgA0NPs0/BZQKEsBVwAoZ0ghBDUBMgY1AkIAGzEZJBJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCEFMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 80,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v111",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v111",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256[2]",
                "name": "v163",
                "type": "uint256[2]"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "_value",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T12",
                "name": "v142",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "_value",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T12",
                "name": "v152",
                "type": "tuple"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256[2]",
                "name": "v163",
                "type": "uint256[2]"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "_value",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T12",
                "name": "v142",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "_value",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T12",
                "name": "v152",
                "type": "tuple"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001010380380620010108339810160408190526200002691620001bf565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a1602081015151620000899034146007620000ef565b604080518082018252600060208083018281523380855286830151518252600193849055439093558451808301939093525182850152835180830385018152606090920190935280519192620000e6926002929091019062000119565b5050506200029e565b81620001155760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001279062000261565b90600052602060002090601f0160209004810192826200014b576000855562000196565b82601f106200016657805160ff191683800117855562000196565b8280016001018555821562000196579182015b828111156200019657825182559160200191906001019062000179565b50620001a4929150620001a8565b5090565b5b80821115620001a45760008155600101620001a9565b6000818303604080821215620001d457600080fd5b80518082016001600160401b0380821183831017156200020457634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200021e57600080fd5b8351945060208501915084821081831117156200024b57634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c908216806200027657607f821691505b602082108114156200029857634e487b7160e01b600052602260045260246000fd5b50919050565b610d6280620002ae6000396000f3fe60806040526004361061006e5760003560e01c80632c10a1591161004b5780632c10a159146100c157806383230757146100d4578063ab53f2c6146100e9578063f7b8a59b1461010c57005b80630693c662146100775780630cf4bd231461008a5780631e93b0f11461009d57005b3661007557005b005b610075610085366004610a4a565b61011f565b610075610098366004610a4a565b6102b0565b3480156100a957600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100cf366004610a4a565b610455565b3480156100e057600080fd5b506001546100ae565b3480156100f557600080fd5b506100fe6105b2565b6040516100b8929190610a6d565b61007561011a366004610aca565b61064f565b61012f60066000541460156107e0565b6101498135158061014257506001548235145b60166107e0565b60008080556002805461015b90610adc565b80601f016020809104026020016040519081016040528092919081815260200182805461018790610adc565b80156101d45780601f106101a9576101008083540402835291602001916101d4565b820191906000526020600020905b8154815290600101906020018083116101b757829003601f168201915b50505050508060200190518101906101ec9190610b2d565b90507fc55e6813659179108696e4402c6ac0aad47a66a412d076c5417e97b9b278904d338360405161021f929190610bad565b60405180910390a1610233341560136107e0565b604081015161024e906001600160a01b0316331460146107e0565b6102566108de565b815181516001600160a01b03918216905260208084015183519091015260408084015183519216910152606082015161029190600190610bea565b60208083018051929092529051439101526102ab81610805565b505050565b6102c060056000541460116107e0565b6102da813515806102d357506001548235145b60126107e0565b6000808055600280546102ec90610adc565b80601f016020809104026020016040519081016040528092919081815260200182805461031890610adc565b80156103655780601f1061033a57610100808354040283529160200191610365565b820191906000526020600020905b81548152906001019060200180831161034857829003601f168201915b505050505080602001905181019061037d9190610b2d565b90507f20e0220c6adfa181ccdf66a11a035e7ee7bc6900d5aa40894042309f10f8f0f933836040516103b0929190610bad565b60405180910390a16103c43415600f6107e0565b80516103dc906001600160a01b0316331460106107e0565b6103e4610929565b81516001600160a01b039081168252602080840151818401526040808501519092168284015260608085015190840152600660005543600155905161042b91839101610c02565b6040516020818303038152906040526002908051906020019061044f929190610963565b50505050565b61046560016000541460096107e0565b61047f8135158061047857506001548235145b600a6107e0565b60008080556002805461049190610adc565b80601f01602080910402602001604051908101604052809291908181526020018280546104bd90610adc565b801561050a5780601f106104df5761010080835404028352916020019161050a565b820191906000526020600020905b8154815290600101906020018083116104ed57829003601f168201915b50505050508060200190518101906105229190610c3b565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f13383604051610555929190610ca0565b60405180910390a161056e8160200151341460086107e0565b6105766108de565b815181516001600160a01b039091169052602080830151825182015281513360409091015280820180516000905251439101526102ab81610805565b6000606060005460028080546105c790610adc565b80601f01602080910402602001604051908101604052809291908181526020018280546105f390610adc565b80156106405780601f1061061557610100808354040283529160200191610640565b820191906000526020600020905b81548152906001019060200180831161062357829003601f168201915b50505050509050915091509091565b61065f600360005414600d6107e0565b6106798135158061067257506001548235145b600e6107e0565b60008080556002805461068b90610adc565b80601f01602080910402602001604051908101604052809291908181526020018280546106b790610adc565b80156107045780601f106106d957610100808354040283529160200191610704565b820191906000526020600020905b8154815290600101906020018083116106e757829003601f168201915b505050505080602001905181019061071c9190610c3b565b90507fa47fb7f8ae1210761a5f97a1174d0c226f3925a7b57f422eefd0c59fa136a798338360405161074f929190610cdd565b60405180910390a16107633415600b6107e0565b805161077b906001600160a01b03163314600c6107e0565b80600001516001600160a01b03166108fc8260200151600261079d9190610d0d565b6040518115909202916000818181858888f193505050501580156107c5573d6000803e3d6000fd5b50600080805560018190556107dc906002906109e7565b5050565b816107dc5760405163100960cb60e01b81526004810182905260240160405180910390fd5b6020810151516002111561088b5761081b610929565b8151516001600160a01b03908116825282516020908101518184015283516040908101519092168284015280840151516060840152600560005543600155905161086791839101610c02565b604051602081830303815290604052600290805190602001906102ab929190610963565b604080518082018252600080825260208083018281528551516001600160a01b03168085528651830151825260039093554360015584519182019290925290519281019290925290606001610867565b50565b6040805160a08101825260009181018281526060820183905260808201929092529081908152602001610924604051806040016040528060008152602001600081525090565b905290565b604051806080016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081525090565b82805461096f90610adc565b90600052602060002090601f01602090048101928261099157600085556109d7565b82601f106109aa57805160ff19168380011785556109d7565b828001600101855582156109d7579182015b828111156109d75782518255916020019190600101906109bc565b506109e3929150610a1d565b5090565b5080546109f390610adc565b6000825580601f10610a03575050565b601f0160209004906000526020600020908101906108db91905b5b808211156109e35760008155600101610a1e565b600060408284031215610a4457600080fd5b50919050565b600060408284031215610a5c57600080fd5b610a668383610a32565b9392505050565b82815260006020604081840152835180604085015260005b81811015610aa157858101830151858201606001528201610a85565b81811115610ab3576000606083870101525b50601f01601f191692909201606001949350505050565b600060608284031215610a4457600080fd5b600181811c90821680610af057607f821691505b60208210811415610a4457634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610b2857600080fd5b919050565b600060808284031215610b3f57600080fd5b6040516080810181811067ffffffffffffffff82111715610b7057634e487b7160e01b600052604160045260246000fd5b604052610b7c83610b11565b815260208301516020820152610b9460408401610b11565b6040820152606083015160608201528091505092915050565b6001600160a01b038316815260608101610a66602083018480358252602090810135910152565b634e487b7160e01b600052601160045260246000fd5b60008219821115610bfd57610bfd610bd4565b500190565b81516001600160a01b03908116825260208084015190830152604080840151909116908201526060918201519181019190915260800190565b600060408284031215610c4d57600080fd5b6040516040810181811067ffffffffffffffff82111715610c7e57634e487b7160e01b600052604160045260246000fd5b604052610c8a83610b11565b8152602083015160208201528091505092915050565b6001600160a01b038316815281356020808301919091526060820190830135801515808214610cce57600080fd5b80604085015250509392505050565b6001600160a01b038316815281356020808301919091526080820190604090840181840137600081529392505050565b6000816000190483118215151615610d2757610d27610bd4565b50029056fea264697066735822122017e58cf66ca3e78a88a02111844efd790cc614055065952ef1827d2c578e9c5364736f6c634300080c0033`,
  BytecodeLen: 4112,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:49:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:76:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:82:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:61:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:67:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
