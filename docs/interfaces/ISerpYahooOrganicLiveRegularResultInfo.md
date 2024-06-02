**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ISerpYahooOrganicLiveRegularResultInfo

# Interface: ISerpYahooOrganicLiveRegularResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
You can use it to make sure that we provided exact results

#### Source

main.ts:68111

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:68116

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP
Possible item types: organic

#### Source

main.ts:68123

***

### items?

> **`optional`** **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

items in SERP

#### Source

main.ts:68129

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Source

main.ts:68127

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Source

main.ts:68100

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Source

main.ts:68108

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Source

main.ts:68106

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Source

main.ts:68104

***

### se\_results\_count?

> **`optional`** **se\_results\_count**: `number`

total number of results in SERP

#### Source

main.ts:68125

***

### spell?

> **`optional`** **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Source

main.ts:68119

***

### type?

> **`optional`** **type**: `string`

type of element

#### Source

main.ts:68102
