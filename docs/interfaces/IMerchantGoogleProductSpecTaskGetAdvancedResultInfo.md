**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IMerchantGoogleProductSpecTaskGetAdvancedResultInfo

# Interface: IMerchantGoogleProductSpecTaskGetAdvancedResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Source

main.ts:174539

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the format: “year-month-date:minutes:UTC_difference_hours:UTC_difference_minutes”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:174544

***

### description?

> **`optional`** **description**: `string`

description of the product

#### Source

main.ts:174532

***

### image\_url?

> **`optional`** **image\_url**: `string`

URL of the product image

#### Source

main.ts:174534

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

types of items found on the product specification page
possible item types:
shopping_specification

#### Source

main.ts:174548

***

### items?

> **`optional`** **items**: [`BaseMerchantSerpElementItem`](../classes/BaseMerchantSerpElementItem.md)[]

items on the product specification page
contains all product attributes and related data listed on the product specification page

#### Source

main.ts:174553

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Source

main.ts:174550

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Source

main.ts:174528

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Source

main.ts:174526

***

### product\_id?

> **`optional`** **product\_id**: `string`

product ID in a POST array
learn more about the parameter in this help center guide

#### Source

main.ts:174520

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Source

main.ts:174524

***

### tags?

> **`optional`** **tags**: `string`[]

tags of the product

#### Source

main.ts:174536

***

### title?

> **`optional`** **title**: `string`

title of the product

#### Source

main.ts:174530

***

### type?

> **`optional`** **type**: `string`

type of element

#### Source

main.ts:174522
