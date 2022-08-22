<<<<<<< HEAD
import React, { useState } from "react";
=======
import { useState } from "react";
>>>>>>> parent of b7a7116... JSX fix done

export function PasteContractInfo({ attach }) {
  const [contractInfo, setContractInfo] = useState("");
  return (
    <div className="Paster_CtcInfo">
      <textarea
        placeholder="Paste Contract Info"
        value={contractInfo}
        onChange={(e) => setContractInfo(e.target.value)}
      />
      <br />
      <button onClick={() => attach(contractInfo)}>Attach To Contract</button>
    </div>
  );
}
