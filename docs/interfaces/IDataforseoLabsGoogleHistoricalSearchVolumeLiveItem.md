[Documentation](../README.md) / [Exports](../modules.md) / IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem

# Interface: IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem

## Implemented by

- [`DataforseoLabsGoogleHistoricalSearchVolumeLiveItem`](../classes/DataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [impressions\_info](IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#impressions_info)
- [keyword](IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#keyword)
- [keyword\_info](IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#keyword_info)
- [keyword\_properties](IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#keyword_properties)
- [language\_code](IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#language_code)
- [location\_code](IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#location_code)
- [se\_type](IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#se_type)
- [search\_partners](IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#search_partners)
- [serp\_info](IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#serp_info)

## Properties

### impressions\_info

• `Optional` **impressions\_info**: [`ImpressionsInfo`](../classes/ImpressionsInfo.md)

impressions data for the returned keyword idea
Note that all data in the impressions_info object is deprecated and provided only as legacy to avoid maintenance issues
daily_impressions values provide a more accurate alternative to Google search volume data;
the 999 bid is used to mitigate account-specific factors Google considers when calculating impressions
learn more about impressions in this help center article

#### Defined in

main.ts:82158

___

### keyword

• `Optional` **keyword**: `string`

keyword
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

main.ts:82139

___

### keyword\_info

• `Optional` **keyword\_info**: [`KeywordInfo`](../classes/KeywordInfo.md)

keyword data for the returned keyword idea

#### Defined in

main.ts:82150

___

### keyword\_properties

• `Optional` **keyword\_properties**: [`KeywordProperties`](../classes/KeywordProperties.md)

additional information about the keyword

#### Defined in

main.ts:82152

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:82144

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:82142

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:82136

___

### search\_partners

• `Optional` **search\_partners**: `boolean`

indicates data for Google and partner sites
if true, the results are returned for owned, operated, and syndicated networks across Google and partner sites that host Google search;
if false, the results are returned for Google search sites only

#### Defined in

main.ts:82148

___

### serp\_info

• `Optional` **serp\_info**: [`SerpInfo`](../classes/SerpInfo.md)

SERP data
the value will be null if you didn’t set the field include_serp_info to true in the POST array or if there is no SERP data for this keyword in our database

#### Defined in

main.ts:82161
