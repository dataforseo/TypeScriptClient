[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ISerpScreenshotRequestInfo

# Interface: ISerpScreenshotRequestInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### browser\_preset?

> `optional` **browser\_preset**: `string`

browser resolution preset
optional field
browser preset associated with a certain device type
can take the following values: desktop, tablet, mobile
note: by default, browser preset corresponds to the device type specified in the POST request

#### Defined in

main.ts:25118

***

### browser\_screen\_height?

> `optional` **browser\_screen\_height**: `number`

height of the browser resolution
optional field
can be specified in the following range: 240-9999

#### Defined in

main.ts:25126

***

### browser\_screen\_scale\_factor?

> `optional` **browser\_screen\_scale\_factor**: `number`

browser scale factor
optional field
can be specified in the following range: 0.5-3

#### Defined in

main.ts:25130

***

### browser\_screen\_width?

> `optional` **browser\_screen\_width**: `number`

width of the browser resolution
optional field
can be specified in the following range: 240-9999

#### Defined in

main.ts:25122

***

### task\_id?

> `optional` **task\_id**: `string`

task identifier
required field
unique identifier of the associated task in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Defined in

main.ts:25112
