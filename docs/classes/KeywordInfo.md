[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / KeywordInfo

# Class: KeywordInfo

## Implements

- [`IKeywordInfo`](../interfaces/IKeywordInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordInfo()

> **new KeywordInfo**(`data`?): [`KeywordInfo`](KeywordInfo.md)

#### Parameters

• **data?**: [`IKeywordInfo`](../interfaces/IKeywordInfo.md)

#### Returns

[`KeywordInfo`](KeywordInfo.md)

#### Defined in

main.ts:83999

## Properties

### categories?

> `optional` **categories**: `number`[]

product and service categories
you can download the full list of possible categories

#### Implementation of

[`IKeywordInfo`](../interfaces/IKeywordInfo.md).[`categories`](../interfaces/IKeywordInfo.md#categories)

#### Defined in

main.ts:83992

***

### competition?

> `optional` **competition**: `number`

competition
represents the relative amount of competition associated with the given keyword. This value is based on Google Ads data and can be between 0 and 1 (inclusive)

#### Implementation of

[`IKeywordInfo`](../interfaces/IKeywordInfo.md).[`competition`](../interfaces/IKeywordInfo.md#competition)

#### Defined in

main.ts:83969

***

### competition\_level?

> `optional` **competition\_level**: `string`

competition level
represents the relative level of competition associated with the given keyword in paid SERP only;
possible values: LOW, MEDIUM, HIGH
if competition level is unknown, the value is null;
learn more about the metric in this help center article

#### Implementation of

[`IKeywordInfo`](../interfaces/IKeywordInfo.md).[`competition_level`](../interfaces/IKeywordInfo.md#competition_level)

#### Defined in

main.ts:83975

***

### cpc?

> `optional` **cpc**: `number`

cost-per-click
represents the average cost per click (USD) historically paid for the keyword

#### Implementation of

[`IKeywordInfo`](../interfaces/IKeywordInfo.md).[`cpc`](../interfaces/IKeywordInfo.md#cpc)

#### Defined in

main.ts:83978

***

### high\_top\_of\_page\_bid?

> `optional` **high\_top\_of\_page\_bid**: `number`

maximum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 80% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers)
the value may differ depending on the location specified in a POST request

#### Implementation of

[`IKeywordInfo`](../interfaces/IKeywordInfo.md).[`high_top_of_page_bid`](../interfaces/IKeywordInfo.md#high_top_of_page_bid)

#### Defined in

main.ts:83989

***

### last\_updated\_time?

> `optional` **last\_updated\_time**: `string`

date and time when keyword data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IKeywordInfo`](../interfaces/IKeywordInfo.md).[`last_updated_time`](../interfaces/IKeywordInfo.md#last_updated_time)

#### Defined in

main.ts:83966

***

### low\_top\_of\_page\_bid?

> `optional` **low\_top\_of\_page\_bid**: `number`

minimum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 20% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers)
the value may differ depending on the location specified in a POST request

#### Implementation of

[`IKeywordInfo`](../interfaces/IKeywordInfo.md).[`low_top_of_page_bid`](../interfaces/IKeywordInfo.md#low_top_of_page_bid)

#### Defined in

main.ts:83985

***

### monthly\_searches?

> `optional` **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations

#### Implementation of

[`IKeywordInfo`](../interfaces/IKeywordInfo.md).[`monthly_searches`](../interfaces/IKeywordInfo.md#monthly_searches)

#### Defined in

main.ts:83995

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IKeywordInfo`](../interfaces/IKeywordInfo.md).[`se_type`](../interfaces/IKeywordInfo.md#se_type)

#### Defined in

main.ts:83961

***

### search\_volume?

> `optional` **search\_volume**: `number`

average monthly search volume rate
represents the (approximate) number of searches for the given keyword idea on google.com

#### Implementation of

[`IKeywordInfo`](../interfaces/IKeywordInfo.md).[`search_volume`](../interfaces/IKeywordInfo.md#search_volume)

#### Defined in

main.ts:83981

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:84008

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:84042

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordInfo`](KeywordInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordInfo`](KeywordInfo.md)

#### Defined in

main.ts:84035
