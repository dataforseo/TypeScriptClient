**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / OnPageContentParsingRequestInfo

# Class: OnPageContentParsingRequestInfo

## Implements

- [`IOnPageContentParsingRequestInfo`](../interfaces/IOnPageContentParsingRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageContentParsingRequestInfo(data)

> **new OnPageContentParsingRequestInfo**(`data`?): [`OnPageContentParsingRequestInfo`](OnPageContentParsingRequestInfo.md)

#### Parameters

• **data?**: [`IOnPageContentParsingRequestInfo`](../interfaces/IOnPageContentParsingRequestInfo.md)

#### Returns

[`OnPageContentParsingRequestInfo`](OnPageContentParsingRequestInfo.md)

#### Source

main.ts:163389

## Properties

### id?

> **`optional`** **id**: `string`

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
note: the enable_content_parsing parameter in the POST request must be set to true
example:
"07131248-1535-0216-1000-17384017ad04"

#### Implementation of

[`IOnPageContentParsingRequestInfo`](../interfaces/IOnPageContentParsingRequestInfo.md).[`id`](../interfaces/IOnPageContentParsingRequestInfo.md#id)

#### Source

main.ts:163385

***

### url?

> **`optional`** **url**: `string`

URL of the content to parse
required field
URL of the page to parse
example:
https://dataforseo.com/blog/a-versatile-alternative-to-google-trends-exploring-the-power-of-dataforseo-trends-api

#### Implementation of

[`IOnPageContentParsingRequestInfo`](../interfaces/IOnPageContentParsingRequestInfo.md).[`url`](../interfaces/IOnPageContentParsingRequestInfo.md#url)

#### Source

main.ts:163378

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:163398

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:163416

***

### fromJS()

> **`static`** **fromJS**(`data`): [`OnPageContentParsingRequestInfo`](OnPageContentParsingRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageContentParsingRequestInfo`](OnPageContentParsingRequestInfo.md)

#### Source

main.ts:163409
