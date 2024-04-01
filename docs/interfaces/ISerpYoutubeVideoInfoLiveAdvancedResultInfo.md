[Documentation](../README.md) / [Exports](../modules.md) / ISerpYoutubeVideoInfoLiveAdvancedResultInfo

# Interface: ISerpYoutubeVideoInfoLiveAdvancedResultInfo

## Implemented by

- [`SerpYoutubeVideoInfoLiveAdvancedResultInfo`](../classes/SerpYoutubeVideoInfoLiveAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md#check_url)
- [datetime](ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md#datetime)
- [item\_types](ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md#item_types)
- [items](ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md#items)
- [items\_count](ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md#items_count)
- [language\_code](ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md#language_code)
- [location\_code](ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md#location_code)
- [se\_domain](ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md#se_domain)
- [spell](ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md#spell)
- [video\_id](ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md#video_id)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:61681

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:61686

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item:
youtube_video_info

#### Defined in

main.ts:61694

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Defined in

main.ts:61698

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:61696

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:61678

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:61676

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:61674

___

### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

main.ts:61689

___

### video\_id

• `Optional` **video\_id**: `string`

ID of the video received in a POST array

#### Defined in

main.ts:61672
