[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsGoogleHistoricalSearchVolumeLiveItem

# Class: DataforseoLabsGoogleHistoricalSearchVolumeLiveItem

## Implements

- [`IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleHistoricalSearchVolumeLiveItem()

> **new DataforseoLabsGoogleHistoricalSearchVolumeLiveItem**(`data`?): [`DataforseoLabsGoogleHistoricalSearchVolumeLiveItem`](DataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md)

#### Returns

[`DataforseoLabsGoogleHistoricalSearchVolumeLiveItem`](DataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md)

#### Defined in

main.ts:85909

## Properties

### avg\_backlinks\_info?

> `optional` **avg\_backlinks\_info**: [`AvgBacklinksInfo`](AvgBacklinksInfo.md)

backlink data for the returned keyword
this object provides the average number of backlinks, referring pages and domains, as well as the average rank values among the top-10 websites ranking organically for the keyword

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md).[`avg_backlinks_info`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#avg_backlinks_info)

#### Defined in

main.ts:85905

***

### clickstream\_keyword\_info?

> `optional` **clickstream\_keyword\_info**: `any`

clickstream data for the returned keyword
to retrieve results for this field, the parameter include_clickstream_data must be set to true

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md).[`clickstream_keyword_info`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#clickstream_keyword_info)

#### Defined in

main.ts:85891

***

### impressions\_info?

> `optional` **impressions\_info**: [`ImpressionsInfo`](ImpressionsInfo.md)

impressions data for the returned keyword idea
Note that all data in the impressions_info object is deprecated and provided only as legacy to avoid maintenance issues
daily_impressions values provide a more accurate alternative to Google search volume data;
the 999 bid is used to mitigate account-specific factors Google considers when calculating impressions
learn more about impressions in this help center article

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md).[`impressions_info`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#impressions_info)

#### Defined in

main.ts:85899

***

### keyword?

> `optional` **keyword**: `string`

keyword
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md).[`keyword`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#keyword)

#### Defined in

main.ts:85873

***

### keyword\_info?

> `optional` **keyword\_info**: [`KeywordInfo`](KeywordInfo.md)

keyword data for the returned keyword idea

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md).[`keyword_info`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#keyword_info)

#### Defined in

main.ts:85884

***

### keyword\_info\_normalized\_with\_bing?

> `optional` **keyword\_info\_normalized\_with\_bing**: [`KeywordInfoNormalizedWithInfo`](KeywordInfoNormalizedWithInfo.md)

contains keyword search volume normalized with Bing search volume

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md).[`keyword_info_normalized_with_bing`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#keyword_info_normalized_with_bing)

#### Defined in

main.ts:85886

***

### keyword\_info\_normalized\_with\_clickstream?

> `optional` **keyword\_info\_normalized\_with\_clickstream**: [`KeywordInfoNormalizedWithInfo`](KeywordInfoNormalizedWithInfo.md)

contains keyword search volume normalized with clickstream data

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md).[`keyword_info_normalized_with_clickstream`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#keyword_info_normalized_with_clickstream)

#### Defined in

main.ts:85888

***

### keyword\_properties?

> `optional` **keyword\_properties**: [`KeywordProperties`](KeywordProperties.md)

additional information about the keyword

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md).[`keyword_properties`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#keyword_properties)

#### Defined in

main.ts:85893

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md).[`language_code`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#language_code)

#### Defined in

main.ts:85878

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md).[`location_code`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#location_code)

#### Defined in

main.ts:85876

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#se_type)

#### Defined in

main.ts:85870

***

### search\_partners?

> `optional` **search\_partners**: `boolean`

indicates data for Google and partner sites
if true, the results are returned for owned, operated, and syndicated networks across Google and partner sites that host Google search;
if false, the results are returned for Google search sites only

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md).[`search_partners`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#search_partners)

#### Defined in

main.ts:85882

***

### serp\_info?

> `optional` **serp\_info**: [`SerpInfo`](SerpInfo.md)

SERP data
the value will be null if you didn’t set the field include_serp_info to true in the POST array or if there is no SERP data for this keyword in our database

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md).[`serp_info`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#serp_info)

#### Defined in

main.ts:85902

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:85918

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:85947

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleHistoricalSearchVolumeLiveItem`](DataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleHistoricalSearchVolumeLiveItem`](DataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md)

#### Defined in

main.ts:85940
