[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBingOrganicTaskGetHtmlResultInfo

# Class: SerpBingOrganicTaskGetHtmlResultInfo

Defined in: main.ts:64853

## Implements

- [`ISerpBingOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpBingOrganicTaskGetHtmlResultInfo()

> **new SerpBingOrganicTaskGetHtmlResultInfo**(`data`?): [`SerpBingOrganicTaskGetHtmlResultInfo`](SerpBingOrganicTaskGetHtmlResultInfo.md)

Defined in: main.ts:64877

#### Parameters

##### data?

[`ISerpBingOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md)

#### Returns

[`SerpBingOrganicTaskGetHtmlResultInfo`](SerpBingOrganicTaskGetHtmlResultInfo.md)

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:64869

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpBingOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

Defined in: main.ts:64873

elements of search results found in SERP

#### Implementation of

[`ISerpBingOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md).[`items`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:64871

the number of results returned in the items array

#### Implementation of

[`ISerpBingOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:64856

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpBingOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md).[`keyword`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:64864

language code in a POST array

#### Implementation of

[`ISerpBingOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:64862

location code in a POST array

#### Implementation of

[`ISerpBingOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:64860

search engine domain in a POST array

#### Implementation of

[`ISerpBingOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md#se_domain)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:64858

type of element

#### Implementation of

[`ISerpBingOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md).[`type`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:64886

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:64914

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBingOrganicTaskGetHtmlResultInfo`](SerpBingOrganicTaskGetHtmlResultInfo.md)

Defined in: main.ts:64907

#### Parameters

##### data

`any`

#### Returns

[`SerpBingOrganicTaskGetHtmlResultInfo`](SerpBingOrganicTaskGetHtmlResultInfo.md)
