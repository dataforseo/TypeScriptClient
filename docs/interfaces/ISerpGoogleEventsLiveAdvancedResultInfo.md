[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpGoogleEventsLiveAdvancedResultInfo

# Interface: ISerpGoogleEventsLiveAdvancedResultInfo

Defined in: main.ts:49730

## Indexable

\[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:49744

direct URL to search engine results

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:49749

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:49758

types of search results found in SERP
possible item types:
event_item

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

Defined in: main.ts:49766

items of the element

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:49764

the number of results returned in the items array

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:49733

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:49742

language code
in this case, the value will be null

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:49739

location code in a POST array

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](../classes/RefinementChipsInfo.md)

Defined in: main.ts:49754

search refinement chips

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:49737

search engine domain in a POST array

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:49762

total number of results in SERP
in this case, the value will be 0
this search engine does not indicate the total number of results

***

### spell?

> `optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

Defined in: main.ts:49752

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:49735

type of element
