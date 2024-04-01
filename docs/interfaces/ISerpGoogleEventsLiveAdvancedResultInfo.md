[Documentation](../README.md) / [Exports](../modules.md) / ISerpGoogleEventsLiveAdvancedResultInfo

# Interface: ISerpGoogleEventsLiveAdvancedResultInfo

## Implemented by

- [`SerpGoogleEventsLiveAdvancedResultInfo`](../classes/SerpGoogleEventsLiveAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](ISerpGoogleEventsLiveAdvancedResultInfo.md#check_url)
- [datetime](ISerpGoogleEventsLiveAdvancedResultInfo.md#datetime)
- [item\_types](ISerpGoogleEventsLiveAdvancedResultInfo.md#item_types)
- [items](ISerpGoogleEventsLiveAdvancedResultInfo.md#items)
- [items\_count](ISerpGoogleEventsLiveAdvancedResultInfo.md#items_count)
- [keyword](ISerpGoogleEventsLiveAdvancedResultInfo.md#keyword)
- [language\_code](ISerpGoogleEventsLiveAdvancedResultInfo.md#language_code)
- [location\_code](ISerpGoogleEventsLiveAdvancedResultInfo.md#location_code)
- [se\_domain](ISerpGoogleEventsLiveAdvancedResultInfo.md#se_domain)
- [se\_results\_count](ISerpGoogleEventsLiveAdvancedResultInfo.md#se_results_count)
- [spell](ISerpGoogleEventsLiveAdvancedResultInfo.md#spell)
- [type](ISerpGoogleEventsLiveAdvancedResultInfo.md#type)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results

#### Defined in

main.ts:46182

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:46187

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results found in SERP
possible item types:
event_item

#### Defined in

main.ts:46194

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

items in SERP

#### Defined in

main.ts:46202

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:46200

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

main.ts:46171

___

### language\_code

• `Optional` **language\_code**: `string`

language code
in this case, the value will be null

#### Defined in

main.ts:46180

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:46177

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:46175

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP
in this case, the value will be 0
this search engine does not indicate the total number of results

#### Defined in

main.ts:46198

___

### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

main.ts:46190

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:46173
