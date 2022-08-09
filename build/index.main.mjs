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
      6: [ctc0, ctc1, ctc0],
      7: [ctc0, ctc1, ctc0, ctc1],
      8: [ctc0, ctc1, ctc0, ctc1],
      9: [ctc0, ctc1, ctc0, ctc1]
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
  const ctc4 = stdlib.T_Null;
  
  
  const v183 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v183],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:66:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v183, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v187], secs: v189, time: v188, didSend: v29, from: v186 } = txn1;
      
      sim_r.txns.push({
        amt: v187,
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
  const {data: [v187], secs: v189, time: v188, didSend: v29, from: v186 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v196, time: v195, didSend: v38, from: v194 } = txn2;
  ;
  let v199 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
  let v200 = v195;
  
  while (await (async () => {
    const v215 = stdlib.eq(v199, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    
    return v215;})()) {
    let v216 = stdlib.checkedBigNumberify('./index.rsh:81:20:decimal', stdlib.UInt_max, '0');
    let v217 = v200;
    
    while (await (async () => {
      const v228 = stdlib.le(v216, stdlib.checkedBigNumberify('./index.rsh:83:24:decimal', stdlib.UInt_max, '21'));
      
      return v228;})()) {
      const v231 = stdlib.protect(ctc1, await interact.PlayerCard(), {
        at: './index.rsh:86:55:application',
        fs: ['at ./index.rsh:85:15:application call to [unknown function] (defined at: ./index.rsh:85:19:function exp)'],
        msg: 'PlayerCard',
        who: 'Alice'
        });
      stdlib.protect(ctc0, await interact.seeCardValue(), {
        at: './index.rsh:87:63:application',
        fs: ['at ./index.rsh:85:15:application call to [unknown function] (defined at: ./index.rsh:85:19:function exp)'],
        msg: 'seeCardValue',
        who: 'Alice'
        });
      const v234 = stdlib.protect(ctc0, await interact.aliceScore(), {
        at: './index.rsh:88:54:application',
        fs: ['at ./index.rsh:85:15:application call to [unknown function] (defined at: ./index.rsh:85:19:function exp)'],
        msg: 'aliceScore',
        who: 'Alice'
        });
      
      const txn3 = await (ctc.sendrecv({
        args: [v186, v187, v194, v216, v231, v234],
        evt_cnt: 2,
        funcNum: 8,
        lct: v217,
        onlyIf: true,
        out_tys: [ctc1, ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:90:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v236, v237], secs: v239, time: v238, didSend: v71, from: v235 } = txn3;
          
          ;
          const v241 = stdlib.add(v216, v237);
          const cv216 = v241;
          const cv217 = v238;
          
          await (async () => {
            const v216 = cv216;
            const v217 = cv217;
            
            if (await (async () => {
              const v228 = stdlib.le(v216, stdlib.checkedBigNumberify('./index.rsh:83:24:decimal', stdlib.UInt_max, '21'));
              
              return v228;})()) {
              sim_r.isHalt = false;
              }
            else {
              const v242 = stdlib.checkedBigNumberify('./index.rsh:96:18:decimal', stdlib.UInt_max, '0');
              const v243 = v217;
              
              if (await (async () => {
                const v254 = stdlib.le(v242, stdlib.checkedBigNumberify('./index.rsh:98:22:decimal', stdlib.UInt_max, '21'));
                
                return v254;})()) {
                sim_r.isHalt = false;
                }
              else {
                sim_r.isHalt = false;
                }}})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc2, ctc0, ctc2, ctc0, ctc1, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [v236, v237], secs: v239, time: v238, didSend: v71, from: v235 } = txn3;
      ;
      const v240 = stdlib.addressEq(v186, v235);
      stdlib.assert(v240, {
        at: './index.rsh:90:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v241 = stdlib.add(v216, v237);
      const cv216 = v241;
      const cv217 = v238;
      
      v216 = cv216;
      v217 = cv217;
      
      continue;
      
      }
    let v242 = stdlib.checkedBigNumberify('./index.rsh:96:18:decimal', stdlib.UInt_max, '0');
    let v243 = v217;
    
    while (await (async () => {
      const v254 = stdlib.le(v242, stdlib.checkedBigNumberify('./index.rsh:98:22:decimal', stdlib.UInt_max, '21'));
      
      return v254;})()) {
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 7,
        out_tys: [ctc1, ctc0],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v262, v263], secs: v265, time: v264, didSend: v93, from: v261 } = txn3;
      ;
      const v266 = stdlib.addressEq(v194, v261);
      stdlib.assert(v266, {
        at: './index.rsh:106:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v267 = stdlib.add(v242, v263);
      const cv242 = v267;
      const cv243 = v264;
      
      v242 = cv242;
      v243 = cv243;
      
      continue;
      
      }
    const v270 = stdlib.protect(ctc3, await interact.totalCardValue(), {
      at: './index.rsh:113:57:application',
      fs: ['at ./index.rsh:112:13:application call to [unknown function] (defined at: ./index.rsh:112:17:function exp)'],
      msg: 'totalCardValue',
      who: 'Alice'
      });
    const v273 = stdlib.protect(ctc0, await interact.aliceScore(), {
      at: './index.rsh:114:51:application',
      fs: ['at ./index.rsh:112:13:application call to [unknown function] (defined at: ./index.rsh:112:17:function exp)'],
      msg: 'aliceScore',
      who: 'Alice'
      });
    
    const txn3 = await (ctc.sendrecv({
      args: [v186, v187, v194, v270, v273],
      evt_cnt: 2,
      funcNum: 5,
      lct: v243,
      onlyIf: true,
      out_tys: [ctc3, ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:117:9:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v275, v276], secs: v278, time: v277, didSend: v108, from: v274 } = txn3;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc2, ctc0, ctc2, ctc3, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v275, v276], secs: v278, time: v277, didSend: v108, from: v274 } = txn3;
    ;
    const v279 = stdlib.addressEq(v186, v274);
    stdlib.assert(v279, {
      at: './index.rsh:117:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v284], secs: v286, time: v285, didSend: v118, from: v283 } = txn4;
    ;
    const v287 = stdlib.addressEq(v194, v283);
    stdlib.assert(v287, {
      at: './index.rsh:125:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    let v288;
    const v289 = stdlib.le(v276, stdlib.checkedBigNumberify('./index.rsh:29:12:decimal', stdlib.UInt_max, '21'));
    const v290 = stdlib.gt(v284, stdlib.checkedBigNumberify('./index.rsh:29:22:decimal', stdlib.UInt_max, '21'));
    const v291 = v289 ? v290 : false;
    const v292 = stdlib.gt(v276, v284);
    const v293 = v291 ? true : v292;
    if (v293) {
      v288 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
      }
    else {
      const v294 = stdlib.le(v284, stdlib.checkedBigNumberify('./index.rsh:31:19:decimal', stdlib.UInt_max, '21'));
      const v295 = stdlib.gt(v276, stdlib.checkedBigNumberify('./index.rsh:31:29:decimal', stdlib.UInt_max, '21'));
      const v296 = v294 ? v295 : false;
      const v297 = stdlib.gt(v284, v276);
      const v298 = v296 ? true : v297;
      if (v298) {
        v288 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
        }
      else {
        v288 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        }
      }
    const cv199 = v288;
    const cv200 = v285;
    
    v199 = cv199;
    v200 = cv200;
    
    continue;
    
    
    
    }
  const v299 = stdlib.eq(v199, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
  const v302 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:132:12:decimal', stdlib.UInt_max, '2'), v187);
  const v304 = v299 ? v186 : v194;
  ;
  stdlib.protect(ctc4, await interact.seeOutcome(v199), {
    at: './index.rsh:135:47:application',
    fs: ['at ./index.rsh:135:7:application call to [unknown function] (defined at: ./index.rsh:135:25:function exp)'],
    msg: 'seeOutcome',
    who: 'Alice'
    });
  
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
  const {data: [v187], secs: v189, time: v188, didSend: v29, from: v186 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v187), {
    at: './index.rsh:71:25:application',
    fs: ['at ./index.rsh:70:11:application call to [unknown function] (defined at: ./index.rsh:70:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v186, v187],
    evt_cnt: 0,
    funcNum: 1,
    lct: v188,
    onlyIf: true,
    out_tys: [],
    pay: [v187, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v196, time: v195, didSend: v38, from: v194 } = txn2;
      
      sim_r.txns.push({
        amt: v187,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v199 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v200 = v195;
      
      if (await (async () => {
        const v215 = stdlib.eq(v199, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v215;})()) {
        const v216 = stdlib.checkedBigNumberify('./index.rsh:81:20:decimal', stdlib.UInt_max, '0');
        const v217 = v200;
        
        if (await (async () => {
          const v228 = stdlib.le(v216, stdlib.checkedBigNumberify('./index.rsh:83:24:decimal', stdlib.UInt_max, '21'));
          
          return v228;})()) {
          sim_r.isHalt = false;
          }
        else {
          const v242 = stdlib.checkedBigNumberify('./index.rsh:96:18:decimal', stdlib.UInt_max, '0');
          const v243 = v217;
          
          if (await (async () => {
            const v254 = stdlib.le(v242, stdlib.checkedBigNumberify('./index.rsh:98:22:decimal', stdlib.UInt_max, '21'));
            
            return v254;})()) {
            
            sim_r.isHalt = false;
            }
          else {
            sim_r.isHalt = false;
            }}}
      else {
        const v299 = stdlib.eq(v199, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
        const v302 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:132:12:decimal', stdlib.UInt_max, '2'), v187);
        const v304 = v299 ? v186 : v194;
        sim_r.txns.push({
          kind: 'from',
          to: v304,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v196, time: v195, didSend: v38, from: v194 } = txn2;
  ;
  let v199 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
  let v200 = v195;
  
  while (await (async () => {
    const v215 = stdlib.eq(v199, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    
    return v215;})()) {
    let v216 = stdlib.checkedBigNumberify('./index.rsh:81:20:decimal', stdlib.UInt_max, '0');
    let v217 = v200;
    
    while (await (async () => {
      const v228 = stdlib.le(v216, stdlib.checkedBigNumberify('./index.rsh:83:24:decimal', stdlib.UInt_max, '21'));
      
      return v228;})()) {
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 8,
        out_tys: [ctc2, ctc0],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v236, v237], secs: v239, time: v238, didSend: v71, from: v235 } = txn3;
      ;
      const v240 = stdlib.addressEq(v186, v235);
      stdlib.assert(v240, {
        at: './index.rsh:90:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v241 = stdlib.add(v216, v237);
      const cv216 = v241;
      const cv217 = v238;
      
      v216 = cv216;
      v217 = cv217;
      
      continue;
      
      }
    let v242 = stdlib.checkedBigNumberify('./index.rsh:96:18:decimal', stdlib.UInt_max, '0');
    let v243 = v217;
    
    while (await (async () => {
      const v254 = stdlib.le(v242, stdlib.checkedBigNumberify('./index.rsh:98:22:decimal', stdlib.UInt_max, '21'));
      
      return v254;})()) {
      const v257 = stdlib.protect(ctc2, await interact.PlayerCard(), {
        at: './index.rsh:100:53:application',
        fs: ['at ./index.rsh:99:13:application call to [unknown function] (defined at: ./index.rsh:99:17:function exp)'],
        msg: 'PlayerCard',
        who: 'Bob'
        });
      stdlib.protect(ctc0, await interact.seeCardValue(), {
        at: './index.rsh:101:61:application',
        fs: ['at ./index.rsh:99:13:application call to [unknown function] (defined at: ./index.rsh:99:17:function exp)'],
        msg: 'seeCardValue',
        who: 'Bob'
        });
      const v260 = stdlib.protect(ctc0, await interact.bobScore(), {
        at: './index.rsh:102:50:application',
        fs: ['at ./index.rsh:99:13:application call to [unknown function] (defined at: ./index.rsh:99:17:function exp)'],
        msg: 'bobScore',
        who: 'Bob'
        });
      
      const txn3 = await (ctc.sendrecv({
        args: [v186, v187, v194, v242, v257, v260],
        evt_cnt: 2,
        funcNum: 7,
        lct: v243,
        onlyIf: true,
        out_tys: [ctc2, ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:106:9:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v262, v263], secs: v265, time: v264, didSend: v93, from: v261 } = txn3;
          
          ;
          const v267 = stdlib.add(v242, v263);
          const cv242 = v267;
          const cv243 = v264;
          
          await (async () => {
            const v242 = cv242;
            const v243 = cv243;
            
            if (await (async () => {
              const v254 = stdlib.le(v242, stdlib.checkedBigNumberify('./index.rsh:98:22:decimal', stdlib.UInt_max, '21'));
              
              return v254;})()) {
              
              sim_r.isHalt = false;
              }
            else {
              sim_r.isHalt = false;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc0, ctc3, ctc0, ctc2, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [v262, v263], secs: v265, time: v264, didSend: v93, from: v261 } = txn3;
      ;
      const v266 = stdlib.addressEq(v194, v261);
      stdlib.assert(v266, {
        at: './index.rsh:106:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v267 = stdlib.add(v242, v263);
      const cv242 = v267;
      const cv243 = v264;
      
      v242 = cv242;
      v243 = cv243;
      
      continue;
      
      }
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 5,
      out_tys: [ctc4, ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v275, v276], secs: v278, time: v277, didSend: v108, from: v274 } = txn3;
    ;
    const v279 = stdlib.addressEq(v186, v274);
    stdlib.assert(v279, {
      at: './index.rsh:117:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const v282 = stdlib.protect(ctc0, await interact.bobScore(), {
      at: './index.rsh:122:49:application',
      fs: ['at ./index.rsh:121:11:application call to [unknown function] (defined at: ./index.rsh:121:15:function exp)'],
      msg: 'bobScore',
      who: 'Bob'
      });
    
    const txn4 = await (ctc.sendrecv({
      args: [v186, v187, v194, v276, v282],
      evt_cnt: 1,
      funcNum: 6,
      lct: v277,
      onlyIf: true,
      out_tys: [ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:125:7:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v284], secs: v286, time: v285, didSend: v118, from: v283 } = txn4;
        
        ;
        let v288;
        const v289 = stdlib.le(v276, stdlib.checkedBigNumberify('./index.rsh:29:12:decimal', stdlib.UInt_max, '21'));
        const v290 = stdlib.gt(v284, stdlib.checkedBigNumberify('./index.rsh:29:22:decimal', stdlib.UInt_max, '21'));
        const v291 = v289 ? v290 : false;
        const v292 = stdlib.gt(v276, v284);
        const v293 = v291 ? true : v292;
        if (v293) {
          v288 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
          }
        else {
          const v294 = stdlib.le(v284, stdlib.checkedBigNumberify('./index.rsh:31:19:decimal', stdlib.UInt_max, '21'));
          const v295 = stdlib.gt(v276, stdlib.checkedBigNumberify('./index.rsh:31:29:decimal', stdlib.UInt_max, '21'));
          const v296 = v294 ? v295 : false;
          const v297 = stdlib.gt(v284, v276);
          const v298 = v296 ? true : v297;
          if (v298) {
            v288 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
            }
          else {
            v288 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            }
          }
        const cv199 = v288;
        const cv200 = v285;
        
        await (async () => {
          const v199 = cv199;
          const v200 = cv200;
          
          if (await (async () => {
            const v215 = stdlib.eq(v199, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
            
            return v215;})()) {
            const v216 = stdlib.checkedBigNumberify('./index.rsh:81:20:decimal', stdlib.UInt_max, '0');
            const v217 = v200;
            
            if (await (async () => {
              const v228 = stdlib.le(v216, stdlib.checkedBigNumberify('./index.rsh:83:24:decimal', stdlib.UInt_max, '21'));
              
              return v228;})()) {
              sim_r.isHalt = false;
              }
            else {
              const v242 = stdlib.checkedBigNumberify('./index.rsh:96:18:decimal', stdlib.UInt_max, '0');
              const v243 = v217;
              
              if (await (async () => {
                const v254 = stdlib.le(v242, stdlib.checkedBigNumberify('./index.rsh:98:22:decimal', stdlib.UInt_max, '21'));
                
                return v254;})()) {
                
                sim_r.isHalt = false;
                }
              else {
                sim_r.isHalt = false;
                }}}
          else {
            const v299 = stdlib.eq(v199, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
            const v302 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:132:12:decimal', stdlib.UInt_max, '2'), v187);
            const v304 = v299 ? v186 : v194;
            sim_r.txns.push({
              kind: 'from',
              to: v304,
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
      tys: [ctc3, ctc0, ctc3, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v284], secs: v286, time: v285, didSend: v118, from: v283 } = txn4;
    ;
    const v287 = stdlib.addressEq(v194, v283);
    stdlib.assert(v287, {
      at: './index.rsh:125:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    let v288;
    const v289 = stdlib.le(v276, stdlib.checkedBigNumberify('./index.rsh:29:12:decimal', stdlib.UInt_max, '21'));
    const v290 = stdlib.gt(v284, stdlib.checkedBigNumberify('./index.rsh:29:22:decimal', stdlib.UInt_max, '21'));
    const v291 = v289 ? v290 : false;
    const v292 = stdlib.gt(v276, v284);
    const v293 = v291 ? true : v292;
    if (v293) {
      v288 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
      }
    else {
      const v294 = stdlib.le(v284, stdlib.checkedBigNumberify('./index.rsh:31:19:decimal', stdlib.UInt_max, '21'));
      const v295 = stdlib.gt(v276, stdlib.checkedBigNumberify('./index.rsh:31:29:decimal', stdlib.UInt_max, '21'));
      const v296 = v294 ? v295 : false;
      const v297 = stdlib.gt(v284, v276);
      const v298 = v296 ? true : v297;
      if (v298) {
        v288 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
        }
      else {
        v288 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        }
      }
    const cv199 = v288;
    const cv200 = v285;
    
    v199 = cv199;
    v200 = cv200;
    
    continue;
    
    
    
    }
  const v299 = stdlib.eq(v199, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
  const v302 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:132:12:decimal', stdlib.UInt_max, '2'), v187);
  const v304 = v299 ? v186 : v194;
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(v199), {
    at: './index.rsh:135:47:application',
    fs: ['at ./index.rsh:135:7:application call to [unknown function] (defined at: ./index.rsh:135:25:function exp)'],
    msg: 'seeOutcome',
    who: 'Bob'
    });
  
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiALAAEIFSACBgdICQUmAgEAACI1ADEYQQNxKWRJIls1ASRbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSEGDEABOkkhBwxAALNJJAxAAFgkEkQhCTQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf9JNQVJVwAINf4kWzX9gASTpa8DNP5QNP0WULA0/zEAEkQ0/zQDIQRbNANXKCA0AyEIWzT9CDIGQgIFSCQ0ARJENARJIhJMNAISEUQoZEk1A1coIDX/STUFSVcACDX+JFs1/YAEvj8LODT+UDT9FlCwNP8xABJENANXACA0AyEEWzT/NAMhCFs0/QgyBkIB7UghBzQBEkQ0BEkiEkw0AhIRRChkSTUDSVcoIDX/IQhbNf5JNQUXNf2ABHDt73o0/RZQsDT/MQASRDT+JQ40/SUNEDT+NP0NEUEAByEFNfxCABs0/SUONP4lDRA0/TT+DRFBAAYiNfxCAAMjNfw0A1cAIDQDIQRbNP80/DIGQgD1SSMMQACpSSEKDEAAakghBjQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yEEWzX+VyggNf1JNQVJVwAQNfyBEFs1+4AEsKOYaTT8UDT7FlCwNP8xABJENP80/hZQNP1QNPsWUChLAVcAUGdIIQc1ATIGNQJCAV4jEkQjNAESRDQESSISTDQCEhFEKGRJNQMhBFs1/4AEmouRdLA0/4gBhzQDVwAgNP8xACMyBkIARkiBoI0GiAFwIjQBEkQ0BEkiEkw0AhIRREk1BRc1/4AEgsRh/jT/FlCwNP+IAUoxADT/FlAoSwFXAChnSCM1ATIGNQJCAOA1/zX+Nf01/DX7NP4jEkEADDT7NPw0/SI0/0IAHrEisgEhBTT8C7III7IQNP00+zT+IQUSTbIHs0IAiTX/Nf41/TX8Nfs0/iUOQQAgNPs0/BZQNP1QNP4WUChLAVcAUGdIIQk1ATIGNQJCAHQ0+zT8NP0iNP9CAAA1/zX+Nf01/DX7NP4lDkEAHzT7NPwWUDT9UDT+FlAoSwFXAFBnSCQ1ATIGNQJCADg0+zT8FlA0/VAoSwFXAEhnSCEGNQEyBjUCQgAcMRkhChJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCEFMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
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
                "name": "v187",
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
                "name": "v187",
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
                "name": "v275",
                "type": "uint256[2]"
              },
              {
                "internalType": "uint256",
                "name": "v276",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
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
                "internalType": "uint256",
                "name": "v284",
                "type": "uint256"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
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
                "internalType": "struct T20",
                "name": "v262",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v263",
                "type": "uint256"
              }
            ],
            "internalType": "struct T21",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
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
                "internalType": "struct T20",
                "name": "v236",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v237",
                "type": "uint256"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T24",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
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
                "name": "v275",
                "type": "uint256[2]"
              },
              {
                "internalType": "uint256",
                "name": "v276",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
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
                "name": "v284",
                "type": "uint256"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
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
                "internalType": "struct T20",
                "name": "v262",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v263",
                "type": "uint256"
              }
            ],
            "internalType": "struct T21",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
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
                "internalType": "struct T20",
                "name": "v236",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v237",
                "type": "uint256"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T24",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620014f1380380620014f18339810160408190526200002691620001bf565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a1602081015151620000899034146007620000ef565b604080518082018252600060208083018281523380855286830151518252600193849055439093558451808301939093525182850152835180830385018152606090920190935280519192620000e6926002929091019062000119565b5050506200029e565b81620001155760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001279062000261565b90600052602060002090601f0160209004810192826200014b576000855562000196565b82601f106200016657805160ff191683800117855562000196565b8280016001018555821562000196579182015b828111156200019657825182559160200191906001019062000179565b50620001a4929150620001a8565b5090565b5b80821115620001a45760008155600101620001a9565b6000818303604080821215620001d457600080fd5b80518082016001600160401b0380821183831017156200020457634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200021e57600080fd5b8351945060208501915084821081831117156200024b57634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c908216806200027657607f821691505b602082108114156200029857634e487b7160e01b600052602260045260246000fd5b50919050565b61124380620002ae6000396000f3fe6080604052600436106100795760003560e01c8063832307571161004b57806383230757146100df578063980b6eac146100f4578063ab53f2c614610107578063ba3974c41461012a57005b80631e93b0f1146100825780632c10a159146100a657806369dce4e4146100b957806370cc6414146100cc57005b3661008057005b005b34801561008e57600080fd5b506003545b6040519081526020015b60405180910390f35b6100806100b4366004610e5c565b61013d565b6100806100c7366004610e7f565b61029f565b6100806100da366004610ea3565b610458565b3480156100eb57600080fd5b50600154610093565b610080610102366004610e5c565b6105e6565b34801561011357600080fd5b5061011c61080d565b60405161009d929190610ebf565b610080610138366004610ea3565b6108aa565b61014d6001600054146009610a3b565b6101678135158061016057506001548235145b600a610a3b565b60008080556002805461017990610f1c565b80601f01602080910402602001604051908101604052809291908181526020018280546101a590610f1c565b80156101f25780601f106101c7576101008083540402835291602001916101f2565b820191906000526020600020905b8154815290600101906020018083116101d557829003601f168201915b505050505080602001905181019061020a9190610f6d565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161023d929190610fd2565b60405180910390a1610256816020015134146008610a3b565b61025e610d2a565b815181516001600160a01b0390911690526020808301518251820152815133604090910152808201805160019052514391015261029a81610a64565b505050565b6102af600660005414600d610a3b565b6102c9813515806102c257506001548235145b600e610a3b565b6000808055600280546102db90610f1c565b80601f016020809104026020016040519081016040528092919081815260200182805461030790610f1c565b80156103545780601f1061032957610100808354040283529160200191610354565b820191906000526020600020905b81548152906001019060200180831161033757829003601f168201915b505050505080602001905181019061036c919061100f565b90507fd2f0507d7afb1ee6fda57f309d4d4d04387cffcab76291df6bd58227b6a99af1338360405161039f929190611082565b60405180910390a16103b33415600b610a3b565b80516103cb906001600160a01b03163314600c610a3b565b6040805160808101825260008082526020808301828152838501838152606080860185815288516001600160a01b039081168852898601519094528888015190931690915287013590526007909155436001559151909161042e918391016110ba565b60405160208183030381529060405260029080519060200190610452929190610d75565b50505050565b6104686009600054146019610a3b565b6104828135158061047b57506001548235145b601a610a3b565b60008080556002805461049490610f1c565b80601f01602080910402602001604051908101604052809291908181526020018280546104c090610f1c565b801561050d5780601f106104e25761010080835404028352916020019161050d565b820191906000526020600020905b8154815290600101906020018083116104f057829003601f168201915b50505050508060200190518101906105259190611173565b90507f99a414a0273af2387931ab3bce9b419b75f0ad719855de55e14ae546b98b97af338360405161055892919061118f565b60405180910390a161056c34156017610a3b565b8051610584906001600160a01b031633146018610a3b565b61058c610d2a565b815181516001600160a01b039182169052602080840151835190910152604080840151835192169181019190915260608301516105cc91850135906111d6565b602080830180519290925290514391015261029a81610b49565b6105f66007600054146011610a3b565b6106108135158061060957506001548235145b6012610a3b565b60008080556002805461062290610f1c565b80601f016020809104026020016040519081016040528092919081815260200182805461064e90610f1c565b801561069b5780601f106106705761010080835404028352916020019161069b565b820191906000526020600020905b81548152906001019060200180831161067e57829003601f168201915b50505050508060200190518101906106b39190611173565b90506106cb6040518060200160405280600081525090565b6040805133815284356020808301919091528501358183015290517fa2ddd0bc62239facbd79cdab1df75ee0cb72af9166d4371e62852a98cb4ca19c9181900360600190a161071c3415600f610a3b565b6040820151610737906001600160a01b031633146010610a3b565b60158260600151111561074b576000610754565b60156020840135115b61076857606082015160208401351061076b565b60015b1561077957600281526107c0565b60156020840135111561078d576000610796565b60158260600151115b6107aa5760608201516020840135116107ad565b60015b156107bb57600081526107c0565b600181525b6107c8610d2a565b825181516001600160a01b0391821690526020808501518351820152604080860151845193169201919091528251818301805191909152514391015261045281610a64565b60006060600054600280805461082290610f1c565b80601f016020809104026020016040519081016040528092919081815260200182805461084e90610f1c565b801561089b5780601f106108705761010080835404028352916020019161089b565b820191906000526020600020905b81548152906001019060200180831161087e57829003601f168201915b50505050509050915091509091565b6108ba6008600054146015610a3b565b6108d4813515806108cd57506001548235145b6016610a3b565b6000808055600280546108e690610f1c565b80601f016020809104026020016040519081016040528092919081815260200182805461091290610f1c565b801561095f5780601f106109345761010080835404028352916020019161095f565b820191906000526020600020905b81548152906001019060200180831161094257829003601f168201915b50505050508060200190518101906109779190611173565b90507ffb163ff7457a0a1ecb0e7613d40d7691c1ee3a1a3606577171023a44f466c73133836040516109aa92919061118f565b60405180910390a16109be34156013610a3b565b60408101516109d9906001600160a01b031633146014610a3b565b6109e1610d2a565b815181516001600160a01b03918216905260208084015183519091015260408084015183519216918101919091526060830151610a2191850135906111d6565b602080830180519290925290514391015261029a81610c34565b81610a605760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b60208101515160011415610aca57610a7a610d2a565b81515181516001600160a01b0391821690528251602090810151835182015283516040908101518451931692019190915280820180516000905281840151820151905190910152610a6081610b49565b602081015151600214610ae257805160400151610ae6565b8051515b6001600160a01b03166108fc8260000151602001516002610b0791906111ee565b6040518115909202916000818181858888f19350505050158015610b2f573d6000803e3d6000fd5b5060008080556001819055610b4690600290610df9565b50565b602081015151601510610be0576040805160808101825260008082526020808301828152838501838152606085018481528751516001600160a01b0390811687528851850151909352875187015190921690528582015151905260099091554360015591519091610bbc918391016110ba565b6040516020818303038152906040526002908051906020019061029a929190610d75565b610be8610d2a565b81515181516001600160a01b0391821690528251602090810151835182015283516040908101518451931692019190915280820180516000905281840151820151905190910152610a60815b602081015151601510610ca7576040805160808101825260008082526020808301828152838501838152606085018481528751516001600160a01b0390811687528851850151909352875187015190921690528582015151905260089091554360015591519091610bbc918391016110ba565b6040805160608082018352600080835260208084018281528486018381528751516001600160a01b03908116808852895185015184528951890151821683526006909555436001558751808501959095529151848801525116828401528451808303909301835260809091019093528051919261029a9260029290910190610d75565b6040805160a08101825260009181018281526060820183905260808201929092529081908152602001610d70604051806040016040528060008152602001600081525090565b905290565b828054610d8190610f1c565b90600052602060002090601f016020900481019282610da35760008555610de9565b82601f10610dbc57805160ff1916838001178555610de9565b82800160010185558215610de9579182015b82811115610de9578251825591602001919060010190610dce565b50610df5929150610e2f565b5090565b508054610e0590610f1c565b6000825580601f10610e15575050565b601f016020900490600052602060002090810190610b4691905b5b80821115610df55760008155600101610e30565b600060408284031215610e5657600080fd5b50919050565b600060408284031215610e6e57600080fd5b610e788383610e44565b9392505050565b600060808284031215610e5657600080fd5b600060608284031215610e5657600080fd5b600060608284031215610eb557600080fd5b610e788383610e91565b82815260006020604081840152835180604085015260005b81811015610ef357858101830151858201606001528201610ed7565b81811115610f05576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610f3057607f821691505b60208210811415610e5657634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610f6857600080fd5b919050565b600060408284031215610f7f57600080fd5b6040516040810181811067ffffffffffffffff82111715610fb057634e487b7160e01b600052604160045260246000fd5b604052610fbc83610f51565b8152602083015160208201528091505092915050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461100057600080fd5b80604085015250509392505050565b60006060828403121561102157600080fd5b6040516060810181811067ffffffffffffffff8211171561105257634e487b7160e01b600052604160045260246000fd5b60405261105e83610f51565b81526020830151602082015261107660408401610f51565b60408201529392505050565b6001600160a01b0383168152813560208083019190915260a08201906040908401818401376060929092013560809190910152919050565b81516001600160a01b03908116825260208084015190830152604080840151909116908201526060918201519181019190915260800190565b60006080828403121561110557600080fd5b6040516080810181811067ffffffffffffffff8211171561113657634e487b7160e01b600052604160045260246000fd5b60405290508061114583610f51565b81526020830151602082015261115d60408401610f51565b6040820152606083015160608201525092915050565b60006080828403121561118557600080fd5b610e7883836110f3565b6001600160a01b038316815260808101610e7860208301848035825260208082013590830152604090810135910152565b634e487b7160e01b600052601160045260246000fd5b600082198211156111e9576111e96111c0565b500190565b6000816000190483118215151615611208576112086111c0565b50029056fea2646970667358221220e248d542cd77b32998d9f416ba0b11f9360ef032787002a95bd0248372be34f164736f6c634300080c0033`,
  BytecodeLen: 5361,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:68:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:133:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:110:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:120:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:105:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:84:13:after expr stmt semicolon',
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
