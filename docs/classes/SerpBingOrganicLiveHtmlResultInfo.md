**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpBingOrganicLiveHtmlResultInfo

# Class: SerpBingOrganicLiveHtmlResultInfo

## Implements

- [`ISerpBingOrganicLiveHtmlResultInfo`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpBingOrganicLiveHtmlResultInfo(data)

> **new SerpBingOrganicLiveHtmlResultInfo**(`data`?): [`SerpBingOrganicLiveHtmlResultInfo`](SerpBingOrganicLiveHtmlResultInfo.md)

#### Parameters

• **data?**: [`ISerpBingOrganicLiveHtmlResultInfo`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md)

#### Returns

[`SerpBingOrganicLiveHtmlResultInfo`](SerpBingOrganicLiveHtmlResultInfo.md)

#### Source

main.ts:57887

## Properties

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpBingOrganicLiveHtmlResultInfo`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md).[`datetime`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md#datetime)

#### Source

main.ts:57879

***

### items?

> **`optional`** **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpBingOrganicLiveHtmlResultInfo`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md).[`items`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md#items)

#### Source

main.ts:57883

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpBingOrganicLiveHtmlResultInfo`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md).[`items_count`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md#items_count)

#### Source

main.ts:57881

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpBingOrganicLiveHtmlResultInfo`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md).[`keyword`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md#keyword)

#### Source

main.ts:57866

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpBingOrganicLiveHtmlResultInfo`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md).[`language_code`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md#language_code)

#### Source

main.ts:57874

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpBingOrganicLiveHtmlResultInfo`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md).[`location_code`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md#location_code)

#### Source

main.ts:57872

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpBingOrganicLiveHtmlResultInfo`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md#se_domain)

#### Source

main.ts:57870

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`ISerpBingOrganicLiveHtmlResultInfo`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md).[`type`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md#type)

#### Source

main.ts:57868

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:57896

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:57924

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpBingOrganicLiveHtmlResultInfo`](SerpBingOrganicLiveHtmlResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpBingOrganicLiveHtmlResultInfo`](SerpBingOrganicLiveHtmlResultInfo.md)

#### Source

main.ts:57917
