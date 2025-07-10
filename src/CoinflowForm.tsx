import { useState } from "react";
import { NftSuccessModal } from "./modals/NftSuccessModal";
import { useWallet } from "./wallet/Wallet.tsx";
import { LoadingSpinner } from "./App.tsx";

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
      />
      <NftSuccessModal isOpen={nftSuccessOpen} setIsOpen={setNftSuccessOpen} />
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function CoinflowPurchaseWrapper(_args: {
  onSuccess: () => void;
  subtotal: {cents: number;};
}) {
  // TODO your implementation goes here
  return (
    <div className={"h-full flex-1 w-full relative pb-20"}>
      <div
        className={"absolute w-full min-h-96 flex items-center justify-center"}
      >
        <LoadingSpinner className={"!text-gray-900/20 !fill-gray-900"} />
      </div>
      <div
        className={
          "flex-col h-full flex mx-auto relative overflow-hidden rounded-none md:rounded-xl md:border border-black/5"
        }
      >

      </div>
    </div>
  );
}
