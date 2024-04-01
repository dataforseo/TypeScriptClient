[Documentation](../README.md) / [Exports](../modules.md) / IOnPagePageScreenshotResultInfo

# Interface: IOnPagePageScreenshotResultInfo

## Implemented by

- [`OnPagePageScreenshotResultInfo`](../classes/OnPagePageScreenshotResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [crawl\_progress](IOnPagePageScreenshotResultInfo.md#crawl_progress)
- [error\_message](IOnPagePageScreenshotResultInfo.md#error_message)
- [items](IOnPagePageScreenshotResultInfo.md#items)
- [items\_count](IOnPagePageScreenshotResultInfo.md#items_count)

## Properties

### crawl\_progress

• `Optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Defined in

main.ts:157183

___

### error\_message

• `Optional` **error\_message**: `string`

error message
if the url you indicated returns a 404 status code or is not a valid URL, you will obtain "error_message":"Screenshot is empty"
if no error is encountered, the value will be null

#### Defined in

main.ts:157187

___

### items

• `Optional` **items**: [`ScreenshotItem`](../classes/ScreenshotItem.md)[]

items array

#### Defined in

main.ts:157191

___

### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Defined in

main.ts:157189
