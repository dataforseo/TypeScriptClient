[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo

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

[main.ts:117336](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L117336)

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

[main.ts:117304](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L117304)

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

[main.ts:117311](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L117311)

___


### cpc

• `Optional` **cpc**: `number`

cost per click
indicates the amount paid for each click on the ad displayed for a given keyword

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md).[cpc](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#cpc)

#### Defined in

[main.ts:117326](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L117326)

___


### high\_top\_of\_page\_bid

• `Optional` **high\_top\_of\_page\_bid**: `number`

maximum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 80% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers)
the value may differ depending on the location specified in a POST request

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md).[high_top_of_page_bid](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#high_top_of_page_bid)

#### Defined in

[main.ts:117323](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L117323)

___


### keyword

• `Optional` **keyword**: `string`

keyword in a POST array

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md).[keyword](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#keyword)

#### Defined in

[main.ts:117287](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L117287)

___


### keyword\_annotations

• `Optional` **keyword\_annotations**: [`KeywordAnnotations`](KeywordAnnotations.md)

the annotations for the keyword

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md).[keyword_annotations](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#keyword_annotations)

#### Defined in

[main.ts:117332](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L117332)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, the value is null

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md).[language_code](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#language_code)

#### Defined in

[main.ts:117293](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L117293)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, the value is null

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md).[location_code](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#location_code)

#### Defined in

[main.ts:117290](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L117290)

___


### low\_top\_of\_page\_bid

• `Optional` **low\_top\_of\_page\_bid**: `number`

minimum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 20% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers)
the value may differ depending on the location specified in a POST request

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md).[low_top_of_page_bid](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#low_top_of_page_bid)

#### Defined in

[main.ts:117319](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L117319)

___


### monthly\_searches

• `Optional` **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations
if there is no data, the value is null

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md).[monthly_searches](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#monthly_searches)

#### Defined in

[main.ts:117330](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L117330)

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

[main.ts:117298](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L117298)

___


### search\_volume

• `Optional` **search\_volume**: `number`

monthly average search volume rate
represents the (approximate) number of searches for the given keyword idea either on google.com or google.com and partners, depending on the user’s targeting
if there is no data, the value is null

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md).[search_volume](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#search_volume)

#### Defined in

[main.ts:117315](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L117315)

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

[main.ts:117345](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L117345)

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

[main.ts:117377](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L117377)

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

[main.ts:117370](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L117370)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")