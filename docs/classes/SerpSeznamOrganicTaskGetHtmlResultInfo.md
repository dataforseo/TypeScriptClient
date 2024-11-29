[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpSeznamOrganicTaskGetHtmlResultInfo

# Class: SerpSeznamOrganicTaskGetHtmlResultInfo

## Implements

- [`ISerpSeznamOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpSeznamOrganicTaskGetHtmlResultInfo()

> **new SerpSeznamOrganicTaskGetHtmlResultInfo**(`data`?): [`SerpSeznamOrganicTaskGetHtmlResultInfo`](SerpSeznamOrganicTaskGetHtmlResultInfo.md)

#### Parameters

##### data?

[`ISerpSeznamOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md)

#### Returns

[`SerpSeznamOrganicTaskGetHtmlResultInfo`](SerpSeznamOrganicTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:84144

## Properties

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpSeznamOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md#datetime)

#### Defined in

main.ts:84136

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpSeznamOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md).[`items`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md#items)

#### Defined in

main.ts:84140

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpSeznamOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md#items_count)

#### Defined in

main.ts:84138

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpSeznamOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md).[`keyword`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md#keyword)

#### Defined in

main.ts:84123

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpSeznamOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md#language_code)

#### Defined in

main.ts:84131

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpSeznamOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md#location_code)

#### Defined in

main.ts:84129

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpSeznamOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md#se_domain)

#### Defined in

main.ts:84127

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpSeznamOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md).[`type`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md#type)

#### Defined in

main.ts:84125

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:84153

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:84181

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpSeznamOrganicTaskGetHtmlResultInfo`](SerpSeznamOrganicTaskGetHtmlResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpSeznamOrganicTaskGetHtmlResultInfo`](SerpSeznamOrganicTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:84174
