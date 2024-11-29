[**Documentation**](../README.md)

***

[Documentation](../README.md) / IMerchantAmazonReviewsTaskGetAdvancedResultInfo

# Interface: IMerchantAmazonReviewsTaskGetAdvancedResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### asin?

> `optional` **asin**: `string`

asin received in a POST array

#### Defined in

main.ts:197427

***

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:197438

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:197443

***

### image?

> `optional` **image**: [`ImagesElement`](../classes/ImagesElement.md)

product image data

#### Defined in

main.ts:197451

***

### item\_types?

> `optional` **item\_types**: `string`[]

type of search results in Amazon SERP
contains types of search results (items) found in Amazon SERP;
possible item types:
amazon_review_item

#### Defined in

main.ts:197461

***

### items?

> `optional` **items**: [`BaseAmazonSerpElementItem`](../classes/BaseAmazonSerpElementItem.md)[]

found reviews
you can get more results by using the depth parameter when setting a task

#### Defined in

main.ts:197467

***

### items\_count?

> `optional` **items\_count**: `number`

the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task

#### Defined in

main.ts:197464

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:197435

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:197433

***

### rating?

> `optional` **rating**: [`RatingElement`](../classes/RatingElement.md)

rating of the product on Amazon
popularity rate based on reviews and displayed in SERP

#### Defined in

main.ts:197454

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

the total number of reviews

#### Defined in

main.ts:197456

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:197431

***

### spell?

> `optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

main.ts:197446

***

### title?

> `optional` **title**: `string`

title of the product on Amazon
the title of the product for which the reviews are collected

#### Defined in

main.ts:197449

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:197429
