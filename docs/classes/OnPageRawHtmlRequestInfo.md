[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / OnPageRawHtmlRequestInfo

# Class: OnPageRawHtmlRequestInfo

## Implements

- [`IOnPageRawHtmlRequestInfo`](../interfaces/IOnPageRawHtmlRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageRawHtmlRequestInfo()

> **new OnPageRawHtmlRequestInfo**(`data`?): [`OnPageRawHtmlRequestInfo`](OnPageRawHtmlRequestInfo.md)

#### Parameters

• **data?**: [`IOnPageRawHtmlRequestInfo`](../interfaces/IOnPageRawHtmlRequestInfo.md)

#### Returns

[`OnPageRawHtmlRequestInfo`](OnPageRawHtmlRequestInfo.md)

#### Defined in

main.ts:160403

## Properties

### id?

> `optional` **id**: `string`

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Implementation of

[`IOnPageRawHtmlRequestInfo`](../interfaces/IOnPageRawHtmlRequestInfo.md).[`id`](../interfaces/IOnPageRawHtmlRequestInfo.md#id)

#### Defined in

main.ts:160394

***

### url?

> `optional` **url**: `string`

page url
required field
the absolute URL of a page to request HTML
Note: this field is optional if the task was set using the Instant Pages endpoint

#### Implementation of

[`IOnPageRawHtmlRequestInfo`](../interfaces/IOnPageRawHtmlRequestInfo.md).[`url`](../interfaces/IOnPageRawHtmlRequestInfo.md#url)

#### Defined in

main.ts:160399

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:160412

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:160430

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageRawHtmlRequestInfo`](OnPageRawHtmlRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageRawHtmlRequestInfo`](OnPageRawHtmlRequestInfo.md)

#### Defined in

main.ts:160423
