[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpGoogleLocalFinderTaskGetHtmlResultInfo

# Class: SerpGoogleLocalFinderTaskGetHtmlResultInfo

## Implements

- [`ISerpGoogleLocalFinderTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleLocalFinderTaskGetHtmlResultInfo()

> **new SerpGoogleLocalFinderTaskGetHtmlResultInfo**(`data`?): [`SerpGoogleLocalFinderTaskGetHtmlResultInfo`](SerpGoogleLocalFinderTaskGetHtmlResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleLocalFinderTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md)

#### Returns

[`SerpGoogleLocalFinderTaskGetHtmlResultInfo`](SerpGoogleLocalFinderTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:42121

## Properties

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md#datetime)

#### Defined in

main.ts:42113

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md).[`items`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md#items)

#### Defined in

main.ts:42117

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md#items_count)

#### Defined in

main.ts:42115

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md).[`keyword`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md#keyword)

#### Defined in

main.ts:42100

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md#language_code)

#### Defined in

main.ts:42108

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md#location_code)

#### Defined in

main.ts:42106

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md#se_domain)

#### Defined in

main.ts:42104

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md).[`type`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md#type)

#### Defined in

main.ts:42102

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:42130

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:42158

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleLocalFinderTaskGetHtmlResultInfo`](SerpGoogleLocalFinderTaskGetHtmlResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleLocalFinderTaskGetHtmlResultInfo`](SerpGoogleLocalFinderTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:42151
