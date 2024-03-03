[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleJobsTaskGetHtmlResultInfo

# Class: SerpGoogleJobsTaskGetHtmlResultInfo

## Implements

- [`ISerpGoogleJobsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleJobsTaskGetHtmlResultInfo.md#constructor)

### Properties

- [datetime](SerpGoogleJobsTaskGetHtmlResultInfo.md#datetime)
- [items](SerpGoogleJobsTaskGetHtmlResultInfo.md#items)
- [items\_count](SerpGoogleJobsTaskGetHtmlResultInfo.md#items_count)
- [keyword](SerpGoogleJobsTaskGetHtmlResultInfo.md#keyword)
- [language\_code](SerpGoogleJobsTaskGetHtmlResultInfo.md#language_code)
- [location\_code](SerpGoogleJobsTaskGetHtmlResultInfo.md#location_code)
- [se\_domain](SerpGoogleJobsTaskGetHtmlResultInfo.md#se_domain)
- [type](SerpGoogleJobsTaskGetHtmlResultInfo.md#type)

### Methods

- [init](SerpGoogleJobsTaskGetHtmlResultInfo.md#init)
- [toJSON](SerpGoogleJobsTaskGetHtmlResultInfo.md#tojson)
- [fromJS](SerpGoogleJobsTaskGetHtmlResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleJobsTaskGetHtmlResultInfo**(`data?`): [`SerpGoogleJobsTaskGetHtmlResultInfo`](SerpGoogleJobsTaskGetHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleJobsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md) |

#### Returns

[`SerpGoogleJobsTaskGetHtmlResultInfo`](SerpGoogleJobsTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:49698

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpGoogleJobsTaskGetHtmlResultInfo](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md).[datetime](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md#datetime)

#### Defined in

main.ts:49690

___

### items

• `Optional` **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found in SERP

#### Implementation of

[ISerpGoogleJobsTaskGetHtmlResultInfo](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md).[items](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md#items)

#### Defined in

main.ts:49694

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpGoogleJobsTaskGetHtmlResultInfo](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md).[items_count](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md#items_count)

#### Defined in

main.ts:49692

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpGoogleJobsTaskGetHtmlResultInfo](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md).[keyword](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md#keyword)

#### Defined in

main.ts:49677

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpGoogleJobsTaskGetHtmlResultInfo](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md).[language_code](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md#language_code)

#### Defined in

main.ts:49685

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpGoogleJobsTaskGetHtmlResultInfo](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md).[location_code](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md#location_code)

#### Defined in

main.ts:49683

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpGoogleJobsTaskGetHtmlResultInfo](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md).[se_domain](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md#se_domain)

#### Defined in

main.ts:49681

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpGoogleJobsTaskGetHtmlResultInfo](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md).[type](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md#type)

#### Defined in

main.ts:49679

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:49707

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:49735

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleJobsTaskGetHtmlResultInfo`](SerpGoogleJobsTaskGetHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleJobsTaskGetHtmlResultInfo`](SerpGoogleJobsTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:49728
