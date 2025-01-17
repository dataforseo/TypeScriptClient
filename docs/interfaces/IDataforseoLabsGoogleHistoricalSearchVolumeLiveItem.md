[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem

# Interface: IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem

Defined in: main.ts:95754

## Indexable

\[`key`: `string`\]: `any`

## Properties

### avg\_backlinks\_info?

> `optional` **avg\_backlinks\_info**: [`AvgBacklinksInfo`](../classes/AvgBacklinksInfo.md)

Defined in: main.ts:95791

backlink data for the returned keyword
this object provides the average number of backlinks, referring pages and domains, as well as the average rank values among the top-10 websites ranking organically for the keyword

***

### clickstream\_keyword\_info?

> `optional` **clickstream\_keyword\_info**: [`ClickstreamKeywordInfo`](../classes/ClickstreamKeywordInfo.md)

Defined in: main.ts:95777

clickstream data for the returned keyword
to retrieve results for this field, the parameter include_clickstream_data must be set to true

***

### impressions\_info?

> `optional` **impressions\_info**: [`ImpressionsInfo`](../classes/ImpressionsInfo.md)

Defined in: main.ts:95785

impressions data for the returned keyword idea
Note that all data in the impressions_info object is deprecated and provided only as legacy to avoid maintenance issues
daily_impressions values provide a more accurate alternative to Google search volume data;
the 999 bid is used to mitigate account-specific factors Google considers when calculating impressions
learn more about impressions in this help center article

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:95759

keyword
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

***

### keyword\_info?

> `optional` **keyword\_info**: [`KeywordInfo`](../classes/KeywordInfo.md)

Defined in: main.ts:95770

keyword data for the returned keyword idea

***

### keyword\_info\_normalized\_with\_bing?

> `optional` **keyword\_info\_normalized\_with\_bing**: [`KeywordInfoNormalizedWithInfo`](../classes/KeywordInfoNormalizedWithInfo.md)

Defined in: main.ts:95772

contains keyword search volume normalized with Bing search volume

***

### keyword\_info\_normalized\_with\_clickstream?

> `optional` **keyword\_info\_normalized\_with\_clickstream**: [`KeywordInfoNormalizedWithInfo`](../classes/KeywordInfoNormalizedWithInfo.md)

Defined in: main.ts:95774

contains keyword search volume normalized with clickstream data

***

### keyword\_properties?

> `optional` **keyword\_properties**: [`KeywordProperties`](../classes/KeywordProperties.md)

Defined in: main.ts:95779

additional information about the keyword

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:95764

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:95762

location code in a POST array
if there is no data, then the value is null

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:95756

search engine type

***

### search\_partners?

> `optional` **search\_partners**: `boolean`

Defined in: main.ts:95768

indicates data for Google and partner sites
if true, the results are returned for owned, operated, and syndicated networks across Google and partner sites that host Google search;
if false, the results are returned for Google search sites only

***

### serp\_info?

> `optional` **serp\_info**: [`SerpInfo`](../classes/SerpInfo.md)

Defined in: main.ts:95788

SERP data
the value will be null if you didn’t set the field include_serp_info to true in the POST array or if there is no SERP data for this keyword in our database
