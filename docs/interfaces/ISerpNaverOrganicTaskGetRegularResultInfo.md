[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpNaverOrganicTaskGetRegularResultInfo

# Interface: ISerpNaverOrganicTaskGetRegularResultInfo

Defined in: main.ts:81562

## Indexable

\[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:81576

direct URL to search engine results
you can use it to make sure that we provided accurate results

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:81581

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:81595

types of search results found in SERP
contains types of all search results (items) found in the returned SERP
possible item types:
images, local_pack, map, organic, paid, related_searches, video
note that this array contains all types of search results found in the returned SERP;
however, this endpoint provides data for organic and paid types only
to get all items (inlcuding SERP features and rich snippets) found in the returned SERP, please refer to the Naver Organiс Advanced SERP endpoint

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

Defined in: main.ts:81601

items in SERP

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:81599

the number of results returned in the items array

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:81565

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:81573

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:81571

location code in a POST array

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](../classes/RefinementChipsInfo.md)

Defined in: main.ts:81587

search refinement chips
equals null

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:81569

search engine domain in a POST array

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:81597

total number of results in SERP

***

### spell?

> `optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

Defined in: main.ts:81584

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:81567

type of element
