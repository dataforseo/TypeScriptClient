[**Documentation**](../README.md)

***

[Documentation](../README.md) / IContentAnalysisSearchLiveItem

# Interface: IContentAnalysisSearchLiveItem

Defined in: main.ts:178146

## Indexable

\[`key`: `string`\]: `any`

## Properties

### content\_info?

> `optional` **content\_info**: [`AnalysisContentInfo`](../classes/AnalysisContentInfo.md)

Defined in: main.ts:178197

contains data on citations from the given url

***

### country?

> `optional` **country**: `string`

Defined in: main.ts:178176

country code of the domain registration
to obtain a full list of available countries, refer to the Locations endpoint

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:178152

domain name

***

### domain\_rank?

> `optional` **domain\_rank**: `string`

Defined in: main.ts:178168

rank of the domain
this value is based on backlink data for the given domain from DataForSEO Backlink Index;
domain_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

***

### fetch\_time?

> `optional` **fetch\_time**: `string`

Defined in: main.ts:178173

date and time when our crawler visited the page
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

***

### language?

> `optional` **language**: `string`

Defined in: main.ts:178179

main language of the domain
to obtain a full list of available languages, refer to the Languages endpoint

***

### main\_domain?

> `optional` **main\_domain**: `string`

Defined in: main.ts:178154

main domain

***

### page\_category?

> `optional` **page\_category**: `number`[]

Defined in: main.ts:178187

contains all relevant page categories
product and service categories relevant for the page
to obtain a full list of available categories, refer to the Categories endpoint

***

### page\_types?

> `optional` **page\_types**: `string`[]

Defined in: main.ts:178189

page types

***

### ratings?

> `optional` **ratings**: [`RatingInfo`](../classes/RatingInfo.md)[]

Defined in: main.ts:178192

ratings found on the page
all ratings found on the page based on microdata

***

### score?

> `optional` **score**: `string`

Defined in: main.ts:178183

citation prominence score
this value is based on url_rank, domain_rank, keyword presence in title, main_title, url, snippet
the higher the score, the more value the related citation has

***

### social\_metrics?

> `optional` **social\_metrics**: [`SocialMetricsInfo`](../classes/SocialMetricsInfo.md)[]

Defined in: main.ts:178195

social media engagement metrics
data on social media interactions associated with the content based on website embeds developed and supported by social media platforms

***

### spam\_score?

> `optional` **spam\_score**: `string`

Defined in: main.ts:178163

backlink spam score of the url
this value is based on backlink data for the given URL from DataForSEO Backlink Index;
learn more about how the metric is calculated on this help center page

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:178148

type of element

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:178150

URL where the citation was found

***

### url\_rank?

> `optional` **url\_rank**: `number`

Defined in: main.ts:178159

rank of the url
this value is based on backlink data for the given URL from DataForSEO Backlink Index;
url_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article
