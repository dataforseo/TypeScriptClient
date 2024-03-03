[Documentation](../README.md) / [Exports](../modules.md) / SerpInfo

# Class: SerpInfo

## Implements

- [`ISerpInfo`](../interfaces/ISerpInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpInfo.md#constructor)

### Properties

- [check\_url](SerpInfo.md#check_url)
- [last\_updated\_time](SerpInfo.md#last_updated_time)
- [previous\_updated\_time](SerpInfo.md#previous_updated_time)
- [se\_results\_count](SerpInfo.md#se_results_count)
- [se\_type](SerpInfo.md#se_type)
- [serp\_item\_types](SerpInfo.md#serp_item_types)

### Methods

- [init](SerpInfo.md#init)
- [toJSON](SerpInfo.md#tojson)
- [fromJS](SerpInfo.md#fromjs)

## Constructors

### constructor

• **new SerpInfo**(`data?`): [`SerpInfo`](SerpInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpInfo`](../interfaces/ISerpInfo.md) |

#### Returns

[`SerpInfo`](SerpInfo.md)

#### Defined in

main.ts:79495

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[ISerpInfo](../interfaces/ISerpInfo.md).[check_url](../interfaces/ISerpInfo.md#check_url)

#### Defined in

main.ts:79473

___

### last\_updated\_time

• `Optional` **last\_updated\_time**: `string`

date and time when SERP data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpInfo](../interfaces/ISerpInfo.md).[last_updated_time](../interfaces/ISerpInfo.md#last_updated_time)

#### Defined in

main.ts:79486

___

### previous\_updated\_time

• `Optional` **previous\_updated\_time**: `string`

previous to the most recent date and time when SERP data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-10-15 12:57:46 +00:00

#### Implementation of

[ISerpInfo](../interfaces/ISerpInfo.md).[previous_updated_time](../interfaces/ISerpInfo.md#previous_updated_time)

#### Defined in

main.ts:79491

___

### se\_results\_count

• `Optional` **se\_results\_count**: `string`

number of search results for the returned keyword

#### Implementation of

[ISerpInfo](../interfaces/ISerpInfo.md).[se_results_count](../interfaces/ISerpInfo.md#se_results_count)

#### Defined in

main.ts:79481

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[ISerpInfo](../interfaces/ISerpInfo.md).[se_type](../interfaces/ISerpInfo.md#se_type)

#### Defined in

main.ts:79470

___

### serp\_item\_types

• `Optional` **serp\_item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP
possible item types:
answer_box, app, carousel, multi_carousel, featured_snippet, google_flights, google_reviews, images, jobs, knowledge_graph, local_pack, map, organic, paid, people_also_ask, related_searches, people_also_search, shopping, top_stories, twitter, video, events, mention_carousel, recipes, top_sights, scholarly_articles, popular_products, podcasts, questions_and_answers, find_results_on, stocks_box;
note that the actual results will be returned only for organic, paid, featured_snippet, and local_pack elements

#### Implementation of

[ISerpInfo](../interfaces/ISerpInfo.md).[serp_item_types](../interfaces/ISerpInfo.md#serp_item_types)

#### Defined in

main.ts:79479

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

main.ts:79504

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

main.ts:79530

___

### fromJS

▸ **fromJS**(`data`): [`SerpInfo`](SerpInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpInfo`](SerpInfo.md)

#### Defined in

main.ts:79523
