**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpBingLocalPackTaskGetHtmlResultInfo

# Class: SerpBingLocalPackTaskGetHtmlResultInfo

## Implements

- [`ISerpBingLocalPackTaskGetHtmlResultInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpBingLocalPackTaskGetHtmlResultInfo(data)

> **new SerpBingLocalPackTaskGetHtmlResultInfo**(`data`?): [`SerpBingLocalPackTaskGetHtmlResultInfo`](SerpBingLocalPackTaskGetHtmlResultInfo.md)

#### Parameters

• **data?**: [`ISerpBingLocalPackTaskGetHtmlResultInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md)

#### Returns

[`SerpBingLocalPackTaskGetHtmlResultInfo`](SerpBingLocalPackTaskGetHtmlResultInfo.md)

#### Source

main.ts:60831

## Properties

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpBingLocalPackTaskGetHtmlResultInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md#datetime)

#### Source

main.ts:60823

***

### items?

> **`optional`** **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpBingLocalPackTaskGetHtmlResultInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md).[`items`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md#items)

#### Source

main.ts:60827

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpBingLocalPackTaskGetHtmlResultInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md#items_count)

#### Source

main.ts:60825

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpBingLocalPackTaskGetHtmlResultInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md).[`keyword`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md#keyword)

#### Source

main.ts:60810

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpBingLocalPackTaskGetHtmlResultInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md#language_code)

#### Source

main.ts:60818

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpBingLocalPackTaskGetHtmlResultInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md#location_code)

#### Source

main.ts:60816

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpBingLocalPackTaskGetHtmlResultInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md#se_domain)

#### Source

main.ts:60814

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`ISerpBingLocalPackTaskGetHtmlResultInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md).[`type`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md#type)

#### Source

main.ts:60812

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:60840

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:60868

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpBingLocalPackTaskGetHtmlResultInfo`](SerpBingLocalPackTaskGetHtmlResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpBingLocalPackTaskGetHtmlResultInfo`](SerpBingLocalPackTaskGetHtmlResultInfo.md)

#### Source

main.ts:60861
