**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpBingLocalPackLiveHtmlResultInfo

# Class: SerpBingLocalPackLiveHtmlResultInfo

## Implements

- [`ISerpBingLocalPackLiveHtmlResultInfo`](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpBingLocalPackLiveHtmlResultInfo(data)

> **new SerpBingLocalPackLiveHtmlResultInfo**(`data`?): [`SerpBingLocalPackLiveHtmlResultInfo`](SerpBingLocalPackLiveHtmlResultInfo.md)

#### Parameters

• **data?**: [`ISerpBingLocalPackLiveHtmlResultInfo`](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md)

#### Returns

[`SerpBingLocalPackLiveHtmlResultInfo`](SerpBingLocalPackLiveHtmlResultInfo.md)

#### Source

main.ts:60854

## Properties

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpBingLocalPackLiveHtmlResultInfo`](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md).[`datetime`](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md#datetime)

#### Source

main.ts:60846

***

### items?

> **`optional`** **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpBingLocalPackLiveHtmlResultInfo`](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md).[`items`](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md#items)

#### Source

main.ts:60850

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpBingLocalPackLiveHtmlResultInfo`](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md).[`items_count`](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md#items_count)

#### Source

main.ts:60848

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpBingLocalPackLiveHtmlResultInfo`](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md).[`keyword`](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md#keyword)

#### Source

main.ts:60833

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpBingLocalPackLiveHtmlResultInfo`](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md).[`language_code`](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md#language_code)

#### Source

main.ts:60841

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpBingLocalPackLiveHtmlResultInfo`](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md).[`location_code`](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md#location_code)

#### Source

main.ts:60839

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpBingLocalPackLiveHtmlResultInfo`](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md#se_domain)

#### Source

main.ts:60837

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`ISerpBingLocalPackLiveHtmlResultInfo`](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md).[`type`](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md#type)

#### Source

main.ts:60835

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:60863

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:60891

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpBingLocalPackLiveHtmlResultInfo`](SerpBingLocalPackLiveHtmlResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpBingLocalPackLiveHtmlResultInfo`](SerpBingLocalPackLiveHtmlResultInfo.md)

#### Source

main.ts:60884
