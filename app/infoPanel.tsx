"use client"

import AttackerTable from "./attacker-table";
import DefenderTable from "./defender-table";
import { useState } from "react";
import { initialAttackerData } from "@/static/init-attacker-data";
import { Button } from "@/components/ui/button";
import { useGetDamage } from "@/hooks/use-get-damage";
import { initialDefenderData } from "@/static/init-defender-data";
import { toast } from "@/hooks/use-toast";
import ResultTable from "./result-table";

const InfoPanel = () => {
  const [attackerData, setAttackerData] = useState(initialAttackerData);
  const [defenderData, setDefenderData] = useState(initialDefenderData);

  const handleAttackerInputChange =
    (key: string, value: string | number) => {
      setAttackerData(prev => ({ ...prev, [key]: value }));
    };

  const handleDefenderInputChange =
    (key: string, value: string | number) => {
      setDefenderData(prev => ({ ...prev, [key]: value }));
    };

  const { mutate, data: damageData, isPending, error } = useGetDamage();

  const handleSubmit = () => {
    if (attackerData.atClass === "" || defenderData.dfClass === "") {
      toast({
        variant: "destructive",
        title: "エラー",
        description: "アタッカーとディフェンダーのクラスを選択してください。",
      });
      return;
    } else if (attackerData.skillReference === "") {
      toast({
        variant: "destructive",
        title: "エラー",
        description: "スキルの参照先を選択してください。"
      })
    }
    mutate({ ...attackerData, ...defenderData });
  };

  return (
    <div className="flex gap-20 justify-center">
      <AttackerTable
        attackerData={attackerData}
        onInputChange={handleAttackerInputChange}
      />
      <div className="flex flex-col gap-5">
        <DefenderTable
          defenderData={defenderData}
          onInputChange={handleDefenderInputChange} />
        <Button
          variant="outline"
          onClick={handleSubmit}
          disabled={isPending}
        >
          {isPending ? "計算中..." : "計算"}
        </Button>
      </div>
      <ResultTable data={damageData} />
    </div>
  );
}

export default InfoPanel;