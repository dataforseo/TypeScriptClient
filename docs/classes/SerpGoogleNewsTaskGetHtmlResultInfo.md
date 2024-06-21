**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleNewsTaskGetHtmlResultInfo

# Class: SerpGoogleNewsTaskGetHtmlResultInfo

## Implements

- [`ISerpGoogleNewsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleNewsTaskGetHtmlResultInfo(data)

> **new SerpGoogleNewsTaskGetHtmlResultInfo**(`data`?): [`SerpGoogleNewsTaskGetHtmlResultInfo`](SerpGoogleNewsTaskGetHtmlResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleNewsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md)

#### Returns

[`SerpGoogleNewsTaskGetHtmlResultInfo`](SerpGoogleNewsTaskGetHtmlResultInfo.md)

#### Source

main.ts:45020

## Properties

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleNewsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md#datetime)

#### Source

main.ts:45012

***

### items?

> **`optional`** **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleNewsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md).[`items`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md#items)

#### Source

main.ts:45016

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleNewsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md#items_count)

#### Source

main.ts:45014

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleNewsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md).[`keyword`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md#keyword)

#### Source

main.ts:44999

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpGoogleNewsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md#language_code)

#### Source

main.ts:45007

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpGoogleNewsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md#location_code)

#### Source

main.ts:45005

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleNewsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md#se_domain)

#### Source

main.ts:45003

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleNewsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md).[`type`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md#type)

#### Source

main.ts:45001

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:45029

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:45057

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleNewsTaskGetHtmlResultInfo`](SerpGoogleNewsTaskGetHtmlResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleNewsTaskGetHtmlResultInfo`](SerpGoogleNewsTaskGetHtmlResultInfo.md)

#### Source

main.ts:45050
