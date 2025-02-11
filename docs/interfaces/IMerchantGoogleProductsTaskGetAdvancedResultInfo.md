[**Documentation**](../README.md)

***

[Documentation](../README.md) / IMerchantGoogleProductsTaskGetAdvancedResultInfo

# Interface: IMerchantGoogleProductsTaskGetAdvancedResultInfo

Defined in: main.ts:187346

## Indexable

\[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:187360

direct URL to Google Shopping results
you can use it to make sure that we provided accurate results

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:187365

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:187373

types of search results found in Google Shopping SERP
contains types of all search results (items) found in the returned SERP
possible item types:
google_shopping_sponsored_carousel, google_shopping_paid, google_shopping_serp

***

### items?

> `optional` **items**: [`BaseMerchantSerpElementItem`](../classes/BaseMerchantSerpElementItem.md)[]

Defined in: main.ts:187379

additional items present in the element
contains a list of related keywords;
if there are none, equals null

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:187375

the number of results returned in the items array

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:187349

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:187357

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:187355

location code in a POST array

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:187353

search engine domain in a POST array

***

### spell?

> `optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

Defined in: main.ts:187368

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:187351

type of element
