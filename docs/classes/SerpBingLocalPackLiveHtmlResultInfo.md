[Documentation](../README.md) / [Exports](../modules.md) / SerpBingLocalPackLiveHtmlResultInfo

# Class: SerpBingLocalPackLiveHtmlResultInfo

## Implements

- [`ISerpBingLocalPackLiveHtmlResultInfo`](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBingLocalPackLiveHtmlResultInfo.md#constructor)

### Properties

- [datetime](SerpBingLocalPackLiveHtmlResultInfo.md#datetime)
- [items](SerpBingLocalPackLiveHtmlResultInfo.md#items)
- [items\_count](SerpBingLocalPackLiveHtmlResultInfo.md#items_count)
- [keyword](SerpBingLocalPackLiveHtmlResultInfo.md#keyword)
- [language\_code](SerpBingLocalPackLiveHtmlResultInfo.md#language_code)
- [location\_code](SerpBingLocalPackLiveHtmlResultInfo.md#location_code)
- [se\_domain](SerpBingLocalPackLiveHtmlResultInfo.md#se_domain)
- [type](SerpBingLocalPackLiveHtmlResultInfo.md#type)

### Methods

- [init](SerpBingLocalPackLiveHtmlResultInfo.md#init)
- [toJSON](SerpBingLocalPackLiveHtmlResultInfo.md#tojson)
- [fromJS](SerpBingLocalPackLiveHtmlResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBingLocalPackLiveHtmlResultInfo**(`data?`): [`SerpBingLocalPackLiveHtmlResultInfo`](SerpBingLocalPackLiveHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBingLocalPackLiveHtmlResultInfo`](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md) |

#### Returns

[`SerpBingLocalPackLiveHtmlResultInfo`](SerpBingLocalPackLiveHtmlResultInfo.md)

#### Defined in

main.ts:57120

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpBingLocalPackLiveHtmlResultInfo](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md).[datetime](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md#datetime)

#### Defined in

main.ts:57112

___

### items

• `Optional` **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found in SERP

#### Implementation of

[ISerpBingLocalPackLiveHtmlResultInfo](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md).[items](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md#items)

#### Defined in

main.ts:57116

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpBingLocalPackLiveHtmlResultInfo](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md).[items_count](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md#items_count)

#### Defined in

main.ts:57114

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpBingLocalPackLiveHtmlResultInfo](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md).[keyword](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md#keyword)

#### Defined in

main.ts:57099

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpBingLocalPackLiveHtmlResultInfo](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md).[language_code](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md#language_code)

#### Defined in

main.ts:57107

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpBingLocalPackLiveHtmlResultInfo](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md).[location_code](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md#location_code)

#### Defined in

main.ts:57105

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpBingLocalPackLiveHtmlResultInfo](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md).[se_domain](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md#se_domain)

#### Defined in

main.ts:57103

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpBingLocalPackLiveHtmlResultInfo](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md).[type](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md#type)

#### Defined in

main.ts:57101

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

main.ts:57129

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

main.ts:57157

___

### fromJS

▸ **fromJS**(`data`): [`SerpBingLocalPackLiveHtmlResultInfo`](SerpBingLocalPackLiveHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBingLocalPackLiveHtmlResultInfo`](SerpBingLocalPackLiveHtmlResultInfo.md)

#### Defined in

main.ts:57150
