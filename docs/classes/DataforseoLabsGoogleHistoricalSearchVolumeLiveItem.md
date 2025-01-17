[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleHistoricalSearchVolumeLiveItem

# Class: DataforseoLabsGoogleHistoricalSearchVolumeLiveItem

Defined in: main.ts:95652

## Implements

- [`IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleHistoricalSearchVolumeLiveItem()

> **new DataforseoLabsGoogleHistoricalSearchVolumeLiveItem**(`data`?): [`DataforseoLabsGoogleHistoricalSearchVolumeLiveItem`](DataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md)

Defined in: main.ts:95693

#### Parameters

##### data?

[`IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md)

#### Returns

[`DataforseoLabsGoogleHistoricalSearchVolumeLiveItem`](DataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md)

## Properties

### avg\_backlinks\_info?

> `optional` **avg\_backlinks\_info**: [`AvgBacklinksInfo`](AvgBacklinksInfo.md)

Defined in: main.ts:95689

backlink data for the returned keyword
this object provides the average number of backlinks, referring pages and domains, as well as the average rank values among the top-10 websites ranking organically for the keyword

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md).[`avg_backlinks_info`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#avg_backlinks_info)

***

### clickstream\_keyword\_info?

> `optional` **clickstream\_keyword\_info**: [`ClickstreamKeywordInfo`](ClickstreamKeywordInfo.md)

Defined in: main.ts:95675

clickstream data for the returned keyword
to retrieve results for this field, the parameter include_clickstream_data must be set to true

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md).[`clickstream_keyword_info`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#clickstream_keyword_info)

***

### impressions\_info?

> `optional` **impressions\_info**: [`ImpressionsInfo`](ImpressionsInfo.md)

Defined in: main.ts:95683

impressions data for the returned keyword idea
Note that all data in the impressions_info object is deprecated and provided only as legacy to avoid maintenance issues
daily_impressions values provide a more accurate alternative to Google search volume data;
the 999 bid is used to mitigate account-specific factors Google considers when calculating impressions
learn more about impressions in this help center article

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md).[`impressions_info`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#impressions_info)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:95657

keyword
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md).[`keyword`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#keyword)

***

### keyword\_info?

> `optional` **keyword\_info**: [`KeywordInfo`](KeywordInfo.md)

Defined in: main.ts:95668

keyword data for the returned keyword idea

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md).[`keyword_info`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#keyword_info)

***

### keyword\_info\_normalized\_with\_bing?

> `optional` **keyword\_info\_normalized\_with\_bing**: [`KeywordInfoNormalizedWithInfo`](KeywordInfoNormalizedWithInfo.md)

Defined in: main.ts:95670

contains keyword search volume normalized with Bing search volume

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md).[`keyword_info_normalized_with_bing`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#keyword_info_normalized_with_bing)

***

### keyword\_info\_normalized\_with\_clickstream?

> `optional` **keyword\_info\_normalized\_with\_clickstream**: [`KeywordInfoNormalizedWithInfo`](KeywordInfoNormalizedWithInfo.md)

Defined in: main.ts:95672

contains keyword search volume normalized with clickstream data

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md).[`keyword_info_normalized_with_clickstream`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#keyword_info_normalized_with_clickstream)

***

### keyword\_properties?

> `optional` **keyword\_properties**: [`KeywordProperties`](KeywordProperties.md)

Defined in: main.ts:95677

additional information about the keyword

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md).[`keyword_properties`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#keyword_properties)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:95662

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md).[`language_code`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:95660

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md).[`location_code`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:95654

search engine type

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#se_type)

***

### search\_partners?

> `optional` **search\_partners**: `boolean`

Defined in: main.ts:95666

indicates data for Google and partner sites
if true, the results are returned for owned, operated, and syndicated networks across Google and partner sites that host Google search;
if false, the results are returned for Google search sites only

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md).[`search_partners`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#search_partners)

***

### serp\_info?

> `optional` **serp\_info**: [`SerpInfo`](SerpInfo.md)

Defined in: main.ts:95686

SERP data
the value will be null if you didn’t set the field include_serp_info to true in the POST array or if there is no SERP data for this keyword in our database

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md).[`serp_info`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#serp_info)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:95702

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:95731

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleHistoricalSearchVolumeLiveItem`](DataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md)

Defined in: main.ts:95724

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleHistoricalSearchVolumeLiveItem`](DataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md)
