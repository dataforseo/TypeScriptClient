[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo

# Class: KeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo

## Implements

- [`IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#constructor)

### Properties

- [competition](KeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#competition)
- [competition\_index](KeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#competition_index)
- [cpc](KeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#cpc)
- [high\_top\_of\_page\_bid](KeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#high_top_of_page_bid)
- [keyword](KeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#keyword)
- [keyword\_annotations](KeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#keyword_annotations)
- [language\_code](KeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#language_code)
- [location\_code](KeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#location_code)
- [low\_top\_of\_page\_bid](KeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#low_top_of_page_bid)
- [monthly\_searches](KeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#monthly_searches)
- [search\_partners](KeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#search_partners)
- [search\_volume](KeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#search_volume)

### Methods

- [init](KeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#init)
- [toJSON](KeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#tojson)
- [fromJS](KeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo**(`data?`): [`KeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md) |

#### Returns

[`KeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md)

#### Defined in

main.ts:119713

## Properties

### competition

• `Optional` **competition**: `string`

competition
represents the relative level of competition associated with the given keyword in paid SERP only
possible values: LOW, MEDIUM, HIGH
if competition level is unknown, the value is null;
learn more about the metric in this help center article

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md).[competition](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#competition)

#### Defined in

main.ts:119681

___

### competition\_index

• `Optional` **competition\_index**: `number`

competition index
the competition index for the query indicating how competitive ad placement is for the keyword
can take values from 0 to 100
the level of competition from 0 to 100 is determined by the number of ad slots filled divided by the total number of ad slots available
if not enough data is available, the value is null;
learn more about the metric in this help center article

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md).[competition_index](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#competition_index)

#### Defined in

main.ts:119688

___

### cpc

• `Optional` **cpc**: `number`

cost per click
indicates the amount paid for each click on the ad displayed for a given keyword

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md).[cpc](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#cpc)

#### Defined in

main.ts:119703

___

### high\_top\_of\_page\_bid

• `Optional` **high\_top\_of\_page\_bid**: `number`

maximum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 80% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers)
the value may differ depending on the location specified in a POST request

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md).[high_top_of_page_bid](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#high_top_of_page_bid)

#### Defined in

main.ts:119700

___

### keyword

• `Optional` **keyword**: `string`

keyword in a POST array

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md).[keyword](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#keyword)

#### Defined in

main.ts:119664

___

### keyword\_annotations

• `Optional` **keyword\_annotations**: [`KeywordAnnotations`](KeywordAnnotations.md)

the annotations for the keyword

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md).[keyword_annotations](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#keyword_annotations)

#### Defined in

main.ts:119709

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, the value is null

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md).[language_code](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#language_code)

#### Defined in

main.ts:119670

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, the value is null

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md).[location_code](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#location_code)

#### Defined in

main.ts:119667

___

### low\_top\_of\_page\_bid

• `Optional` **low\_top\_of\_page\_bid**: `number`

minimum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 20% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers)
the value may differ depending on the location specified in a POST request

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md).[low_top_of_page_bid](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#low_top_of_page_bid)

#### Defined in

main.ts:119696

___

### monthly\_searches

• `Optional` **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations
if there is no data, the value is null

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md).[monthly_searches](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#monthly_searches)

#### Defined in

main.ts:119707

___

### search\_partners

• `Optional` **search\_partners**: `boolean`

include Google search partners
the value you specified when setting the task
if true, the results are returned for owned, operated, and syndicated networks across Google and partner sites that host Google search;
if false, the results are returned for Google search sites only

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md).[search_partners](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#search_partners)

#### Defined in

main.ts:119675

___

### search\_volume

• `Optional` **search\_volume**: `number`

monthly average search volume rate
represents the (approximate) number of searches for the given keyword idea either on google.com or google.com and partners, depending on the user’s targeting
if there is no data, the value is null

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md).[search_volume](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#search_volume)

#### Defined in

main.ts:119692

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

main.ts:119722

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

main.ts:119754

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md)

#### Defined in

main.ts:119747
