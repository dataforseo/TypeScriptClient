[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpNaverOrganicTaskGetHtmlResultInfo

# Class: SerpNaverOrganicTaskGetHtmlResultInfo

## Implements

- [`ISerpNaverOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpNaverOrganicTaskGetHtmlResultInfo()

> **new SerpNaverOrganicTaskGetHtmlResultInfo**(`data`?): [`SerpNaverOrganicTaskGetHtmlResultInfo`](SerpNaverOrganicTaskGetHtmlResultInfo.md)

#### Parameters

• **data?**: [`ISerpNaverOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md)

#### Returns

[`SerpNaverOrganicTaskGetHtmlResultInfo`](SerpNaverOrganicTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:73625

## Properties

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpNaverOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md#datetime)

#### Defined in

main.ts:73617

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpNaverOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md).[`items`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md#items)

#### Defined in

main.ts:73621

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpNaverOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md#items_count)

#### Defined in

main.ts:73619

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpNaverOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md).[`keyword`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md#keyword)

#### Defined in

main.ts:73604

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpNaverOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md#language_code)

#### Defined in

main.ts:73612

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpNaverOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md#location_code)

#### Defined in

main.ts:73610

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpNaverOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md#se_domain)

#### Defined in

main.ts:73608

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpNaverOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md).[`type`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md#type)

#### Defined in

main.ts:73606

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:73634

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:73662

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpNaverOrganicTaskGetHtmlResultInfo`](SerpNaverOrganicTaskGetHtmlResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpNaverOrganicTaskGetHtmlResultInfo`](SerpNaverOrganicTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:73655
