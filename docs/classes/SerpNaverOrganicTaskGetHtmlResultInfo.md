[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpNaverOrganicTaskGetHtmlResultInfo

# Class: SerpNaverOrganicTaskGetHtmlResultInfo

Defined in: main.ts:81986

## Implements

- [`ISerpNaverOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpNaverOrganicTaskGetHtmlResultInfo()

> **new SerpNaverOrganicTaskGetHtmlResultInfo**(`data`?): [`SerpNaverOrganicTaskGetHtmlResultInfo`](SerpNaverOrganicTaskGetHtmlResultInfo.md)

Defined in: main.ts:82010

#### Parameters

##### data?

[`ISerpNaverOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md)

#### Returns

[`SerpNaverOrganicTaskGetHtmlResultInfo`](SerpNaverOrganicTaskGetHtmlResultInfo.md)

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:82002

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpNaverOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

Defined in: main.ts:82006

elements of search results found in SERP

#### Implementation of

[`ISerpNaverOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md).[`items`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:82004

the number of results returned in the items array

#### Implementation of

[`ISerpNaverOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:81989

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpNaverOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md).[`keyword`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:81997

language code in a POST array

#### Implementation of

[`ISerpNaverOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:81995

location code in a POST array

#### Implementation of

[`ISerpNaverOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:81993

search engine domain in a POST array

#### Implementation of

[`ISerpNaverOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md#se_domain)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:81991

type of element

#### Implementation of

[`ISerpNaverOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md).[`type`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:82019

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:82047

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpNaverOrganicTaskGetHtmlResultInfo`](SerpNaverOrganicTaskGetHtmlResultInfo.md)

Defined in: main.ts:82040

#### Parameters

##### data

`any`

#### Returns

[`SerpNaverOrganicTaskGetHtmlResultInfo`](SerpNaverOrganicTaskGetHtmlResultInfo.md)
