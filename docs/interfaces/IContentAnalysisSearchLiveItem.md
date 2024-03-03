[Documentation](../README.md) / [Exports](../modules.md) / IContentAnalysisSearchLiveItem

# Interface: IContentAnalysisSearchLiveItem

## Implemented by

- [`ContentAnalysisSearchLiveItem`](../classes/ContentAnalysisSearchLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [content\_info](IContentAnalysisSearchLiveItem.md#content_info)
- [country](IContentAnalysisSearchLiveItem.md#country)
- [domain](IContentAnalysisSearchLiveItem.md#domain)
- [domain\_rank](IContentAnalysisSearchLiveItem.md#domain_rank)
- [fetch\_time](IContentAnalysisSearchLiveItem.md#fetch_time)
- [language](IContentAnalysisSearchLiveItem.md#language)
- [main\_domain](IContentAnalysisSearchLiveItem.md#main_domain)
- [page\_category](IContentAnalysisSearchLiveItem.md#page_category)
- [page\_types](IContentAnalysisSearchLiveItem.md#page_types)
- [ratings](IContentAnalysisSearchLiveItem.md#ratings)
- [score](IContentAnalysisSearchLiveItem.md#score)
- [social\_metrics](IContentAnalysisSearchLiveItem.md#social_metrics)
- [spam\_score](IContentAnalysisSearchLiveItem.md#spam_score)
- [type](IContentAnalysisSearchLiveItem.md#type)
- [url](IContentAnalysisSearchLiveItem.md#url)
- [url\_rank](IContentAnalysisSearchLiveItem.md#url_rank)

## Properties

### content\_info

• `Optional` **content\_info**: [`AnalysisContentInfo`](../classes/AnalysisContentInfo.md)

contains data on citations from the given url

#### Defined in

main.ts:156960

___

### country

• `Optional` **country**: `string`

country code of the domain registration
to obtain a full list of available countries, refer to the Locations endpoint

#### Defined in

main.ts:156939

___

### domain

• `Optional` **domain**: `string`

domain name

#### Defined in

main.ts:156915

___

### domain\_rank

• `Optional` **domain\_rank**: `string`

rank of the domain
this value is based on backlink data for the given domain from DataForSEO Backlink Index;
domain_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Defined in

main.ts:156931

___

### fetch\_time

• `Optional` **fetch\_time**: `string`

date and time when our crawler visited the page
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Defined in

main.ts:156936

___

### language

• `Optional` **language**: `string`

main language of the domain
to obtain a full list of available languages, refer to the Languages endpoint

#### Defined in

main.ts:156942

___

### main\_domain

• `Optional` **main\_domain**: `string`

main domain

#### Defined in

main.ts:156917

___

### page\_category

• `Optional` **page\_category**: `number`[]

contains all relevant page categories
product and service categories relevant for the page
to obtain a full list of available categories, refer to the Categories endpoint

#### Defined in

main.ts:156950

___

### page\_types

• `Optional` **page\_types**: `string`[]

page types

#### Defined in

main.ts:156952

___

### ratings

• `Optional` **ratings**: `any`

ratings found on the page
all ratings found on the page based on microdata

#### Defined in

main.ts:156955

___

### score

• `Optional` **score**: `string`

citation prominence score
this value is based on url_rank, domain_rank, keyword presence in title, main_title, url, snippet
the higher the score, the more value the related citation has

#### Defined in

main.ts:156946

___

### social\_metrics

• `Optional` **social\_metrics**: [`SocialMetricsInfo`](../classes/SocialMetricsInfo.md)[]

social media engagement metrics
data on social media interactions associated with the content based on website embeds developed and supported by social media platforms

#### Defined in

main.ts:156958

___

### spam\_score

• `Optional` **spam\_score**: `string`

backlink spam score of the url
this value is based on backlink data for the given URL from DataForSEO Backlink Index;
learn more about how the metric is calculated on this help center page

#### Defined in

main.ts:156926

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:156911

___

### url

• `Optional` **url**: `string`

URL where the citation was found

#### Defined in

main.ts:156913

___

### url\_rank

• `Optional` **url\_rank**: `number`

rank of the url
this value is based on backlink data for the given URL from DataForSEO Backlink Index;
url_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Defined in

main.ts:156922
