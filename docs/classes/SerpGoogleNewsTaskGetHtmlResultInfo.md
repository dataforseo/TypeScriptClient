[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / SerpGoogleNewsTaskGetHtmlResultInfo

# Class: SerpGoogleNewsTaskGetHtmlResultInfo

## Implements

- [`ISerpGoogleNewsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleNewsTaskGetHtmlResultInfo()

> **new SerpGoogleNewsTaskGetHtmlResultInfo**(`data`?): [`SerpGoogleNewsTaskGetHtmlResultInfo`](SerpGoogleNewsTaskGetHtmlResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleNewsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md)

#### Returns

[`SerpGoogleNewsTaskGetHtmlResultInfo`](SerpGoogleNewsTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:46109

## Properties

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleNewsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md#datetime)

#### Defined in

main.ts:46101

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleNewsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md).[`items`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md#items)

#### Defined in

main.ts:46105

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleNewsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md#items_count)

#### Defined in

main.ts:46103

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleNewsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md).[`keyword`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md#keyword)

#### Defined in

main.ts:46088

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpGoogleNewsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md#language_code)

#### Defined in

main.ts:46096

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpGoogleNewsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md#location_code)

#### Defined in

main.ts:46094

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleNewsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md#se_domain)

#### Defined in

main.ts:46092

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleNewsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md).[`type`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md#type)

#### Defined in

main.ts:46090

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:46118

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:46146

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleNewsTaskGetHtmlResultInfo`](SerpGoogleNewsTaskGetHtmlResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleNewsTaskGetHtmlResultInfo`](SerpGoogleNewsTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:46139
