[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantAmazonProductsTaskGetHtmlResultInfo

# Class: MerchantAmazonProductsTaskGetHtmlResultInfo

## Implements

- [`IMerchantAmazonProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantAmazonProductsTaskGetHtmlResultInfo.md#constructor)

### Properties

- [datetime](MerchantAmazonProductsTaskGetHtmlResultInfo.md#datetime)
- [items](MerchantAmazonProductsTaskGetHtmlResultInfo.md#items)
- [items\_count](MerchantAmazonProductsTaskGetHtmlResultInfo.md#items_count)
- [keyword](MerchantAmazonProductsTaskGetHtmlResultInfo.md#keyword)
- [language\_code](MerchantAmazonProductsTaskGetHtmlResultInfo.md#language_code)
- [location\_code](MerchantAmazonProductsTaskGetHtmlResultInfo.md#location_code)
- [se\_domain](MerchantAmazonProductsTaskGetHtmlResultInfo.md#se_domain)
- [type](MerchantAmazonProductsTaskGetHtmlResultInfo.md#type)

### Methods

- [init](MerchantAmazonProductsTaskGetHtmlResultInfo.md#init)
- [toJSON](MerchantAmazonProductsTaskGetHtmlResultInfo.md#tojson)
- [fromJS](MerchantAmazonProductsTaskGetHtmlResultInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantAmazonProductsTaskGetHtmlResultInfo**(`data?`): [`MerchantAmazonProductsTaskGetHtmlResultInfo`](MerchantAmazonProductsTaskGetHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantAmazonProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md) |

#### Returns

[`MerchantAmazonProductsTaskGetHtmlResultInfo`](MerchantAmazonProductsTaskGetHtmlResultInfo.md)

#### Defined in

[main.ts:171572](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171572)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IMerchantAmazonProductsTaskGetHtmlResultInfo](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md).[datetime](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md#datetime)

#### Defined in

[main.ts:171564](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171564)

___

### items

• `Optional` **items**: [`HtmlItem`](HtmlItem.md)[]

HTML pages and related data

#### Implementation of

[IMerchantAmazonProductsTaskGetHtmlResultInfo](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md).[items](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md#items)

#### Defined in

[main.ts:171568](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171568)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IMerchantAmazonProductsTaskGetHtmlResultInfo](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md).[items_count](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md#items_count)

#### Defined in

[main.ts:171566](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171566)

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[IMerchantAmazonProductsTaskGetHtmlResultInfo](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md).[keyword](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md#keyword)

#### Defined in

[main.ts:171551](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171551)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IMerchantAmazonProductsTaskGetHtmlResultInfo](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md).[language_code](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md#language_code)

#### Defined in

[main.ts:171559](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171559)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IMerchantAmazonProductsTaskGetHtmlResultInfo](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md).[location_code](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md#location_code)

#### Defined in

[main.ts:171557](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171557)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[IMerchantAmazonProductsTaskGetHtmlResultInfo](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md).[se_domain](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md#se_domain)

#### Defined in

[main.ts:171555](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171555)

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IMerchantAmazonProductsTaskGetHtmlResultInfo](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md).[type](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md#type)

#### Defined in

[main.ts:171553](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171553)

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

[main.ts:171581](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171581)

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

[main.ts:171609](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171609)

___

### fromJS

▸ **fromJS**(`data`): [`MerchantAmazonProductsTaskGetHtmlResultInfo`](MerchantAmazonProductsTaskGetHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantAmazonProductsTaskGetHtmlResultInfo`](MerchantAmazonProductsTaskGetHtmlResultInfo.md)

#### Defined in

[main.ts:171602](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171602)
