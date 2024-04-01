[Documentation](../README.md) / [Exports](../modules.md) / ISerpYoutubeVideoCommentsLiveAdvancedResultInfo

# Interface: ISerpYoutubeVideoCommentsLiveAdvancedResultInfo

## Implemented by

- [`SerpYoutubeVideoCommentsLiveAdvancedResultInfo`](../classes/SerpYoutubeVideoCommentsLiveAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#check_url)
- [comments\_count](ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#comments_count)
- [datetime](ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#datetime)
- [item\_types](ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#item_types)
- [items](ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#items)
- [items\_count](ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#items_count)
- [language\_code](ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#language_code)
- [location\_code](ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#location_code)
- [se\_domain](ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#se_domain)
- [spell](ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#spell)
- [title](ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#title)
- [video\_id](ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#video_id)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:64871

___

### comments\_count

• `Optional` **comments\_count**: `number`

number of comments on the video

#### Defined in

main.ts:64888

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:64876

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item:
youtube_comment

#### Defined in

main.ts:64884

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Defined in

main.ts:64892

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:64890

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:64868

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:64866

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:64864

___

### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

main.ts:64879

___

### title

• `Optional` **title**: `string`

title of the video

#### Defined in

main.ts:64886

___

### video\_id

• `Optional` **video\_id**: `string`

ID of the video received in a POST array

#### Defined in

main.ts:64862
