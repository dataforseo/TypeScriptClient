[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpGoogleLocalFinderLiveHtmlResultInfo

# Class: SerpGoogleLocalFinderLiveHtmlResultInfo

## Implements

- [`ISerpGoogleLocalFinderLiveHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleLocalFinderLiveHtmlResultInfo()

> **new SerpGoogleLocalFinderLiveHtmlResultInfo**(`data`?): [`SerpGoogleLocalFinderLiveHtmlResultInfo`](SerpGoogleLocalFinderLiveHtmlResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleLocalFinderLiveHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md)

#### Returns

[`SerpGoogleLocalFinderLiveHtmlResultInfo`](SerpGoogleLocalFinderLiveHtmlResultInfo.md)

#### Defined in

main.ts:43123

## Properties

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleLocalFinderLiveHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md).[`datetime`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md#datetime)

#### Defined in

main.ts:43115

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleLocalFinderLiveHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md).[`items`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md#items)

#### Defined in

main.ts:43119

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleLocalFinderLiveHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md).[`items_count`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md#items_count)

#### Defined in

main.ts:43117

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleLocalFinderLiveHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md).[`keyword`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md#keyword)

#### Defined in

main.ts:43102

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpGoogleLocalFinderLiveHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md).[`language_code`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md#language_code)

#### Defined in

main.ts:43110

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpGoogleLocalFinderLiveHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md).[`location_code`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md#location_code)

#### Defined in

main.ts:43108

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleLocalFinderLiveHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md#se_domain)

#### Defined in

main.ts:43106

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleLocalFinderLiveHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md).[`type`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md#type)

#### Defined in

main.ts:43104

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:43132

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:43160

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleLocalFinderLiveHtmlResultInfo`](SerpGoogleLocalFinderLiveHtmlResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleLocalFinderLiveHtmlResultInfo`](SerpGoogleLocalFinderLiveHtmlResultInfo.md)

#### Defined in

main.ts:43153
