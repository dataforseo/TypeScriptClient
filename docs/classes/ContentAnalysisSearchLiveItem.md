[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentAnalysisSearchLiveItem

# Class: ContentAnalysisSearchLiveItem

Defined in: main.ts:177992

## Implements

- [`IContentAnalysisSearchLiveItem`](../interfaces/IContentAnalysisSearchLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ContentAnalysisSearchLiveItem()

> **new ContentAnalysisSearchLiveItem**(`data`?): [`ContentAnalysisSearchLiveItem`](ContentAnalysisSearchLiveItem.md)

Defined in: main.ts:178047

#### Parameters

##### data?

[`IContentAnalysisSearchLiveItem`](../interfaces/IContentAnalysisSearchLiveItem.md)

#### Returns

[`ContentAnalysisSearchLiveItem`](ContentAnalysisSearchLiveItem.md)

## Properties

### content\_info?

> `optional` **content\_info**: [`AnalysisContentInfo`](AnalysisContentInfo.md)

Defined in: main.ts:178043

contains data on citations from the given url

#### Implementation of

[`IContentAnalysisSearchLiveItem`](../interfaces/IContentAnalysisSearchLiveItem.md).[`content_info`](../interfaces/IContentAnalysisSearchLiveItem.md#content_info)

***

### country?

> `optional` **country**: `string`

Defined in: main.ts:178022

country code of the domain registration
to obtain a full list of available countries, refer to the Locations endpoint

#### Implementation of

[`IContentAnalysisSearchLiveItem`](../interfaces/IContentAnalysisSearchLiveItem.md).[`country`](../interfaces/IContentAnalysisSearchLiveItem.md#country)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:177998

domain name

#### Implementation of

[`IContentAnalysisSearchLiveItem`](../interfaces/IContentAnalysisSearchLiveItem.md).[`domain`](../interfaces/IContentAnalysisSearchLiveItem.md#domain)

***

### domain\_rank?

> `optional` **domain\_rank**: `string`

Defined in: main.ts:178014

rank of the domain
this value is based on backlink data for the given domain from DataForSEO Backlink Index;
domain_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IContentAnalysisSearchLiveItem`](../interfaces/IContentAnalysisSearchLiveItem.md).[`domain_rank`](../interfaces/IContentAnalysisSearchLiveItem.md#domain_rank)

***

### fetch\_time?

> `optional` **fetch\_time**: `string`

Defined in: main.ts:178019

date and time when our crawler visited the page
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Implementation of

[`IContentAnalysisSearchLiveItem`](../interfaces/IContentAnalysisSearchLiveItem.md).[`fetch_time`](../interfaces/IContentAnalysisSearchLiveItem.md#fetch_time)

***

### language?

> `optional` **language**: `string`

Defined in: main.ts:178025

main language of the domain
to obtain a full list of available languages, refer to the Languages endpoint

#### Implementation of

[`IContentAnalysisSearchLiveItem`](../interfaces/IContentAnalysisSearchLiveItem.md).[`language`](../interfaces/IContentAnalysisSearchLiveItem.md#language)

***

### main\_domain?

> `optional` **main\_domain**: `string`

Defined in: main.ts:178000

main domain

#### Implementation of

[`IContentAnalysisSearchLiveItem`](../interfaces/IContentAnalysisSearchLiveItem.md).[`main_domain`](../interfaces/IContentAnalysisSearchLiveItem.md#main_domain)

***

### page\_category?

> `optional` **page\_category**: `number`[]

Defined in: main.ts:178033

contains all relevant page categories
product and service categories relevant for the page
to obtain a full list of available categories, refer to the Categories endpoint

#### Implementation of

[`IContentAnalysisSearchLiveItem`](../interfaces/IContentAnalysisSearchLiveItem.md).[`page_category`](../interfaces/IContentAnalysisSearchLiveItem.md#page_category)

***

### page\_types?

> `optional` **page\_types**: `string`[]

Defined in: main.ts:178035

page types

#### Implementation of

[`IContentAnalysisSearchLiveItem`](../interfaces/IContentAnalysisSearchLiveItem.md).[`page_types`](../interfaces/IContentAnalysisSearchLiveItem.md#page_types)

***

### ratings?

> `optional` **ratings**: [`RatingInfo`](RatingInfo.md)[]

Defined in: main.ts:178038

ratings found on the page
all ratings found on the page based on microdata

#### Implementation of

[`IContentAnalysisSearchLiveItem`](../interfaces/IContentAnalysisSearchLiveItem.md).[`ratings`](../interfaces/IContentAnalysisSearchLiveItem.md#ratings)

***

### score?

> `optional` **score**: `string`

Defined in: main.ts:178029

citation prominence score
this value is based on url_rank, domain_rank, keyword presence in title, main_title, url, snippet
the higher the score, the more value the related citation has

#### Implementation of

[`IContentAnalysisSearchLiveItem`](../interfaces/IContentAnalysisSearchLiveItem.md).[`score`](../interfaces/IContentAnalysisSearchLiveItem.md#score)

***

### social\_metrics?

> `optional` **social\_metrics**: [`SocialMetricsInfo`](SocialMetricsInfo.md)[]

Defined in: main.ts:178041

social media engagement metrics
data on social media interactions associated with the content based on website embeds developed and supported by social media platforms

#### Implementation of

[`IContentAnalysisSearchLiveItem`](../interfaces/IContentAnalysisSearchLiveItem.md).[`social_metrics`](../interfaces/IContentAnalysisSearchLiveItem.md#social_metrics)

***

### spam\_score?

> `optional` **spam\_score**: `string`

Defined in: main.ts:178009

backlink spam score of the url
this value is based on backlink data for the given URL from DataForSEO Backlink Index;
learn more about how the metric is calculated on this help center page

#### Implementation of

[`IContentAnalysisSearchLiveItem`](../interfaces/IContentAnalysisSearchLiveItem.md).[`spam_score`](../interfaces/IContentAnalysisSearchLiveItem.md#spam_score)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:177994

type of element

#### Implementation of

[`IContentAnalysisSearchLiveItem`](../interfaces/IContentAnalysisSearchLiveItem.md).[`type`](../interfaces/IContentAnalysisSearchLiveItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:177996

URL where the citation was found

#### Implementation of

[`IContentAnalysisSearchLiveItem`](../interfaces/IContentAnalysisSearchLiveItem.md).[`url`](../interfaces/IContentAnalysisSearchLiveItem.md#url)

***

### url\_rank?

> `optional` **url\_rank**: `number`

Defined in: main.ts:178005

rank of the url
this value is based on backlink data for the given URL from DataForSEO Backlink Index;
url_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IContentAnalysisSearchLiveItem`](../interfaces/IContentAnalysisSearchLiveItem.md).[`url_rank`](../interfaces/IContentAnalysisSearchLiveItem.md#url_rank)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:178056

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:178104

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentAnalysisSearchLiveItem`](ContentAnalysisSearchLiveItem.md)

Defined in: main.ts:178097

#### Parameters

##### data

`any`

#### Returns

[`ContentAnalysisSearchLiveItem`](ContentAnalysisSearchLiveItem.md)
