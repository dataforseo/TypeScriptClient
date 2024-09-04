[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpBingOrganicLiveHtmlResultInfo

# Class: SerpBingOrganicLiveHtmlResultInfo

## Implements

- [`ISerpBingOrganicLiveHtmlResultInfo`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpBingOrganicLiveHtmlResultInfo()

> **new SerpBingOrganicLiveHtmlResultInfo**(`data`?): [`SerpBingOrganicLiveHtmlResultInfo`](SerpBingOrganicLiveHtmlResultInfo.md)

#### Parameters

• **data?**: [`ISerpBingOrganicLiveHtmlResultInfo`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md)

#### Returns

[`SerpBingOrganicLiveHtmlResultInfo`](SerpBingOrganicLiveHtmlResultInfo.md)

#### Defined in

main.ts:60357

## Properties

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpBingOrganicLiveHtmlResultInfo`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md).[`datetime`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md#datetime)

#### Defined in

main.ts:60349

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpBingOrganicLiveHtmlResultInfo`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md).[`items`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md#items)

#### Defined in

main.ts:60353

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpBingOrganicLiveHtmlResultInfo`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md).[`items_count`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md#items_count)

#### Defined in

main.ts:60351

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpBingOrganicLiveHtmlResultInfo`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md).[`keyword`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md#keyword)

#### Defined in

main.ts:60336

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpBingOrganicLiveHtmlResultInfo`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md).[`language_code`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md#language_code)

#### Defined in

main.ts:60344

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpBingOrganicLiveHtmlResultInfo`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md).[`location_code`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md#location_code)

#### Defined in

main.ts:60342

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpBingOrganicLiveHtmlResultInfo`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md#se_domain)

#### Defined in

main.ts:60340

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpBingOrganicLiveHtmlResultInfo`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md).[`type`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md#type)

#### Defined in

main.ts:60338

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:60366

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:60394

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBingOrganicLiveHtmlResultInfo`](SerpBingOrganicLiveHtmlResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpBingOrganicLiveHtmlResultInfo`](SerpBingOrganicLiveHtmlResultInfo.md)

#### Defined in

main.ts:60387
