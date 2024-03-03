[Documentation](../README.md) / [Exports](../modules.md) / IRankedSerpElement

# Interface: IRankedSerpElement

## Implemented by

- [`RankedSerpElement`](../classes/RankedSerpElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](IRankedSerpElement.md#check_url)
- [is\_lost](IRankedSerpElement.md#is_lost)
- [keyword\_difficulty](IRankedSerpElement.md#keyword_difficulty)
- [last\_updated\_time](IRankedSerpElement.md#last_updated_time)
- [previous\_updated\_time](IRankedSerpElement.md#previous_updated_time)
- [se\_results\_count](IRankedSerpElement.md#se_results_count)
- [se\_type](IRankedSerpElement.md#se_type)
- [serp\_item](IRankedSerpElement.md#serp_item)
- [serp\_item\_types](IRankedSerpElement.md#serp_item_types)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:87149

___

### is\_lost

• `Optional` **is\_lost**: `boolean`

lost ranked elements
indicates how many ranked elements of this domain were previously presented in SERPs, but weren’t found during the last check

#### Defined in

main.ts:87165

___

### keyword\_difficulty

• `Optional` **keyword\_difficulty**: `number`

difficulty of ranking in the first top-10 organic results for a keyword
indicates the chance of getting in top-10 organic results for a keyword on a logarithmic scale from 0 to 100;
calculated by analysing, among other parameters, link profiles of the first 10 pages in SERP;
learn more about the metric in this help center guide

#### Defined in

main.ts:87162

___

### last\_updated\_time

• `Optional` **last\_updated\_time**: `string`

date and time when keyword data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:87170

___

### previous\_updated\_time

• `Optional` **previous\_updated\_time**: `string`

previous to the most recent date and time when SERP data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-10-15 12:57:46 +00:00

#### Defined in

main.ts:87175

___

### se\_results\_count

• `Optional` **se\_results\_count**: `string`

number of search results for the returned keyword

#### Defined in

main.ts:87157

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:87143

___

### serp\_item

• `Optional` **serp\_item**: [`BaseDataforseoLabsSerpElementItem`](../classes/BaseDataforseoLabsSerpElementItem.md)

contains data on the SERP element
the list of supported SERP elements can be found below

#### Defined in

main.ts:87146

___

### serp\_item\_types

• `Optional` **serp\_item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP
possible item types:
answer_box, app, carousel, multi_carousel, featured_snippet, google_flights, google_reviews, images, jobs, knowledge_graph, local_pack, map, organic, paid, people_also_ask, related_searches, people_also_search, shopping, top_stories, twitter, video, events, mention_carousel, recipes, top_sights, scholarly_articles, popular_products, podcasts, questions_and_answers, find_results_on, stocks_box;
note that the actual results will be returned only for organic, paid, featured_snippet, and local_pack elements

#### Defined in

main.ts:87155
