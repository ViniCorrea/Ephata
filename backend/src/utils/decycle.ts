interface DeepRecord<K> {
  [key: number]: K | this;
  [key: string]: K | this;
}

export default function decycle<K>(obj: DeepRecord<K>, stack = []) {
  // const nobj: DeepRecord<K & { $ref: string }> = {};

  if (!obj || typeof obj !== 'object') return obj;

  if (stack.includes(obj)) return '<cycle>';

  const s = stack.concat([obj]);

  return Array.isArray(obj)
    ? obj.map((x) => decycle(x, s))
    : Object.fromEntries(
        Object.entries(obj).map(([k, v]) => [k, decycle(v as any, s)]),
      );
}
