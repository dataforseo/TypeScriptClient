[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / RankedSerpElement

# Class: RankedSerpElement

## Implements

- [`IRankedSerpElement`](../interfaces/IRankedSerpElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](RankedSerpElement.md#constructor)

### Properties

- [check\_url](RankedSerpElement.md#check_url)
- [is\_lost](RankedSerpElement.md#is_lost)
- [keyword\_difficulty](RankedSerpElement.md#keyword_difficulty)
- [last\_updated\_time](RankedSerpElement.md#last_updated_time)
- [previous\_updated\_time](RankedSerpElement.md#previous_updated_time)
- [se\_results\_count](RankedSerpElement.md#se_results_count)
- [se\_type](RankedSerpElement.md#se_type)
- [serp\_item](RankedSerpElement.md#serp_item)
- [serp\_item\_types](RankedSerpElement.md#serp_item_types)

### Methods

- [init](RankedSerpElement.md#init)
- [toJSON](RankedSerpElement.md#tojson)
- [fromJS](RankedSerpElement.md#fromjs)

## Constructors

### constructor

• **new RankedSerpElement**(`data?`): [`RankedSerpElement`](RankedSerpElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IRankedSerpElement`](../interfaces/IRankedSerpElement.md) |

#### Returns

[`RankedSerpElement`](RankedSerpElement.md)

#### Defined in

[main.ts:86936](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86936)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[IRankedSerpElement](../interfaces/IRankedSerpElement.md).[check_url](../interfaces/IRankedSerpElement.md#check_url)

#### Defined in

[main.ts:86906](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86906)

___


### is\_lost

• `Optional` **is\_lost**: `boolean`

lost ranked elements
indicates how many ranked elements of this domain were previously presented in SERPs, but weren’t found during the last check

#### Implementation of

[IRankedSerpElement](../interfaces/IRankedSerpElement.md).[is_lost](../interfaces/IRankedSerpElement.md#is_lost)

#### Defined in

[main.ts:86922](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86922)

___


### keyword\_difficulty

• `Optional` **keyword\_difficulty**: `number`

difficulty of ranking in the first top-10 organic results for a keyword
indicates the chance of getting in top-10 organic results for a keyword on a logarithmic scale from 0 to 100;
calculated by analysing, among other parameters, link profiles of the first 10 pages in SERP;
learn more about the metric in this help center guide

#### Implementation of

[IRankedSerpElement](../interfaces/IRankedSerpElement.md).[keyword_difficulty](../interfaces/IRankedSerpElement.md#keyword_difficulty)

#### Defined in

[main.ts:86919](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86919)

___


### last\_updated\_time

• `Optional` **last\_updated\_time**: `string`

date and time when keyword data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IRankedSerpElement](../interfaces/IRankedSerpElement.md).[last_updated_time](../interfaces/IRankedSerpElement.md#last_updated_time)

#### Defined in

[main.ts:86927](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86927)

___


### previous\_updated\_time

• `Optional` **previous\_updated\_time**: `string`

previous to the most recent date and time when SERP data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-10-15 12:57:46 +00:00

#### Implementation of

[IRankedSerpElement](../interfaces/IRankedSerpElement.md).[previous_updated_time](../interfaces/IRankedSerpElement.md#previous_updated_time)

#### Defined in

[main.ts:86932](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86932)

___


### se\_results\_count

• `Optional` **se\_results\_count**: `string`

number of search results for the returned keyword

#### Implementation of

[IRankedSerpElement](../interfaces/IRankedSerpElement.md).[se_results_count](../interfaces/IRankedSerpElement.md#se_results_count)

#### Defined in

[main.ts:86914](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86914)

___


### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IRankedSerpElement](../interfaces/IRankedSerpElement.md).[se_type](../interfaces/IRankedSerpElement.md#se_type)

#### Defined in

[main.ts:86900](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86900)

___


### serp\_item

• `Optional` **serp\_item**: [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

contains data on the SERP element
the list of supported SERP elements can be found below

#### Implementation of

[IRankedSerpElement](../interfaces/IRankedSerpElement.md).[serp_item](../interfaces/IRankedSerpElement.md#serp_item)

#### Defined in

[main.ts:86903](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86903)

___


### serp\_item\_types

• `Optional` **serp\_item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP
possible item types:
answer_box, app, carousel, multi_carousel, featured_snippet, google_flights, google_reviews, images, jobs, knowledge_graph, local_pack, map, organic, paid, people_also_ask, related_searches, people_also_search, shopping, top_stories, twitter, video, events, mention_carousel, recipes, top_sights, scholarly_articles, popular_products, podcasts, questions_and_answers, find_results_on, stocks_box;
note that the actual results will be returned only for organic, paid, featured_snippet, and local_pack elements

#### Implementation of

[IRankedSerpElement](../interfaces/IRankedSerpElement.md).[serp_item_types](../interfaces/IRankedSerpElement.md#serp_item_types)

#### Defined in

[main.ts:86912](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86912)

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

[main.ts:86945](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86945)

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

[main.ts:86974](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86974)

___


### fromJS

▸ **fromJS**(`data`): [`RankedSerpElement`](RankedSerpElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`RankedSerpElement`](RankedSerpElement.md)

#### Defined in

[main.ts:86967](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86967)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")