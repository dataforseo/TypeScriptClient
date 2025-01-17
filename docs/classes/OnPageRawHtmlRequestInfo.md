[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageRawHtmlRequestInfo

# Class: OnPageRawHtmlRequestInfo

Defined in: main.ts:172132

## Implements

- [`IOnPageRawHtmlRequestInfo`](../interfaces/IOnPageRawHtmlRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageRawHtmlRequestInfo()

> **new OnPageRawHtmlRequestInfo**(`data`?): [`OnPageRawHtmlRequestInfo`](OnPageRawHtmlRequestInfo.md)

Defined in: main.ts:172147

#### Parameters

##### data?

[`IOnPageRawHtmlRequestInfo`](../interfaces/IOnPageRawHtmlRequestInfo.md)

#### Returns

[`OnPageRawHtmlRequestInfo`](OnPageRawHtmlRequestInfo.md)

## Properties

### id?

> `optional` **id**: `string`

Defined in: main.ts:172138

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Implementation of

[`IOnPageRawHtmlRequestInfo`](../interfaces/IOnPageRawHtmlRequestInfo.md).[`id`](../interfaces/IOnPageRawHtmlRequestInfo.md#id)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:172143

page url
required field
the absolute URL of a page to request HTML
Note: this field is optional if the task was set using the Instant Pages endpoint

#### Implementation of

[`IOnPageRawHtmlRequestInfo`](../interfaces/IOnPageRawHtmlRequestInfo.md).[`url`](../interfaces/IOnPageRawHtmlRequestInfo.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:172156

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:172174

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageRawHtmlRequestInfo`](OnPageRawHtmlRequestInfo.md)

Defined in: main.ts:172167

#### Parameters

##### data

`any`

#### Returns

[`OnPageRawHtmlRequestInfo`](OnPageRawHtmlRequestInfo.md)
