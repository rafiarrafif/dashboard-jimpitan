import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import React from "react";

const SelectAmount = ({
  duesAmount,
  nominalSelected,
  setNominalSelected,
}: {
  duesAmount: number;
  nominalSelected: number | null;
  setNominalSelected: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  return (
    <div className="mt-4 flex justify-between">
      <div>
        <h1 className="text-neutral-800">Masukan nominal:</h1>
        <h4 className="text-sm italic text-neutral-500">Max Rp{duesAmount}</h4>
      </div>
      <div className="flex items-center gap-0 border border-neutral-800 rounded-sm h-fit overflow-hidden">
        <Button
          className="rounded-none min-w-5 min-h-5 bg-neutral-800"
          onPress={() => {
            if (nominalSelected !== null && nominalSelected < duesAmount)
              setNominalSelected(nominalSelected + 2000);
          }}
        >
          <Icon icon="lucide:plus" className="text-white text-xl" />
        </Button>
        <span className="px-2">{nominalSelected}</span>
        <Button
          className="rounded-none min-w-5 min-h-5 bg-neutral-800"
          onPress={() => {
            if (nominalSelected !== null && nominalSelected > 0)
              setNominalSelected(nominalSelected - 2000);
          }}
        >
          <Icon icon="lucide:minus" className="text-white text-xl" />
        </Button>
      </div>
    </div>
  );
};

export default SelectAmount;
