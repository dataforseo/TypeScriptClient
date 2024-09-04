[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IOnPagePageScreenshotResultInfo

# Interface: IOnPagePageScreenshotResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Defined in

main.ts:165081

***

### error\_message?

> `optional` **error\_message**: `string`

error message
if the url you indicated returns a 404 status code or is not a valid URL, you will obtain "error_message":"Screenshot is empty"
if no error is encountered, the value will be null

#### Defined in

main.ts:165085

***

### items?

> `optional` **items**: [`ScreenshotItem`](../classes/ScreenshotItem.md)[]

items array

#### Defined in

main.ts:165089

***

### items\_count?

> `optional` **items\_count**: `number`

number of items in the results array

#### Defined in

main.ts:165087
