[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo

# Interface: ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo

## Implemented by

- [`SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo`](../classes/SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#check_url)
- [comments\_count](ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#comments_count)
- [datetime](ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#datetime)
- [item\_types](ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#item_types)
- [items](ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#items)
- [items\_count](ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#items_count)
- [language\_code](ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#se_domain)
- [spell](ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#spell)
- [title](ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#title)
- [video\_id](ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#video_id)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

[main.ts:62060](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62060)

___


### comments\_count

• `Optional` **comments\_count**: `number`

number of comments on the video

#### Defined in

[main.ts:62077](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62077)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:62065](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62065)

___


### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item:
youtube_comment

#### Defined in

[main.ts:62073](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62073)

___


### items

• `Optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Defined in

[main.ts:62081](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62081)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:62079](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62079)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:62057](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62057)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:62055](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62055)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:62053](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62053)

___


### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

[main.ts:62068](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62068)

___


### title

• `Optional` **title**: `string`

title of the video

#### Defined in

[main.ts:62075](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62075)

___


### video\_id

• `Optional` **video\_id**: `string`

ID of the video received in a POST array

#### Defined in

[main.ts:62051](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62051)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")