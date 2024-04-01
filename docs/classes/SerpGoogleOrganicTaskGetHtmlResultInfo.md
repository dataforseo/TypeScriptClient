[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleOrganicTaskGetHtmlResultInfo

# Class: SerpGoogleOrganicTaskGetHtmlResultInfo

## Implements

- [`ISerpGoogleOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleOrganicTaskGetHtmlResultInfo.md#constructor)

### Properties

- [datetime](SerpGoogleOrganicTaskGetHtmlResultInfo.md#datetime)
- [items](SerpGoogleOrganicTaskGetHtmlResultInfo.md#items)
- [items\_count](SerpGoogleOrganicTaskGetHtmlResultInfo.md#items_count)
- [keyword](SerpGoogleOrganicTaskGetHtmlResultInfo.md#keyword)
- [language\_code](SerpGoogleOrganicTaskGetHtmlResultInfo.md#language_code)
- [location\_code](SerpGoogleOrganicTaskGetHtmlResultInfo.md#location_code)
- [se\_domain](SerpGoogleOrganicTaskGetHtmlResultInfo.md#se_domain)
- [type](SerpGoogleOrganicTaskGetHtmlResultInfo.md#type)

### Methods

- [init](SerpGoogleOrganicTaskGetHtmlResultInfo.md#init)
- [toJSON](SerpGoogleOrganicTaskGetHtmlResultInfo.md#tojson)
- [fromJS](SerpGoogleOrganicTaskGetHtmlResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleOrganicTaskGetHtmlResultInfo**(`data?`): [`SerpGoogleOrganicTaskGetHtmlResultInfo`](SerpGoogleOrganicTaskGetHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md) |

#### Returns

[`SerpGoogleOrganicTaskGetHtmlResultInfo`](SerpGoogleOrganicTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:37123

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpGoogleOrganicTaskGetHtmlResultInfo](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md).[datetime](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md#datetime)

#### Defined in

main.ts:37115

___

### items

• `Optional` **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found in SERP

#### Implementation of

[ISerpGoogleOrganicTaskGetHtmlResultInfo](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md).[items](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md#items)

#### Defined in

main.ts:37119

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpGoogleOrganicTaskGetHtmlResultInfo](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md).[items_count](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md#items_count)

#### Defined in

main.ts:37117

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpGoogleOrganicTaskGetHtmlResultInfo](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md).[keyword](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md#keyword)

#### Defined in

main.ts:37102

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpGoogleOrganicTaskGetHtmlResultInfo](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md).[language_code](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md#language_code)

#### Defined in

main.ts:37110

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpGoogleOrganicTaskGetHtmlResultInfo](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md).[location_code](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md#location_code)

#### Defined in

main.ts:37108

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpGoogleOrganicTaskGetHtmlResultInfo](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md).[se_domain](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md#se_domain)

#### Defined in

main.ts:37106

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpGoogleOrganicTaskGetHtmlResultInfo](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md).[type](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md#type)

#### Defined in

main.ts:37104

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

main.ts:37132

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

main.ts:37160

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleOrganicTaskGetHtmlResultInfo`](SerpGoogleOrganicTaskGetHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleOrganicTaskGetHtmlResultInfo`](SerpGoogleOrganicTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:37153
