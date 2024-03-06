[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo

# Class: KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo

## Implements

- [`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md#constructor)

### Properties

- [competition](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md#competition)
- [competition\_index](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md#competition_index)
- [cpc](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md#cpc)
- [high\_top\_of\_page\_bid](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md#high_top_of_page_bid)
- [keyword](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md#keyword)
- [keyword\_annotations](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md#keyword_annotations)
- [language\_code](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md#language_code)
- [location\_code](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md#location_code)
- [low\_top\_of\_page\_bid](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md#low_top_of_page_bid)
- [monthly\_searches](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md#monthly_searches)
- [search\_partners](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md#search_partners)
- [search\_volume](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md#search_volume)

### Methods

- [init](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md#init)
- [toJSON](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md#tojson)
- [fromJS](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo**(`data?`): [`KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md) |

#### Returns

[`KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md)

#### Defined in

[main.ts:116270](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L116270)

## Properties

### competition

• `Optional` **competition**: `string`

competition
represents the relative level of competition associated with the given keyword in paid SERP only
possible values: LOW, MEDIUM, HIGH
if competition level is unknown, the value is null;
learn more about the metric in this help center article

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md).[competition](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md#competition)

#### Defined in

[main.ts:116238](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L116238)

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

[IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md).[competition_index](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md#competition_index)

#### Defined in

[main.ts:116245](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L116245)

___


### cpc

• `Optional` **cpc**: `number`

cost per click
indicates the amount paid for each click on the ad displayed for a given keyword

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md).[cpc](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md#cpc)

#### Defined in

[main.ts:116260](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L116260)

___


### high\_top\_of\_page\_bid

• `Optional` **high\_top\_of\_page\_bid**: `number`

maximum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 80% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers)
the value may differ depending on the location specified in a POST request

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md).[high_top_of_page_bid](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md#high_top_of_page_bid)

#### Defined in

[main.ts:116257](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L116257)

___


### keyword

• `Optional` **keyword**: `string`

keyword in a POST array

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md).[keyword](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md#keyword)

#### Defined in

[main.ts:116221](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L116221)

___


### keyword\_annotations

• `Optional` **keyword\_annotations**: [`KeywordAnnotations`](KeywordAnnotations.md)

the annotations for the keyword

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md).[keyword_annotations](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md#keyword_annotations)

#### Defined in

[main.ts:116266](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L116266)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, the value is null

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md).[language_code](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md#language_code)

#### Defined in

[main.ts:116227](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L116227)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, the value is null

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md).[location_code](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md#location_code)

#### Defined in

[main.ts:116224](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L116224)

___


### low\_top\_of\_page\_bid

• `Optional` **low\_top\_of\_page\_bid**: `number`

minimum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 20% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers)
the value may differ depending on the location specified in a POST request

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md).[low_top_of_page_bid](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md#low_top_of_page_bid)

#### Defined in

[main.ts:116253](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L116253)

___


### monthly\_searches

• `Optional` **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations
if there is no data, the value is null

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md).[monthly_searches](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md#monthly_searches)

#### Defined in

[main.ts:116264](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L116264)

___


### search\_partners

• `Optional` **search\_partners**: `boolean`

include Google search partners
the value you specified when setting the task
if true, the results are returned for owned, operated, and syndicated networks across Google and partner sites that host Google search;
if false, the results are returned for Google search sites only

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md).[search_partners](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md#search_partners)

#### Defined in

[main.ts:116232](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L116232)

___


### search\_volume

• `Optional` **search\_volume**: `number`

monthly average search volume rate
represents the (approximate) number of searches for the given keyword idea either on google.com or google.com and partners, depending on the user’s targeting
if there is no data, the value is null

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md).[search_volume](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md#search_volume)

#### Defined in

[main.ts:116249](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L116249)

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

[main.ts:116279](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L116279)

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

[main.ts:116311](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L116311)

___


### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md)

#### Defined in

[main.ts:116304](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L116304)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")