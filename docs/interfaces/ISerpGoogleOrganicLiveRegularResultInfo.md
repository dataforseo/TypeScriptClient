[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpGoogleOrganicLiveRegularResultInfo

# Interface: ISerpGoogleOrganicLiveRegularResultInfo

## Implemented by

- [`SerpGoogleOrganicLiveRegularResultInfo`](../classes/SerpGoogleOrganicLiveRegularResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](ISerpGoogleOrganicLiveRegularResultInfo.md#check_url)
- [datetime](ISerpGoogleOrganicLiveRegularResultInfo.md#datetime)
- [item\_types](ISerpGoogleOrganicLiveRegularResultInfo.md#item_types)
- [items](ISerpGoogleOrganicLiveRegularResultInfo.md#items)
- [items\_count](ISerpGoogleOrganicLiveRegularResultInfo.md#items_count)
- [keyword](ISerpGoogleOrganicLiveRegularResultInfo.md#keyword)
- [language\_code](ISerpGoogleOrganicLiveRegularResultInfo.md#language_code)
- [location\_code](ISerpGoogleOrganicLiveRegularResultInfo.md#location_code)
- [se\_domain](ISerpGoogleOrganicLiveRegularResultInfo.md#se_domain)
- [se\_results\_count](ISerpGoogleOrganicLiveRegularResultInfo.md#se_results_count)
- [spell](ISerpGoogleOrganicLiveRegularResultInfo.md#spell)
- [type](ISerpGoogleOrganicLiveRegularResultInfo.md#type)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided exact results

#### Defined in

[main.ts:36695](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36695)

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:36700](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36700)

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results found in SERP
contains types of all search results (items) found in the returned SERP
possible item types:
answer_box, app, carousel, multi_carousel, featured_snippet, google_flights, google_reviews, images, jobs, knowledge_graph, local_pack, map, organic, paid, people_also_ask, related_searches, people_also_search, shopping, top_stories, twitter, video, events, mention_carousel
note that this array contains all types of search results found in the returned SERP;
however, this endpoint provides data for featured_snippet, organic and paid types only
to get all items (inlcuding SERP features and rich snippets) found in the returned SERP, please refer to the Google Organiс Advanced SERP endpoint

#### Defined in

[main.ts:36711](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36711)

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

items in SERP

#### Defined in

[main.ts:36717](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36717)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:36715](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36715)

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

[main.ts:36684](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36684)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:36692](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36692)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:36690](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36690)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:36688](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36688)

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Defined in

[main.ts:36713](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36713)

___

### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

[main.ts:36703](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36703)

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:36686](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36686)
