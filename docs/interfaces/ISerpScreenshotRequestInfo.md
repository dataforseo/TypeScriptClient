[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpScreenshotRequestInfo

# Interface: ISerpScreenshotRequestInfo

Defined in: main.ts:26177

## Indexable

\[`key`: `string`\]: `any`

## Properties

### browser\_preset?

> `optional` **browser\_preset**: `string`

Defined in: main.ts:26188

browser resolution preset
optional field
browser preset associated with a certain device type
can take the following values: desktop, tablet, mobile
note: by default, browser preset corresponds to the device type specified in the POST request

***

### browser\_screen\_height?

> `optional` **browser\_screen\_height**: `number`

Defined in: main.ts:26196

height of the browser resolution
optional field
can be specified in the following range: 240-9999

***

### browser\_screen\_scale\_factor?

> `optional` **browser\_screen\_scale\_factor**: `number`

Defined in: main.ts:26200

browser scale factor
optional field
can be specified in the following range: 0.5-3

***

### browser\_screen\_width?

> `optional` **browser\_screen\_width**: `number`

Defined in: main.ts:26192

width of the browser resolution
optional field
can be specified in the following range: 240-9999

***

### task\_id?

> `optional` **task\_id**: `string`

Defined in: main.ts:26182

task identifier
required field
unique identifier of the associated task in the UUID format
you will be able to use it within 7 days to request the results of the task at any time
