[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpGoogleAutocompleteTaskGetAdvancedResultInfo

# Interface: ISerpGoogleAutocompleteTaskGetAdvancedResultInfo

Defined in: main.ts:56234

## Indexable

\[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:56248

direct URL to search engine results
you can use it to make sure that we provided accurate results

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:56253

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:56263

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
autocomplete

***

### items?

> `optional` **items**: [`SerpGoogleAutocompleteAdvancedItem`](../classes/SerpGoogleAutocompleteAdvancedItem.md)[]

Defined in: main.ts:56269

items of the element

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:56267

the number of results returned in the items array

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:56237

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:56245

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:56243

location code in a POST array

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](../classes/RefinementChipsInfo.md)

Defined in: main.ts:56258

search refinement chips

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:56241

search engine domain in a POST array

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:56265

total number of results in SERP

***

### spell?

> `optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

Defined in: main.ts:56256

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:56239

type of element
