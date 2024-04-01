[Documentation](../README.md) / [Exports](../modules.md) / MerchantAmazonProductsTaskGetAdvancedResultInfo

# Class: MerchantAmazonProductsTaskGetAdvancedResultInfo

## Implements

- [`IMerchantAmazonProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantAmazonProductsTaskGetAdvancedResultInfo.md#constructor)

### Properties

- [categories](MerchantAmazonProductsTaskGetAdvancedResultInfo.md#categories)
- [check\_url](MerchantAmazonProductsTaskGetAdvancedResultInfo.md#check_url)
- [datetime](MerchantAmazonProductsTaskGetAdvancedResultInfo.md#datetime)
- [item\_types](MerchantAmazonProductsTaskGetAdvancedResultInfo.md#item_types)
- [items](MerchantAmazonProductsTaskGetAdvancedResultInfo.md#items)
- [items\_count](MerchantAmazonProductsTaskGetAdvancedResultInfo.md#items_count)
- [keyword](MerchantAmazonProductsTaskGetAdvancedResultInfo.md#keyword)
- [language\_code](MerchantAmazonProductsTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](MerchantAmazonProductsTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](MerchantAmazonProductsTaskGetAdvancedResultInfo.md#se_domain)
- [se\_results\_count](MerchantAmazonProductsTaskGetAdvancedResultInfo.md#se_results_count)
- [spell](MerchantAmazonProductsTaskGetAdvancedResultInfo.md#spell)
- [type](MerchantAmazonProductsTaskGetAdvancedResultInfo.md#type)

### Methods

- [init](MerchantAmazonProductsTaskGetAdvancedResultInfo.md#init)
- [toJSON](MerchantAmazonProductsTaskGetAdvancedResultInfo.md#tojson)
- [fromJS](MerchantAmazonProductsTaskGetAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantAmazonProductsTaskGetAdvancedResultInfo**(`data?`): [`MerchantAmazonProductsTaskGetAdvancedResultInfo`](MerchantAmazonProductsTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantAmazonProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md) |

#### Returns

[`MerchantAmazonProductsTaskGetAdvancedResultInfo`](MerchantAmazonProductsTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:176766

## Properties

### categories

• `Optional` **categories**: `string`[]

amazon product departments and subcategories

#### Implementation of

[IMerchantAmazonProductsTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[categories](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#categories)

#### Defined in

main.ts:176758

___

### check\_url

• `Optional` **check\_url**: `string`

direct URL to Amazon results
you can use it to make sure that we provided accurate results

#### Implementation of

[IMerchantAmazonProductsTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[check_url](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:176741

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IMerchantAmazonProductsTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[datetime](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:176746

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results found in Amazon SERP
contains types of all search results (items) found in the returned SERP
possible item types:
amazon_serp, amazon_paid, editorial_recommendations, top_rated_from_our_brands, related_searches

#### Implementation of

[IMerchantAmazonProductsTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[item_types](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:176754

___

### items

• `Optional` **items**: [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)[]

Amazon product items within the editorial_recommendations element

#### Implementation of

[IMerchantAmazonProductsTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[items](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#items)

#### Defined in

main.ts:176762

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IMerchantAmazonProductsTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[items_count](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:176760

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[IMerchantAmazonProductsTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[keyword](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:176730

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IMerchantAmazonProductsTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[language_code](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:176738

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IMerchantAmazonProductsTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[location_code](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:176736

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[IMerchantAmazonProductsTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[se_domain](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:176734

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

search engine results count

#### Implementation of

[IMerchantAmazonProductsTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[se_results_count](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:176756

___

### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[IMerchantAmazonProductsTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[spell](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#spell)

#### Defined in

main.ts:176749

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IMerchantAmazonProductsTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[type](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#type)

#### Defined in

main.ts:176732

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

main.ts:176775

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

main.ts:176816

___

### fromJS

▸ **fromJS**(`data`): [`MerchantAmazonProductsTaskGetAdvancedResultInfo`](MerchantAmazonProductsTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantAmazonProductsTaskGetAdvancedResultInfo`](MerchantAmazonProductsTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:176809
