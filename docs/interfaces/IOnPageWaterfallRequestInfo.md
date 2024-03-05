[dataforseo-client](../README.md) / [Exports](../modules.md) / IOnPageWaterfallRequestInfo

# Interface: IOnPageWaterfallRequestInfo

## Implemented by

- [`OnPageWaterfallRequestInfo`](../classes/OnPageWaterfallRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [id](IOnPageWaterfallRequestInfo.md#id)
- [tag](IOnPageWaterfallRequestInfo.md#tag)
- [url](IOnPageWaterfallRequestInfo.md#url)

## Properties

### id

• `Optional` **id**: `string`

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Defined in

[main.ts:149696](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149696)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:149706](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149706)

___

### url

• `Optional` **url**: `string`

page URL
required field
specify the pages you want to receive timing for

#### Defined in

[main.ts:149700](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149700)
