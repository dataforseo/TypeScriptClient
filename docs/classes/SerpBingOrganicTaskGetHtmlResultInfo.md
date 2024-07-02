**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpBingOrganicTaskGetHtmlResultInfo

# Class: SerpBingOrganicTaskGetHtmlResultInfo

## Implements

- [`ISerpBingOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpBingOrganicTaskGetHtmlResultInfo(data)

> **new SerpBingOrganicTaskGetHtmlResultInfo**(`data`?): [`SerpBingOrganicTaskGetHtmlResultInfo`](SerpBingOrganicTaskGetHtmlResultInfo.md)

#### Parameters

• **data?**: [`ISerpBingOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md)

#### Returns

[`SerpBingOrganicTaskGetHtmlResultInfo`](SerpBingOrganicTaskGetHtmlResultInfo.md)

#### Source

main.ts:58630

## Properties

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpBingOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md#datetime)

#### Source

main.ts:58622

***

### items?

> **`optional`** **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpBingOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md).[`items`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md#items)

#### Source

main.ts:58626

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpBingOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md#items_count)

#### Source

main.ts:58624

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpBingOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md).[`keyword`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md#keyword)

#### Source

main.ts:58609

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpBingOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md#language_code)

#### Source

main.ts:58617

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpBingOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md#location_code)

#### Source

main.ts:58615

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpBingOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md#se_domain)

#### Source

main.ts:58613

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`ISerpBingOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md).[`type`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md#type)

#### Source

main.ts:58611

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:58639

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:58667

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpBingOrganicTaskGetHtmlResultInfo`](SerpBingOrganicTaskGetHtmlResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpBingOrganicTaskGetHtmlResultInfo`](SerpBingOrganicTaskGetHtmlResultInfo.md)

#### Source

main.ts:58660
