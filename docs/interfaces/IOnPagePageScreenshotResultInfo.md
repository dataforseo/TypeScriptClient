**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IOnPagePageScreenshotResultInfo

# Interface: IOnPagePageScreenshotResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### crawl\_progress?

> **`optional`** **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Source

main.ts:159052

***

### error\_message?

> **`optional`** **error\_message**: `string`

error message
if the url you indicated returns a 404 status code or is not a valid URL, you will obtain "error_message":"Screenshot is empty"
if no error is encountered, the value will be null

#### Source

main.ts:159056

***

### items?

> **`optional`** **items**: [`ScreenshotItem`](../classes/ScreenshotItem.md)[]

items array

#### Source

main.ts:159060

***

### items\_count?

> **`optional`** **items\_count**: `number`

number of items in the results array

#### Source

main.ts:159058
