[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpGoogleOrganicTaskGetRegularResultInfo

# Interface: ISerpGoogleOrganicTaskGetRegularResultInfo

## Implemented by

- [`SerpGoogleOrganicTaskGetRegularResultInfo`](../classes/SerpGoogleOrganicTaskGetRegularResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](ISerpGoogleOrganicTaskGetRegularResultInfo.md#check_url)
- [datetime](ISerpGoogleOrganicTaskGetRegularResultInfo.md#datetime)
- [item\_types](ISerpGoogleOrganicTaskGetRegularResultInfo.md#item_types)
- [items](ISerpGoogleOrganicTaskGetRegularResultInfo.md#items)
- [items\_count](ISerpGoogleOrganicTaskGetRegularResultInfo.md#items_count)
- [keyword](ISerpGoogleOrganicTaskGetRegularResultInfo.md#keyword)
- [language\_code](ISerpGoogleOrganicTaskGetRegularResultInfo.md#language_code)
- [location\_code](ISerpGoogleOrganicTaskGetRegularResultInfo.md#location_code)
- [se\_domain](ISerpGoogleOrganicTaskGetRegularResultInfo.md#se_domain)
- [se\_results\_count](ISerpGoogleOrganicTaskGetRegularResultInfo.md#se_results_count)
- [spell](ISerpGoogleOrganicTaskGetRegularResultInfo.md#spell)
- [type](ISerpGoogleOrganicTaskGetRegularResultInfo.md#type)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

[main.ts:25975](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25975)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:25980](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25980)

___


### item\_types

• `Optional` **item\_types**: `string`[]

types of search results found in SERP
contains types of all search results (items) found in the returned SERP
possible item types:
answer_box, app, carousel, multi_carousel, featured_snippet, google_flights, google_reviews, images, jobs, knowledge_graph, local_pack, map, organic, paid, people_also_ask, related_searches, people_also_search, shopping, top_stories, twitter, video, events, mention_carousel
note that this array contains all types of search results found in the returned SERP;
however, this endpoint provides data for featured_snippet, organic and paid types only;
to get all items (inlcuding SERP features and rich snippets) found in the returned SERP, please refer to the Google Organiс Advanced SERP endpoint

#### Defined in

[main.ts:25991](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25991)

___


### items

• `Optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

items in SERP

#### Defined in

[main.ts:25997](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25997)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:25995](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25995)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

[main.ts:25964](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25964)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:25972](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25972)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:25970](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25970)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:25968](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25968)

___


### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Defined in

[main.ts:25993](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25993)

___


### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

[main.ts:25983](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25983)

___


### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:25966](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25966)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")