**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / OnPageWaterfallRequestInfo

# Class: OnPageWaterfallRequestInfo

## Implements

- [`IOnPageWaterfallRequestInfo`](../interfaces/IOnPageWaterfallRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageWaterfallRequestInfo(data)

> **new OnPageWaterfallRequestInfo**(`data`?): [`OnPageWaterfallRequestInfo`](OnPageWaterfallRequestInfo.md)

#### Parameters

• **data?**: [`IOnPageWaterfallRequestInfo`](../interfaces/IOnPageWaterfallRequestInfo.md)

#### Returns

[`OnPageWaterfallRequestInfo`](OnPageWaterfallRequestInfo.md)

#### Source

main.ts:155234

## Properties

### id?

> **`optional`** **id**: `string`

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Implementation of

[`IOnPageWaterfallRequestInfo`](../interfaces/IOnPageWaterfallRequestInfo.md).[`id`](../interfaces/IOnPageWaterfallRequestInfo.md#id)

#### Source

main.ts:155220

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IOnPageWaterfallRequestInfo`](../interfaces/IOnPageWaterfallRequestInfo.md).[`tag`](../interfaces/IOnPageWaterfallRequestInfo.md#tag)

#### Source

main.ts:155230

***

### url?

> **`optional`** **url**: `string`

page URL
required field
specify the pages you want to receive timing for

#### Implementation of

[`IOnPageWaterfallRequestInfo`](../interfaces/IOnPageWaterfallRequestInfo.md).[`url`](../interfaces/IOnPageWaterfallRequestInfo.md#url)

#### Source

main.ts:155224

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:155243

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:155262

***

### fromJS()

> **`static`** **fromJS**(`data`): [`OnPageWaterfallRequestInfo`](OnPageWaterfallRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageWaterfallRequestInfo`](OnPageWaterfallRequestInfo.md)

#### Source

main.ts:155255
