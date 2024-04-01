[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleNewsLiveHtmlResultInfo

# Class: SerpGoogleNewsLiveHtmlResultInfo

## Implements

- [`ISerpGoogleNewsLiveHtmlResultInfo`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleNewsLiveHtmlResultInfo.md#constructor)

### Properties

- [datetime](SerpGoogleNewsLiveHtmlResultInfo.md#datetime)
- [items](SerpGoogleNewsLiveHtmlResultInfo.md#items)
- [items\_count](SerpGoogleNewsLiveHtmlResultInfo.md#items_count)
- [keyword](SerpGoogleNewsLiveHtmlResultInfo.md#keyword)
- [language\_code](SerpGoogleNewsLiveHtmlResultInfo.md#language_code)
- [location\_code](SerpGoogleNewsLiveHtmlResultInfo.md#location_code)
- [se\_domain](SerpGoogleNewsLiveHtmlResultInfo.md#se_domain)
- [type](SerpGoogleNewsLiveHtmlResultInfo.md#type)

### Methods

- [init](SerpGoogleNewsLiveHtmlResultInfo.md#init)
- [toJSON](SerpGoogleNewsLiveHtmlResultInfo.md#tojson)
- [fromJS](SerpGoogleNewsLiveHtmlResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleNewsLiveHtmlResultInfo**(`data?`): [`SerpGoogleNewsLiveHtmlResultInfo`](SerpGoogleNewsLiveHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleNewsLiveHtmlResultInfo`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md) |

#### Returns

[`SerpGoogleNewsLiveHtmlResultInfo`](SerpGoogleNewsLiveHtmlResultInfo.md)

#### Defined in

main.ts:44129

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpGoogleNewsLiveHtmlResultInfo](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md).[datetime](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md#datetime)

#### Defined in

main.ts:44121

___

### items

• `Optional` **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found in SERP

#### Implementation of

[ISerpGoogleNewsLiveHtmlResultInfo](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md).[items](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md#items)

#### Defined in

main.ts:44125

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpGoogleNewsLiveHtmlResultInfo](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md).[items_count](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md#items_count)

#### Defined in

main.ts:44123

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpGoogleNewsLiveHtmlResultInfo](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md).[keyword](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md#keyword)

#### Defined in

main.ts:44108

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpGoogleNewsLiveHtmlResultInfo](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md).[language_code](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md#language_code)

#### Defined in

main.ts:44116

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpGoogleNewsLiveHtmlResultInfo](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md).[location_code](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md#location_code)

#### Defined in

main.ts:44114

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpGoogleNewsLiveHtmlResultInfo](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md).[se_domain](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md#se_domain)

#### Defined in

main.ts:44112

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpGoogleNewsLiveHtmlResultInfo](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md).[type](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md#type)

#### Defined in

main.ts:44110

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

main.ts:44138

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

main.ts:44166

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleNewsLiveHtmlResultInfo`](SerpGoogleNewsLiveHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleNewsLiveHtmlResultInfo`](SerpGoogleNewsLiveHtmlResultInfo.md)

#### Defined in

main.ts:44159
