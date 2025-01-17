[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpYahooOrganicLiveRegularResultInfo

# Interface: ISerpYahooOrganicLiveRegularResultInfo

Defined in: main.ts:77192

## Indexable

\[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:77206

direct URL to search engine results
You can use it to make sure that we provided exact results

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:77211

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:77225

types of search results found in SERP
contains types of all search results (items) found in the returned SERP
possible item types:
featured_snippet, images, local_pack, hotels_pack, organic, paid, people_also_ask, related_searches, shopping, recipes, top_stories, video;
note that this array contains all types of search results found in the returned SERP;
however, this endpoint provides data for organic, paid, and featured_snippet types only;
to get all items (including SERP features and rich snippets) found in the returned SERP, please refer to the Yahoo Organiс Advanced SERP endpoint

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

Defined in: main.ts:77231

items in SERP

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:77229

the number of results returned in the items array

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:77195

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:77203

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:77201

location code in a POST array

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](../classes/RefinementChipsInfo.md)

Defined in: main.ts:77217

search refinement chips
equals null

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:77199

search engine domain in a POST array

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:77227

total number of results in SERP

***

### spell?

> `optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

Defined in: main.ts:77214

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:77197

type of element
