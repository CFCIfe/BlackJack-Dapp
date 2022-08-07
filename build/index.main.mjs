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
      1: [ctc0, ctc1, ctc1],
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
  
  
  const v114 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v117 = stdlib.protect(ctc0, await interact.aliceScore(), {
    at: './index.rsh:23:54:application',
    fs: ['at ./index.rsh:21:13:application call to [unknown function] (defined at: ./index.rsh:21:17:function exp)'],
    msg: 'aliceScore',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v114, v117],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:25:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v114, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v119, v120], secs: v122, time: v121, didSend: v31, from: v118 } = txn1;
      
      sim_r.txns.push({
        amt: v119,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v119, v120], secs: v122, time: v121, didSend: v31, from: v118 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v129, time: v128, didSend: v40, from: v127 } = txn2;
  ;
  let v132 = v120;
  let v133 = v128;
  
  while (await (async () => {
    const v144 = stdlib.lt(v132, stdlib.checkedBigNumberify('./index.rsh:38:22:decimal', stdlib.UInt_max, '21'));
    
    return v144;})()) {
    const v147 = stdlib.protect(ctc1, await interact.PlayerCard(), {
      at: './index.rsh:41:55:application',
      fs: ['at ./index.rsh:40:15:application call to [unknown function] (defined at: ./index.rsh:40:19:function exp)'],
      msg: 'PlayerCard',
      who: 'Alice'
      });
    stdlib.protect(ctc0, await interact.seeCardValue(), {
      at: './index.rsh:42:63:application',
      fs: ['at ./index.rsh:40:15:application call to [unknown function] (defined at: ./index.rsh:40:19:function exp)'],
      msg: 'seeCardValue',
      who: 'Alice'
      });
    
    const txn3 = await (ctc.sendrecv({
      args: [v118, v119, v127, v132, v147],
      evt_cnt: 1,
      funcNum: 5,
      lct: v133,
      onlyIf: true,
      out_tys: [ctc1],
      pay: [stdlib.checkedBigNumberify('./index.rsh:44:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v151], secs: v153, time: v152, didSend: v59, from: v150 } = txn3;
        
        ;
        const v155 = stdlib.add(v132, stdlib.checkedBigNumberify('./index.rsh:46:29:decimal', stdlib.UInt_max, '1'));
        const cv132 = v155;
        const cv133 = v152;
        
        await (async () => {
          const v132 = cv132;
          const v133 = cv133;
          
          if (await (async () => {
            const v144 = stdlib.lt(v132, stdlib.checkedBigNumberify('./index.rsh:38:22:decimal', stdlib.UInt_max, '21'));
            
            return v144;})()) {
            sim_r.isHalt = false;
            }
          else {
            const v156 = stdlib.checkedBigNumberify('./index.rsh:49:21:decimal', stdlib.UInt_max, '0');
            const v157 = v133;
            
            if (await (async () => {
              const v168 = stdlib.lt(v156, stdlib.checkedBigNumberify('./index.rsh:51:21:decimal', stdlib.UInt_max, '3'));
              
              return v168;})()) {
              sim_r.isHalt = false;
              }
            else {
              const v180 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:65:12:decimal', stdlib.UInt_max, '2'), v119);
              sim_r.txns.push({
                kind: 'from',
                to: v118,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}})();
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc2, ctc0, ctc2, ctc0, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [v151], secs: v153, time: v152, didSend: v59, from: v150 } = txn3;
    ;
    const v154 = stdlib.addressEq(v118, v150);
    stdlib.assert(v154, {
      at: './index.rsh:44:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const v155 = stdlib.add(v132, stdlib.checkedBigNumberify('./index.rsh:46:29:decimal', stdlib.UInt_max, '1'));
    const cv132 = v155;
    const cv133 = v152;
    
    v132 = cv132;
    v133 = cv133;
    
    continue;
    
    }
  let v156 = stdlib.checkedBigNumberify('./index.rsh:49:21:decimal', stdlib.UInt_max, '0');
  let v157 = v133;
  
  while (await (async () => {
    const v168 = stdlib.lt(v156, stdlib.checkedBigNumberify('./index.rsh:51:21:decimal', stdlib.UInt_max, '3'));
    
    return v168;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc1],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v175], secs: v177, time: v176, didSend: v79, from: v174 } = txn3;
    ;
    const v178 = stdlib.addressEq(v127, v174);
    stdlib.assert(v178, {
      at: './index.rsh:59:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const v179 = stdlib.add(v156, stdlib.checkedBigNumberify('./index.rsh:61:27:decimal', stdlib.UInt_max, '1'));
    const cv156 = v179;
    const cv157 = v176;
    
    v156 = cv156;
    v157 = cv157;
    
    continue;
    
    }
  const v180 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:65:12:decimal', stdlib.UInt_max, '2'), v119);
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
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v119, v120], secs: v122, time: v121, didSend: v31, from: v118 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v119), {
    at: './index.rsh:30:25:application',
    fs: ['at ./index.rsh:29:11:application call to [unknown function] (defined at: ./index.rsh:29:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v118, v119, v120],
    evt_cnt: 0,
    funcNum: 1,
    lct: v121,
    onlyIf: true,
    out_tys: [],
    pay: [v119, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v129, time: v128, didSend: v40, from: v127 } = txn2;
      
      sim_r.txns.push({
        amt: v119,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v132 = v120;
      const v133 = v128;
      
      if (await (async () => {
        const v144 = stdlib.lt(v132, stdlib.checkedBigNumberify('./index.rsh:38:22:decimal', stdlib.UInt_max, '21'));
        
        return v144;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v156 = stdlib.checkedBigNumberify('./index.rsh:49:21:decimal', stdlib.UInt_max, '0');
        const v157 = v133;
        
        if (await (async () => {
          const v168 = stdlib.lt(v156, stdlib.checkedBigNumberify('./index.rsh:51:21:decimal', stdlib.UInt_max, '3'));
          
          return v168;})()) {
          
          sim_r.isHalt = false;
          }
        else {
          const v180 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:65:12:decimal', stdlib.UInt_max, '2'), v119);
          sim_r.txns.push({
            kind: 'from',
            to: v118,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v129, time: v128, didSend: v40, from: v127 } = txn2;
  ;
  let v132 = v120;
  let v133 = v128;
  
  while (await (async () => {
    const v144 = stdlib.lt(v132, stdlib.checkedBigNumberify('./index.rsh:38:22:decimal', stdlib.UInt_max, '21'));
    
    return v144;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc2],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v151], secs: v153, time: v152, didSend: v59, from: v150 } = txn3;
    ;
    const v154 = stdlib.addressEq(v118, v150);
    stdlib.assert(v154, {
      at: './index.rsh:44:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const v155 = stdlib.add(v132, stdlib.checkedBigNumberify('./index.rsh:46:29:decimal', stdlib.UInt_max, '1'));
    const cv132 = v155;
    const cv133 = v152;
    
    v132 = cv132;
    v133 = cv133;
    
    continue;
    
    }
  let v156 = stdlib.checkedBigNumberify('./index.rsh:49:21:decimal', stdlib.UInt_max, '0');
  let v157 = v133;
  
  while (await (async () => {
    const v168 = stdlib.lt(v156, stdlib.checkedBigNumberify('./index.rsh:51:21:decimal', stdlib.UInt_max, '3'));
    
    return v168;})()) {
    const v171 = stdlib.protect(ctc2, await interact.PlayerCard(), {
      at: './index.rsh:53:53:application',
      fs: ['at ./index.rsh:52:13:application call to [unknown function] (defined at: ./index.rsh:52:17:function exp)'],
      msg: 'PlayerCard',
      who: 'Bob'
      });
    stdlib.protect(ctc0, await interact.seeCardValue(), {
      at: './index.rsh:54:61:application',
      fs: ['at ./index.rsh:52:13:application call to [unknown function] (defined at: ./index.rsh:52:17:function exp)'],
      msg: 'seeCardValue',
      who: 'Bob'
      });
    
    const txn3 = await (ctc.sendrecv({
      args: [v118, v119, v127, v156, v171],
      evt_cnt: 1,
      funcNum: 4,
      lct: v157,
      onlyIf: true,
      out_tys: [ctc2],
      pay: [stdlib.checkedBigNumberify('./index.rsh:59:9:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v175], secs: v177, time: v176, didSend: v79, from: v174 } = txn3;
        
        ;
        const v179 = stdlib.add(v156, stdlib.checkedBigNumberify('./index.rsh:61:27:decimal', stdlib.UInt_max, '1'));
        const cv156 = v179;
        const cv157 = v176;
        
        await (async () => {
          const v156 = cv156;
          const v157 = cv157;
          
          if (await (async () => {
            const v168 = stdlib.lt(v156, stdlib.checkedBigNumberify('./index.rsh:51:21:decimal', stdlib.UInt_max, '3'));
            
            return v168;})()) {
            
            sim_r.isHalt = false;
            }
          else {
            const v180 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:65:12:decimal', stdlib.UInt_max, '2'), v119);
            sim_r.txns.push({
              kind: 'from',
              to: v118,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }})();
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc3, ctc0, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [v175], secs: v177, time: v176, didSend: v79, from: v174 } = txn3;
    ;
    const v178 = stdlib.addressEq(v127, v174);
    stdlib.assert(v178, {
      at: './index.rsh:59:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const v179 = stdlib.add(v156, stdlib.checkedBigNumberify('./index.rsh:61:27:decimal', stdlib.UInt_max, '1'));
    const cv156 = v179;
    const cv157 = v176;
    
    v156 = cv156;
    v157 = cv157;
    
    continue;
    
    }
  const v180 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:65:12:decimal', stdlib.UInt_max, '2'), v119);
  ;
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAIAAEFIAgGSAImAgEAACI1ADEYQQIwKWRJIls1ASEEWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0mBBAxAAJdJJAxAAEokEkQhBTQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf9JNQU1/oAEQbs9fTT+ULA0/zEAEkQ0/zQDJVs0A1coIDQDIQZbIwgyBkIA3UgkNAESRDQESSISTDQCEhFEKGRJNQNXKCA1/0k1BTX+gATOPHBmNP5QsDT/MQASRDQDVwAgNAMlWzT/NAMhBlsjCDIGQgDUSSMMQAA7IxJEIzQBEkQ0BEkiEkw0AhIRRChkSTUDJVs1/4AEmouRdLA0/4gBWjQDVwAgNP8xADQDgShbMgZCAFVIgaCNBogBPyI0ARJENARJIhJMNAISEURJNQVJIls1/yEEWzX+gASs0R/DNP8WUDT+FlCwNP+IAQ4xADT/FlA0/hZQKEsBVwAwZ0gjNQEyBjUCQgCgNf81/jX9Nfw1+zT+gRUMQQAgNPs0/BZQNP1QNP4WUChLAVcAUGdIIQU1ATIGNQJCAG40+zT8NP0iNP9CAAA1/zX+Nf01/DX7NP6BAwxBAB80+zT8FlA0/VA0/hZQKEsBVwBQZ0gkNQEyBjUCQgAxsSKyASEHNPwLsggjshA0+7IHs0IAADEZJBJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCEHMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
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
                "name": "v119",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v120",
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
                "name": "v119",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v120",
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
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "_value",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T12",
                "name": "v175",
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
                "name": "v151",
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
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "_value",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T12",
                "name": "v175",
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
                "name": "v151",
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
  Bytecode: `0x608060405260405162000f0f38038062000f0f833981016040819052620000269162000235565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a16020810151516200009290341460076200012e565b620000c0604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b338082526020838101805151828501908152905182015160408086019182526001600081905543905580518085019590955291518483015251606080850191909152815180850390910181526080909301905281516200012592600292019062000158565b505050620002d2565b81620001545760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001669062000295565b90600052602060002090601f0160209004810192826200018a5760008555620001d5565b82601f10620001a557805160ff1916838001178555620001d5565b82800160010185558215620001d5579182015b82811115620001d5578251825591602001919060010190620001b8565b50620001e3929150620001e7565b5090565b5b80821115620001e35760008155600101620001e8565b604080519081016001600160401b03811182821017156200022f57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200024957600080fd5b62000253620001fe565b835181526040601f19830112156200026a57600080fd5b62000274620001fe565b60208581015182526040909501518582015293810193909352509092915050565b600181811c90821680620002aa57607f821691505b60208210811415620002cc57634e487b7160e01b600052602260045260246000fd5b50919050565b610c2d80620002e26000396000f3fe6080604052600436106100565760003560e01c80630693c6621461005f5780630cf4bd23146100725780631e93b0f1146100855780632c10a159146100a957806383230757146100bc578063ab53f2c6146100d157005b3661005d57005b005b61005d61006d366004610931565b6100f4565b61005d610080366004610931565b610282565b34801561009157600080fd5b506003545b6040519081526020015b60405180910390f35b61005d6100b7366004610931565b61040e565b3480156100c857600080fd5b50600154610096565b3480156100dd57600080fd5b506100e661056e565b6040516100a0929190610954565b610104600660005414601161060b565b61011e8135158061011757506001548235145b601261060b565b600080805560028054610130906109b1565b80601f016020809104026020016040519081016040528092919081815260200182805461015c906109b1565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c19190610a82565b90507fc55e6813659179108696e4402c6ac0aad47a66a412d076c5417e97b9b278904d33836040516101f4929190610a9e565b60405180910390a16102083415600f61060b565b8051610220906001600160a01b03163314601061060b565b6102286107ff565b815181516001600160a01b03918216905260208084015183519091015260408084015183519216910152606082015161026390600190610adb565b602080830180519290925290514391015261027d81610634565b505050565b610292600560005414600d61060b565b6102ac813515806102a557506001548235145b600e61060b565b6000808055600280546102be906109b1565b80601f01602080910402602001604051908101604052809291908181526020018280546102ea906109b1565b80156103375780601f1061030c57610100808354040283529160200191610337565b820191906000526020600020905b81548152906001019060200180831161031a57829003601f168201915b505050505080602001905181019061034f9190610a82565b90507f20e0220c6adfa181ccdf66a11a035e7ee7bc6900d5aa40894042309f10f8f0f93383604051610382929190610a9e565b60405180910390a16103963415600b61060b565b60408101516103b1906001600160a01b03163314600c61060b565b6103b96107ff565b815181516001600160a01b0391821690526020808401518351909101526040808401518351921691015260608201516103f490600190610adb565b602080830180519290925290514391015261027d81610727565b61041e600160005414600961060b565b6104388135158061043157506001548235145b600a61060b565b60008080556002805461044a906109b1565b80601f0160208091040260200160405190810160405280929190818152602001828054610476906109b1565b80156104c35780601f10610498576101008083540402835291602001916104c3565b820191906000526020600020905b8154815290600101906020018083116104a657829003601f168201915b50505050508060200190518101906104db9190610af3565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161050e929190610b62565b60405180910390a161052781602001513414600861060b565b61052f6107ff565b815181516001600160a01b0390911690526020808301518251820152815133604091820152830151818301805191909152514391015261027d81610634565b600060606000546002808054610583906109b1565b80601f01602080910402602001604051908101604052809291908181526020018280546105af906109b1565b80156105fc5780601f106105d1576101008083540402835291602001916105fc565b820191906000526020600020905b8154815290600101906020018083116105df57829003601f168201915b50505050509050915091509091565b816106305760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b602081015151601511156106cc576040805160808101825260008082526020808301828152838501838152606085018481528751516001600160a01b03908116875288518501519093528751870151909216905285820151519052600690915543600155915190916106a891839101610b9f565b6040516020818303038152906040526002908051906020019061027d92919061084a565b6106d46107ff565b81515181516001600160a01b039182169052825160209081015183518201528351604090810151845193169201919091528082018051600090528184015182015190519091015261063081610727565b50565b6020810151516003111561079b576040805160808101825260008082526020808301828152838501838152606085018481528751516001600160a01b03908116875288518501519093528751870151909216905285820151519052600590915543600155915190916106a891839101610b9f565b805180516020909101516001600160a01b03909116906108fc906107c0906002610bd8565b6040518115909202916000818181858888f193505050501580156107e8573d6000803e3d6000fd5b5060008080556001819055610724906002906108ce565b6040805160a08101825260009181018281526060820183905260808201929092529081908152602001610845604051806040016040528060008152602001600081525090565b905290565b828054610856906109b1565b90600052602060002090601f01602090048101928261087857600085556108be565b82601f1061089157805160ff19168380011785556108be565b828001600101855582156108be579182015b828111156108be5782518255916020019190600101906108a3565b506108ca929150610904565b5090565b5080546108da906109b1565b6000825580601f106108ea575050565b601f01602090049060005260206000209081019061072491905b5b808211156108ca5760008155600101610905565b60006040828403121561092b57600080fd5b50919050565b60006040828403121561094357600080fd5b61094d8383610919565b9392505050565b82815260006020604081840152835180604085015260005b818110156109885785810183015185820160600152820161096c565b8181111561099a576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806109c557607f821691505b6020821081141561092b57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b03811681146109fd57600080fd5b919050565b600060808284031215610a1457600080fd5b6040516080810181811067ffffffffffffffff82111715610a4557634e487b7160e01b600052604160045260246000fd5b604052905080610a54836109e6565b815260208301516020820152610a6c604084016109e6565b6040820152606083015160608201525092915050565b600060808284031215610a9457600080fd5b61094d8383610a02565b6001600160a01b03831681526060810161094d602083018480358252602090810135910152565b634e487b7160e01b600052601160045260246000fd5b60008219821115610aee57610aee610ac5565b500190565b600060608284031215610b0557600080fd5b6040516060810181811067ffffffffffffffff82111715610b3657634e487b7160e01b600052604160045260246000fd5b604052610b42836109e6565b815260208301516020820152604083015160408201528091505092915050565b6001600160a01b038316815281356020808301919091526060820190830135801515808214610b9057600080fd5b80604085015250509392505050565b81516001600160a01b03908116825260208084015190830152604080840151909116908201526060918201519181019190915260800190565b6000816000190483118215151615610bf257610bf2610ac5565b50029056fea2646970667358221220342401e1bd6b962043a8b552eaf7344068d2f2317f7fc637e5c41c7d9ea5471464736f6c634300080c0033`,
  BytecodeLen: 3855,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:27:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:66:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:57:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:39:13:after expr stmt semicolon',
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
