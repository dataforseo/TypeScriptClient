[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleAdsSearchVolumeLiveResultInfo

# Class: KeywordsDataGoogleAdsSearchVolumeLiveResultInfo

## Implements

- [`IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#constructor)

### Properties

- [competition](KeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#competition)
- [competition\_index](KeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#competition_index)
- [cpc](KeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#cpc)
- [high\_top\_of\_page\_bid](KeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#high_top_of_page_bid)
- [keyword](KeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#keyword)
- [language\_code](KeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#language_code)
- [location\_code](KeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#location_code)
- [low\_top\_of\_page\_bid](KeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#low_top_of_page_bid)
- [monthly\_searches](KeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#monthly_searches)
- [search\_partners](KeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#search_partners)
- [search\_volume](KeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#search_volume)
- [spell](KeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#spell)

### Methods

- [init](KeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#init)
- [toJSON](KeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#tojson)
- [fromJS](KeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleAdsSearchVolumeLiveResultInfo**(`data?`): [`KeywordsDataGoogleAdsSearchVolumeLiveResultInfo`](KeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md) |

#### Returns

[`KeywordsDataGoogleAdsSearchVolumeLiveResultInfo`](KeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md)

#### Defined in

main.ts:116462

## Properties

### competition

• `Optional` **competition**: `string`

competition
represents the relative amount of competition associated with the given keyword in paid SERP only;
this value is based on Google Ads data and can take the following values: HIGH, MEDIUM, LOW;
if there is no data the value is null;
learn more about the metric in this help center article

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md).[competition](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#competition)

#### Defined in

main.ts:116433

___

### competition\_index

• `Optional` **competition\_index**: `number`

competition
represents the relative amount of competition associated with the given keyword in paid SERP only;
this value is based on Google Ads data and can be between 0 and 100 (inclusive);
if there is no data the value is null;
learn more about the metric in this help center article

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md).[competition_index](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#competition_index)

#### Defined in

main.ts:116439

___

### cpc

• `Optional` **cpc**: `number`

cost per click
indicates the amount paid for each click on the ad displayed for a given keyword

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md).[cpc](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#cpc)

#### Defined in

main.ts:116454

___

### high\_top\_of\_page\_bid

• `Optional` **high\_top\_of\_page\_bid**: `number`

maximum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 80% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers);
the value may differ depending on the location specified in a POST request

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md).[high_top_of_page_bid](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#high_top_of_page_bid)

#### Defined in

main.ts:116451

___

### keyword

• `Optional` **keyword**: `string`

keyword
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md).[keyword](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#keyword)

#### Defined in

main.ts:116416

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md).[language_code](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#language_code)

#### Defined in

main.ts:116425

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md).[location_code](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#location_code)

#### Defined in

main.ts:116422

___

### low\_top\_of\_page\_bid

• `Optional` **low\_top\_of\_page\_bid**: `number`

minimum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 20% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers);
the value may differ depending on the location specified in a POST request

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md).[low_top_of_page_bid](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#low_top_of_page_bid)

#### Defined in

main.ts:116447

___

### monthly\_searches

• `Optional` **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months by default), targeted to the specified geographic locations;
if there is no data then the value is null

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md).[monthly_searches](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#monthly_searches)

#### Defined in

main.ts:116458

___

### search\_partners

• `Optional` **search\_partners**: `boolean`

indicates whether data from partner networks included in the response

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md).[search_partners](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#search_partners)

#### Defined in

main.ts:116427

___

### search\_volume

• `Optional` **search\_volume**: `number`

monthly average search volume rate;
represents either the (approximate) number of searches for the given keyword idea on google.com or google.com and partners, depending on the user’s targeting;
if there is no data then the value is null

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md).[search_volume](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#search_volume)

#### Defined in

main.ts:116443

___

### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md).[spell](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#spell)

#### Defined in

main.ts:116419

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

main.ts:116471

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

main.ts:116503

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleAdsSearchVolumeLiveResultInfo`](KeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleAdsSearchVolumeLiveResultInfo`](KeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md)

#### Defined in

main.ts:116496
