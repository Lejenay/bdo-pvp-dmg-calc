import { InputDataType } from "@/app/api/[[...route]]/dmg-calc";
import { client } from "@/lib/hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export type DamageCalculationResultType = {
  hpLoss: number;
  hitRate: number;
  evasionRate: number;
  hpLossRate: number;
  evasionCount: number;
  criticalCount: number;
  skillDamageHitTimes: number;
  maxHpLoss: number;
  minHpLoss: number;
};

export const useGetDamage = () => {
  const queryClient = useQueryClient();

  return useMutation<DamageCalculationResultType, Error, InputDataType>({
    mutationFn: async (data: InputDataType) => {
      const response = await client.api["dmg-calc"].$post({
        json: data,
      });
      if (!response.ok) {
        throw new Error("Failed to calculate damage");
      }
      const result = response.json();
      return result;
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["damage"], data);
    },
  });
};
