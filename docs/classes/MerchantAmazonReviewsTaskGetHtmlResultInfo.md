[Documentation](../README.md) / [Exports](../modules.md) / MerchantAmazonReviewsTaskGetHtmlResultInfo

# Class: MerchantAmazonReviewsTaskGetHtmlResultInfo

## Implements

- [`IMerchantAmazonReviewsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantAmazonReviewsTaskGetHtmlResultInfo.md#constructor)

### Properties

- [datetime](MerchantAmazonReviewsTaskGetHtmlResultInfo.md#datetime)
- [items](MerchantAmazonReviewsTaskGetHtmlResultInfo.md#items)
- [items\_count](MerchantAmazonReviewsTaskGetHtmlResultInfo.md#items_count)
- [language\_code](MerchantAmazonReviewsTaskGetHtmlResultInfo.md#language_code)
- [location\_code](MerchantAmazonReviewsTaskGetHtmlResultInfo.md#location_code)
- [product\_id](MerchantAmazonReviewsTaskGetHtmlResultInfo.md#product_id)
- [se\_domain](MerchantAmazonReviewsTaskGetHtmlResultInfo.md#se_domain)
- [type](MerchantAmazonReviewsTaskGetHtmlResultInfo.md#type)

### Methods

- [init](MerchantAmazonReviewsTaskGetHtmlResultInfo.md#init)
- [toJSON](MerchantAmazonReviewsTaskGetHtmlResultInfo.md#tojson)
- [fromJS](MerchantAmazonReviewsTaskGetHtmlResultInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantAmazonReviewsTaskGetHtmlResultInfo**(`data?`): [`MerchantAmazonReviewsTaskGetHtmlResultInfo`](MerchantAmazonReviewsTaskGetHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantAmazonReviewsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md) |

#### Returns

[`MerchantAmazonReviewsTaskGetHtmlResultInfo`](MerchantAmazonReviewsTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:181536

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IMerchantAmazonReviewsTaskGetHtmlResultInfo](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md).[datetime](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md#datetime)

#### Defined in

main.ts:181528

___

### items

• `Optional` **items**: [`HtmlItem`](HtmlItem.md)[]

HTML pages and related data

#### Implementation of

[IMerchantAmazonReviewsTaskGetHtmlResultInfo](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md).[items](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md#items)

#### Defined in

main.ts:181532

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IMerchantAmazonReviewsTaskGetHtmlResultInfo](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md).[items_count](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md#items_count)

#### Defined in

main.ts:181530

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IMerchantAmazonReviewsTaskGetHtmlResultInfo](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md).[language_code](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md#language_code)

#### Defined in

main.ts:181523

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IMerchantAmazonReviewsTaskGetHtmlResultInfo](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md).[location_code](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md#location_code)

#### Defined in

main.ts:181521

___

### product\_id

• `Optional` **product\_id**: `string`

ASIN received in a POST array

#### Implementation of

[IMerchantAmazonReviewsTaskGetHtmlResultInfo](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md).[product_id](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md#product_id)

#### Defined in

main.ts:181515

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[IMerchantAmazonReviewsTaskGetHtmlResultInfo](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md).[se_domain](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md#se_domain)

#### Defined in

main.ts:181519

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IMerchantAmazonReviewsTaskGetHtmlResultInfo](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md).[type](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md#type)

#### Defined in

main.ts:181517

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

main.ts:181545

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

main.ts:181573

___

### fromJS

▸ **fromJS**(`data`): [`MerchantAmazonReviewsTaskGetHtmlResultInfo`](MerchantAmazonReviewsTaskGetHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantAmazonReviewsTaskGetHtmlResultInfo`](MerchantAmazonReviewsTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:181566
