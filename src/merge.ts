export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  const a1 = collection_1;
  const a3 = collection_3;

  const a2: number[] = [];
  for (let i = collection_2.length - 1; i >= 0; i--) {
    a2.push(collection_2[i]!);
  }

  let i = 0, j = 0, k = 0;
  const result: number[] = [];

  while (i < a1.length || j < a2.length || k < a3.length) {
    const v1 = i < a1.length ? a1[i]! : Infinity;
    const v2 = j < a2.length ? a2[j]! : Infinity;
    const v3 = k < a3.length ? a3[k]! : Infinity;

    const min = Math.min(v1, v2, v3);

    result.push(min);

    if (min === v1) i++;
    else if (min === v2) j++;
    else k++;
  }

  return result;
}