**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo

# Class: KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo

## Implements

- [`IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo(data)

> **new KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo**(`data`?): [`KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo`](KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md)

#### Returns

[`KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo`](KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md)

#### Source

main.ts:117338

## Properties

### competition?

> **`optional`** **competition**: `string`

competition
represents the relative amount of competition associated with the given keyword in paid SERP only;
this value is based on Google Ads data and can take the following values: HIGH, MEDIUM, LOW;
if there is no data the value is null;
learn more about the metric in this help center article

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md).[`competition`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#competition)

#### Source

main.ts:117309

***

### competition\_index?

> **`optional`** **competition\_index**: `number`

competition
represents the relative amount of competition associated with the given keyword in paid SERP only;
this value is based on Google Ads data and can be between 0 and 100 (inclusive);
if there is no data the value is null;
learn more about the metric in this help center article

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md).[`competition_index`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#competition_index)

#### Source

main.ts:117315

***

### cpc?

> **`optional`** **cpc**: `number`

cost per click
indicates the amount paid for each click on the ad displayed for a given keyword

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md).[`cpc`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#cpc)

#### Source

main.ts:117330

***

### high\_top\_of\_page\_bid?

> **`optional`** **high\_top\_of\_page\_bid**: `number`

maximum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 80% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers);
the value may differ depending on the location specified in a POST request

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md).[`high_top_of_page_bid`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#high_top_of_page_bid)

#### Source

main.ts:117327

***

### keyword?

> **`optional`** **keyword**: `string`

keyword
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md).[`keyword`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#keyword)

#### Source

main.ts:117292

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md).[`language_code`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#language_code)

#### Source

main.ts:117301

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md).[`location_code`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#location_code)

#### Source

main.ts:117298

***

### low\_top\_of\_page\_bid?

> **`optional`** **low\_top\_of\_page\_bid**: `number`

minimum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 20% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers);
the value may differ depending on the location specified in a POST request

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md).[`low_top_of_page_bid`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#low_top_of_page_bid)

#### Source

main.ts:117323

***

### monthly\_searches?

> **`optional`** **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months by default), targeted to the specified geographic locations;
if there is no data then the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md).[`monthly_searches`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#monthly_searches)

#### Source

main.ts:117334

***

### search\_partners?

> **`optional`** **search\_partners**: `boolean`

indicates whether data from partner networks included in the response

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md).[`search_partners`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#search_partners)

#### Source

main.ts:117303

***

### search\_volume?

> **`optional`** **search\_volume**: `number`

monthly average search volume rate;
represents either the (approximate) number of searches for the given keyword idea on google.com or google.com and partners, depending on the user’s targeting;
if there is no data then the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md).[`search_volume`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#search_volume)

#### Source

main.ts:117319

***

### spell?

> **`optional`** **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md).[`spell`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#spell)

#### Source

main.ts:117295

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:117347

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:117379

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo`](KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo`](KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md)

#### Source

main.ts:117372
