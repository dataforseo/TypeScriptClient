**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IContentAnalysisSearchLiveItem

# Interface: IContentAnalysisSearchLiveItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### content\_info?

> **`optional`** **content\_info**: [`AnalysisContentInfo`](../classes/AnalysisContentInfo.md)

contains data on citations from the given url

#### Source

main.ts:168745

***

### country?

> **`optional`** **country**: `string`

country code of the domain registration
to obtain a full list of available countries, refer to the Locations endpoint

#### Source

main.ts:168724

***

### domain?

> **`optional`** **domain**: `string`

domain name

#### Source

main.ts:168700

***

### domain\_rank?

> **`optional`** **domain\_rank**: `string`

rank of the domain
this value is based on backlink data for the given domain from DataForSEO Backlink Index;
domain_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Source

main.ts:168716

***

### fetch\_time?

> **`optional`** **fetch\_time**: `string`

date and time when our crawler visited the page
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Source

main.ts:168721

***

### language?

> **`optional`** **language**: `string`

main language of the domain
to obtain a full list of available languages, refer to the Languages endpoint

#### Source

main.ts:168727

***

### main\_domain?

> **`optional`** **main\_domain**: `string`

main domain

#### Source

main.ts:168702

***

### page\_category?

> **`optional`** **page\_category**: `number`[]

contains all relevant page categories
product and service categories relevant for the page
to obtain a full list of available categories, refer to the Categories endpoint

#### Source

main.ts:168735

***

### page\_types?

> **`optional`** **page\_types**: `string`[]

page types

#### Source

main.ts:168737

***

### ratings?

> **`optional`** **ratings**: [`RatingInfo`](../classes/RatingInfo.md)[]

ratings found on the page
all ratings found on the page based on microdata

#### Source

main.ts:168740

***

### score?

> **`optional`** **score**: `string`

citation prominence score
this value is based on url_rank, domain_rank, keyword presence in title, main_title, url, snippet
the higher the score, the more value the related citation has

#### Source

main.ts:168731

***

### social\_metrics?

> **`optional`** **social\_metrics**: [`SocialMetricsInfo`](../classes/SocialMetricsInfo.md)[]

social media engagement metrics
data on social media interactions associated with the content based on website embeds developed and supported by social media platforms

#### Source

main.ts:168743

***

### spam\_score?

> **`optional`** **spam\_score**: `string`

backlink spam score of the url
this value is based on backlink data for the given URL from DataForSEO Backlink Index;
learn more about how the metric is calculated on this help center page

#### Source

main.ts:168711

***

### type?

> **`optional`** **type**: `string`

type of element

#### Source

main.ts:168696

***

### url?

> **`optional`** **url**: `string`

URL where the citation was found

#### Source

main.ts:168698

***

### url\_rank?

> **`optional`** **url\_rank**: `number`

rank of the url
this value is based on backlink data for the given URL from DataForSEO Backlink Index;
url_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Source

main.ts:168707
