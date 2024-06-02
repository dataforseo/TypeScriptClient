**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / OnPageRawHtmlRequestInfo

# Class: OnPageRawHtmlRequestInfo

## Implements

- [`IOnPageRawHtmlRequestInfo`](../interfaces/IOnPageRawHtmlRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageRawHtmlRequestInfo(data)

> **new OnPageRawHtmlRequestInfo**(`data`?): [`OnPageRawHtmlRequestInfo`](OnPageRawHtmlRequestInfo.md)

#### Parameters

• **data?**: [`IOnPageRawHtmlRequestInfo`](../interfaces/IOnPageRawHtmlRequestInfo.md)

#### Returns

[`OnPageRawHtmlRequestInfo`](OnPageRawHtmlRequestInfo.md)

#### Source

main.ts:158444

## Properties

### id?

> **`optional`** **id**: `string`

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Implementation of

[`IOnPageRawHtmlRequestInfo`](../interfaces/IOnPageRawHtmlRequestInfo.md).[`id`](../interfaces/IOnPageRawHtmlRequestInfo.md#id)

#### Source

main.ts:158435

***

### url?

> **`optional`** **url**: `string`

page url
required field
the absolute URL of a page to request HTML
Note: this field is optional if the task was set using the Instant Pages endpoint

#### Implementation of

[`IOnPageRawHtmlRequestInfo`](../interfaces/IOnPageRawHtmlRequestInfo.md).[`url`](../interfaces/IOnPageRawHtmlRequestInfo.md#url)

#### Source

main.ts:158440

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:158453

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:158471

***

### fromJS()

> **`static`** **fromJS**(`data`): [`OnPageRawHtmlRequestInfo`](OnPageRawHtmlRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageRawHtmlRequestInfo`](OnPageRawHtmlRequestInfo.md)

#### Source

main.ts:158464
