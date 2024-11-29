[**Documentation**](../README.md)

***

[Documentation](../README.md) / IMerchantGoogleProductSpecTaskGetAdvancedResultInfo

# Interface: IMerchantGoogleProductSpecTaskGetAdvancedResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:189463

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the format: “year-month-date:minutes:UTC_difference_hours:UTC_difference_minutes”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:189468

***

### description?

> `optional` **description**: `string`

description of the product

#### Defined in

main.ts:189456

***

### image\_url?

> `optional` **image\_url**: `string`

URL of the product image

#### Defined in

main.ts:189458

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of items found on the product specification page
possible item types:
shopping_specification

#### Defined in

main.ts:189472

***

### items?

> `optional` **items**: [`BaseMerchantSerpElementItem`](../classes/BaseMerchantSerpElementItem.md)[]

items on the product specification page
contains all product attributes and related data listed on the product specification page

#### Defined in

main.ts:189477

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:189474

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:189452

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:189450

***

### product\_id?

> `optional` **product\_id**: `string`

product ID in a POST array
learn more about the parameter in this help center guide

#### Defined in

main.ts:189444

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:189448

***

### tags?

> `optional` **tags**: `string`[]

tags of the product

#### Defined in

main.ts:189460

***

### title?

> `optional` **title**: `string`

title of the product

#### Defined in

main.ts:189454

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:189446
