import { InputDataType } from "@/app/api/[[...route]]/dmg-calc";
import { client } from "@/lib/hono";
import { initialAttackerData } from "@/static/init-attacker-data";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export type DamageCalculationResultType = {
  damage: number;
  hpLoss: number;
  hitRate: number;
  hpLossRate: number;
};

export const useGetDamage = () => {
  const queryClient = useQueryClient();

  return useMutation<DamageCalculationResultType, Error, InputDataType>({
    mutationFn: async (data: typeof initialAttackerData) => {
      //@ts-ignore
      const response = await client.api["dmg-calc"].$post({
        json: data,
      });
      if (!response.ok) {
        throw new Error("Failed to calculate damage");
      }
      return response.json();
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["damage"], data);
    },
  });
};
