[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataGoogleAdsSearchVolumeLiveResultInfo

# Class: KeywordsDataGoogleAdsSearchVolumeLiveResultInfo

## Implements

- [`IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleAdsSearchVolumeLiveResultInfo()

> **new KeywordsDataGoogleAdsSearchVolumeLiveResultInfo**(`data`?): [`KeywordsDataGoogleAdsSearchVolumeLiveResultInfo`](KeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md)

#### Parameters

##### data?

[`IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md)

#### Returns

[`KeywordsDataGoogleAdsSearchVolumeLiveResultInfo`](KeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md)

#### Defined in

main.ts:127828

## Properties

### competition?

> `optional` **competition**: `string`

competition
represents the relative amount of competition associated with the given keyword in paid SERP only;
this value is based on Google Ads data and can take the following values: HIGH, MEDIUM, LOW;
if there is no data the value is null;
learn more about the metric in this help center article

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md).[`competition`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#competition)

#### Defined in

main.ts:127799

***

### competition\_index?

> `optional` **competition\_index**: `number`

competition
represents the relative amount of competition associated with the given keyword in paid SERP only;
this value is based on Google Ads data and can be between 0 and 100 (inclusive);
if there is no data the value is null;
learn more about the metric in this help center article

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md).[`competition_index`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#competition_index)

#### Defined in

main.ts:127805

***

### cpc?

> `optional` **cpc**: `number`

cost per click
indicates the amount paid for each click on the ad displayed for a given keyword

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md).[`cpc`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#cpc)

#### Defined in

main.ts:127820

***

### high\_top\_of\_page\_bid?

> `optional` **high\_top\_of\_page\_bid**: `number`

maximum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 80% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers);
the value may differ depending on the location specified in a POST request

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md).[`high_top_of_page_bid`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#high_top_of_page_bid)

#### Defined in

main.ts:127817

***

### keyword?

> `optional` **keyword**: `string`

keyword
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md).[`keyword`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#keyword)

#### Defined in

main.ts:127781

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md).[`language_code`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#language_code)

#### Defined in

main.ts:127791

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md).[`location_code`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#location_code)

#### Defined in

main.ts:127788

***

### low\_top\_of\_page\_bid?

> `optional` **low\_top\_of\_page\_bid**: `number`

minimum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 20% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers);
the value may differ depending on the location specified in a POST request

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md).[`low_top_of_page_bid`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#low_top_of_page_bid)

#### Defined in

main.ts:127813

***

### monthly\_searches?

> `optional` **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months by default), targeted to the specified geographic locations;
if there is no data then the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md).[`monthly_searches`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#monthly_searches)

#### Defined in

main.ts:127824

***

### search\_partners?

> `optional` **search\_partners**: `boolean`

indicates whether data from partner networks included in the response

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md).[`search_partners`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#search_partners)

#### Defined in

main.ts:127793

***

### search\_volume?

> `optional` **search\_volume**: `number`

monthly average search volume rate;
represents either the (approximate) number of searches for the given keyword idea on google.com or google.com and partners, depending on the user’s targeting;
if there is no data then the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md).[`search_volume`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#search_volume)

#### Defined in

main.ts:127809

***

### spell?

> `optional` **spell**: `string`

correct spelling of the keyword
Note:if the keyword in the POST array appears to be misspelled, data will be returned for the correctly spelled keyword;
we use the functionality of Google Ads API to check and validate the spelling of keywords, learn more by this link

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md).[`spell`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#spell)

#### Defined in

main.ts:127785

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:127837

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:127869

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataGoogleAdsSearchVolumeLiveResultInfo`](KeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataGoogleAdsSearchVolumeLiveResultInfo`](KeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md)

#### Defined in

main.ts:127862
