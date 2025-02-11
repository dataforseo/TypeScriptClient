[**Documentation**](../README.md)

***

[Documentation](../README.md) / IMerchantAmazonReviewsTaskGetAdvancedResultInfo

# Interface: IMerchantAmazonReviewsTaskGetAdvancedResultInfo

Defined in: main.ts:197995

## Indexable

\[`key`: `string`\]: `any`

## Properties

### asin?

> `optional` **asin**: `string`

Defined in: main.ts:197997

asin received in a POST array

***

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:198008

direct URL to search engine results
you can use it to make sure that we provided accurate results

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:198013

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### image?

> `optional` **image**: [`ImagesElement`](../classes/ImagesElement.md)

Defined in: main.ts:198021

product image data

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:198031

type of search results in Amazon SERP
contains types of search results (items) found in Amazon SERP;
possible item types:
amazon_review_item

***

### items?

> `optional` **items**: [`BaseAmazonSerpElementItem`](../classes/BaseAmazonSerpElementItem.md)[]

Defined in: main.ts:198037

found reviews
you can get more results by using the depth parameter when setting a task

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:198034

the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:198005

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:198003

location code in a POST array

***

### rating?

> `optional` **rating**: [`RatingElement`](../classes/RatingElement.md)

Defined in: main.ts:198024

rating of the product on Amazon
popularity rate based on reviews and displayed in SERP

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

Defined in: main.ts:198026

the total number of reviews

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:198001

search engine domain in a POST array

***

### spell?

> `optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

Defined in: main.ts:198016

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:198019

title of the product on Amazon
the title of the product for which the reviews are collected

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:197999

type of element
