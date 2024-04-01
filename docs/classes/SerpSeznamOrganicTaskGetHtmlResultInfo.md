[Documentation](../README.md) / [Exports](../modules.md) / SerpSeznamOrganicTaskGetHtmlResultInfo

# Class: SerpSeznamOrganicTaskGetHtmlResultInfo

## Implements

- [`ISerpSeznamOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpSeznamOrganicTaskGetHtmlResultInfo.md#constructor)

### Properties

- [datetime](SerpSeznamOrganicTaskGetHtmlResultInfo.md#datetime)
- [items](SerpSeznamOrganicTaskGetHtmlResultInfo.md#items)
- [items\_count](SerpSeznamOrganicTaskGetHtmlResultInfo.md#items_count)
- [keyword](SerpSeznamOrganicTaskGetHtmlResultInfo.md#keyword)
- [language\_code](SerpSeznamOrganicTaskGetHtmlResultInfo.md#language_code)
- [location\_code](SerpSeznamOrganicTaskGetHtmlResultInfo.md#location_code)
- [se\_domain](SerpSeznamOrganicTaskGetHtmlResultInfo.md#se_domain)
- [type](SerpSeznamOrganicTaskGetHtmlResultInfo.md#type)

### Methods

- [init](SerpSeznamOrganicTaskGetHtmlResultInfo.md#init)
- [toJSON](SerpSeznamOrganicTaskGetHtmlResultInfo.md#tojson)
- [fromJS](SerpSeznamOrganicTaskGetHtmlResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpSeznamOrganicTaskGetHtmlResultInfo**(`data?`): [`SerpSeznamOrganicTaskGetHtmlResultInfo`](SerpSeznamOrganicTaskGetHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpSeznamOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md) |

#### Returns

[`SerpSeznamOrganicTaskGetHtmlResultInfo`](SerpSeznamOrganicTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:73045

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpSeznamOrganicTaskGetHtmlResultInfo](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md).[datetime](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md#datetime)

#### Defined in

main.ts:73037

___

### items

• `Optional` **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found in SERP

#### Implementation of

[ISerpSeznamOrganicTaskGetHtmlResultInfo](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md).[items](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md#items)

#### Defined in

main.ts:73041

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpSeznamOrganicTaskGetHtmlResultInfo](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md).[items_count](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md#items_count)

#### Defined in

main.ts:73039

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpSeznamOrganicTaskGetHtmlResultInfo](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md).[keyword](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md#keyword)

#### Defined in

main.ts:73024

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpSeznamOrganicTaskGetHtmlResultInfo](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md).[language_code](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md#language_code)

#### Defined in

main.ts:73032

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpSeznamOrganicTaskGetHtmlResultInfo](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md).[location_code](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md#location_code)

#### Defined in

main.ts:73030

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpSeznamOrganicTaskGetHtmlResultInfo](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md).[se_domain](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md#se_domain)

#### Defined in

main.ts:73028

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpSeznamOrganicTaskGetHtmlResultInfo](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md).[type](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md#type)

#### Defined in

main.ts:73026

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

main.ts:73054

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

main.ts:73082

___

### fromJS

▸ **fromJS**(`data`): [`SerpSeznamOrganicTaskGetHtmlResultInfo`](SerpSeznamOrganicTaskGetHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpSeznamOrganicTaskGetHtmlResultInfo`](SerpSeznamOrganicTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:73075
