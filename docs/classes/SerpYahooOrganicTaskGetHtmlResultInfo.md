[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYahooOrganicTaskGetHtmlResultInfo

# Class: SerpYahooOrganicTaskGetHtmlResultInfo

## Implements

- [`ISerpYahooOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYahooOrganicTaskGetHtmlResultInfo()

> **new SerpYahooOrganicTaskGetHtmlResultInfo**(`data`?): [`SerpYahooOrganicTaskGetHtmlResultInfo`](SerpYahooOrganicTaskGetHtmlResultInfo.md)

#### Parameters

##### data?

[`ISerpYahooOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md)

#### Returns

[`SerpYahooOrganicTaskGetHtmlResultInfo`](SerpYahooOrganicTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:76612

## Properties

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpYahooOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md#datetime)

#### Defined in

main.ts:76604

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpYahooOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md).[`items`](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md#items)

#### Defined in

main.ts:76608

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpYahooOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md#items_count)

#### Defined in

main.ts:76606

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpYahooOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md).[`keyword`](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md#keyword)

#### Defined in

main.ts:76591

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpYahooOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md#language_code)

#### Defined in

main.ts:76599

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpYahooOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md#location_code)

#### Defined in

main.ts:76597

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpYahooOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md#se_domain)

#### Defined in

main.ts:76595

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpYahooOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md).[`type`](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md#type)

#### Defined in

main.ts:76593

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:76621

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:76649

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYahooOrganicTaskGetHtmlResultInfo`](SerpYahooOrganicTaskGetHtmlResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpYahooOrganicTaskGetHtmlResultInfo`](SerpYahooOrganicTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:76642
