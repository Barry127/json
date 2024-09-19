import fs from 'node:fs/promises';

export async function writeJson<T = any>(file: string, data: T): Promise<void> {
  const json = JSON.stringify(data);
  await fs.writeFile(file, json, 'utf-8');
}
