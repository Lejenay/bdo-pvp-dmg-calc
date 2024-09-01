"use client"

import AttackerTable from "./attacker-table";
import DefenderTable from "./defender-table";
import { useEffect, useState } from "react";
import { initialAttackerData } from "@/static/init-attacker-data";
import { Button } from "@/components/ui/button";
import { DamageCalculationResultType, useGetDamage } from "@/hooks/use-get-damage";
import { initialDefenderData } from "@/static/init-defender-data";
import { toast } from "@/hooks/use-toast";
import ResultTable from "./result-table";

const InfoPanel = () => {
  const [attackerData, setAttackerData] = useState(initialAttackerData);
  const [defenderData, setDefenderData] = useState(initialDefenderData);
  const [currentDamageData, setCurrentDamageData] = useState<DamageCalculationResultType>();
  const [previousDamageData, setPreviousDamageData] = useState<DamageCalculationResultType>();

  // load data from local storage
  useEffect(() => {
    const savedAttackerData = localStorage.getItem('attackerData');
    const savedDefenderData = localStorage.getItem('defenderData');

    if (savedAttackerData) {
      setAttackerData(JSON.parse(savedAttackerData));
    }
    if (savedDefenderData) {
      setDefenderData(JSON.parse(savedDefenderData));
    }
  }, []);

  const handleAttackerInputChange =
    (key: string, value: string | number) => {
      setAttackerData(prev => {
        const newData = { ...prev, [key]: value };
        localStorage.setItem('attackerData', JSON.stringify(newData));
        return newData;
      })
    };

  const handleDefenderInputChange =
    (key: string, value: string | number) => {
      setDefenderData(prev => {
        const newData = { ...prev, [key]: value };
        localStorage.setItem('defenderData', JSON.stringify(newData));
        return newData;
      });
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
      return;
    } else if (attackerData.attackType === "") {
      toast({
        variant: "destructive",
        title: "エラー",
        description: "アタックの種類を選択してください。"
      })
      return;
    }
    mutate({ ...attackerData, ...defenderData });
  };

  useEffect(() => {
    if (damageData) {
      setPreviousDamageData(currentDamageData);
      setCurrentDamageData(damageData);
    }
  }, [damageData]);

  useEffect(() => {
    if (error) {
      toast({
        variant: "destructive",
        title: "エラー",
        description: error instanceof Error ? error.message : "計算中にエラーが発生しました。",
      });
    }
  }, [error]);

  return (
    <div className="flex flex-col md:flex-row gap-20 justify-center md:px-3 px-5">
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
      <ResultTable curData={currentDamageData} prvData={previousDamageData} />
    </div>
  );
}

export default InfoPanel;