[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKeywordDataInfo

# Interface: IKeywordDataInfo

Defined in: main.ts:93387

## Indexable

\[`key`: `string`\]: `any`

## Properties

### avg\_backlinks\_info?

> `optional` **avg\_backlinks\_info**: [`AvgBacklinksInfo`](../classes/AvgBacklinksInfo.md)

Defined in: main.ts:93418

backlink data for the returned keyword
this object provides the average number of backlinks, referring pages and domains, as well as the average rank values among the top-10 webpages ranking organically for the keyword

***

### clickstream\_keyword\_info?

> `optional` **clickstream\_keyword\_info**: [`ClickstreamKeywordInfo`](../classes/ClickstreamKeywordInfo.md)

Defined in: main.ts:93404

clickstream data for the returned keyword
to retrieve results for this field, the parameter include_clickstream_data must be set to true

***

### impressions\_info?

> `optional` **impressions\_info**: [`ImpressionsInfo`](../classes/ImpressionsInfo.md)

Defined in: main.ts:93412

impressions data for the returned keyword idea
Note that all data in the impressions_info object is deprecated and provided only as legacy to avoid maintenance issues
daily_impressions values provide a more accurate alternative to Google search volume data;
the 999 bid is used to mitigate account-specific factors Google considers when calculating impressions
learn more about impressions in this help center article

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:93391

returned keyword idea

***

### keyword\_info?

> `optional` **keyword\_info**: [`KeywordInfo`](../classes/KeywordInfo.md)

Defined in: main.ts:93397

keyword data for the returned keyword idea

***

### keyword\_info\_normalized\_with\_bing?

> `optional` **keyword\_info\_normalized\_with\_bing**: [`KeywordInfoNormalizedWithInfo`](../classes/KeywordInfoNormalizedWithInfo.md)

Defined in: main.ts:93399

contains keyword search volume normalized with Bing search volume

***

### keyword\_info\_normalized\_with\_clickstream?

> `optional` **keyword\_info\_normalized\_with\_clickstream**: [`KeywordInfoNormalizedWithInfo`](../classes/KeywordInfoNormalizedWithInfo.md)

Defined in: main.ts:93401

contains keyword search volume normalized with clickstream data

***

### keyword\_properties?

> `optional` **keyword\_properties**: [`KeywordProperties`](../classes/KeywordProperties.md)

Defined in: main.ts:93406

additional information about the keyword

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:93395

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:93393

location code in a POST array

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:93389

search engine type

***

### search\_intent\_info?

> `optional` **search\_intent\_info**: [`SearchIntentInfo`](../classes/SearchIntentInfo.md)

Defined in: main.ts:93421

search intent info for the returned keyword
learn about search intent in this help center article

***

### serp\_info?

> `optional` **serp\_info**: [`SerpInfo`](../classes/SerpInfo.md)

Defined in: main.ts:93415

SERP data
the value will be null if you didn’t set the field include_serp_info to true in the POST array or if there is no SERP data for this keyword in our database
