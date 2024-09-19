import fs from 'node:fs/promises';
import path from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { readJson } from './readJson.js';
import { writeJson } from './writeJson.js';

const data = { hello: 'world' };
const testFile = path.join(__dirname, 'test.json');

describe('writeJson', () => {
  it('should write JSON data to a file successfully when valid data is provided', async () => {
    await writeJson(testFile, data);
    const json = await readJson(testFile);
    expect(json).toEqual(data);
  });

  it('should write a single string to a file', async () => {
    await writeJson(testFile, 'hello');
    const json = await readJson(testFile);
    expect(json).toEqual('hello');
  });

  it('should throw an error when the file cannot be written', async () => {
    await expect(
      writeJson(path.join(__dirname, 'some/path/file'), data)
    ).rejects.toThrow();
  });

  afterEach(async () => {
    try {
      await fs.unlink(testFile);
    } catch {}
  });
});
