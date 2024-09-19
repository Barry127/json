import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { readJson } from './readJson.js';

describe('readJson', () => {
  it('should read and parse a valid JSON file when the file exists', async () => {
    const file = path.join(__dirname, '..', '..', 'package.json');
    const json = await readJson(file);
    expect(json.name).toBe('@b127/json');
    expect(json.author).toBe('Barry de Kleijn <kleijn.barry@gmail.com>');
  });

  it('should throw an error when the file does not exist', async () => {
    const file = path.join(__dirname, 'does-not-exist.json');
    await expect(readJson(file)).rejects.toThrow();
  });

  it('should throw an error when file is invalid JSON', async () => {
    const file = path.join(__dirname, 'readJson.ts');
    await expect(readJson(file)).rejects.toThrow();
  });
});
