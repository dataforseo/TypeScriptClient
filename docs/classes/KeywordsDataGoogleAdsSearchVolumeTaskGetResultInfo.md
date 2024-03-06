[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo

# Class: KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo

## Implements

- [`IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#constructor)

### Properties

- [competition](KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#competition)
- [competition\_index](KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#competition_index)
- [cpc](KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#cpc)
- [high\_top\_of\_page\_bid](KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#high_top_of_page_bid)
- [keyword](KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#keyword)
- [language\_code](KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#language_code)
- [location\_code](KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#location_code)
- [low\_top\_of\_page\_bid](KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#low_top_of_page_bid)
- [monthly\_searches](KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#monthly_searches)
- [search\_partners](KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#search_partners)
- [search\_volume](KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#search_volume)
- [spell](KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#spell)

### Methods

- [init](KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#init)
- [toJSON](KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#tojson)
- [fromJS](KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo**(`data?`): [`KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo`](KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md) |

#### Returns

[`KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo`](KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md)

#### Defined in

[main.ts:113809](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L113809)

## Properties

### competition

• `Optional` **competition**: `string`

competition
represents the relative amount of competition associated with the given keyword in paid SERP only;
this value is based on Google Ads data and can take the following values: HIGH, MEDIUM, LOW;
if there is no data the value is null;
learn more about the metric in this help center article

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md).[competition](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#competition)

#### Defined in

[main.ts:113780](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L113780)

___


### competition\_index

• `Optional` **competition\_index**: `number`

competition
represents the relative amount of competition associated with the given keyword in paid SERP only;
this value is based on Google Ads data and can be between 0 and 100 (inclusive);
if there is no data the value is null;
learn more about the metric in this help center article

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md).[competition_index](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#competition_index)

#### Defined in

[main.ts:113786](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L113786)

___


### cpc

• `Optional` **cpc**: `number`

cost per click
indicates the amount paid for each click on the ad displayed for a given keyword

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md).[cpc](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#cpc)

#### Defined in

[main.ts:113801](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L113801)

___


### high\_top\_of\_page\_bid

• `Optional` **high\_top\_of\_page\_bid**: `number`

maximum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 80% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers);
the value may differ depending on the location specified in a POST request

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md).[high_top_of_page_bid](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#high_top_of_page_bid)

#### Defined in

[main.ts:113798](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L113798)

___


### keyword

• `Optional` **keyword**: `string`

keyword
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md).[keyword](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#keyword)

#### Defined in

[main.ts:113763](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L113763)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md).[language_code](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#language_code)

#### Defined in

[main.ts:113772](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L113772)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md).[location_code](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#location_code)

#### Defined in

[main.ts:113769](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L113769)

___


### low\_top\_of\_page\_bid

• `Optional` **low\_top\_of\_page\_bid**: `number`

minimum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 20% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers);
the value may differ depending on the location specified in a POST request

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md).[low_top_of_page_bid](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#low_top_of_page_bid)

#### Defined in

[main.ts:113794](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L113794)

___


### monthly\_searches

• `Optional` **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months by default), targeted to the specified geographic locations;
if there is no data then the value is null

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md).[monthly_searches](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#monthly_searches)

#### Defined in

[main.ts:113805](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L113805)

___


### search\_partners

• `Optional` **search\_partners**: `boolean`

indicates whether data from partner networks included in the response

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md).[search_partners](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#search_partners)

#### Defined in

[main.ts:113774](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L113774)

___


### search\_volume

• `Optional` **search\_volume**: `number`

monthly average search volume rate;
represents either the (approximate) number of searches for the given keyword idea on google.com or google.com and partners, depending on the user’s targeting;
if there is no data then the value is null

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md).[search_volume](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#search_volume)

#### Defined in

[main.ts:113790](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L113790)

___


### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md).[spell](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#spell)

#### Defined in

[main.ts:113766](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L113766)

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

[main.ts:113818](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L113818)

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

[main.ts:113850](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L113850)

___


### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo`](KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo`](KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md)

#### Defined in

[main.ts:113843](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L113843)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")