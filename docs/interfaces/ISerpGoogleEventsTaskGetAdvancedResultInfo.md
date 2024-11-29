[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpGoogleEventsTaskGetAdvancedResultInfo

# Interface: ISerpGoogleEventsTaskGetAdvancedResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results

#### Defined in

main.ts:49214

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:49219

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results found in SERP
possible item types:
event_item

#### Defined in

main.ts:49228

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

items of the element

#### Defined in

main.ts:49236

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:49234

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

main.ts:49203

***

### language\_code?

> `optional` **language\_code**: `string`

language code
in this case, the value will be null

#### Defined in

main.ts:49212

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:49209

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](../classes/RefinementChipsInfo.md)

search refinement chips

#### Defined in

main.ts:49224

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:49207

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

total number of results in SERP
in this case, the value will be 0
this search engine does not indicate the total number of results

#### Defined in

main.ts:49232

***

### spell?

> `optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

main.ts:49222

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:49205
