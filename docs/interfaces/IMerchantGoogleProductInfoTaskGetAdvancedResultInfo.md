[Documentation](../README.md) / [Exports](../modules.md) / IMerchantGoogleProductInfoTaskGetAdvancedResultInfo

# Interface: IMerchantGoogleProductInfoTaskGetAdvancedResultInfo

## Implemented by

- [`MerchantGoogleProductInfoTaskGetAdvancedResultInfo`](../classes/MerchantGoogleProductInfoTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#check_url)
- [datetime](IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#datetime)
- [item\_types](IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#item_types)
- [items](IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#items)
- [items\_count](IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#items_count)
- [language\_code](IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#location_code)
- [product\_id](IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#product_id)
- [se\_domain](IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#se_domain)
- [type](IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#type)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:169556

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the format: “year-month-date:minutes:UTC_difference_hours:UTC_difference_minutes”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:169561

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of items found on the product specification page
possible item types:
product_info_element

#### Defined in

main.ts:169565

___

### items

• `Optional` **items**: [`BaseMerchantSerpElementItem`](../classes/BaseMerchantSerpElementItem.md)[]

items on the product page
contains all product attributes and related data listed on the product page

#### Defined in

main.ts:169570

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:169567

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:169553

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:169551

___

### product\_id

• `Optional` **product\_id**: `string`

product ID in a POST array
learn more about the parameter in this help center guide

#### Defined in

main.ts:169545

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:169549

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:169547
