[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBingOrganicTaskGetHtmlResultInfo

# Class: SerpBingOrganicTaskGetHtmlResultInfo

## Implements

- [`ISerpBingOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpBingOrganicTaskGetHtmlResultInfo()

> **new SerpBingOrganicTaskGetHtmlResultInfo**(`data`?): [`SerpBingOrganicTaskGetHtmlResultInfo`](SerpBingOrganicTaskGetHtmlResultInfo.md)

#### Parameters

##### data?

[`ISerpBingOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md)

#### Returns

[`SerpBingOrganicTaskGetHtmlResultInfo`](SerpBingOrganicTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:64847

## Properties

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpBingOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md#datetime)

#### Defined in

main.ts:64839

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpBingOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md).[`items`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md#items)

#### Defined in

main.ts:64843

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpBingOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md#items_count)

#### Defined in

main.ts:64841

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpBingOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md).[`keyword`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md#keyword)

#### Defined in

main.ts:64826

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpBingOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md#language_code)

#### Defined in

main.ts:64834

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpBingOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md#location_code)

#### Defined in

main.ts:64832

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpBingOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md#se_domain)

#### Defined in

main.ts:64830

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpBingOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md).[`type`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md#type)

#### Defined in

main.ts:64828

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:64856

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:64884

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBingOrganicTaskGetHtmlResultInfo`](SerpBingOrganicTaskGetHtmlResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpBingOrganicTaskGetHtmlResultInfo`](SerpBingOrganicTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:64877
