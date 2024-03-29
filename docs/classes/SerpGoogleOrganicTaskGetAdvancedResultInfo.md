[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleOrganicTaskGetAdvancedResultInfo

# Class: SerpGoogleOrganicTaskGetAdvancedResultInfo

## Implements

- [`ISerpGoogleOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleOrganicTaskGetAdvancedResultInfo.md#constructor)

### Properties

- [check\_url](SerpGoogleOrganicTaskGetAdvancedResultInfo.md#check_url)
- [datetime](SerpGoogleOrganicTaskGetAdvancedResultInfo.md#datetime)
- [item\_types](SerpGoogleOrganicTaskGetAdvancedResultInfo.md#item_types)
- [items](SerpGoogleOrganicTaskGetAdvancedResultInfo.md#items)
- [items\_count](SerpGoogleOrganicTaskGetAdvancedResultInfo.md#items_count)
- [keyword](SerpGoogleOrganicTaskGetAdvancedResultInfo.md#keyword)
- [language\_code](SerpGoogleOrganicTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](SerpGoogleOrganicTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](SerpGoogleOrganicTaskGetAdvancedResultInfo.md#se_domain)
- [se\_results\_count](SerpGoogleOrganicTaskGetAdvancedResultInfo.md#se_results_count)
- [spell](SerpGoogleOrganicTaskGetAdvancedResultInfo.md#spell)
- [type](SerpGoogleOrganicTaskGetAdvancedResultInfo.md#type)

### Methods

- [init](SerpGoogleOrganicTaskGetAdvancedResultInfo.md#init)
- [toJSON](SerpGoogleOrganicTaskGetAdvancedResultInfo.md#tojson)
- [fromJS](SerpGoogleOrganicTaskGetAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleOrganicTaskGetAdvancedResultInfo**(`data?`): [`SerpGoogleOrganicTaskGetAdvancedResultInfo`](SerpGoogleOrganicTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md) |

#### Returns

[`SerpGoogleOrganicTaskGetAdvancedResultInfo`](SerpGoogleOrganicTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:36057](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36057)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[ISerpGoogleOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md).[check_url](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

[main.ts:36034](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36034)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpGoogleOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md).[datetime](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

[main.ts:36039](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36039)

___


### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
answer_box, app, carousel, multi_carousel, featured_snippet, google_flights, google_reviews, google_posts, images, jobs, knowledge_graph, local_pack, hotels_pack, map, organic, paid, people_also_ask, related_searches, people_also_search, shopping, top_stories, twitter, video, events, mention_carousel, recipes, top_sights, scholarly_articles, popular_products, podcasts, questions_and_answers, find_results_on, stocks_box, visual_stories, commercial_units, local_services, google_hotels, math_solver, currency_box,product_considerations, found_on_web, short_videos, refine_products, explore_brands, perspectives, discussions_and_forums

#### Implementation of

[ISerpGoogleOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md).[item_types](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

[main.ts:36047](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36047)

___


### items

• `Optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

contains arrays of specific images

#### Implementation of

[ISerpGoogleOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md).[items](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md#items)

#### Defined in

[main.ts:36053](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36053)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpGoogleOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md).[items_count](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

[main.ts:36051](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36051)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpGoogleOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md).[keyword](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md#keyword)

#### Defined in

[main.ts:36023](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36023)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpGoogleOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md).[language_code](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

[main.ts:36031](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36031)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpGoogleOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md).[location_code](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

[main.ts:36029](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36029)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpGoogleOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md).[se_domain](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

[main.ts:36027](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36027)

___


### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[ISerpGoogleOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md).[se_results_count](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md#se_results_count)

#### Defined in

[main.ts:36049](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36049)

___


### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[ISerpGoogleOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md).[spell](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md#spell)

#### Defined in

[main.ts:36042](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36042)

___


### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpGoogleOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md).[type](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResultInfo.md#type)

#### Defined in

[main.ts:36025](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36025)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

[main.ts:36066](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36066)

___


### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

[main.ts:36102](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36102)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleOrganicTaskGetAdvancedResultInfo`](SerpGoogleOrganicTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleOrganicTaskGetAdvancedResultInfo`](SerpGoogleOrganicTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:36095](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36095)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")