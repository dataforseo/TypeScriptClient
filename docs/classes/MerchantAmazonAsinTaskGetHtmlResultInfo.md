[Documentation](../README.md) / [Exports](../modules.md) / MerchantAmazonAsinTaskGetHtmlResultInfo

# Class: MerchantAmazonAsinTaskGetHtmlResultInfo

## Implements

- [`IMerchantAmazonAsinTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantAmazonAsinTaskGetHtmlResultInfo.md#constructor)

### Properties

- [datetime](MerchantAmazonAsinTaskGetHtmlResultInfo.md#datetime)
- [items](MerchantAmazonAsinTaskGetHtmlResultInfo.md#items)
- [items\_count](MerchantAmazonAsinTaskGetHtmlResultInfo.md#items_count)
- [language\_code](MerchantAmazonAsinTaskGetHtmlResultInfo.md#language_code)
- [location\_code](MerchantAmazonAsinTaskGetHtmlResultInfo.md#location_code)
- [product\_id](MerchantAmazonAsinTaskGetHtmlResultInfo.md#product_id)
- [se\_domain](MerchantAmazonAsinTaskGetHtmlResultInfo.md#se_domain)
- [type](MerchantAmazonAsinTaskGetHtmlResultInfo.md#type)

### Methods

- [init](MerchantAmazonAsinTaskGetHtmlResultInfo.md#init)
- [toJSON](MerchantAmazonAsinTaskGetHtmlResultInfo.md#tojson)
- [fromJS](MerchantAmazonAsinTaskGetHtmlResultInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantAmazonAsinTaskGetHtmlResultInfo**(`data?`): [`MerchantAmazonAsinTaskGetHtmlResultInfo`](MerchantAmazonAsinTaskGetHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantAmazonAsinTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md) |

#### Returns

[`MerchantAmazonAsinTaskGetHtmlResultInfo`](MerchantAmazonAsinTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:173483

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IMerchantAmazonAsinTaskGetHtmlResultInfo](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md).[datetime](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md#datetime)

#### Defined in

main.ts:173475

___

### items

• `Optional` **items**: [`HtmlItem`](HtmlItem.md)[]

HTML pages and related data

#### Implementation of

[IMerchantAmazonAsinTaskGetHtmlResultInfo](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md).[items](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md#items)

#### Defined in

main.ts:173479

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IMerchantAmazonAsinTaskGetHtmlResultInfo](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md).[items_count](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md#items_count)

#### Defined in

main.ts:173477

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IMerchantAmazonAsinTaskGetHtmlResultInfo](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md).[language_code](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md#language_code)

#### Defined in

main.ts:173470

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IMerchantAmazonAsinTaskGetHtmlResultInfo](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md).[location_code](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md#location_code)

#### Defined in

main.ts:173468

___

### product\_id

• `Optional` **product\_id**: `string`

ASIN received in a POST array

#### Implementation of

[IMerchantAmazonAsinTaskGetHtmlResultInfo](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md).[product_id](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md#product_id)

#### Defined in

main.ts:173462

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[IMerchantAmazonAsinTaskGetHtmlResultInfo](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md).[se_domain](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md#se_domain)

#### Defined in

main.ts:173466

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IMerchantAmazonAsinTaskGetHtmlResultInfo](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md).[type](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md#type)

#### Defined in

main.ts:173464

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

main.ts:173492

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

main.ts:173520

___

### fromJS

▸ **fromJS**(`data`): [`MerchantAmazonAsinTaskGetHtmlResultInfo`](MerchantAmazonAsinTaskGetHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantAmazonAsinTaskGetHtmlResultInfo`](MerchantAmazonAsinTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:173513
