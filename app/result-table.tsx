import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { DamageCalculationResultType } from "@/hooks/use-get-damage";

type Props = {
  curData: DamageCalculationResultType | undefined;
  prvData: DamageCalculationResultType | undefined;
}

const ResultTable = ({ curData, prvData }: Props) => {
  // Helper function to format percentage values
  const formatPercentage = (value: number | undefined) => {
    if (value === undefined) return '-';
    return `${(value * 100).toFixed(2)}%`;
  };

  // Helper function to format number values
  const formatNumber = (value: number | undefined) => {
    if (value === undefined) return '-';
    return value.toLocaleString();
  };

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead>結果</TableHead>
            <TableHead>1つ前の結果</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">ダメージ量</TableCell>
            <TableCell>{formatNumber(curData?.damage)}</TableCell>
            <TableCell>{formatNumber(prvData?.damage)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">HP減少量</TableCell>
            <TableCell>{formatNumber(curData?.hpLoss)}</TableCell>
            <TableCell>{formatNumber(prvData?.hpLoss)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">HP減少率</TableCell>
            <TableCell>{formatPercentage(curData?.hpLossRate)}</TableCell>
            <TableCell>{formatPercentage(prvData?.hpLossRate)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">理論最小ダメージ量</TableCell>
            <TableCell>{formatNumber(curData?.minDamage)}</TableCell>
            <TableCell>{formatNumber(prvData?.minDamage)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">理論最大ダメージ量</TableCell>
            <TableCell>{formatNumber(curData?.maxDamage)}</TableCell>
            <TableCell>{formatNumber(prvData?.maxDamage)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">理論最小HP減少量</TableCell>
            <TableCell>{formatNumber(curData?.minHpLoss)}</TableCell>
            <TableCell>{formatNumber(prvData?.minHpLoss)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">理論最大HP減少量</TableCell>
            <TableCell>{formatNumber(curData?.maxHpLoss)}</TableCell>
            <TableCell>{formatNumber(prvData?.maxHpLoss)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">命中率</TableCell>
            <TableCell>{formatPercentage(curData?.hitRate)}</TableCell>
            <TableCell>{formatPercentage(prvData?.hitRate)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">回避率</TableCell>
            <TableCell>{formatPercentage(curData?.evasionRate)}</TableCell>
            <TableCell>{formatPercentage(prvData?.evasionRate)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">回避回数</TableCell>
            <TableCell>{formatNumber(curData?.evasionCount)} 回 / {formatNumber(curData?.skillDamageHitTimes)} 打撃中</TableCell>
            <TableCell>{formatNumber(prvData?.evasionCount)} 回 / {formatNumber(prvData?.skillDamageHitTimes)} 打撃中</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">クリ回数</TableCell>
            <TableCell>{formatNumber(curData?.criticalCount)} 回 / {formatNumber(curData?.skillDamageHitTimes)} 打撃中</TableCell>
            <TableCell>{formatNumber(prvData?.criticalCount)} 回 / {formatNumber(prvData?.skillDamageHitTimes)} 打撃中</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default ResultTable;