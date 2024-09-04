[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpBingLocalPackTaskGetHtmlResultInfo

# Class: SerpBingLocalPackTaskGetHtmlResultInfo

## Implements

- [`ISerpBingLocalPackTaskGetHtmlResultInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpBingLocalPackTaskGetHtmlResultInfo()

> **new SerpBingLocalPackTaskGetHtmlResultInfo**(`data`?): [`SerpBingLocalPackTaskGetHtmlResultInfo`](SerpBingLocalPackTaskGetHtmlResultInfo.md)

#### Parameters

• **data?**: [`ISerpBingLocalPackTaskGetHtmlResultInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md)

#### Returns

[`SerpBingLocalPackTaskGetHtmlResultInfo`](SerpBingLocalPackTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:60042

## Properties

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpBingLocalPackTaskGetHtmlResultInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md#datetime)

#### Defined in

main.ts:60034

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpBingLocalPackTaskGetHtmlResultInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md).[`items`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md#items)

#### Defined in

main.ts:60038

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpBingLocalPackTaskGetHtmlResultInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md#items_count)

#### Defined in

main.ts:60036

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpBingLocalPackTaskGetHtmlResultInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md).[`keyword`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md#keyword)

#### Defined in

main.ts:60021

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpBingLocalPackTaskGetHtmlResultInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md#language_code)

#### Defined in

main.ts:60029

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpBingLocalPackTaskGetHtmlResultInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md#location_code)

#### Defined in

main.ts:60027

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpBingLocalPackTaskGetHtmlResultInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md#se_domain)

#### Defined in

main.ts:60025

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpBingLocalPackTaskGetHtmlResultInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md).[`type`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md#type)

#### Defined in

main.ts:60023

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:60051

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:60079

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBingLocalPackTaskGetHtmlResultInfo`](SerpBingLocalPackTaskGetHtmlResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpBingLocalPackTaskGetHtmlResultInfo`](SerpBingLocalPackTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:60072
