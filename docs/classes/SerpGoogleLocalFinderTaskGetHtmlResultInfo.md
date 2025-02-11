[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleLocalFinderTaskGetHtmlResultInfo

# Class: SerpGoogleLocalFinderTaskGetHtmlResultInfo

Defined in: main.ts:43989

## Implements

- [`ISerpGoogleLocalFinderTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleLocalFinderTaskGetHtmlResultInfo()

> **new SerpGoogleLocalFinderTaskGetHtmlResultInfo**(`data`?): [`SerpGoogleLocalFinderTaskGetHtmlResultInfo`](SerpGoogleLocalFinderTaskGetHtmlResultInfo.md)

Defined in: main.ts:44013

#### Parameters

##### data?

[`ISerpGoogleLocalFinderTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md)

#### Returns

[`SerpGoogleLocalFinderTaskGetHtmlResultInfo`](SerpGoogleLocalFinderTaskGetHtmlResultInfo.md)

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:44005

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

Defined in: main.ts:44009

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md).[`items`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:44007

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:43992

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md).[`keyword`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:44000

language code in a POST array

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:43998

location code in a POST array

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:43996

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md#se_domain)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:43994

type of element

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md).[`type`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:44022

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:44050

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleLocalFinderTaskGetHtmlResultInfo`](SerpGoogleLocalFinderTaskGetHtmlResultInfo.md)

Defined in: main.ts:44043

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleLocalFinderTaskGetHtmlResultInfo`](SerpGoogleLocalFinderTaskGetHtmlResultInfo.md)
