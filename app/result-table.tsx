import React from 'react';
import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
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
    <div className="w-[200px]">
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
            <TableCell className="font-medium">命中率</TableCell>
            <TableCell>{formatPercentage(data?.hitRate)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default ResultTable;