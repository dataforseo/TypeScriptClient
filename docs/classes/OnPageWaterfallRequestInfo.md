[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / OnPageWaterfallRequestInfo

# Class: OnPageWaterfallRequestInfo

## Implements

- [`IOnPageWaterfallRequestInfo`](../interfaces/IOnPageWaterfallRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageWaterfallRequestInfo()

> **new OnPageWaterfallRequestInfo**(`data`?): [`OnPageWaterfallRequestInfo`](OnPageWaterfallRequestInfo.md)

#### Parameters

• **data?**: [`IOnPageWaterfallRequestInfo`](../interfaces/IOnPageWaterfallRequestInfo.md)

#### Returns

[`OnPageWaterfallRequestInfo`](OnPageWaterfallRequestInfo.md)

#### Defined in

main.ts:163042

## Properties

### id?

> `optional` **id**: `string`

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Implementation of

[`IOnPageWaterfallRequestInfo`](../interfaces/IOnPageWaterfallRequestInfo.md).[`id`](../interfaces/IOnPageWaterfallRequestInfo.md#id)

#### Defined in

main.ts:163028

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IOnPageWaterfallRequestInfo`](../interfaces/IOnPageWaterfallRequestInfo.md).[`tag`](../interfaces/IOnPageWaterfallRequestInfo.md#tag)

#### Defined in

main.ts:163038

***

### url?

> `optional` **url**: `string`

page URL
required field
specify the pages you want to receive timing for

#### Implementation of

[`IOnPageWaterfallRequestInfo`](../interfaces/IOnPageWaterfallRequestInfo.md).[`url`](../interfaces/IOnPageWaterfallRequestInfo.md#url)

#### Defined in

main.ts:163032

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:163051

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:163070

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageWaterfallRequestInfo`](OnPageWaterfallRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageWaterfallRequestInfo`](OnPageWaterfallRequestInfo.md)

#### Defined in

main.ts:163063
