import fs from 'node:fs/promises';

export async function readJson<T = any>(file: string): Promise<T> {
  const data = await fs.readFile(file, 'utf-8');
  return JSON.parse(data);
}
