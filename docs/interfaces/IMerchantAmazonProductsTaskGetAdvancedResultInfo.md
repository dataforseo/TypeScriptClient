[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IMerchantAmazonProductsTaskGetAdvancedResultInfo

# Interface: IMerchantAmazonProductsTaskGetAdvancedResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### categories?

> `optional` **categories**: `string`[]

amazon product departments and subcategories

#### Defined in

main.ts:185296

***

### check\_url?

> `optional` **check\_url**: `string`

direct URL to Amazon results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:185279

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:185284

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results found in Amazon SERP
contains types of all search results (items) found in the returned SERP
possible item types:
amazon_serp, amazon_paid, editorial_recommendations, top_rated_from_our_brands, related_searches

#### Defined in

main.ts:185292

***

### items?

> `optional` **items**: [`BaseAmazonSerpElementItem`](../classes/BaseAmazonSerpElementItem.md)[]

Amazon product items within the editorial_recommendations element

#### Defined in

main.ts:185300

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:185298

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

main.ts:185268

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:185276

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:185274

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:185272

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

search engine results count

#### Defined in

main.ts:185294

***

### spell?

> `optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

main.ts:185287

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:185270
