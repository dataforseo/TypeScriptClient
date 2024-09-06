[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IMerchantGoogleProductSpecTaskGetAdvancedResultInfo

# Interface: IMerchantGoogleProductSpecTaskGetAdvancedResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:177726

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the format: “year-month-date:minutes:UTC_difference_hours:UTC_difference_minutes”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:177731

***

### description?

> `optional` **description**: `string`

description of the product

#### Defined in

main.ts:177719

***

### image\_url?

> `optional` **image\_url**: `string`

URL of the product image

#### Defined in

main.ts:177721

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of items found on the product specification page
possible item types:
shopping_specification

#### Defined in

main.ts:177735

***

### items?

> `optional` **items**: [`BaseMerchantSerpElementItem`](../classes/BaseMerchantSerpElementItem.md)[]

items on the product specification page
contains all product attributes and related data listed on the product specification page

#### Defined in

main.ts:177740

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:177737

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:177715

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:177713

***

### product\_id?

> `optional` **product\_id**: `string`

product ID in a POST array
learn more about the parameter in this help center guide

#### Defined in

main.ts:177707

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:177711

***

### tags?

> `optional` **tags**: `string`[]

tags of the product

#### Defined in

main.ts:177723

***

### title?

> `optional` **title**: `string`

title of the product

#### Defined in

main.ts:177717

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:177709
