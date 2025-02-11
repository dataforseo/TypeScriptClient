[**Documentation**](../README.md)

***

[Documentation](../README.md) / IMerchantGoogleProductInfoTaskGetAdvancedResultInfo

# Interface: IMerchantGoogleProductInfoTaskGetAdvancedResultInfo

Defined in: main.ts:191259

## Indexable

\[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:191273

direct URL to search engine results
you can use it to make sure that we provided accurate results

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:191278

date and time when the result was received
in the format: “year-month-date:minutes:UTC_difference_hours:UTC_difference_minutes”
example:
2019-11-15 12:57:46 +00:00

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:191282

types of items found on the product specification page
possible item types:
product_info_element

***

### items?

> `optional` **items**: [`BaseMerchantSerpElementItem`](../classes/BaseMerchantSerpElementItem.md)[]

Defined in: main.ts:191287

items on the product page
contains all product attributes and related data listed on the product page

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:191284

the number of results returned in the items array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:191270

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:191268

location code in a POST array

***

### product\_id?

> `optional` **product\_id**: `string`

Defined in: main.ts:191262

product ID in a POST array
learn more about the parameter in this help center guide

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:191266

search engine domain in a POST array

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:191264

type of element
