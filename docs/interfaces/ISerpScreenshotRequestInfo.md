**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ISerpScreenshotRequestInfo

# Interface: ISerpScreenshotRequestInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### browser\_preset?

> **`optional`** **browser\_preset**: `string`

browser resolution preset
optional field
browser preset associated with a certain device type
can take the following values: desktop, tablet, mobile
note: by default, browser preset corresponds to the device type specified in the POST request

#### Source

main.ts:24000

***

### browser\_screen\_height?

> **`optional`** **browser\_screen\_height**: `number`

height of the browser resolution
optional field
can be specified in the following range: 240-9999

#### Source

main.ts:24008

***

### browser\_screen\_scale\_factor?

> **`optional`** **browser\_screen\_scale\_factor**: `number`

browser scale factor
optional field
can be specified in the following range: 0.5-3

#### Source

main.ts:24012

***

### browser\_screen\_width?

> **`optional`** **browser\_screen\_width**: `number`

width of the browser resolution
optional field
can be specified in the following range: 240-9999

#### Source

main.ts:24004

***

### task\_id?

> **`optional`** **task\_id**: `string`

task identifier
required field
unique identifier of the associated task in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Source

main.ts:23994
