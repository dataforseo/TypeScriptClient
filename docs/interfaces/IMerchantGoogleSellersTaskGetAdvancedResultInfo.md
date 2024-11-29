[**Documentation**](../README.md)

***

[Documentation](../README.md) / IMerchantGoogleSellersTaskGetAdvancedResultInfo

# Interface: IMerchantGoogleSellersTaskGetAdvancedResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to Google Shopping results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:188306

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:188311

***

### image\_url?

> `optional` **image\_url**: `string`

URL to the product image

#### Defined in

main.ts:188317

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results found in Google Shopping SERP
contains types of all search results (items) found in the returned SERP
possible item types:
shops_list, buy_on_google

#### Defined in

main.ts:188325

***

### items?

> `optional` **items**: [`BaseMerchantSerpElementItem`](../classes/BaseMerchantSerpElementItem.md)[]

items in SERP

#### Defined in

main.ts:188329

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:188327

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:188303

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:188301

***

### product\_id?

> `optional` **product\_id**: `string`

product_id received in a POST array
learn more about the parameter in this help center guide

#### Defined in

main.ts:188295

***

### rating?

> `optional` **rating**: [`RatingElement`](../classes/RatingElement.md)

product rating
the product popularity rate based on product reviews

#### Defined in

main.ts:188320

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:188299

***

### title?

> `optional` **title**: `string`

title of the product

#### Defined in

main.ts:188313

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:188297

***

### url?

> `optional` **url**: `string`

URL to the product page

#### Defined in

main.ts:188315
