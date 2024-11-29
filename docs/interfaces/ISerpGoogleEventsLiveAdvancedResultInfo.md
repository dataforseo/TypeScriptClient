[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpGoogleEventsLiveAdvancedResultInfo

# Interface: ISerpGoogleEventsLiveAdvancedResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results

#### Defined in

main.ts:49728

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:49733

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results found in SERP
possible item types:
event_item

#### Defined in

main.ts:49742

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

items of the element

#### Defined in

main.ts:49750

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:49748

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Defined in

main.ts:49717

***

### language\_code?

> `optional` **language\_code**: `string`

language code
in this case, the value will be null

#### Defined in

main.ts:49726

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:49723

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](../classes/RefinementChipsInfo.md)

search refinement chips

#### Defined in

main.ts:49738

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:49721

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

total number of results in SERP
in this case, the value will be 0
this search engine does not indicate the total number of results

#### Defined in

main.ts:49746

***

### spell?

> `optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

main.ts:49736

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:49719
