[Documentation](../README.md) / [Exports](../modules.md) / ISerpBingLocalPackLiveRegularResultInfo

# Interface: ISerpBingLocalPackLiveRegularResultInfo

## Implemented by

- [`SerpBingLocalPackLiveRegularResultInfo`](../classes/SerpBingLocalPackLiveRegularResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](ISerpBingLocalPackLiveRegularResultInfo.md#check_url)
- [datetime](ISerpBingLocalPackLiveRegularResultInfo.md#datetime)
- [item\_types](ISerpBingLocalPackLiveRegularResultInfo.md#item_types)
- [items](ISerpBingLocalPackLiveRegularResultInfo.md#items)
- [items\_count](ISerpBingLocalPackLiveRegularResultInfo.md#items_count)
- [keyword](ISerpBingLocalPackLiveRegularResultInfo.md#keyword)
- [language\_code](ISerpBingLocalPackLiveRegularResultInfo.md#language_code)
- [location\_code](ISerpBingLocalPackLiveRegularResultInfo.md#location_code)
- [se\_domain](ISerpBingLocalPackLiveRegularResultInfo.md#se_domain)
- [se\_results\_count](ISerpBingLocalPackLiveRegularResultInfo.md#se_results_count)
- [spell](ISerpBingLocalPackLiveRegularResultInfo.md#spell)
- [type](ISerpBingLocalPackLiveRegularResultInfo.md#type)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:56962

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:56967

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
local_pack

#### Defined in

main.ts:56975

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Defined in

main.ts:56981

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:56979

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

main.ts:56951

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:56959

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:56957

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:56955

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Defined in

main.ts:56977

___

### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

main.ts:56970

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:56953
