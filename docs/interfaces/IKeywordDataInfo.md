[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKeywordDataInfo

# Interface: IKeywordDataInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### avg\_backlinks\_info?

> `optional` **avg\_backlinks\_info**: [`AvgBacklinksInfo`](../classes/AvgBacklinksInfo.md)

backlink data for the returned keyword
this object provides the average number of backlinks, referring pages and domains, as well as the average rank values among the top-10 webpages ranking organically for the keyword

#### Defined in

main.ts:93350

***

### clickstream\_keyword\_info?

> `optional` **clickstream\_keyword\_info**: [`ClickstreamKeywordInfo`](../classes/ClickstreamKeywordInfo.md)

clickstream data for the returned keyword
to retrieve results for this field, the parameter include_clickstream_data must be set to true

#### Defined in

main.ts:93336

***

### impressions\_info?

> `optional` **impressions\_info**: [`ImpressionsInfo`](../classes/ImpressionsInfo.md)

impressions data for the returned keyword idea
Note that all data in the impressions_info object is deprecated and provided only as legacy to avoid maintenance issues
daily_impressions values provide a more accurate alternative to Google search volume data;
the 999 bid is used to mitigate account-specific factors Google considers when calculating impressions
learn more about impressions in this help center article

#### Defined in

main.ts:93344

***

### keyword?

> `optional` **keyword**: `string`

returned keyword idea

#### Defined in

main.ts:93323

***

### keyword\_info?

> `optional` **keyword\_info**: [`KeywordInfo`](../classes/KeywordInfo.md)

keyword data for the returned keyword idea

#### Defined in

main.ts:93329

***

### keyword\_info\_normalized\_with\_bing?

> `optional` **keyword\_info\_normalized\_with\_bing**: [`KeywordInfoNormalizedWithInfo`](../classes/KeywordInfoNormalizedWithInfo.md)

contains keyword search volume normalized with Bing search volume

#### Defined in

main.ts:93331

***

### keyword\_info\_normalized\_with\_clickstream?

> `optional` **keyword\_info\_normalized\_with\_clickstream**: [`KeywordInfoNormalizedWithInfo`](../classes/KeywordInfoNormalizedWithInfo.md)

contains keyword search volume normalized with clickstream data

#### Defined in

main.ts:93333

***

### keyword\_properties?

> `optional` **keyword\_properties**: [`KeywordProperties`](../classes/KeywordProperties.md)

additional information about the keyword

#### Defined in

main.ts:93338

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:93327

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:93325

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:93321

***

### search\_intent\_info?

> `optional` **search\_intent\_info**: [`SearchIntentInfo`](../classes/SearchIntentInfo.md)

search intent info for the returned keyword
learn about search intent in this help center article

#### Defined in

main.ts:93353

***

### serp\_info?

> `optional` **serp\_info**: [`SerpInfo`](../classes/SerpInfo.md)

SERP data
the value will be null if you didn’t set the field include_serp_info to true in the POST array or if there is no SERP data for this keyword in our database

#### Defined in

main.ts:93347
