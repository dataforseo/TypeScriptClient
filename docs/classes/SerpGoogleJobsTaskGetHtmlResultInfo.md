[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpGoogleJobsTaskGetHtmlResultInfo

# Class: SerpGoogleJobsTaskGetHtmlResultInfo

## Implements

- [`ISerpGoogleJobsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleJobsTaskGetHtmlResultInfo()

> **new SerpGoogleJobsTaskGetHtmlResultInfo**(`data`?): [`SerpGoogleJobsTaskGetHtmlResultInfo`](SerpGoogleJobsTaskGetHtmlResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleJobsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md)

#### Returns

[`SerpGoogleJobsTaskGetHtmlResultInfo`](SerpGoogleJobsTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:51220

## Properties

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleJobsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md#datetime)

#### Defined in

main.ts:51212

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleJobsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md).[`items`](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md#items)

#### Defined in

main.ts:51216

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleJobsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md#items_count)

#### Defined in

main.ts:51214

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleJobsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md).[`keyword`](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md#keyword)

#### Defined in

main.ts:51199

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpGoogleJobsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md#language_code)

#### Defined in

main.ts:51207

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpGoogleJobsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md#location_code)

#### Defined in

main.ts:51205

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleJobsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md#se_domain)

#### Defined in

main.ts:51203

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleJobsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md).[`type`](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md#type)

#### Defined in

main.ts:51201

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:51229

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:51257

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleJobsTaskGetHtmlResultInfo`](SerpGoogleJobsTaskGetHtmlResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleJobsTaskGetHtmlResultInfo`](SerpGoogleJobsTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:51250
