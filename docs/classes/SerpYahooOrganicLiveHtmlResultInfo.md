[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYahooOrganicLiveHtmlResultInfo

# Class: SerpYahooOrganicLiveHtmlResultInfo

## Implements

- [`ISerpYahooOrganicLiveHtmlResultInfo`](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYahooOrganicLiveHtmlResultInfo()

> **new SerpYahooOrganicLiveHtmlResultInfo**(`data`?): [`SerpYahooOrganicLiveHtmlResultInfo`](SerpYahooOrganicLiveHtmlResultInfo.md)

#### Parameters

##### data?

[`ISerpYahooOrganicLiveHtmlResultInfo`](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md)

#### Returns

[`SerpYahooOrganicLiveHtmlResultInfo`](SerpYahooOrganicLiveHtmlResultInfo.md)

#### Defined in

main.ts:78156

## Properties

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpYahooOrganicLiveHtmlResultInfo`](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md).[`datetime`](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md#datetime)

#### Defined in

main.ts:78148

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpYahooOrganicLiveHtmlResultInfo`](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md).[`items`](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md#items)

#### Defined in

main.ts:78152

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpYahooOrganicLiveHtmlResultInfo`](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md).[`items_count`](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md#items_count)

#### Defined in

main.ts:78150

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpYahooOrganicLiveHtmlResultInfo`](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md).[`keyword`](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md#keyword)

#### Defined in

main.ts:78135

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpYahooOrganicLiveHtmlResultInfo`](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md).[`language_code`](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md#language_code)

#### Defined in

main.ts:78143

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpYahooOrganicLiveHtmlResultInfo`](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md).[`location_code`](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md#location_code)

#### Defined in

main.ts:78141

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpYahooOrganicLiveHtmlResultInfo`](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md#se_domain)

#### Defined in

main.ts:78139

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpYahooOrganicLiveHtmlResultInfo`](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md).[`type`](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md#type)

#### Defined in

main.ts:78137

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:78165

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:78193

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYahooOrganicLiveHtmlResultInfo`](SerpYahooOrganicLiveHtmlResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpYahooOrganicLiveHtmlResultInfo`](SerpYahooOrganicLiveHtmlResultInfo.md)

#### Defined in

main.ts:78186
