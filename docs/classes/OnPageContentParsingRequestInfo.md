[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageContentParsingRequestInfo

# Class: OnPageContentParsingRequestInfo

Defined in: main.ts:173012

## Implements

- [`IOnPageContentParsingRequestInfo`](../interfaces/IOnPageContentParsingRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageContentParsingRequestInfo()

> **new OnPageContentParsingRequestInfo**(`data`?): [`OnPageContentParsingRequestInfo`](OnPageContentParsingRequestInfo.md)

Defined in: main.ts:173029

#### Parameters

##### data?

[`IOnPageContentParsingRequestInfo`](../interfaces/IOnPageContentParsingRequestInfo.md)

#### Returns

[`OnPageContentParsingRequestInfo`](OnPageContentParsingRequestInfo.md)

## Properties

### id?

> `optional` **id**: `string`

Defined in: main.ts:173025

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
note: the enable_content_parsing parameter in the POST request must be set to true
example:
"07131248-1535-0216-1000-17384017ad04"

#### Implementation of

[`IOnPageContentParsingRequestInfo`](../interfaces/IOnPageContentParsingRequestInfo.md).[`id`](../interfaces/IOnPageContentParsingRequestInfo.md#id)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:173018

URL of the content to parse
required field
URL of the page to parse
example:
https://dataforseo.com/blog/a-versatile-alternative-to-google-trends-exploring-the-power-of-dataforseo-trends-api

#### Implementation of

[`IOnPageContentParsingRequestInfo`](../interfaces/IOnPageContentParsingRequestInfo.md).[`url`](../interfaces/IOnPageContentParsingRequestInfo.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:173038

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:173056

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageContentParsingRequestInfo`](OnPageContentParsingRequestInfo.md)

Defined in: main.ts:173049

#### Parameters

##### data

`any`

#### Returns

[`OnPageContentParsingRequestInfo`](OnPageContentParsingRequestInfo.md)
