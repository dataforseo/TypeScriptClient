**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IMerchantGoogleSellersTaskGetAdvancedResultInfo

# Interface: IMerchantGoogleSellersTaskGetAdvancedResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to Google Shopping results
you can use it to make sure that we provided accurate results

#### Source

main.ts:174661

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:174666

***

### image\_url?

> **`optional`** **image\_url**: `string`

URL to the product image

#### Source

main.ts:174672

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

types of search results found in Google Shopping SERP
contains types of all search results (items) found in the returned SERP
possible item types:
shops_list, buy_on_google

#### Source

main.ts:174680

***

### items?

> **`optional`** **items**: [`BaseMerchantSerpElementItem`](../classes/BaseMerchantSerpElementItem.md)[]

items in SERP

#### Source

main.ts:174684

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Source

main.ts:174682

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Source

main.ts:174658

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Source

main.ts:174656

***

### product\_id?

> **`optional`** **product\_id**: `string`

product_id received in a POST array
learn more about the parameter in this help center guide

#### Source

main.ts:174650

***

### rating?

> **`optional`** **rating**: [`RatingElement`](../classes/RatingElement.md)

product rating
the product popularity rate based on product reviews

#### Source

main.ts:174675

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Source

main.ts:174654

***

### title?

> **`optional`** **title**: `string`

title of the product

#### Source

main.ts:174668

***

### type?

> **`optional`** **type**: `string`

type of element

#### Source

main.ts:174652

***

### url?

> **`optional`** **url**: `string`

URL to the product page

#### Source

main.ts:174670
