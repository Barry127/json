# Json

> Read and write JSON files

This package contains functions to read and write JSON to and from files.

## Install

```bash
npm install @b127/json
```

## usage

```ts
import { readJson, writeJson } from '@b127/json';

(async () => {
  // read JSON from file
  const data = await readJson('./package.json');

  // write JSON to file
  await writeJson('./file.json', { hello: 'world' });
})();
```

## API

### readJson(file)

Open (JSON) file and parse data. Returns a `Promise` with the parsed data.

#### file

Type: `string`

File to read JSON from.

### writeJson(file, data)

Write data as JSON to a file. Returns `Promise<void>`.

#### file

Type: `string`

File to write data to.

#### data

Type: `any`

Data to write as JSON.
