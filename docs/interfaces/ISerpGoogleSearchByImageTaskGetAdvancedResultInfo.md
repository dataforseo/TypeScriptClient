**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ISerpGoogleSearchByImageTaskGetAdvancedResultInfo

# Interface: ISerpGoogleSearchByImageTaskGetAdvancedResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Source

main.ts:49954

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:49959

***

### image\_url?

> **`optional`** **image\_url**: `string`

URL specified in a POST array

#### Source

main.ts:49941

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
organic,
images

#### Source

main.ts:49968

***

### items?

> **`optional`** **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

additional items present in the element
if there are none, equals null

#### Source

main.ts:49975

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Source

main.ts:49972

***

### keyword?

> **`optional`** **keyword**: `string`

keyword Google associated with the specified image

#### Source

main.ts:49943

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Source

main.ts:49951

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Source

main.ts:49949

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Source

main.ts:49947

***

### se\_results\_count?

> **`optional`** **se\_results\_count**: `number`

total number of results in SERP

#### Source

main.ts:49970

***

### spell?

> **`optional`** **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Source

main.ts:49962

***

### type?

> **`optional`** **type**: `string`

type of element

#### Source

main.ts:49945
