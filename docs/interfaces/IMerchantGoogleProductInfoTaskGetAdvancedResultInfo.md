[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IMerchantGoogleProductInfoTaskGetAdvancedResultInfo

# Interface: IMerchantGoogleProductInfoTaskGetAdvancedResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:183303

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the format: “year-month-date:minutes:UTC_difference_hours:UTC_difference_minutes”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:183308

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of items found on the product specification page
possible item types:
product_info_element

#### Defined in

main.ts:183312

***

### items?

> `optional` **items**: [`BaseMerchantSerpElementItem`](../classes/BaseMerchantSerpElementItem.md)[]

items on the product page
contains all product attributes and related data listed on the product page

#### Defined in

main.ts:183317

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:183314

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:183300

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:183298

***

### product\_id?

> `optional` **product\_id**: `string`

product ID in a POST array
learn more about the parameter in this help center guide

#### Defined in

main.ts:183292

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:183296

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:183294
