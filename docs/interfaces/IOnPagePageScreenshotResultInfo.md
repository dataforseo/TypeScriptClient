[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IOnPagePageScreenshotResultInfo

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

[main.ts:151756](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L151756)

___


### error\_message

• `Optional` **error\_message**: `string`

error message
if the url you indicated returns a 404 status code or is not a valid URL, you will obtain "error_message":"Screenshot is empty"
if no error is encountered, the value will be null

#### Defined in

[main.ts:151760](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L151760)

___


### items

• `Optional` **items**: [`ScreenshotItem`](../classes/ScreenshotItem.md)[]

items array

#### Defined in

[main.ts:151764](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L151764)

___


### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Defined in

[main.ts:151762](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L151762)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")