[Documentation](../README.md) / [Exports](../modules.md) / ContentAnalysisSearchLiveItem

# Class: ContentAnalysisSearchLiveItem

## Implements

- [`IContentAnalysisSearchLiveItem`](../interfaces/IContentAnalysisSearchLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentAnalysisSearchLiveItem.md#constructor)

### Properties

- [content\_info](ContentAnalysisSearchLiveItem.md#content_info)
- [country](ContentAnalysisSearchLiveItem.md#country)
- [domain](ContentAnalysisSearchLiveItem.md#domain)
- [domain\_rank](ContentAnalysisSearchLiveItem.md#domain_rank)
- [fetch\_time](ContentAnalysisSearchLiveItem.md#fetch_time)
- [language](ContentAnalysisSearchLiveItem.md#language)
- [main\_domain](ContentAnalysisSearchLiveItem.md#main_domain)
- [page\_category](ContentAnalysisSearchLiveItem.md#page_category)
- [page\_types](ContentAnalysisSearchLiveItem.md#page_types)
- [ratings](ContentAnalysisSearchLiveItem.md#ratings)
- [score](ContentAnalysisSearchLiveItem.md#score)
- [social\_metrics](ContentAnalysisSearchLiveItem.md#social_metrics)
- [spam\_score](ContentAnalysisSearchLiveItem.md#spam_score)
- [type](ContentAnalysisSearchLiveItem.md#type)
- [url](ContentAnalysisSearchLiveItem.md#url)
- [url\_rank](ContentAnalysisSearchLiveItem.md#url_rank)

### Methods

- [init](ContentAnalysisSearchLiveItem.md#init)
- [toJSON](ContentAnalysisSearchLiveItem.md#tojson)
- [fromJS](ContentAnalysisSearchLiveItem.md#fromjs)

## Constructors

### constructor

• **new ContentAnalysisSearchLiveItem**(`data?`): [`ContentAnalysisSearchLiveItem`](ContentAnalysisSearchLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentAnalysisSearchLiveItem`](../interfaces/IContentAnalysisSearchLiveItem.md) |

#### Returns

[`ContentAnalysisSearchLiveItem`](ContentAnalysisSearchLiveItem.md)

#### Defined in

main.ts:162125

## Properties

### content\_info

• `Optional` **content\_info**: [`AnalysisContentInfo`](AnalysisContentInfo.md)

contains data on citations from the given url

#### Implementation of

[IContentAnalysisSearchLiveItem](../interfaces/IContentAnalysisSearchLiveItem.md).[content_info](../interfaces/IContentAnalysisSearchLiveItem.md#content_info)

#### Defined in

main.ts:162121

___

### country

• `Optional` **country**: `string`

country code of the domain registration
to obtain a full list of available countries, refer to the Locations endpoint

#### Implementation of

[IContentAnalysisSearchLiveItem](../interfaces/IContentAnalysisSearchLiveItem.md).[country](../interfaces/IContentAnalysisSearchLiveItem.md#country)

#### Defined in

main.ts:162100

___

### domain

• `Optional` **domain**: `string`

domain name

#### Implementation of

[IContentAnalysisSearchLiveItem](../interfaces/IContentAnalysisSearchLiveItem.md).[domain](../interfaces/IContentAnalysisSearchLiveItem.md#domain)

#### Defined in

main.ts:162076

___

### domain\_rank

• `Optional` **domain\_rank**: `string`

rank of the domain
this value is based on backlink data for the given domain from DataForSEO Backlink Index;
domain_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[IContentAnalysisSearchLiveItem](../interfaces/IContentAnalysisSearchLiveItem.md).[domain_rank](../interfaces/IContentAnalysisSearchLiveItem.md#domain_rank)

#### Defined in

main.ts:162092

___

### fetch\_time

• `Optional` **fetch\_time**: `string`

date and time when our crawler visited the page
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Implementation of

[IContentAnalysisSearchLiveItem](../interfaces/IContentAnalysisSearchLiveItem.md).[fetch_time](../interfaces/IContentAnalysisSearchLiveItem.md#fetch_time)

#### Defined in

main.ts:162097

___

### language

• `Optional` **language**: `string`

main language of the domain
to obtain a full list of available languages, refer to the Languages endpoint

#### Implementation of

[IContentAnalysisSearchLiveItem](../interfaces/IContentAnalysisSearchLiveItem.md).[language](../interfaces/IContentAnalysisSearchLiveItem.md#language)

#### Defined in

main.ts:162103

___

### main\_domain

• `Optional` **main\_domain**: `string`

main domain

#### Implementation of

[IContentAnalysisSearchLiveItem](../interfaces/IContentAnalysisSearchLiveItem.md).[main_domain](../interfaces/IContentAnalysisSearchLiveItem.md#main_domain)

#### Defined in

main.ts:162078

___

### page\_category

• `Optional` **page\_category**: `number`[]

contains all relevant page categories
product and service categories relevant for the page
to obtain a full list of available categories, refer to the Categories endpoint

#### Implementation of

[IContentAnalysisSearchLiveItem](../interfaces/IContentAnalysisSearchLiveItem.md).[page_category](../interfaces/IContentAnalysisSearchLiveItem.md#page_category)

#### Defined in

main.ts:162111

___

### page\_types

• `Optional` **page\_types**: `string`[]

page types

#### Implementation of

[IContentAnalysisSearchLiveItem](../interfaces/IContentAnalysisSearchLiveItem.md).[page_types](../interfaces/IContentAnalysisSearchLiveItem.md#page_types)

#### Defined in

main.ts:162113

___

### ratings

• `Optional` **ratings**: `any`

ratings found on the page
all ratings found on the page based on microdata

#### Implementation of

[IContentAnalysisSearchLiveItem](../interfaces/IContentAnalysisSearchLiveItem.md).[ratings](../interfaces/IContentAnalysisSearchLiveItem.md#ratings)

#### Defined in

main.ts:162116

___

### score

• `Optional` **score**: `string`

citation prominence score
this value is based on url_rank, domain_rank, keyword presence in title, main_title, url, snippet
the higher the score, the more value the related citation has

#### Implementation of

[IContentAnalysisSearchLiveItem](../interfaces/IContentAnalysisSearchLiveItem.md).[score](../interfaces/IContentAnalysisSearchLiveItem.md#score)

#### Defined in

main.ts:162107

___

### social\_metrics

• `Optional` **social\_metrics**: [`SocialMetricsInfo`](SocialMetricsInfo.md)[]

social media engagement metrics
data on social media interactions associated with the content based on website embeds developed and supported by social media platforms

#### Implementation of

[IContentAnalysisSearchLiveItem](../interfaces/IContentAnalysisSearchLiveItem.md).[social_metrics](../interfaces/IContentAnalysisSearchLiveItem.md#social_metrics)

#### Defined in

main.ts:162119

___

### spam\_score

• `Optional` **spam\_score**: `string`

backlink spam score of the url
this value is based on backlink data for the given URL from DataForSEO Backlink Index;
learn more about how the metric is calculated on this help center page

#### Implementation of

[IContentAnalysisSearchLiveItem](../interfaces/IContentAnalysisSearchLiveItem.md).[spam_score](../interfaces/IContentAnalysisSearchLiveItem.md#spam_score)

#### Defined in

main.ts:162087

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IContentAnalysisSearchLiveItem](../interfaces/IContentAnalysisSearchLiveItem.md).[type](../interfaces/IContentAnalysisSearchLiveItem.md#type)

#### Defined in

main.ts:162072

___

### url

• `Optional` **url**: `string`

URL where the citation was found

#### Implementation of

[IContentAnalysisSearchLiveItem](../interfaces/IContentAnalysisSearchLiveItem.md).[url](../interfaces/IContentAnalysisSearchLiveItem.md#url)

#### Defined in

main.ts:162074

___

### url\_rank

• `Optional` **url\_rank**: `number`

rank of the url
this value is based on backlink data for the given URL from DataForSEO Backlink Index;
url_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[IContentAnalysisSearchLiveItem](../interfaces/IContentAnalysisSearchLiveItem.md).[url_rank](../interfaces/IContentAnalysisSearchLiveItem.md#url_rank)

#### Defined in

main.ts:162083

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

main.ts:162134

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

main.ts:162178

___

### fromJS

▸ **fromJS**(`data`): [`ContentAnalysisSearchLiveItem`](ContentAnalysisSearchLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentAnalysisSearchLiveItem`](ContentAnalysisSearchLiveItem.md)

#### Defined in

main.ts:162171
