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
  
  
  const v191 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v191],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:63:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v191, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v195], secs: v197, time: v196, didSend: v29, from: v194 } = txn1;
      
      sim_r.txns.push({
        amt: v195,
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
  const {data: [v195], secs: v197, time: v196, didSend: v29, from: v194 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v204, time: v203, didSend: v38, from: v202 } = txn2;
  ;
  let v207 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
  let v208 = v203;
  
  while (await (async () => {
    const v223 = stdlib.eq(v207, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    
    return v223;})()) {
    let v224 = stdlib.checkedBigNumberify('./index.rsh:77:22:decimal', stdlib.UInt_max, '0');
    let v225 = v208;
    
    while (await (async () => {
      const v236 = stdlib.lt(v224, stdlib.checkedBigNumberify('./index.rsh:79:25:decimal', stdlib.UInt_max, '15'));
      
      return v236;})()) {
      const v239 = stdlib.protect(ctc1, await interact.PlayerCard(), {
        at: './index.rsh:82:57:application',
        fs: ['at ./index.rsh:81:17:application call to [unknown function] (defined at: ./index.rsh:81:21:function exp)'],
        msg: 'PlayerCard',
        who: 'Alice'
        });
      stdlib.protect(ctc0, await interact.seeCardValue(), {
        at: './index.rsh:83:65:application',
        fs: ['at ./index.rsh:81:17:application call to [unknown function] (defined at: ./index.rsh:81:21:function exp)'],
        msg: 'seeCardValue',
        who: 'Alice'
        });
      const v242 = stdlib.protect(ctc0, await interact.aliceScore(), {
        at: './index.rsh:84:58:application',
        fs: ['at ./index.rsh:81:17:application call to [unknown function] (defined at: ./index.rsh:81:21:function exp)'],
        msg: 'aliceScore',
        who: 'Alice'
        });
      
      const txn3 = await (ctc.sendrecv({
        args: [v194, v195, v202, v224, v239, v242],
        evt_cnt: 2,
        funcNum: 8,
        lct: v225,
        onlyIf: true,
        out_tys: [ctc1, ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:86:13:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v244, v245], secs: v247, time: v246, didSend: v71, from: v243 } = txn3;
          
          ;
          const v249 = stdlib.add(v224, v245);
          const cv224 = v249;
          const cv225 = v246;
          
          await (async () => {
            const v224 = cv224;
            const v225 = cv225;
            
            if (await (async () => {
              const v236 = stdlib.lt(v224, stdlib.checkedBigNumberify('./index.rsh:79:25:decimal', stdlib.UInt_max, '15'));
              
              return v236;})()) {
              sim_r.isHalt = false;
              }
            else {
              const v250 = stdlib.checkedBigNumberify('./index.rsh:92:20:decimal', stdlib.UInt_max, '0');
              const v251 = v225;
              
              if (await (async () => {
                const v262 = stdlib.lt(v250, stdlib.checkedBigNumberify('./index.rsh:94:23:decimal', stdlib.UInt_max, '15'));
                
                return v262;})()) {
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
      const {data: [v244, v245], secs: v247, time: v246, didSend: v71, from: v243 } = txn3;
      ;
      const v248 = stdlib.addressEq(v194, v243);
      stdlib.assert(v248, {
        at: './index.rsh:86:13:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v249 = stdlib.add(v224, v245);
      const cv224 = v249;
      const cv225 = v246;
      
      v224 = cv224;
      v225 = cv225;
      
      continue;
      
      }
    let v250 = stdlib.checkedBigNumberify('./index.rsh:92:20:decimal', stdlib.UInt_max, '0');
    let v251 = v225;
    
    while (await (async () => {
      const v262 = stdlib.lt(v250, stdlib.checkedBigNumberify('./index.rsh:94:23:decimal', stdlib.UInt_max, '15'));
      
      return v262;})()) {
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 7,
        out_tys: [ctc1, ctc0],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v270, v271], secs: v273, time: v272, didSend: v93, from: v269 } = txn3;
      ;
      const v274 = stdlib.addressEq(v202, v269);
      stdlib.assert(v274, {
        at: './index.rsh:101:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v275 = stdlib.add(v250, v271);
      const cv250 = v275;
      const cv251 = v272;
      
      v250 = cv250;
      v251 = cv251;
      
      continue;
      
      }
    const v278 = stdlib.protect(ctc3, await interact.totalCardValue(), {
      at: './index.rsh:108:59:application',
      fs: ['at ./index.rsh:107:15:application call to [unknown function] (defined at: ./index.rsh:107:19:function exp)'],
      msg: 'totalCardValue',
      who: 'Alice'
      });
    const v281 = stdlib.protect(ctc0, await interact.aliceScore(), {
      at: './index.rsh:109:53:application',
      fs: ['at ./index.rsh:107:15:application call to [unknown function] (defined at: ./index.rsh:107:19:function exp)'],
      msg: 'aliceScore',
      who: 'Alice'
      });
    
    const txn3 = await (ctc.sendrecv({
      args: [v194, v195, v202, v278, v281],
      evt_cnt: 2,
      funcNum: 5,
      lct: v251,
      onlyIf: true,
      out_tys: [ctc3, ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:112:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v283, v284], secs: v286, time: v285, didSend: v108, from: v282 } = txn3;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc2, ctc0, ctc2, ctc3, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v283, v284], secs: v286, time: v285, didSend: v108, from: v282 } = txn3;
    ;
    const v287 = stdlib.addressEq(v194, v282);
    stdlib.assert(v287, {
      at: './index.rsh:112:11:dot',
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
    const {data: [v292], secs: v294, time: v293, didSend: v118, from: v291 } = txn4;
    ;
    const v295 = stdlib.addressEq(v202, v291);
    stdlib.assert(v295, {
      at: './index.rsh:119:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    let v296;
    const v297 = stdlib.le(v284, stdlib.checkedBigNumberify('./index.rsh:29:13:decimal', stdlib.UInt_max, '21'));
    const v298 = stdlib.gt(v292, stdlib.checkedBigNumberify('./index.rsh:29:23:decimal', stdlib.UInt_max, '21'));
    const v299 = v297 ? v298 : false;
    const v300 = stdlib.lt(v284, stdlib.checkedBigNumberify('./index.rsh:29:35:decimal', stdlib.UInt_max, '21'));
    const v301 = stdlib.lt(v292, stdlib.checkedBigNumberify('./index.rsh:29:45:decimal', stdlib.UInt_max, '21'));
    const v302 = v300 ? v301 : false;
    const v303 = stdlib.gt(v284, v292);
    const v304 = v302 ? v303 : false;
    const v305 = v299 ? true : v304;
    if (v305) {
      v296 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
      }
    else {
      const v306 = stdlib.le(v292, stdlib.checkedBigNumberify('./index.rsh:31:20:decimal', stdlib.UInt_max, '21'));
      const v307 = stdlib.gt(v284, stdlib.checkedBigNumberify('./index.rsh:31:30:decimal', stdlib.UInt_max, '21'));
      const v308 = v306 ? v307 : false;
      const v311 = v301 ? v300 : false;
      const v312 = stdlib.gt(v292, v284);
      const v313 = v311 ? v312 : false;
      const v314 = v308 ? true : v313;
      if (v314) {
        v296 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
        }
      else {
        v296 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        }
      }
    const cv207 = v296;
    const cv208 = v293;
    
    v207 = cv207;
    v208 = cv208;
    
    continue;
    
    
    
    }
  const v315 = stdlib.eq(v207, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
  const v318 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:141:12:decimal', stdlib.UInt_max, '2'), v195);
  const v320 = v315 ? v194 : v202;
  ;
  stdlib.protect(ctc4, await interact.seeOutcome(v207), {
    at: './index.rsh:144:47:application',
    fs: ['at ./index.rsh:144:7:application call to [unknown function] (defined at: ./index.rsh:144:25:function exp)'],
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
  const {data: [v195], secs: v197, time: v196, didSend: v29, from: v194 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v195), {
    at: './index.rsh:68:25:application',
    fs: ['at ./index.rsh:67:11:application call to [unknown function] (defined at: ./index.rsh:67:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v194, v195],
    evt_cnt: 0,
    funcNum: 1,
    lct: v196,
    onlyIf: true,
    out_tys: [],
    pay: [v195, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v204, time: v203, didSend: v38, from: v202 } = txn2;
      
      sim_r.txns.push({
        amt: v195,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v207 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v208 = v203;
      
      if (await (async () => {
        const v223 = stdlib.eq(v207, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v223;})()) {
        const v224 = stdlib.checkedBigNumberify('./index.rsh:77:22:decimal', stdlib.UInt_max, '0');
        const v225 = v208;
        
        if (await (async () => {
          const v236 = stdlib.lt(v224, stdlib.checkedBigNumberify('./index.rsh:79:25:decimal', stdlib.UInt_max, '15'));
          
          return v236;})()) {
          sim_r.isHalt = false;
          }
        else {
          const v250 = stdlib.checkedBigNumberify('./index.rsh:92:20:decimal', stdlib.UInt_max, '0');
          const v251 = v225;
          
          if (await (async () => {
            const v262 = stdlib.lt(v250, stdlib.checkedBigNumberify('./index.rsh:94:23:decimal', stdlib.UInt_max, '15'));
            
            return v262;})()) {
            
            sim_r.isHalt = false;
            }
          else {
            sim_r.isHalt = false;
            }}}
      else {
        const v315 = stdlib.eq(v207, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
        const v318 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:141:12:decimal', stdlib.UInt_max, '2'), v195);
        const v320 = v315 ? v194 : v202;
        sim_r.txns.push({
          kind: 'from',
          to: v320,
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
  const {data: [], secs: v204, time: v203, didSend: v38, from: v202 } = txn2;
  ;
  let v207 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
  let v208 = v203;
  
  while (await (async () => {
    const v223 = stdlib.eq(v207, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    
    return v223;})()) {
    let v224 = stdlib.checkedBigNumberify('./index.rsh:77:22:decimal', stdlib.UInt_max, '0');
    let v225 = v208;
    
    while (await (async () => {
      const v236 = stdlib.lt(v224, stdlib.checkedBigNumberify('./index.rsh:79:25:decimal', stdlib.UInt_max, '15'));
      
      return v236;})()) {
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 8,
        out_tys: [ctc2, ctc0],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v244, v245], secs: v247, time: v246, didSend: v71, from: v243 } = txn3;
      ;
      const v248 = stdlib.addressEq(v194, v243);
      stdlib.assert(v248, {
        at: './index.rsh:86:13:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v249 = stdlib.add(v224, v245);
      const cv224 = v249;
      const cv225 = v246;
      
      v224 = cv224;
      v225 = cv225;
      
      continue;
      
      }
    let v250 = stdlib.checkedBigNumberify('./index.rsh:92:20:decimal', stdlib.UInt_max, '0');
    let v251 = v225;
    
    while (await (async () => {
      const v262 = stdlib.lt(v250, stdlib.checkedBigNumberify('./index.rsh:94:23:decimal', stdlib.UInt_max, '15'));
      
      return v262;})()) {
      const v265 = stdlib.protect(ctc2, await interact.PlayerCard(), {
        at: './index.rsh:96:55:application',
        fs: ['at ./index.rsh:95:15:application call to [unknown function] (defined at: ./index.rsh:95:19:function exp)'],
        msg: 'PlayerCard',
        who: 'Bob'
        });
      stdlib.protect(ctc0, await interact.seeCardValue(), {
        at: './index.rsh:97:63:application',
        fs: ['at ./index.rsh:95:15:application call to [unknown function] (defined at: ./index.rsh:95:19:function exp)'],
        msg: 'seeCardValue',
        who: 'Bob'
        });
      const v268 = stdlib.protect(ctc0, await interact.bobScore(), {
        at: './index.rsh:98:54:application',
        fs: ['at ./index.rsh:95:15:application call to [unknown function] (defined at: ./index.rsh:95:19:function exp)'],
        msg: 'bobScore',
        who: 'Bob'
        });
      
      const txn3 = await (ctc.sendrecv({
        args: [v194, v195, v202, v250, v265, v268],
        evt_cnt: 2,
        funcNum: 7,
        lct: v251,
        onlyIf: true,
        out_tys: [ctc2, ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:101:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v270, v271], secs: v273, time: v272, didSend: v93, from: v269 } = txn3;
          
          ;
          const v275 = stdlib.add(v250, v271);
          const cv250 = v275;
          const cv251 = v272;
          
          await (async () => {
            const v250 = cv250;
            const v251 = cv251;
            
            if (await (async () => {
              const v262 = stdlib.lt(v250, stdlib.checkedBigNumberify('./index.rsh:94:23:decimal', stdlib.UInt_max, '15'));
              
              return v262;})()) {
              
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
      const {data: [v270, v271], secs: v273, time: v272, didSend: v93, from: v269 } = txn3;
      ;
      const v274 = stdlib.addressEq(v202, v269);
      stdlib.assert(v274, {
        at: './index.rsh:101:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v275 = stdlib.add(v250, v271);
      const cv250 = v275;
      const cv251 = v272;
      
      v250 = cv250;
      v251 = cv251;
      
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
    const {data: [v283, v284], secs: v286, time: v285, didSend: v108, from: v282 } = txn3;
    ;
    const v287 = stdlib.addressEq(v194, v282);
    stdlib.assert(v287, {
      at: './index.rsh:112:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const v290 = stdlib.protect(ctc0, await interact.bobScore(), {
      at: './index.rsh:116:51:application',
      fs: ['at ./index.rsh:115:13:application call to [unknown function] (defined at: ./index.rsh:115:17:function exp)'],
      msg: 'bobScore',
      who: 'Bob'
      });
    
    const txn4 = await (ctc.sendrecv({
      args: [v194, v195, v202, v284, v290],
      evt_cnt: 1,
      funcNum: 6,
      lct: v285,
      onlyIf: true,
      out_tys: [ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:119:9:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v292], secs: v294, time: v293, didSend: v118, from: v291 } = txn4;
        
        ;
        let v296;
        const v297 = stdlib.le(v284, stdlib.checkedBigNumberify('./index.rsh:29:13:decimal', stdlib.UInt_max, '21'));
        const v298 = stdlib.gt(v292, stdlib.checkedBigNumberify('./index.rsh:29:23:decimal', stdlib.UInt_max, '21'));
        const v299 = v297 ? v298 : false;
        const v300 = stdlib.lt(v284, stdlib.checkedBigNumberify('./index.rsh:29:35:decimal', stdlib.UInt_max, '21'));
        const v301 = stdlib.lt(v292, stdlib.checkedBigNumberify('./index.rsh:29:45:decimal', stdlib.UInt_max, '21'));
        const v302 = v300 ? v301 : false;
        const v303 = stdlib.gt(v284, v292);
        const v304 = v302 ? v303 : false;
        const v305 = v299 ? true : v304;
        if (v305) {
          v296 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
          }
        else {
          const v306 = stdlib.le(v292, stdlib.checkedBigNumberify('./index.rsh:31:20:decimal', stdlib.UInt_max, '21'));
          const v307 = stdlib.gt(v284, stdlib.checkedBigNumberify('./index.rsh:31:30:decimal', stdlib.UInt_max, '21'));
          const v308 = v306 ? v307 : false;
          const v311 = v301 ? v300 : false;
          const v312 = stdlib.gt(v292, v284);
          const v313 = v311 ? v312 : false;
          const v314 = v308 ? true : v313;
          if (v314) {
            v296 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
            }
          else {
            v296 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            }
          }
        const cv207 = v296;
        const cv208 = v293;
        
        await (async () => {
          const v207 = cv207;
          const v208 = cv208;
          
          if (await (async () => {
            const v223 = stdlib.eq(v207, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
            
            return v223;})()) {
            const v224 = stdlib.checkedBigNumberify('./index.rsh:77:22:decimal', stdlib.UInt_max, '0');
            const v225 = v208;
            
            if (await (async () => {
              const v236 = stdlib.lt(v224, stdlib.checkedBigNumberify('./index.rsh:79:25:decimal', stdlib.UInt_max, '15'));
              
              return v236;})()) {
              sim_r.isHalt = false;
              }
            else {
              const v250 = stdlib.checkedBigNumberify('./index.rsh:92:20:decimal', stdlib.UInt_max, '0');
              const v251 = v225;
              
              if (await (async () => {
                const v262 = stdlib.lt(v250, stdlib.checkedBigNumberify('./index.rsh:94:23:decimal', stdlib.UInt_max, '15'));
                
                return v262;})()) {
                
                sim_r.isHalt = false;
                }
              else {
                sim_r.isHalt = false;
                }}}
          else {
            const v315 = stdlib.eq(v207, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
            const v318 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:141:12:decimal', stdlib.UInt_max, '2'), v195);
            const v320 = v315 ? v194 : v202;
            sim_r.txns.push({
              kind: 'from',
              to: v320,
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
    const {data: [v292], secs: v294, time: v293, didSend: v118, from: v291 } = txn4;
    ;
    const v295 = stdlib.addressEq(v202, v291);
    stdlib.assert(v295, {
      at: './index.rsh:119:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    let v296;
    const v297 = stdlib.le(v284, stdlib.checkedBigNumberify('./index.rsh:29:13:decimal', stdlib.UInt_max, '21'));
    const v298 = stdlib.gt(v292, stdlib.checkedBigNumberify('./index.rsh:29:23:decimal', stdlib.UInt_max, '21'));
    const v299 = v297 ? v298 : false;
    const v300 = stdlib.lt(v284, stdlib.checkedBigNumberify('./index.rsh:29:35:decimal', stdlib.UInt_max, '21'));
    const v301 = stdlib.lt(v292, stdlib.checkedBigNumberify('./index.rsh:29:45:decimal', stdlib.UInt_max, '21'));
    const v302 = v300 ? v301 : false;
    const v303 = stdlib.gt(v284, v292);
    const v304 = v302 ? v303 : false;
    const v305 = v299 ? true : v304;
    if (v305) {
      v296 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
      }
    else {
      const v306 = stdlib.le(v292, stdlib.checkedBigNumberify('./index.rsh:31:20:decimal', stdlib.UInt_max, '21'));
      const v307 = stdlib.gt(v284, stdlib.checkedBigNumberify('./index.rsh:31:30:decimal', stdlib.UInt_max, '21'));
      const v308 = v306 ? v307 : false;
      const v311 = v301 ? v300 : false;
      const v312 = stdlib.gt(v292, v284);
      const v313 = v311 ? v312 : false;
      const v314 = v308 ? true : v313;
      if (v314) {
        v296 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
        }
      else {
        v296 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        }
      }
    const cv207 = v296;
    const cv208 = v293;
    
    v207 = cv207;
    v208 = cv208;
    
    continue;
    
    
    
    }
  const v315 = stdlib.eq(v207, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
  const v318 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:141:12:decimal', stdlib.UInt_max, '2'), v195);
  const v320 = v315 ? v194 : v202;
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(v207), {
    at: './index.rsh:144:47:application',
    fs: ['at ./index.rsh:144:7:application call to [unknown function] (defined at: ./index.rsh:144:25:function exp)'],
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
  appApproval: `BiAMAAEIFSACBgdICQUPJgIBAAAiNQAxGEEDiylkSSJbNQEkWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0khBgxAAVJJIQcMQACzSSQMQABYJBJEIQk0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/STUFSVcACDX+JFs1/YAEk6WvAzT+UDT9FlCwNP8xABJENP80AyEEWzQDVyggNAMhCFs0/QgyBkICHUgkNAESRDQESSISTDQCEhFEKGRJNQNXKCA1/0k1BUlXAAg1/iRbNf2ABL4/Czg0/lA0/RZQsDT/MQASRDQDVwAgNAMhBFs0/zQDIQhbNP0IMgZCAgZIIQc0ARJENARJIhJMNAISEUQoZEk1A0lXKCA1/yEIWzX+STUFFzX9gARw7e96NP0WULA0/zEAEkQ0/iUMNfs0/SUMNfo0/iUONP0lDRA0+zT6EDT+NP0NEBFBAAchBTX8QgAhNP0lDjT+JQ0QNPo0+xA0/TT+DRARQQAGIjX8QgADIzX8NANXACA0AyEEWzT/NPwyBkIA9UkjDEAAqUkhCgxAAGpIIQY0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8hBFs1/lcoIDX9STUFSVcAEDX8gRBbNfuABLCjmGk0/FA0+xZQsDT/MQASRDT/NP4WUDT9UDT7FlAoSwFXAFBnSCEHNQEyBjUCQgFgIxJEIzQBEkQ0BEkiEkw0AhIRRChkSTUDIQRbNf+ABJqLkXSwNP+IAYk0A1cAIDT/MQAjMgZCAEZIgaCNBogBciI0ARJENARJIhJMNAISEURJNQUXNf+ABILEYf40/xZQsDT/iAFMMQA0/xZQKEsBVwAoZ0gjNQEyBjUCQgDiNf81/jX9Nfw1+zT+IxJBAAw0+zT8NP0iNP9CAB6xIrIBIQU0/AuyCCOyEDT9NPs0/iEFEk2yB7NCAIs1/zX+Nf01/DX7NP4hCwxBACA0+zT8FlA0/VA0/hZQKEsBVwBQZ0ghCTUBMgY1AkIAdTT7NPw0/SI0/0IAADX/Nf41/TX8Nfs0/iELDEEAHzT7NPwWUDT9UDT+FlAoSwFXAFBnSCQ1ATIGNQJCADg0+zT8FlA0/VAoSwFXAEhnSCEGNQEyBjUCQgAcMRkhChJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCEFMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
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
                "name": "v195",
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
                "name": "v195",
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
                "name": "v283",
                "type": "uint256[2]"
              },
              {
                "internalType": "uint256",
                "name": "v284",
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
                "name": "v292",
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
                "name": "v270",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v271",
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
                "name": "v244",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v245",
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
                "name": "v283",
                "type": "uint256[2]"
              },
              {
                "internalType": "uint256",
                "name": "v284",
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
                "name": "v292",
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
                "name": "v270",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v271",
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
                "name": "v244",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v245",
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
  Bytecode: `0x608060405260405162001555380380620015558339810160408190526200002691620001bf565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a1602081015151620000899034146007620000ef565b604080518082018252600060208083018281523380855286830151518252600193849055439093558451808301939093525182850152835180830385018152606090920190935280519192620000e6926002929091019062000119565b5050506200029e565b81620001155760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001279062000261565b90600052602060002090601f0160209004810192826200014b576000855562000196565b82601f106200016657805160ff191683800117855562000196565b8280016001018555821562000196579182015b828111156200019657825182559160200191906001019062000179565b50620001a4929150620001a8565b5090565b5b80821115620001a45760008155600101620001a9565b6000818303604080821215620001d457600080fd5b80518082016001600160401b0380821183831017156200020457634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200021e57600080fd5b8351945060208501915084821081831117156200024b57634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c908216806200027657607f821691505b602082108114156200029857634e487b7160e01b600052602260045260246000fd5b50919050565b6112a780620002ae6000396000f3fe6080604052600436106100795760003560e01c8063832307571161004b57806383230757146100df578063980b6eac146100f4578063ab53f2c614610107578063ba3974c41461012a57005b80631e93b0f1146100825780632c10a159146100a657806369dce4e4146100b957806370cc6414146100cc57005b3661008057005b005b34801561008e57600080fd5b506003545b6040519081526020015b60405180910390f35b6100806100b4366004610ec0565b61013d565b6100806100c7366004610ee3565b61029f565b6100806100da366004610f07565b610458565b3480156100eb57600080fd5b50600154610093565b610080610102366004610ec0565b6105e6565b34801561011357600080fd5b5061011c61086f565b60405161009d929190610f23565b610080610138366004610f07565b61090c565b61014d6001600054146009610a9d565b6101678135158061016057506001548235145b600a610a9d565b60008080556002805461017990610f80565b80601f01602080910402602001604051908101604052809291908181526020018280546101a590610f80565b80156101f25780601f106101c7576101008083540402835291602001916101f2565b820191906000526020600020905b8154815290600101906020018083116101d557829003601f168201915b505050505080602001905181019061020a9190610fd1565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161023d929190611036565b60405180910390a1610256816020015134146008610a9d565b61025e610d8e565b815181516001600160a01b0390911690526020808301518251820152815133604090910152808201805160019052514391015261029a81610ac6565b505050565b6102af600660005414600d610a9d565b6102c9813515806102c257506001548235145b600e610a9d565b6000808055600280546102db90610f80565b80601f016020809104026020016040519081016040528092919081815260200182805461030790610f80565b80156103545780601f1061032957610100808354040283529160200191610354565b820191906000526020600020905b81548152906001019060200180831161033757829003601f168201915b505050505080602001905181019061036c9190611073565b90507fd2f0507d7afb1ee6fda57f309d4d4d04387cffcab76291df6bd58227b6a99af1338360405161039f9291906110e6565b60405180910390a16103b33415600b610a9d565b80516103cb906001600160a01b03163314600c610a9d565b6040805160808101825260008082526020808301828152838501838152606080860185815288516001600160a01b039081168852898601519094528888015190931690915287013590526007909155436001559151909161042e9183910161111e565b60405160208183030381529060405260029080519060200190610452929190610dd9565b50505050565b6104686009600054146019610a9d565b6104828135158061047b57506001548235145b601a610a9d565b60008080556002805461049490610f80565b80601f01602080910402602001604051908101604052809291908181526020018280546104c090610f80565b801561050d5780601f106104e25761010080835404028352916020019161050d565b820191906000526020600020905b8154815290600101906020018083116104f057829003601f168201915b505050505080602001905181019061052591906111d7565b90507f99a414a0273af2387931ab3bce9b419b75f0ad719855de55e14ae546b98b97af33836040516105589291906111f3565b60405180910390a161056c34156017610a9d565b8051610584906001600160a01b031633146018610a9d565b61058c610d8e565b815181516001600160a01b039182169052602080840151835190910152604080840151835192169181019190915260608301516105cc918501359061123a565b602080830180519290925290514391015261029a81610bab565b6105f66007600054146011610a9d565b6106108135158061060957506001548235145b6012610a9d565b60008080556002805461062290610f80565b80601f016020809104026020016040519081016040528092919081815260200182805461064e90610f80565b801561069b5780601f106106705761010080835404028352916020019161069b565b820191906000526020600020905b81548152906001019060200180831161067e57829003601f168201915b50505050508060200190518101906106b391906111d7565b6040805160608082018352600080835260208084018290528385019190915283513381528735818301529087013593810193909352929350917fa2ddd0bc62239facbd79cdab1df75ee0cb72af9166d4371e62852a98cb4ca19c910160405180910390a16107233415600f610a9d565b604082015161073e906001600160a01b031633146010610a9d565b6060820180516015908111602080850191909152850135811160408401529051111561076b576000610774565b60156020840135115b6107a957806020015161078857600061078e565b80604001515b6107995760006107ac565b60608201516020840135106107ac565b60015b156107ba5760028152610822565b6015602084013511156107ce5760006107d7565b60158260600151115b61080c5780604001516107eb5760006107f1565b80602001515b6107fc57600061080f565b606082015160208401351161080f565b60015b1561081d5760008152610822565b600181525b61082a610d8e565b825181516001600160a01b0391821690526020808501518351820152604080860151845193169201919091528251818301805191909152514391015261045281610ac6565b60006060600054600280805461088490610f80565b80601f01602080910402602001604051908101604052809291908181526020018280546108b090610f80565b80156108fd5780601f106108d2576101008083540402835291602001916108fd565b820191906000526020600020905b8154815290600101906020018083116108e057829003601f168201915b50505050509050915091509091565b61091c6008600054146015610a9d565b6109368135158061092f57506001548235145b6016610a9d565b60008080556002805461094890610f80565b80601f016020809104026020016040519081016040528092919081815260200182805461097490610f80565b80156109c15780601f10610996576101008083540402835291602001916109c1565b820191906000526020600020905b8154815290600101906020018083116109a457829003601f168201915b50505050508060200190518101906109d991906111d7565b90507ffb163ff7457a0a1ecb0e7613d40d7691c1ee3a1a3606577171023a44f466c7313383604051610a0c9291906111f3565b60405180910390a1610a2034156013610a9d565b6040810151610a3b906001600160a01b031633146014610a9d565b610a43610d8e565b815181516001600160a01b03918216905260208084015183519091015260408084015183519216918101919091526060830151610a83918501359061123a565b602080830180519290925290514391015261029a81610c97565b81610ac25760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b60208101515160011415610b2c57610adc610d8e565b81515181516001600160a01b0391821690528251602090810151835182015283516040908101518451931692019190915280820180516000905281840151820151905190910152610ac281610bab565b602081015151600214610b4457805160400151610b48565b8051515b6001600160a01b03166108fc8260000151602001516002610b699190611252565b6040518115909202916000818181858888f19350505050158015610b91573d6000803e3d6000fd5b5060008080556001819055610ba890600290610e5d565b50565b602081015151600f1115610c43576040805160808101825260008082526020808301828152838501838152606085018481528751516001600160a01b0390811687528851850151909352875187015190921690528582015151905260099091554360015591519091610c1f9183910161111e565b6040516020818303038152906040526002908051906020019061029a929190610dd9565b610c4b610d8e565b81515181516001600160a01b0391821690528251602090810151835182015283516040908101518451931692019190915280820180516000905281840151820151905190910152610ac2815b602081015151600f1115610d0b576040805160808101825260008082526020808301828152838501838152606085018481528751516001600160a01b0390811687528851850151909352875187015190921690528582015151905260089091554360015591519091610c1f9183910161111e565b6040805160608082018352600080835260208084018281528486018381528751516001600160a01b03908116808852895185015184528951890151821683526006909555436001558751808501959095529151848801525116828401528451808303909301835260809091019093528051919261029a9260029290910190610dd9565b6040805160a08101825260009181018281526060820183905260808201929092529081908152602001610dd4604051806040016040528060008152602001600081525090565b905290565b828054610de590610f80565b90600052602060002090601f016020900481019282610e075760008555610e4d565b82601f10610e2057805160ff1916838001178555610e4d565b82800160010185558215610e4d579182015b82811115610e4d578251825591602001919060010190610e32565b50610e59929150610e93565b5090565b508054610e6990610f80565b6000825580601f10610e79575050565b601f016020900490600052602060002090810190610ba891905b5b80821115610e595760008155600101610e94565b600060408284031215610eba57600080fd5b50919050565b600060408284031215610ed257600080fd5b610edc8383610ea8565b9392505050565b600060808284031215610eba57600080fd5b600060608284031215610eba57600080fd5b600060608284031215610f1957600080fd5b610edc8383610ef5565b82815260006020604081840152835180604085015260005b81811015610f5757858101830151858201606001528201610f3b565b81811115610f69576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610f9457607f821691505b60208210811415610eba57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610fcc57600080fd5b919050565b600060408284031215610fe357600080fd5b6040516040810181811067ffffffffffffffff8211171561101457634e487b7160e01b600052604160045260246000fd5b60405261102083610fb5565b8152602083015160208201528091505092915050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461106457600080fd5b80604085015250509392505050565b60006060828403121561108557600080fd5b6040516060810181811067ffffffffffffffff821117156110b657634e487b7160e01b600052604160045260246000fd5b6040526110c283610fb5565b8152602083015160208201526110da60408401610fb5565b60408201529392505050565b6001600160a01b0383168152813560208083019190915260a08201906040908401818401376060929092013560809190910152919050565b81516001600160a01b03908116825260208084015190830152604080840151909116908201526060918201519181019190915260800190565b60006080828403121561116957600080fd5b6040516080810181811067ffffffffffffffff8211171561119a57634e487b7160e01b600052604160045260246000fd5b6040529050806111a983610fb5565b8152602083015160208201526111c160408401610fb5565b6040820152606083015160608201525092915050565b6000608082840312156111e957600080fd5b610edc8383611157565b6001600160a01b038316815260808101610edc60208301848035825260208082013590830152604090810135910152565b634e487b7160e01b600052601160045260246000fd5b6000821982111561124d5761124d611224565b500190565b600081600019048311821515161561126c5761126c611224565b50029056fea26469706673582212207cc576286797ed357175254673ea1b7cb9bbfc817dbf41c41edf77ff9899c9f364736f6c634300080c0033`,
  BytecodeLen: 5461,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:65:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:142:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:105:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:114:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:100:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:80:15:after expr stmt semicolon',
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
