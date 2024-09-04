[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KeywordDataInfo

# Class: KeywordDataInfo

## Implements

- [`IKeywordDataInfo`](../interfaces/IKeywordDataInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordDataInfo()

> **new KeywordDataInfo**(`data`?): [`KeywordDataInfo`](KeywordDataInfo.md)

#### Parameters

• **data?**: [`IKeywordDataInfo`](../interfaces/IKeywordDataInfo.md)

#### Returns

[`KeywordDataInfo`](KeywordDataInfo.md)

#### Defined in

main.ts:84841

## Properties

### avg\_backlinks\_info?

> `optional` **avg\_backlinks\_info**: [`AvgBacklinksInfo`](AvgBacklinksInfo.md)

backlink data for the returned keyword
this object provides the average number of backlinks, referring pages and domains, as well as the average rank values among the top-10 webpages ranking organically for the keyword

#### Implementation of

[`IKeywordDataInfo`](../interfaces/IKeywordDataInfo.md).[`avg_backlinks_info`](../interfaces/IKeywordDataInfo.md#avg_backlinks_info)

#### Defined in

main.ts:84834

***

### clickstream\_keyword\_info?

> `optional` **clickstream\_keyword\_info**: `any`

clickstream data for the returned keyword
to retrieve results for this field, the parameter include_clickstream_data must be set to true

#### Implementation of

[`IKeywordDataInfo`](../interfaces/IKeywordDataInfo.md).[`clickstream_keyword_info`](../interfaces/IKeywordDataInfo.md#clickstream_keyword_info)

#### Defined in

main.ts:84820

***

### impressions\_info?

> `optional` **impressions\_info**: [`ImpressionsInfo`](ImpressionsInfo.md)

impressions data for the returned keyword idea
Note that all data in the impressions_info object is deprecated and provided only as legacy to avoid maintenance issues
daily_impressions values provide a more accurate alternative to Google search volume data;
the 999 bid is used to mitigate account-specific factors Google considers when calculating impressions
learn more about impressions in this help center article

#### Implementation of

[`IKeywordDataInfo`](../interfaces/IKeywordDataInfo.md).[`impressions_info`](../interfaces/IKeywordDataInfo.md#impressions_info)

#### Defined in

main.ts:84828

***

### keyword?

> `optional` **keyword**: `string`

returned keyword idea

#### Implementation of

[`IKeywordDataInfo`](../interfaces/IKeywordDataInfo.md).[`keyword`](../interfaces/IKeywordDataInfo.md#keyword)

#### Defined in

main.ts:84807

***

### keyword\_info?

> `optional` **keyword\_info**: [`KeywordInfo`](KeywordInfo.md)

keyword data for the returned keyword idea

#### Implementation of

[`IKeywordDataInfo`](../interfaces/IKeywordDataInfo.md).[`keyword_info`](../interfaces/IKeywordDataInfo.md#keyword_info)

#### Defined in

main.ts:84813

***

### keyword\_info\_normalized\_with\_bing?

> `optional` **keyword\_info\_normalized\_with\_bing**: [`KeywordInfoNormalizedWithInfo`](KeywordInfoNormalizedWithInfo.md)

contains keyword search volume normalized with Bing search volume

#### Implementation of

[`IKeywordDataInfo`](../interfaces/IKeywordDataInfo.md).[`keyword_info_normalized_with_bing`](../interfaces/IKeywordDataInfo.md#keyword_info_normalized_with_bing)

#### Defined in

main.ts:84815

***

### keyword\_info\_normalized\_with\_clickstream?

> `optional` **keyword\_info\_normalized\_with\_clickstream**: [`KeywordInfoNormalizedWithInfo`](KeywordInfoNormalizedWithInfo.md)

contains keyword search volume normalized with clickstream data

#### Implementation of

[`IKeywordDataInfo`](../interfaces/IKeywordDataInfo.md).[`keyword_info_normalized_with_clickstream`](../interfaces/IKeywordDataInfo.md#keyword_info_normalized_with_clickstream)

#### Defined in

main.ts:84817

***

### keyword\_properties?

> `optional` **keyword\_properties**: [`KeywordProperties`](KeywordProperties.md)

additional information about the keyword

#### Implementation of

[`IKeywordDataInfo`](../interfaces/IKeywordDataInfo.md).[`keyword_properties`](../interfaces/IKeywordDataInfo.md#keyword_properties)

#### Defined in

main.ts:84822

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IKeywordDataInfo`](../interfaces/IKeywordDataInfo.md).[`language_code`](../interfaces/IKeywordDataInfo.md#language_code)

#### Defined in

main.ts:84811

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IKeywordDataInfo`](../interfaces/IKeywordDataInfo.md).[`location_code`](../interfaces/IKeywordDataInfo.md#location_code)

#### Defined in

main.ts:84809

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IKeywordDataInfo`](../interfaces/IKeywordDataInfo.md).[`se_type`](../interfaces/IKeywordDataInfo.md#se_type)

#### Defined in

main.ts:84805

***

### search\_intent\_info?

> `optional` **search\_intent\_info**: [`SearchIntentInfo`](SearchIntentInfo.md)

search intent info for the returned keyword
learn about search intent in this help center article

#### Implementation of

[`IKeywordDataInfo`](../interfaces/IKeywordDataInfo.md).[`search_intent_info`](../interfaces/IKeywordDataInfo.md#search_intent_info)

#### Defined in

main.ts:84837

***

### serp\_info?

> `optional` **serp\_info**: [`SerpInfo`](SerpInfo.md)

SERP data
the value will be null if you didn’t set the field include_serp_info to true in the POST array or if there is no SERP data for this keyword in our database

#### Implementation of

[`IKeywordDataInfo`](../interfaces/IKeywordDataInfo.md).[`serp_info`](../interfaces/IKeywordDataInfo.md#serp_info)

#### Defined in

main.ts:84831

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:84850

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:84879

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordDataInfo`](KeywordDataInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordDataInfo`](KeywordDataInfo.md)

#### Defined in

main.ts:84872
