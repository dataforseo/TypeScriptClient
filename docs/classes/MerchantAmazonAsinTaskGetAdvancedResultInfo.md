[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantAmazonAsinTaskGetAdvancedResultInfo

# Class: MerchantAmazonAsinTaskGetAdvancedResultInfo

## Implements

- [`IMerchantAmazonAsinTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantAmazonAsinTaskGetAdvancedResultInfo.md#constructor)

### Properties

- [asin](MerchantAmazonAsinTaskGetAdvancedResultInfo.md#asin)
- [check\_url](MerchantAmazonAsinTaskGetAdvancedResultInfo.md#check_url)
- [datetime](MerchantAmazonAsinTaskGetAdvancedResultInfo.md#datetime)
- [item\_types](MerchantAmazonAsinTaskGetAdvancedResultInfo.md#item_types)
- [items](MerchantAmazonAsinTaskGetAdvancedResultInfo.md#items)
- [items\_count](MerchantAmazonAsinTaskGetAdvancedResultInfo.md#items_count)
- [language\_code](MerchantAmazonAsinTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](MerchantAmazonAsinTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](MerchantAmazonAsinTaskGetAdvancedResultInfo.md#se_domain)
- [type](MerchantAmazonAsinTaskGetAdvancedResultInfo.md#type)

### Methods

- [init](MerchantAmazonAsinTaskGetAdvancedResultInfo.md#init)
- [toJSON](MerchantAmazonAsinTaskGetAdvancedResultInfo.md#tojson)
- [fromJS](MerchantAmazonAsinTaskGetAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantAmazonAsinTaskGetAdvancedResultInfo**(`data?`): [`MerchantAmazonAsinTaskGetAdvancedResultInfo`](MerchantAmazonAsinTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantAmazonAsinTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md) |

#### Returns

[`MerchantAmazonAsinTaskGetAdvancedResultInfo`](MerchantAmazonAsinTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:173071](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173071)

## Properties

### asin

• `Optional` **asin**: `string`

ASIN received in a POST array
the unique product identifier in Amazon (ASIN) received in a POST array
learn more about the identified in this help center guide

#### Implementation of

[IMerchantAmazonAsinTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md).[asin](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md#asin)

#### Defined in

[main.ts:173042](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173042)

___

### check\_url

• `Optional` **check\_url**: `string`

direct URL to Amazon results
you can use it to make sure that we provided accurate results

#### Implementation of

[IMerchantAmazonAsinTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md).[check_url](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

[main.ts:173053](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173053)

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IMerchantAmazonAsinTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md).[datetime](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

[main.ts:173058](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173058)

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results found on Amazon
contains types of all search results (items) found in the returned SERP
possible item types:
amazon_product_info

#### Implementation of

[IMerchantAmazonAsinTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md).[item_types](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

[main.ts:173063](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173063)

___

### items

• `Optional` **items**: [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)[]

Amazon product info items

#### Implementation of

[IMerchantAmazonAsinTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md).[items](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md#items)

#### Defined in

[main.ts:173067](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173067)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IMerchantAmazonAsinTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md).[items_count](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

[main.ts:173065](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173065)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IMerchantAmazonAsinTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md).[language_code](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

[main.ts:173050](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173050)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IMerchantAmazonAsinTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md).[location_code](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

[main.ts:173048](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173048)

___

### se\_domain

• `Optional` **se\_domain**: `string`

Amazon domain in a POST array

#### Implementation of

[IMerchantAmazonAsinTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md).[se_domain](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

[main.ts:173046](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173046)

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IMerchantAmazonAsinTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md).[type](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md#type)

#### Defined in

[main.ts:173044](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173044)

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

[main.ts:173080](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173080)

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

[main.ts:173114](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173114)

___

### fromJS

▸ **fromJS**(`data`): [`MerchantAmazonAsinTaskGetAdvancedResultInfo`](MerchantAmazonAsinTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantAmazonAsinTaskGetAdvancedResultInfo`](MerchantAmazonAsinTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:173107](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173107)
