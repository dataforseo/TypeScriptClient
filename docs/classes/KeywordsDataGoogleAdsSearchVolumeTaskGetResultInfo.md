[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo

# Class: KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo

Defined in: main.ts:127432

## Implements

- [`IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo()

> **new KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo**(`data`?): [`KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo`](KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md)

Defined in: main.ts:127482

#### Parameters

##### data?

[`IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md)

#### Returns

[`KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo`](KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md)

## Properties

### competition?

> `optional` **competition**: `string`

Defined in: main.ts:127453

competition
represents the relative amount of competition associated with the given keyword in paid SERP only;
this value is based on Google Ads data and can take the following values: HIGH, MEDIUM, LOW;
if there is no data the value is null;
learn more about the metric in this help center article

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md).[`competition`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#competition)

***

### competition\_index?

> `optional` **competition\_index**: `number`

Defined in: main.ts:127459

competition
represents the relative amount of competition associated with the given keyword in paid SERP only;
this value is based on Google Ads data and can be between 0 and 100 (inclusive);
if there is no data the value is null;
learn more about the metric in this help center article

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md).[`competition_index`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#competition_index)

***

### cpc?

> `optional` **cpc**: `number`

Defined in: main.ts:127474

cost per click
indicates the amount paid for each click on the ad displayed for a given keyword

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md).[`cpc`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#cpc)

***

### high\_top\_of\_page\_bid?

> `optional` **high\_top\_of\_page\_bid**: `number`

Defined in: main.ts:127471

maximum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 80% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers);
the value may differ depending on the location specified in a POST request

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md).[`high_top_of_page_bid`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#high_top_of_page_bid)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:127435

keyword
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md).[`keyword`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:127445

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md).[`language_code`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:127442

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md).[`location_code`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#location_code)

***

### low\_top\_of\_page\_bid?

> `optional` **low\_top\_of\_page\_bid**: `number`

Defined in: main.ts:127467

minimum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 20% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers);
the value may differ depending on the location specified in a POST request

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md).[`low_top_of_page_bid`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#low_top_of_page_bid)

***

### monthly\_searches?

> `optional` **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

Defined in: main.ts:127478

monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months by default), targeted to the specified geographic locations;
if there is no data then the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md).[`monthly_searches`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#monthly_searches)

***

### search\_partners?

> `optional` **search\_partners**: `boolean`

Defined in: main.ts:127447

indicates whether data from partner networks included in the response

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md).[`search_partners`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#search_partners)

***

### search\_volume?

> `optional` **search\_volume**: `number`

Defined in: main.ts:127463

monthly average search volume rate;
represents either the (approximate) number of searches for the given keyword idea on google.com or google.com and partners, depending on the user’s targeting;
if there is no data then the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md).[`search_volume`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#search_volume)

***

### spell?

> `optional` **spell**: `string`

Defined in: main.ts:127439

correct spelling of the keyword
Note:if the keyword in the POST array appears to be misspelled, data will be returned for the correctly spelled keyword;
we use the functionality of Google Ads API to check and validate the spelling of keywords, learn more by this link

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md).[`spell`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#spell)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:127491

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:127523

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo`](KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md)

Defined in: main.ts:127516

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo`](KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md)
