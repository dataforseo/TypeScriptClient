[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ISerpSeznamOrganicTaskGetRegularResultInfo

# Interface: ISerpSeznamOrganicTaskGetRegularResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:75312

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:75317

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results found in SERP
contains types of all search results (items) found in the returned SERP
possible item types:
images, local_pack, organic, related_searches, top_stories, featured_snippet, video
note that this array contains all types of search results found in the returned SERP;
however, this endpoint provides data for the organic type only
to get all items (inlcuding SERP features and rich snippets) found in the returned SERP, please refer to the Seznam Organiс Advanced SERP endpoint

#### Defined in

main.ts:75328

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

items in SERP

#### Defined in

main.ts:75334

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:75332

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

main.ts:75301

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:75309

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:75307

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:75305

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

total number of results in SERP

#### Defined in

main.ts:75330

***

### spell?

> `optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

main.ts:75320

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:75303
