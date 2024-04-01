[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleOrganicLiveAdvancedResultInfo

# Class: SerpGoogleOrganicLiveAdvancedResultInfo

## Implements

- [`ISerpGoogleOrganicLiveAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleOrganicLiveAdvancedResultInfo.md#constructor)

### Properties

- [check\_url](SerpGoogleOrganicLiveAdvancedResultInfo.md#check_url)
- [datetime](SerpGoogleOrganicLiveAdvancedResultInfo.md#datetime)
- [item\_types](SerpGoogleOrganicLiveAdvancedResultInfo.md#item_types)
- [items](SerpGoogleOrganicLiveAdvancedResultInfo.md#items)
- [items\_count](SerpGoogleOrganicLiveAdvancedResultInfo.md#items_count)
- [keyword](SerpGoogleOrganicLiveAdvancedResultInfo.md#keyword)
- [language\_code](SerpGoogleOrganicLiveAdvancedResultInfo.md#language_code)
- [location\_code](SerpGoogleOrganicLiveAdvancedResultInfo.md#location_code)
- [se\_domain](SerpGoogleOrganicLiveAdvancedResultInfo.md#se_domain)
- [se\_results\_count](SerpGoogleOrganicLiveAdvancedResultInfo.md#se_results_count)
- [spell](SerpGoogleOrganicLiveAdvancedResultInfo.md#spell)
- [type](SerpGoogleOrganicLiveAdvancedResultInfo.md#type)

### Methods

- [init](SerpGoogleOrganicLiveAdvancedResultInfo.md#init)
- [toJSON](SerpGoogleOrganicLiveAdvancedResultInfo.md#tojson)
- [fromJS](SerpGoogleOrganicLiveAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleOrganicLiveAdvancedResultInfo**(`data?`): [`SerpGoogleOrganicLiveAdvancedResultInfo`](SerpGoogleOrganicLiveAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleOrganicLiveAdvancedResultInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md) |

#### Returns

[`SerpGoogleOrganicLiveAdvancedResultInfo`](SerpGoogleOrganicLiveAdvancedResultInfo.md)

#### Defined in

main.ts:37621

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[ISerpGoogleOrganicLiveAdvancedResultInfo](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md).[check_url](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:37597

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpGoogleOrganicLiveAdvancedResultInfo](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md).[datetime](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:37602

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
answer_box, app, carousel, multi_carousel, featured_snippet, google_flights, google_reviews, google_posts, images, jobs, knowledge_graph, local_pack, hotels_pack, map, organic, paid, people_also_ask, related_searches, people_also_search, shopping, top_stories, twitter, video, events, mention_carousel, recipes, top_sights, scholarly_articles, popular_products, podcasts, questions_and_answers, find_results_on, stocks_box, visual_stories, commercial_units, local_services, google_hotels, math_solver, currency_box, product_considerations, found_on_web, short_videos, refine_products, explore_brands, perspectives, discussions_and_forums

#### Implementation of

[ISerpGoogleOrganicLiveAdvancedResultInfo](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md).[item_types](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:37610

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[ISerpGoogleOrganicLiveAdvancedResultInfo](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md).[items](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md#items)

#### Defined in

main.ts:37617

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpGoogleOrganicLiveAdvancedResultInfo](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md).[items_count](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:37614

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpGoogleOrganicLiveAdvancedResultInfo](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md).[keyword](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:37586

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpGoogleOrganicLiveAdvancedResultInfo](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md).[language_code](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:37594

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpGoogleOrganicLiveAdvancedResultInfo](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md).[location_code](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:37592

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpGoogleOrganicLiveAdvancedResultInfo](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md).[se_domain](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:37590

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[ISerpGoogleOrganicLiveAdvancedResultInfo](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md).[se_results_count](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:37612

___

### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[ISerpGoogleOrganicLiveAdvancedResultInfo](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md).[spell](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md#spell)

#### Defined in

main.ts:37605

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpGoogleOrganicLiveAdvancedResultInfo](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md).[type](../interfaces/ISerpGoogleOrganicLiveAdvancedResultInfo.md#type)

#### Defined in

main.ts:37588

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

main.ts:37630

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

main.ts:37666

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleOrganicLiveAdvancedResultInfo`](SerpGoogleOrganicLiveAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleOrganicLiveAdvancedResultInfo`](SerpGoogleOrganicLiveAdvancedResultInfo.md)

#### Defined in

main.ts:37659
