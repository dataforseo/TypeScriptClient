[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantGoogleProductInfoTaskGetAdvancedResultInfo

# Class: MerchantGoogleProductInfoTaskGetAdvancedResultInfo

## Implements

- [`IMerchantGoogleProductInfoTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#constructor)

### Properties

- [check\_url](MerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#check_url)
- [datetime](MerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#datetime)
- [item\_types](MerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#item_types)
- [items](MerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#items)
- [items\_count](MerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#items_count)
- [language\_code](MerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](MerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#location_code)
- [product\_id](MerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#product_id)
- [se\_domain](MerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#se_domain)
- [type](MerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#type)

### Methods

- [init](MerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#init)
- [toJSON](MerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#tojson)
- [fromJS](MerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantGoogleProductInfoTaskGetAdvancedResultInfo**(`data?`): [`MerchantGoogleProductInfoTaskGetAdvancedResultInfo`](MerchantGoogleProductInfoTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantGoogleProductInfoTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md) |

#### Returns

[`MerchantGoogleProductInfoTaskGetAdvancedResultInfo`](MerchantGoogleProductInfoTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:169351](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L169351)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[IMerchantGoogleProductInfoTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md).[check_url](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

[main.ts:169333](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L169333)

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the format: “year-month-date:minutes:UTC_difference_hours:UTC_difference_minutes”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IMerchantGoogleProductInfoTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md).[datetime](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

[main.ts:169338](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L169338)

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of items found on the product specification page
possible item types:
product_info_element

#### Implementation of

[IMerchantGoogleProductInfoTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md).[item_types](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

[main.ts:169342](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L169342)

___

### items

• `Optional` **items**: [`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)[]

items on the product page
contains all product attributes and related data listed on the product page

#### Implementation of

[IMerchantGoogleProductInfoTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md).[items](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#items)

#### Defined in

[main.ts:169347](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L169347)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IMerchantGoogleProductInfoTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md).[items_count](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

[main.ts:169344](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L169344)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IMerchantGoogleProductInfoTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md).[language_code](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

[main.ts:169330](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L169330)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IMerchantGoogleProductInfoTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md).[location_code](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

[main.ts:169328](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L169328)

___

### product\_id

• `Optional` **product\_id**: `string`

product ID in a POST array
learn more about the parameter in this help center guide

#### Implementation of

[IMerchantGoogleProductInfoTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md).[product_id](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#product_id)

#### Defined in

[main.ts:169322](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L169322)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[IMerchantGoogleProductInfoTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md).[se_domain](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

[main.ts:169326](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L169326)

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IMerchantGoogleProductInfoTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md).[type](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#type)

#### Defined in

[main.ts:169324](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L169324)

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

[main.ts:169360](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L169360)

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

[main.ts:169394](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L169394)

___

### fromJS

▸ **fromJS**(`data`): [`MerchantGoogleProductInfoTaskGetAdvancedResultInfo`](MerchantGoogleProductInfoTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantGoogleProductInfoTaskGetAdvancedResultInfo`](MerchantGoogleProductInfoTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:169387](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L169387)
