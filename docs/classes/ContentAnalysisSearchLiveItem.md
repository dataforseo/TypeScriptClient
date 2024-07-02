**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ContentAnalysisSearchLiveItem

# Class: ContentAnalysisSearchLiveItem

## Implements

- [`IContentAnalysisSearchLiveItem`](../interfaces/IContentAnalysisSearchLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ContentAnalysisSearchLiveItem(data)

> **new ContentAnalysisSearchLiveItem**(`data`?): [`ContentAnalysisSearchLiveItem`](ContentAnalysisSearchLiveItem.md)

#### Parameters

• **data?**: [`IContentAnalysisSearchLiveItem`](../interfaces/IContentAnalysisSearchLiveItem.md)

#### Returns

[`ContentAnalysisSearchLiveItem`](ContentAnalysisSearchLiveItem.md)

#### Source

main.ts:165902

## Properties

### content\_info?

> **`optional`** **content\_info**: [`AnalysisContentInfo`](AnalysisContentInfo.md)

contains data on citations from the given url

#### Implementation of

[`IContentAnalysisSearchLiveItem`](../interfaces/IContentAnalysisSearchLiveItem.md).[`content_info`](../interfaces/IContentAnalysisSearchLiveItem.md#content_info)

#### Source

main.ts:165898

***

### country?

> **`optional`** **country**: `string`

country code of the domain registration
to obtain a full list of available countries, refer to the Locations endpoint

#### Implementation of

[`IContentAnalysisSearchLiveItem`](../interfaces/IContentAnalysisSearchLiveItem.md).[`country`](../interfaces/IContentAnalysisSearchLiveItem.md#country)

#### Source

main.ts:165877

***

### domain?

> **`optional`** **domain**: `string`

domain name

#### Implementation of

[`IContentAnalysisSearchLiveItem`](../interfaces/IContentAnalysisSearchLiveItem.md).[`domain`](../interfaces/IContentAnalysisSearchLiveItem.md#domain)

#### Source

main.ts:165853

***

### domain\_rank?

> **`optional`** **domain\_rank**: `string`

rank of the domain
this value is based on backlink data for the given domain from DataForSEO Backlink Index;
domain_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IContentAnalysisSearchLiveItem`](../interfaces/IContentAnalysisSearchLiveItem.md).[`domain_rank`](../interfaces/IContentAnalysisSearchLiveItem.md#domain_rank)

#### Source

main.ts:165869

***

### fetch\_time?

> **`optional`** **fetch\_time**: `string`

date and time when our crawler visited the page
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Implementation of

[`IContentAnalysisSearchLiveItem`](../interfaces/IContentAnalysisSearchLiveItem.md).[`fetch_time`](../interfaces/IContentAnalysisSearchLiveItem.md#fetch_time)

#### Source

main.ts:165874

***

### language?

> **`optional`** **language**: `string`

main language of the domain
to obtain a full list of available languages, refer to the Languages endpoint

#### Implementation of

[`IContentAnalysisSearchLiveItem`](../interfaces/IContentAnalysisSearchLiveItem.md).[`language`](../interfaces/IContentAnalysisSearchLiveItem.md#language)

#### Source

main.ts:165880

***

### main\_domain?

> **`optional`** **main\_domain**: `string`

main domain

#### Implementation of

[`IContentAnalysisSearchLiveItem`](../interfaces/IContentAnalysisSearchLiveItem.md).[`main_domain`](../interfaces/IContentAnalysisSearchLiveItem.md#main_domain)

#### Source

main.ts:165855

***

### page\_category?

> **`optional`** **page\_category**: `number`[]

contains all relevant page categories
product and service categories relevant for the page
to obtain a full list of available categories, refer to the Categories endpoint

#### Implementation of

[`IContentAnalysisSearchLiveItem`](../interfaces/IContentAnalysisSearchLiveItem.md).[`page_category`](../interfaces/IContentAnalysisSearchLiveItem.md#page_category)

#### Source

main.ts:165888

***

### page\_types?

> **`optional`** **page\_types**: `string`[]

page types

#### Implementation of

[`IContentAnalysisSearchLiveItem`](../interfaces/IContentAnalysisSearchLiveItem.md).[`page_types`](../interfaces/IContentAnalysisSearchLiveItem.md#page_types)

#### Source

main.ts:165890

***

### ratings?

> **`optional`** **ratings**: [`RatingInfo`](RatingInfo.md)[]

ratings found on the page
all ratings found on the page based on microdata

#### Implementation of

[`IContentAnalysisSearchLiveItem`](../interfaces/IContentAnalysisSearchLiveItem.md).[`ratings`](../interfaces/IContentAnalysisSearchLiveItem.md#ratings)

#### Source

main.ts:165893

***

### score?

> **`optional`** **score**: `string`

citation prominence score
this value is based on url_rank, domain_rank, keyword presence in title, main_title, url, snippet
the higher the score, the more value the related citation has

#### Implementation of

[`IContentAnalysisSearchLiveItem`](../interfaces/IContentAnalysisSearchLiveItem.md).[`score`](../interfaces/IContentAnalysisSearchLiveItem.md#score)

#### Source

main.ts:165884

***

### social\_metrics?

> **`optional`** **social\_metrics**: [`SocialMetricsInfo`](SocialMetricsInfo.md)[]

social media engagement metrics
data on social media interactions associated with the content based on website embeds developed and supported by social media platforms

#### Implementation of

[`IContentAnalysisSearchLiveItem`](../interfaces/IContentAnalysisSearchLiveItem.md).[`social_metrics`](../interfaces/IContentAnalysisSearchLiveItem.md#social_metrics)

#### Source

main.ts:165896

***

### spam\_score?

> **`optional`** **spam\_score**: `string`

backlink spam score of the url
this value is based on backlink data for the given URL from DataForSEO Backlink Index;
learn more about how the metric is calculated on this help center page

#### Implementation of

[`IContentAnalysisSearchLiveItem`](../interfaces/IContentAnalysisSearchLiveItem.md).[`spam_score`](../interfaces/IContentAnalysisSearchLiveItem.md#spam_score)

#### Source

main.ts:165864

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IContentAnalysisSearchLiveItem`](../interfaces/IContentAnalysisSearchLiveItem.md).[`type`](../interfaces/IContentAnalysisSearchLiveItem.md#type)

#### Source

main.ts:165849

***

### url?

> **`optional`** **url**: `string`

URL where the citation was found

#### Implementation of

[`IContentAnalysisSearchLiveItem`](../interfaces/IContentAnalysisSearchLiveItem.md).[`url`](../interfaces/IContentAnalysisSearchLiveItem.md#url)

#### Source

main.ts:165851

***

### url\_rank?

> **`optional`** **url\_rank**: `number`

rank of the url
this value is based on backlink data for the given URL from DataForSEO Backlink Index;
url_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IContentAnalysisSearchLiveItem`](../interfaces/IContentAnalysisSearchLiveItem.md).[`url_rank`](../interfaces/IContentAnalysisSearchLiveItem.md#url_rank)

#### Source

main.ts:165860

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:165911

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:165959

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ContentAnalysisSearchLiveItem`](ContentAnalysisSearchLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`ContentAnalysisSearchLiveItem`](ContentAnalysisSearchLiveItem.md)

#### Source

main.ts:165952
