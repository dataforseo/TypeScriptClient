**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ISerpGoogleEventsTaskGetAdvancedResultInfo

# Interface: ISerpGoogleEventsTaskGetAdvancedResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results

#### Source

main.ts:46733

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:46738

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

types of search results found in SERP
possible item types:
event_item

#### Source

main.ts:46745

***

### items?

> **`optional`** **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

items in SERP

#### Source

main.ts:46753

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Source

main.ts:46751

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Source

main.ts:46722

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code
in this case, the value will be null

#### Source

main.ts:46731

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Source

main.ts:46728

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Source

main.ts:46726

***

### se\_results\_count?

> **`optional`** **se\_results\_count**: `number`

total number of results in SERP
in this case, the value will be 0
this search engine does not indicate the total number of results

#### Source

main.ts:46749

***

### spell?

> **`optional`** **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Source

main.ts:46741

***

### type?

> **`optional`** **type**: `string`

type of element

#### Source

main.ts:46724
