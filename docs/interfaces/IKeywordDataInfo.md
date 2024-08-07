**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IKeywordDataInfo

# Interface: IKeywordDataInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### avg\_backlinks\_info?

> **`optional`** **avg\_backlinks\_info**: [`AvgBacklinksInfo`](../classes/AvgBacklinksInfo.md)

backlink data for the returned keyword
this object provides the average number of backlinks, referring pages and domains, as well as the average rank values among the top-10 websites ranking organically for the keyword

#### Source

main.ts:84365

***

### clickstream\_keyword\_info?

> **`optional`** **clickstream\_keyword\_info**: [`ClickstreamKeywordInfo`](../classes/ClickstreamKeywordInfo.md)

clickstream data for the returned keyword
to retrieve results for this field, the parameter include_clickstream_data must be set to true

#### Source

main.ts:84352

***

### impressions\_info?

> **`optional`** **impressions\_info**: [`ImpressionsInfo`](../classes/ImpressionsInfo.md)

impressions data for the returned keyword idea
daily_impressions values provide a more accurate alternative to Google search volume data;
the 999 bid is used to mitigate account-specific factors Google considers when calculating impressions
learn more about impressions in this help center article

#### Source

main.ts:84359

***

### keyword?

> **`optional`** **keyword**: `string`

returned keyword idea

#### Source

main.ts:84343

***

### keyword\_info?

> **`optional`** **keyword\_info**: [`KeywordInfo`](../classes/KeywordInfo.md)

keyword data for the returned keyword idea

#### Source

main.ts:84349

***

### keyword\_properties?

> **`optional`** **keyword\_properties**: [`KeywordProperties`](../classes/KeywordProperties.md)

additional information about the keyword

#### Source

main.ts:84354

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Source

main.ts:84347

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Source

main.ts:84345

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:84341

***

### search\_intent\_info?

> **`optional`** **search\_intent\_info**: [`SearchIntentInfo`](../classes/SearchIntentInfo.md)

search intent info for the returned keyword
learn about search intent in this help center article

#### Source

main.ts:84368

***

### serp\_info?

> **`optional`** **serp\_info**: [`SerpInfo`](../classes/SerpInfo.md)

SERP data
the value will be null if you didn’t set the field include_serp_info to true in the POST array or if there is no SERP data for this keyword in our database

#### Source

main.ts:84362
