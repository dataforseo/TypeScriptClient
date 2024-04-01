[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleHistoricalSearchVolumeLiveItem

# Class: DataforseoLabsGoogleHistoricalSearchVolumeLiveItem

## Implements

- [`IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#constructor)

### Properties

- [impressions\_info](DataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#impressions_info)
- [keyword](DataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#keyword)
- [keyword\_info](DataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#keyword_info)
- [keyword\_properties](DataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#keyword_properties)
- [language\_code](DataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#language_code)
- [location\_code](DataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#location_code)
- [se\_type](DataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#se_type)
- [search\_partners](DataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#search_partners)
- [serp\_info](DataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#serp_info)

### Methods

- [init](DataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#init)
- [toJSON](DataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#tojson)
- [fromJS](DataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleHistoricalSearchVolumeLiveItem**(`data?`): [`DataforseoLabsGoogleHistoricalSearchVolumeLiveItem`](DataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md) |

#### Returns

[`DataforseoLabsGoogleHistoricalSearchVolumeLiveItem`](DataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md)

#### Defined in

main.ts:84314

## Properties

### impressions\_info

• `Optional` **impressions\_info**: [`ImpressionsInfo`](ImpressionsInfo.md)

impressions data for the returned keyword idea
Note that all data in the impressions_info object is deprecated and provided only as legacy to avoid maintenance issues
daily_impressions values provide a more accurate alternative to Google search volume data;
the 999 bid is used to mitigate account-specific factors Google considers when calculating impressions
learn more about impressions in this help center article

#### Implementation of

[IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md).[impressions_info](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#impressions_info)

#### Defined in

main.ts:84307

___

### keyword

• `Optional` **keyword**: `string`

keyword
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md).[keyword](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#keyword)

#### Defined in

main.ts:84288

___

### keyword\_info

• `Optional` **keyword\_info**: [`KeywordInfo`](KeywordInfo.md)

keyword data for the returned keyword idea

#### Implementation of

[IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md).[keyword_info](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#keyword_info)

#### Defined in

main.ts:84299

___

### keyword\_properties

• `Optional` **keyword\_properties**: [`KeywordProperties`](KeywordProperties.md)

additional information about the keyword

#### Implementation of

[IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md).[keyword_properties](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#keyword_properties)

#### Defined in

main.ts:84301

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md).[language_code](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#language_code)

#### Defined in

main.ts:84293

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md).[location_code](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#location_code)

#### Defined in

main.ts:84291

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md).[se_type](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#se_type)

#### Defined in

main.ts:84285

___

### search\_partners

• `Optional` **search\_partners**: `boolean`

indicates data for Google and partner sites
if true, the results are returned for owned, operated, and syndicated networks across Google and partner sites that host Google search;
if false, the results are returned for Google search sites only

#### Implementation of

[IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md).[search_partners](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#search_partners)

#### Defined in

main.ts:84297

___

### serp\_info

• `Optional` **serp\_info**: [`SerpInfo`](SerpInfo.md)

SERP data
the value will be null if you didn’t set the field include_serp_info to true in the POST array or if there is no SERP data for this keyword in our database

#### Implementation of

[IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md).[serp_info](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md#serp_info)

#### Defined in

main.ts:84310

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:84323

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:84348

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleHistoricalSearchVolumeLiveItem`](DataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleHistoricalSearchVolumeLiveItem`](DataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md)

#### Defined in

main.ts:84341
