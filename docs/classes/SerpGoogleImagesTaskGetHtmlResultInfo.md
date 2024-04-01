[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleImagesTaskGetHtmlResultInfo

# Class: SerpGoogleImagesTaskGetHtmlResultInfo

## Implements

- [`ISerpGoogleImagesTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleImagesTaskGetHtmlResultInfo.md#constructor)

### Properties

- [datetime](SerpGoogleImagesTaskGetHtmlResultInfo.md#datetime)
- [items](SerpGoogleImagesTaskGetHtmlResultInfo.md#items)
- [items\_count](SerpGoogleImagesTaskGetHtmlResultInfo.md#items_count)
- [keyword](SerpGoogleImagesTaskGetHtmlResultInfo.md#keyword)
- [language\_code](SerpGoogleImagesTaskGetHtmlResultInfo.md#language_code)
- [location\_code](SerpGoogleImagesTaskGetHtmlResultInfo.md#location_code)
- [se\_domain](SerpGoogleImagesTaskGetHtmlResultInfo.md#se_domain)
- [type](SerpGoogleImagesTaskGetHtmlResultInfo.md#type)

### Methods

- [init](SerpGoogleImagesTaskGetHtmlResultInfo.md#init)
- [toJSON](SerpGoogleImagesTaskGetHtmlResultInfo.md#tojson)
- [fromJS](SerpGoogleImagesTaskGetHtmlResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleImagesTaskGetHtmlResultInfo**(`data?`): [`SerpGoogleImagesTaskGetHtmlResultInfo`](SerpGoogleImagesTaskGetHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleImagesTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md) |

#### Returns

[`SerpGoogleImagesTaskGetHtmlResultInfo`](SerpGoogleImagesTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:47231

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpGoogleImagesTaskGetHtmlResultInfo](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md).[datetime](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md#datetime)

#### Defined in

main.ts:47223

___

### items

• `Optional` **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found in SERP

#### Implementation of

[ISerpGoogleImagesTaskGetHtmlResultInfo](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md).[items](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md#items)

#### Defined in

main.ts:47227

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpGoogleImagesTaskGetHtmlResultInfo](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md).[items_count](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md#items_count)

#### Defined in

main.ts:47225

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpGoogleImagesTaskGetHtmlResultInfo](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md).[keyword](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md#keyword)

#### Defined in

main.ts:47210

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpGoogleImagesTaskGetHtmlResultInfo](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md).[language_code](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md#language_code)

#### Defined in

main.ts:47218

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpGoogleImagesTaskGetHtmlResultInfo](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md).[location_code](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md#location_code)

#### Defined in

main.ts:47216

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpGoogleImagesTaskGetHtmlResultInfo](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md).[se_domain](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md#se_domain)

#### Defined in

main.ts:47214

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpGoogleImagesTaskGetHtmlResultInfo](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md).[type](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md#type)

#### Defined in

main.ts:47212

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

main.ts:47240

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

main.ts:47268

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleImagesTaskGetHtmlResultInfo`](SerpGoogleImagesTaskGetHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleImagesTaskGetHtmlResultInfo`](SerpGoogleImagesTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:47261
