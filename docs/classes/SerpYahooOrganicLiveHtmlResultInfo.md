[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYahooOrganicLiveHtmlResultInfo

# Class: SerpYahooOrganicLiveHtmlResultInfo

Defined in: main.ts:78168

## Implements

- [`ISerpYahooOrganicLiveHtmlResultInfo`](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpYahooOrganicLiveHtmlResultInfo()

> **new SerpYahooOrganicLiveHtmlResultInfo**(`data`?): [`SerpYahooOrganicLiveHtmlResultInfo`](SerpYahooOrganicLiveHtmlResultInfo.md)

Defined in: main.ts:78192

#### Parameters

##### data?

[`ISerpYahooOrganicLiveHtmlResultInfo`](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md)

#### Returns

[`SerpYahooOrganicLiveHtmlResultInfo`](SerpYahooOrganicLiveHtmlResultInfo.md)

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:78184

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpYahooOrganicLiveHtmlResultInfo`](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md).[`datetime`](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

Defined in: main.ts:78188

elements of search results found in SERP

#### Implementation of

[`ISerpYahooOrganicLiveHtmlResultInfo`](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md).[`items`](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:78186

the number of results returned in the items array

#### Implementation of

[`ISerpYahooOrganicLiveHtmlResultInfo`](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md).[`items_count`](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:78171

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpYahooOrganicLiveHtmlResultInfo`](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md).[`keyword`](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:78179

language code in a POST array

#### Implementation of

[`ISerpYahooOrganicLiveHtmlResultInfo`](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md).[`language_code`](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:78177

location code in a POST array

#### Implementation of

[`ISerpYahooOrganicLiveHtmlResultInfo`](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md).[`location_code`](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:78175

search engine domain in a POST array

#### Implementation of

[`ISerpYahooOrganicLiveHtmlResultInfo`](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md#se_domain)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:78173

type of element

#### Implementation of

[`ISerpYahooOrganicLiveHtmlResultInfo`](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md).[`type`](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:78201

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:78229

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYahooOrganicLiveHtmlResultInfo`](SerpYahooOrganicLiveHtmlResultInfo.md)

Defined in: main.ts:78222

#### Parameters

##### data

`any`

#### Returns

[`SerpYahooOrganicLiveHtmlResultInfo`](SerpYahooOrganicLiveHtmlResultInfo.md)
