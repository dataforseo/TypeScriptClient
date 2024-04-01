[Documentation](../README.md) / [Exports](../modules.md) / MerchantGoogleProductSpecTaskGetHtmlResultInfo

# Class: MerchantGoogleProductSpecTaskGetHtmlResultInfo

## Implements

- [`IMerchantGoogleProductSpecTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantGoogleProductSpecTaskGetHtmlResultInfo.md#constructor)

### Properties

- [datetime](MerchantGoogleProductSpecTaskGetHtmlResultInfo.md#datetime)
- [items](MerchantGoogleProductSpecTaskGetHtmlResultInfo.md#items)
- [items\_count](MerchantGoogleProductSpecTaskGetHtmlResultInfo.md#items_count)
- [language\_code](MerchantGoogleProductSpecTaskGetHtmlResultInfo.md#language_code)
- [location\_code](MerchantGoogleProductSpecTaskGetHtmlResultInfo.md#location_code)
- [product\_id](MerchantGoogleProductSpecTaskGetHtmlResultInfo.md#product_id)
- [se\_domain](MerchantGoogleProductSpecTaskGetHtmlResultInfo.md#se_domain)
- [type](MerchantGoogleProductSpecTaskGetHtmlResultInfo.md#type)

### Methods

- [init](MerchantGoogleProductSpecTaskGetHtmlResultInfo.md#init)
- [toJSON](MerchantGoogleProductSpecTaskGetHtmlResultInfo.md#tojson)
- [fromJS](MerchantGoogleProductSpecTaskGetHtmlResultInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantGoogleProductSpecTaskGetHtmlResultInfo**(`data?`): [`MerchantGoogleProductSpecTaskGetHtmlResultInfo`](MerchantGoogleProductSpecTaskGetHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantGoogleProductSpecTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md) |

#### Returns

[`MerchantGoogleProductSpecTaskGetHtmlResultInfo`](MerchantGoogleProductSpecTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:173683

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IMerchantGoogleProductSpecTaskGetHtmlResultInfo](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md).[datetime](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md#datetime)

#### Defined in

main.ts:173675

___

### items

• `Optional` **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found on Google Shopping

#### Implementation of

[IMerchantGoogleProductSpecTaskGetHtmlResultInfo](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md).[items](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md#items)

#### Defined in

main.ts:173679

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IMerchantGoogleProductSpecTaskGetHtmlResultInfo](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md).[items_count](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md#items_count)

#### Defined in

main.ts:173677

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IMerchantGoogleProductSpecTaskGetHtmlResultInfo](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md).[language_code](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md#language_code)

#### Defined in

main.ts:173670

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IMerchantGoogleProductSpecTaskGetHtmlResultInfo](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md).[location_code](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md#location_code)

#### Defined in

main.ts:173668

___

### product\_id

• `Optional` **product\_id**: `string`

product ID in a POST array

#### Implementation of

[IMerchantGoogleProductSpecTaskGetHtmlResultInfo](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md).[product_id](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md#product_id)

#### Defined in

main.ts:173662

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[IMerchantGoogleProductSpecTaskGetHtmlResultInfo](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md).[se_domain](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md#se_domain)

#### Defined in

main.ts:173666

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IMerchantGoogleProductSpecTaskGetHtmlResultInfo](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md).[type](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md#type)

#### Defined in

main.ts:173664

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

main.ts:173692

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

main.ts:173720

___

### fromJS

▸ **fromJS**(`data`): [`MerchantGoogleProductSpecTaskGetHtmlResultInfo`](MerchantGoogleProductSpecTaskGetHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantGoogleProductSpecTaskGetHtmlResultInfo`](MerchantGoogleProductSpecTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:173713
