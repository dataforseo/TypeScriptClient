[dataforseo-client](../README.md) / [Exports](../modules.md) / IOnPageRawHtmlRequestInfo

# Interface: IOnPageRawHtmlRequestInfo

## Implemented by

- [`OnPageRawHtmlRequestInfo`](../classes/OnPageRawHtmlRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [id](IOnPageRawHtmlRequestInfo.md#id)
- [url](IOnPageRawHtmlRequestInfo.md#url)

## Properties

### id

• `Optional` **id**: `string`

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Defined in

[main.ts:151193](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L151193)

___

### url

• `Optional` **url**: `string`

page url
required field
the absolute URL of a page to request HTML
Note: this field is optional if the task was set using the Instant Pages endpoint

#### Defined in

[main.ts:151198](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L151198)
