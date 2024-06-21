**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordsDataGoogleAdsSearchVolumeLiveResultInfo

# Class: KeywordsDataGoogleAdsSearchVolumeLiveResultInfo

## Implements

- [`IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleAdsSearchVolumeLiveResultInfo(data)

> **new KeywordsDataGoogleAdsSearchVolumeLiveResultInfo**(`data`?): [`KeywordsDataGoogleAdsSearchVolumeLiveResultInfo`](KeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md)

#### Returns

[`KeywordsDataGoogleAdsSearchVolumeLiveResultInfo`](KeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md)

#### Source

main.ts:118977

## Properties

### competition?

> **`optional`** **competition**: `string`

competition
represents the relative amount of competition associated with the given keyword in paid SERP only;
this value is based on Google Ads data and can take the following values: HIGH, MEDIUM, LOW;
if there is no data the value is null;
learn more about the metric in this help center article

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md).[`competition`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#competition)

#### Source

main.ts:118948

***

### competition\_index?

> **`optional`** **competition\_index**: `number`

competition
represents the relative amount of competition associated with the given keyword in paid SERP only;
this value is based on Google Ads data and can be between 0 and 100 (inclusive);
if there is no data the value is null;
learn more about the metric in this help center article

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md).[`competition_index`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#competition_index)

#### Source

main.ts:118954

***

### cpc?

> **`optional`** **cpc**: `number`

cost per click
indicates the amount paid for each click on the ad displayed for a given keyword

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md).[`cpc`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#cpc)

#### Source

main.ts:118969

***

### high\_top\_of\_page\_bid?

> **`optional`** **high\_top\_of\_page\_bid**: `number`

maximum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 80% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers);
the value may differ depending on the location specified in a POST request

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md).[`high_top_of_page_bid`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#high_top_of_page_bid)

#### Source

main.ts:118966

***

### keyword?

> **`optional`** **keyword**: `string`

keyword
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md).[`keyword`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#keyword)

#### Source

main.ts:118931

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md).[`language_code`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#language_code)

#### Source

main.ts:118940

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md).[`location_code`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#location_code)

#### Source

main.ts:118937

***

### low\_top\_of\_page\_bid?

> **`optional`** **low\_top\_of\_page\_bid**: `number`

minimum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 20% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers);
the value may differ depending on the location specified in a POST request

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md).[`low_top_of_page_bid`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#low_top_of_page_bid)

#### Source

main.ts:118962

***

### monthly\_searches?

> **`optional`** **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months by default), targeted to the specified geographic locations;
if there is no data then the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md).[`monthly_searches`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#monthly_searches)

#### Source

main.ts:118973

***

### search\_partners?

> **`optional`** **search\_partners**: `boolean`

indicates whether data from partner networks included in the response

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md).[`search_partners`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#search_partners)

#### Source

main.ts:118942

***

### search\_volume?

> **`optional`** **search\_volume**: `number`

monthly average search volume rate;
represents either the (approximate) number of searches for the given keyword idea on google.com or google.com and partners, depending on the user’s targeting;
if there is no data then the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md).[`search_volume`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#search_volume)

#### Source

main.ts:118958

***

### spell?

> **`optional`** **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md).[`spell`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md#spell)

#### Source

main.ts:118934

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:118986

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:119018

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordsDataGoogleAdsSearchVolumeLiveResultInfo`](KeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataGoogleAdsSearchVolumeLiveResultInfo`](KeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md)

#### Source

main.ts:119011
