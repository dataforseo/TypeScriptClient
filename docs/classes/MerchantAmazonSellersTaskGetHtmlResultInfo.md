[Documentation](../README.md) / [Exports](../modules.md) / MerchantAmazonSellersTaskGetHtmlResultInfo

# Class: MerchantAmazonSellersTaskGetHtmlResultInfo

## Implements

- [`IMerchantAmazonSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantAmazonSellersTaskGetHtmlResultInfo.md#constructor)

### Properties

- [asin](MerchantAmazonSellersTaskGetHtmlResultInfo.md#asin)
- [datetime](MerchantAmazonSellersTaskGetHtmlResultInfo.md#datetime)
- [items](MerchantAmazonSellersTaskGetHtmlResultInfo.md#items)
- [items\_count](MerchantAmazonSellersTaskGetHtmlResultInfo.md#items_count)
- [language\_code](MerchantAmazonSellersTaskGetHtmlResultInfo.md#language_code)
- [location\_code](MerchantAmazonSellersTaskGetHtmlResultInfo.md#location_code)
- [se\_domain](MerchantAmazonSellersTaskGetHtmlResultInfo.md#se_domain)
- [type](MerchantAmazonSellersTaskGetHtmlResultInfo.md#type)

### Methods

- [init](MerchantAmazonSellersTaskGetHtmlResultInfo.md#init)
- [toJSON](MerchantAmazonSellersTaskGetHtmlResultInfo.md#tojson)
- [fromJS](MerchantAmazonSellersTaskGetHtmlResultInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantAmazonSellersTaskGetHtmlResultInfo**(`data?`): [`MerchantAmazonSellersTaskGetHtmlResultInfo`](MerchantAmazonSellersTaskGetHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantAmazonSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md) |

#### Returns

[`MerchantAmazonSellersTaskGetHtmlResultInfo`](MerchantAmazonSellersTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:180114

## Properties

### asin

• `Optional` **asin**: `string`

ASIN received in a POST array

#### Implementation of

[IMerchantAmazonSellersTaskGetHtmlResultInfo](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md).[asin](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md#asin)

#### Defined in

main.ts:180093

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IMerchantAmazonSellersTaskGetHtmlResultInfo](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md).[datetime](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md#datetime)

#### Defined in

main.ts:180106

___

### items

• `Optional` **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found on Amazon

#### Implementation of

[IMerchantAmazonSellersTaskGetHtmlResultInfo](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md).[items](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md#items)

#### Defined in

main.ts:180110

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IMerchantAmazonSellersTaskGetHtmlResultInfo](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md).[items_count](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md#items_count)

#### Defined in

main.ts:180108

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IMerchantAmazonSellersTaskGetHtmlResultInfo](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md).[language_code](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md#language_code)

#### Defined in

main.ts:180101

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IMerchantAmazonSellersTaskGetHtmlResultInfo](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md).[location_code](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md#location_code)

#### Defined in

main.ts:180099

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[IMerchantAmazonSellersTaskGetHtmlResultInfo](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md).[se_domain](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md#se_domain)

#### Defined in

main.ts:180097

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IMerchantAmazonSellersTaskGetHtmlResultInfo](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md).[type](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md#type)

#### Defined in

main.ts:180095

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

main.ts:180123

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

main.ts:180151

___

### fromJS

▸ **fromJS**(`data`): [`MerchantAmazonSellersTaskGetHtmlResultInfo`](MerchantAmazonSellersTaskGetHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantAmazonSellersTaskGetHtmlResultInfo`](MerchantAmazonSellersTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:180144
