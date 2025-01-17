[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPagePageScreenshotResultInfo

# Interface: IOnPagePageScreenshotResultInfo

Defined in: main.ts:172722

## Indexable

\[`key`: `string`\]: `any`

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:172725

status of the crawling session
possible values: in_progress, finished

***

### error\_message?

> `optional` **error\_message**: `string`

Defined in: main.ts:172729

error message
if the url you indicated returns a 404 status code or is not a valid URL, you will obtain "error_message":"Screenshot is empty"
if no error is encountered, the value will be null

***

### items?

> `optional` **items**: [`ScreenshotItem`](../classes/ScreenshotItem.md)[]

Defined in: main.ts:172733

items array

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:172731

number of items in the results array
