[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo

# Interface: ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo

Defined in: main.ts:74050

## Indexable

\[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:74061

direct URL to search engine results
you can use it to make sure that we provided accurate results

***

### comments\_count?

> `optional` **comments\_count**: `number`

Defined in: main.ts:74081

number of comments on the video

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:74066

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:74077

types of search results in SERP
contains types of search results (items) found in SERP.
possible item:
youtube_comment

***

### items?

> `optional` **items**: [`BaseYoutubeSerpElementItem`](../classes/BaseYoutubeSerpElementItem.md)[]

Defined in: main.ts:74085

elements of search results found in SERP

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:74083

the number of results returned in the items array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:74058

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:74056

location code in a POST array

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](../classes/RefinementChipsInfo.md)

Defined in: main.ts:74072

search refinement chips
equals null

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:74054

search engine domain in a POST array

***

### spell?

> `optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

Defined in: main.ts:74069

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:74079

title of the video

***

### video\_id?

> `optional` **video\_id**: `string`

Defined in: main.ts:74052

ID of the video received in a POST array
