[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo

# Class: KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo

## Implements

- [`IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#constructor)

### Properties

- [competition](KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#competition)
- [competition\_index](KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#competition_index)
- [cpc](KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#cpc)
- [high\_top\_of\_page\_bid](KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#high_top_of_page_bid)
- [keyword](KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#keyword)
- [keyword\_annotations](KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#keyword_annotations)
- [language\_code](KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#language_code)
- [location\_code](KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#location_code)
- [low\_top\_of\_page\_bid](KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#low_top_of_page_bid)
- [monthly\_searches](KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#monthly_searches)
- [search\_partners](KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#search_partners)
- [search\_volume](KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#search_volume)

### Methods

- [init](KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#init)
- [toJSON](KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#tojson)
- [fromJS](KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo**(`data?`): [`KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md) |

#### Returns

[`KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md)

#### Defined in

main.ts:115261

## Properties

### competition

• `Optional` **competition**: `string`

competition
represents the relative level of competition associated with the given keyword in paid SERP only
possible values: LOW, MEDIUM, HIGH
if competition level is unknown, the value is null;
learn more about the metric in this help center article

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md).[competition](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#competition)

#### Defined in

main.ts:115229

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

[IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md).[competition_index](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#competition_index)

#### Defined in

main.ts:115236

___

### cpc

• `Optional` **cpc**: `number`

cost per click
indicates the amount paid for each click on the ad displayed for a given keyword

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md).[cpc](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#cpc)

#### Defined in

main.ts:115251

___

### high\_top\_of\_page\_bid

• `Optional` **high\_top\_of\_page\_bid**: `number`

maximum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 80% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers)
the value may differ depending on the location specified in a POST request

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md).[high_top_of_page_bid](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#high_top_of_page_bid)

#### Defined in

main.ts:115248

___

### keyword

• `Optional` **keyword**: `string`

keyword in a POST array

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md).[keyword](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#keyword)

#### Defined in

main.ts:115212

___

### keyword\_annotations

• `Optional` **keyword\_annotations**: [`KeywordAnnotations`](KeywordAnnotations.md)

the annotations for the keyword

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md).[keyword_annotations](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#keyword_annotations)

#### Defined in

main.ts:115257

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, the value is null

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md).[language_code](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#language_code)

#### Defined in

main.ts:115218

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, the value is null

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md).[location_code](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#location_code)

#### Defined in

main.ts:115215

___

### low\_top\_of\_page\_bid

• `Optional` **low\_top\_of\_page\_bid**: `number`

minimum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 20% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers)
the value may differ depending on the location specified in a POST request

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md).[low_top_of_page_bid](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#low_top_of_page_bid)

#### Defined in

main.ts:115244

___

### monthly\_searches

• `Optional` **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations
if there is no data, the value is null

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md).[monthly_searches](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#monthly_searches)

#### Defined in

main.ts:115255

___

### search\_partners

• `Optional` **search\_partners**: `boolean`

include Google search partners
the value you specified when setting the task
if true, the results are returned for owned, operated, and syndicated networks across Google and partner sites that host Google search;
if false, the results are returned for Google search sites only

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md).[search_partners](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#search_partners)

#### Defined in

main.ts:115223

___

### search\_volume

• `Optional` **search\_volume**: `number`

monthly average search volume rate
represents the (approximate) number of searches for the given keyword idea either on google.com or google.com and partners, depending on the user’s targeting
if there is no data, the value is null

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md).[search_volume](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#search_volume)

#### Defined in

main.ts:115240

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

main.ts:115270

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

main.ts:115302

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md)

#### Defined in

main.ts:115295
