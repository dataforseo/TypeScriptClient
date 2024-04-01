[Documentation](../README.md) / [Exports](../modules.md) / MerchantGoogleSellersTaskGetAdvancedResultInfo

# Class: MerchantGoogleSellersTaskGetAdvancedResultInfo

## Implements

- [`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantGoogleSellersTaskGetAdvancedResultInfo.md#constructor)

### Properties

- [check\_url](MerchantGoogleSellersTaskGetAdvancedResultInfo.md#check_url)
- [datetime](MerchantGoogleSellersTaskGetAdvancedResultInfo.md#datetime)
- [image\_url](MerchantGoogleSellersTaskGetAdvancedResultInfo.md#image_url)
- [item\_types](MerchantGoogleSellersTaskGetAdvancedResultInfo.md#item_types)
- [items](MerchantGoogleSellersTaskGetAdvancedResultInfo.md#items)
- [items\_count](MerchantGoogleSellersTaskGetAdvancedResultInfo.md#items_count)
- [language\_code](MerchantGoogleSellersTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](MerchantGoogleSellersTaskGetAdvancedResultInfo.md#location_code)
- [product\_id](MerchantGoogleSellersTaskGetAdvancedResultInfo.md#product_id)
- [rating](MerchantGoogleSellersTaskGetAdvancedResultInfo.md#rating)
- [se\_domain](MerchantGoogleSellersTaskGetAdvancedResultInfo.md#se_domain)
- [title](MerchantGoogleSellersTaskGetAdvancedResultInfo.md#title)
- [type](MerchantGoogleSellersTaskGetAdvancedResultInfo.md#type)
- [url](MerchantGoogleSellersTaskGetAdvancedResultInfo.md#url)

### Methods

- [init](MerchantGoogleSellersTaskGetAdvancedResultInfo.md#init)
- [toJSON](MerchantGoogleSellersTaskGetAdvancedResultInfo.md#tojson)
- [fromJS](MerchantGoogleSellersTaskGetAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantGoogleSellersTaskGetAdvancedResultInfo**(`data?`): [`MerchantGoogleSellersTaskGetAdvancedResultInfo`](MerchantGoogleSellersTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md) |

#### Returns

[`MerchantGoogleSellersTaskGetAdvancedResultInfo`](MerchantGoogleSellersTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:172259

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to Google Shopping results
you can use it to make sure that we provided accurate results

#### Implementation of

[IMerchantGoogleSellersTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[check_url](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:172232

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IMerchantGoogleSellersTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[datetime](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:172237

___

### image\_url

• `Optional` **image\_url**: `string`

URL to the product image

#### Implementation of

[IMerchantGoogleSellersTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[image_url](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#image_url)

#### Defined in

main.ts:172243

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results found in Google Shopping SERP
contains types of all search results (items) found in the returned SERP
possible item types:
shops_list, buy_on_google

#### Implementation of

[IMerchantGoogleSellersTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[item_types](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:172251

___

### items

• `Optional` **items**: [`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)[]

items in SERP

#### Implementation of

[IMerchantGoogleSellersTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[items](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#items)

#### Defined in

main.ts:172255

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IMerchantGoogleSellersTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[items_count](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:172253

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IMerchantGoogleSellersTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[language_code](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:172229

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IMerchantGoogleSellersTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[location_code](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:172227

___

### product\_id

• `Optional` **product\_id**: `string`

product_id received in a POST array
learn more about the parameter in this help center guide

#### Implementation of

[IMerchantGoogleSellersTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[product_id](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#product_id)

#### Defined in

main.ts:172221

___

### rating

• `Optional` **rating**: [`RatingElement`](RatingElement.md)

product rating
the product popularity rate based on product reviews

#### Implementation of

[IMerchantGoogleSellersTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[rating](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#rating)

#### Defined in

main.ts:172246

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[IMerchantGoogleSellersTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[se_domain](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:172225

___

### title

• `Optional` **title**: `string`

title of the product

#### Implementation of

[IMerchantGoogleSellersTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[title](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#title)

#### Defined in

main.ts:172239

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IMerchantGoogleSellersTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[type](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#type)

#### Defined in

main.ts:172223

___

### url

• `Optional` **url**: `string`

URL to the product page

#### Implementation of

[IMerchantGoogleSellersTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[url](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#url)

#### Defined in

main.ts:172241

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

main.ts:172268

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

main.ts:172306

___

### fromJS

▸ **fromJS**(`data`): [`MerchantGoogleSellersTaskGetAdvancedResultInfo`](MerchantGoogleSellersTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantGoogleSellersTaskGetAdvancedResultInfo`](MerchantGoogleSellersTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:172299
