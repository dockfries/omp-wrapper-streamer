# omp-wrapper-streamer

A functional wrapper of the popular SA-MP streamer plugin (v2.9.5) for samp-node.

## Getting started

```sh
npm install omp-wrapper-streamer
```

## Example

```ts
import { CreateDynamicObject } from "omp-wrapper-streamer";

// In an event
const exampleObj = CreateDynamicObject(
  2587,
  2001.195679,
  1547.113892,
  14.2834,
  0.0,
  0.0,
  96.0
);
const { x, y, z } = GetDynamicObjectPos(exampleObj);
console.log(x, y, z);
```
