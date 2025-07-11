import { useState, useCallback } from "react";
import { NftSuccessModal } from "./modals/NftSuccessModal";
import { useWallet } from "./wallet/Wallet.tsx";
import { LoadingSpinner } from "./App.tsx";

import { CoinflowPurchase, SolanaWallet } from '@coinflowlabs/react'; // Import SolanaWallet type
import { Connection } from '@solana/web3.js';

export function CoinflowForm() {
  const { wallet, connection } = useWallet();
  const [nftSuccessOpen, setNftSuccessOpen] = useState<boolean>(false);

  if (!wallet || !wallet.publicKey || !connection)
    return (
      <div className={"w-full min-h-96 flex items-center justify-center"}>
        <LoadingSpinner className={"!text-gray-900/20 !fill-gray-900"} />
      </div>
    );

  return (
    <div className={"w-full flex-1 "}>
      <CoinflowPurchaseWrapper
        onSuccess={() => setNftSuccessOpen(true)}
        subtotal={{cents: 20_00}}
        wallet={wallet}
        connection={connection}
      />
      <NftSuccessModal isOpen={nftSuccessOpen} setIsOpen={setNftSuccessOpen} />
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function CoinflowPurchaseWrapper({
  onSuccess,
  subtotal,
  wallet,
  connection,
}: {
  onSuccess: () => void;
  subtotal: {cents: number;};
  wallet: SolanaWallet; 
  connection: Connection;
}) {
  // State to store the dynamic height of the Coinflow iframe
  const [height, setHeight] = useState<number>(0);

  const handleHeight = useCallback((newHeight: string) => {
    const exactHeight = Number(newHeight);
    if(!isNaN(exactHeight)) {
      setHeight(exactHeight);
    } else {
      console.warn("invalid height value", newHeight);
    }
  }, []);
  return (
    <div style={{ height: `${height}px` }} className={"h-full flex-1 w-full relative pb-20"}>
      <CoinflowPurchase
        wallet={wallet}
        merchantId={"swe-challenge"}
        env={"sandbox"}
        connection={connection}
        onSuccess={onSuccess}
        blockchain={"solana"}
        subtotal={subtotal}
        loaderBackground={"#FFFFFF"}
        handleHeightChange={handleHeight}
        chargebackProtectionData={[]} 
      />
    </div>
  );
}
