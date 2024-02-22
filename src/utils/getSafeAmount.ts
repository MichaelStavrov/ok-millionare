import { safeAmounts } from 'src/appSettings';

export const getSafeAmount = (num: number) => {
  const lastNum = safeAmounts[safeAmounts.length - 1];
  if (num > lastNum) {
    return lastNum;
  }

  for (let i = 0; i < safeAmounts.length; i++) {
    if (num <= safeAmounts[i]) {
      const prevNum = safeAmounts[i - 1];

      return prevNum ?? 1;
    }
  }

  return 1;
};
