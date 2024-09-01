import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { DamageCalculationResultType } from "@/hooks/use-get-damage";

type Props = {
  data: DamageCalculationResultType | undefined;
}

const ResultTable = ({ data }: Props) => {
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
            <TableHead>計算結果</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">ダメージ量</TableCell>
            <TableCell>{formatNumber(data?.damage)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">HP減少量</TableCell>
            <TableCell>{formatNumber(data?.hpLoss)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">HP減少率</TableCell>
            <TableCell>{formatPercentage(data?.hpLossRate)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">理論最小ダメージ量</TableCell>
            <TableCell>{formatNumber(data?.minDamage)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">理論最大ダメージ量</TableCell>
            <TableCell>{formatNumber(data?.maxDamage)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">理論最小HP減少量</TableCell>
            <TableCell>{formatNumber(data?.minHpLoss)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">理論最大HP減少量</TableCell>
            <TableCell>{formatNumber(data?.maxHpLoss)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">命中率</TableCell>
            <TableCell>{formatPercentage(data?.hitRate)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">回避率</TableCell>
            <TableCell>{formatPercentage(data?.evasionRate)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">回避回数</TableCell>
            <TableCell>{formatNumber(data?.evasionCount)} 回 / {formatNumber(data?.skillDamageHitTimes)} 打撃中</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">クリ回数</TableCell>
            <TableCell>{formatNumber(data?.criticalCount)} 回 / {formatNumber(data?.skillDamageHitTimes)} 打撃中</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default ResultTable;