[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo

# Class: KeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo

## Implements

- [`IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md#constructor)

### Properties

- [competition](KeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md#competition)
- [competition\_index](KeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md#competition_index)
- [cpc](KeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md#cpc)
- [high\_top\_of\_page\_bid](KeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md#high_top_of_page_bid)
- [keyword](KeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md#keyword)
- [keyword\_annotations](KeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md#keyword_annotations)
- [language\_code](KeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md#language_code)
- [location\_code](KeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md#location_code)
- [low\_top\_of\_page\_bid](KeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md#low_top_of_page_bid)
- [monthly\_searches](KeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md#monthly_searches)
- [search\_partners](KeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md#search_partners)
- [search\_volume](KeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md#search_volume)

### Methods

- [init](KeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md#init)
- [toJSON](KeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md#tojson)
- [fromJS](KeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo**(`data?`): [`KeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo`](KeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md) |

#### Returns

[`KeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo`](KeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md)

#### Defined in

[main.ts:115641](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115641)

## Properties

### competition

• `Optional` **competition**: `string`

competition
represents the relative level of competition associated with the given keyword in paid SERP only
possible values: LOW, MEDIUM, HIGH
if competition level is unknown, the value is null;
learn more about the metric in this help center article

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md).[competition](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md#competition)

#### Defined in

[main.ts:115609](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115609)

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

[IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md).[competition_index](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md#competition_index)

#### Defined in

[main.ts:115616](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115616)

___


### cpc

• `Optional` **cpc**: `number`

cost per click
indicates the amount paid for each click on the ad displayed for a given keyword

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md).[cpc](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md#cpc)

#### Defined in

[main.ts:115631](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115631)

___


### high\_top\_of\_page\_bid

• `Optional` **high\_top\_of\_page\_bid**: `number`

maximum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 80% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers)
the value may differ depending on the location specified in a POST request

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md).[high_top_of_page_bid](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md#high_top_of_page_bid)

#### Defined in

[main.ts:115628](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115628)

___


### keyword

• `Optional` **keyword**: `string`

keyword in a POST array

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md).[keyword](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md#keyword)

#### Defined in

[main.ts:115592](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115592)

___


### keyword\_annotations

• `Optional` **keyword\_annotations**: [`KeywordAnnotations`](KeywordAnnotations.md)

the annotations for the keyword

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md).[keyword_annotations](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md#keyword_annotations)

#### Defined in

[main.ts:115637](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115637)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, the value is null

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md).[language_code](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md#language_code)

#### Defined in

[main.ts:115598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115598)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, the value is null

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md).[location_code](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md#location_code)

#### Defined in

[main.ts:115595](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115595)

___


### low\_top\_of\_page\_bid

• `Optional` **low\_top\_of\_page\_bid**: `number`

minimum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 20% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers)
the value may differ depending on the location specified in a POST request

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md).[low_top_of_page_bid](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md#low_top_of_page_bid)

#### Defined in

[main.ts:115624](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115624)

___


### monthly\_searches

• `Optional` **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations
if there is no data, the value is null

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md).[monthly_searches](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md#monthly_searches)

#### Defined in

[main.ts:115635](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115635)

___


### search\_partners

• `Optional` **search\_partners**: `boolean`

include Google search partners
the value you specified when setting the task
if true, the results are returned for owned, operated, and syndicated networks across Google and partner sites that host Google search;
if false, the results are returned for Google search sites only

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md).[search_partners](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md#search_partners)

#### Defined in

[main.ts:115603](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115603)

___


### search\_volume

• `Optional` **search\_volume**: `number`

monthly average search volume rate
represents the (approximate) number of searches for the given keyword idea either on google.com or google.com and partners, depending on the user’s targeting
if there is no data, the value is null

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md).[search_volume](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md#search_volume)

#### Defined in

[main.ts:115620](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115620)

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

[main.ts:115650](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115650)

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

[main.ts:115682](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115682)

___


### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo`](KeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo`](KeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md)

#### Defined in

[main.ts:115675](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115675)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")