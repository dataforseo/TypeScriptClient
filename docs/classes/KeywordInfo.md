[Documentation](../README.md) / [Exports](../modules.md) / KeywordInfo

# Class: KeywordInfo

## Implements

- [`IKeywordInfo`](../interfaces/IKeywordInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordInfo.md#constructor)

### Properties

- [categories](KeywordInfo.md#categories)
- [competition](KeywordInfo.md#competition)
- [competition\_level](KeywordInfo.md#competition_level)
- [cpc](KeywordInfo.md#cpc)
- [high\_top\_of\_page\_bid](KeywordInfo.md#high_top_of_page_bid)
- [last\_updated\_time](KeywordInfo.md#last_updated_time)
- [low\_top\_of\_page\_bid](KeywordInfo.md#low_top_of_page_bid)
- [monthly\_searches](KeywordInfo.md#monthly_searches)
- [se\_type](KeywordInfo.md#se_type)
- [search\_volume](KeywordInfo.md#search_volume)

### Methods

- [init](KeywordInfo.md#init)
- [toJSON](KeywordInfo.md#tojson)
- [fromJS](KeywordInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordInfo**(`data?`): [`KeywordInfo`](KeywordInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordInfo`](../interfaces/IKeywordInfo.md) |

#### Returns

[`KeywordInfo`](KeywordInfo.md)

#### Defined in

main.ts:81277

## Properties

### categories

• `Optional` **categories**: `number`[]

product and service categories
you can download the full list of possible categories

#### Implementation of

[IKeywordInfo](../interfaces/IKeywordInfo.md).[categories](../interfaces/IKeywordInfo.md#categories)

#### Defined in

main.ts:81270

___

### competition

• `Optional` **competition**: `number`

competition
represents the relative amount of competition associated with the given keyword. This value is based on Google Ads data and can be between 0 and 1 (inclusive)

#### Implementation of

[IKeywordInfo](../interfaces/IKeywordInfo.md).[competition](../interfaces/IKeywordInfo.md#competition)

#### Defined in

main.ts:81247

___

### competition\_level

• `Optional` **competition\_level**: `string`

competition level
represents the relative level of competition associated with the given keyword in paid SERP only;
possible values: LOW, MEDIUM, HIGH
if competition level is unknown, the value is null;
learn more about the metric in this help center article

#### Implementation of

[IKeywordInfo](../interfaces/IKeywordInfo.md).[competition_level](../interfaces/IKeywordInfo.md#competition_level)

#### Defined in

main.ts:81253

___

### cpc

• `Optional` **cpc**: `number`

cost-per-click
represents the average cost per click (USD) historically paid for the keyword

#### Implementation of

[IKeywordInfo](../interfaces/IKeywordInfo.md).[cpc](../interfaces/IKeywordInfo.md#cpc)

#### Defined in

main.ts:81256

___

### high\_top\_of\_page\_bid

• `Optional` **high\_top\_of\_page\_bid**: `number`

maximum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 80% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers)
the value may differ depending on the location specified in a POST request

#### Implementation of

[IKeywordInfo](../interfaces/IKeywordInfo.md).[high_top_of_page_bid](../interfaces/IKeywordInfo.md#high_top_of_page_bid)

#### Defined in

main.ts:81267

___

### last\_updated\_time

• `Optional` **last\_updated\_time**: `string`

date and time when keyword data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IKeywordInfo](../interfaces/IKeywordInfo.md).[last_updated_time](../interfaces/IKeywordInfo.md#last_updated_time)

#### Defined in

main.ts:81244

___

### low\_top\_of\_page\_bid

• `Optional` **low\_top\_of\_page\_bid**: `number`

minimum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 20% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers)
the value may differ depending on the location specified in a POST request

#### Implementation of

[IKeywordInfo](../interfaces/IKeywordInfo.md).[low_top_of_page_bid](../interfaces/IKeywordInfo.md#low_top_of_page_bid)

#### Defined in

main.ts:81263

___

### monthly\_searches

• `Optional` **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations

#### Implementation of

[IKeywordInfo](../interfaces/IKeywordInfo.md).[monthly_searches](../interfaces/IKeywordInfo.md#monthly_searches)

#### Defined in

main.ts:81273

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IKeywordInfo](../interfaces/IKeywordInfo.md).[se_type](../interfaces/IKeywordInfo.md#se_type)

#### Defined in

main.ts:81239

___

### search\_volume

• `Optional` **search\_volume**: `number`

average monthly search volume rate
represents the (approximate) number of searches for the given keyword idea on google.com

#### Implementation of

[IKeywordInfo](../interfaces/IKeywordInfo.md).[search_volume](../interfaces/IKeywordInfo.md#search_volume)

#### Defined in

main.ts:81259

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

main.ts:81286

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

main.ts:81320

___

### fromJS

▸ **fromJS**(`data`): [`KeywordInfo`](KeywordInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordInfo`](KeywordInfo.md)

#### Defined in

main.ts:81313
