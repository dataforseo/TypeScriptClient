[Documentation](../README.md) / [Exports](../modules.md) / IKeywordsDataBingKeywordsForKeywordsLiveResultInfo

# Interface: IKeywordsDataBingKeywordsForKeywordsLiveResultInfo

## Implemented by

- [`KeywordsDataBingKeywordsForKeywordsLiveResultInfo`](../classes/KeywordsDataBingKeywordsForKeywordsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [categories](IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#categories)
- [competition](IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#competition)
- [cpc](IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#cpc)
- [device](IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#device)
- [keyword](IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#keyword)
- [language\_code](IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#language_code)
- [location\_code](IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#location_code)
- [monthly\_searches](IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#monthly_searches)
- [search\_partners](IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#search_partners)
- [search\_volume](IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#search_volume)

## Properties

### categories

• `Optional` **categories**: `string`[]

product and service categories
legacy field, the value will always be null

#### Defined in

main.ts:131583

___

### competition

• `Optional` **competition**: `number`

competition
represents the relative amount of competition associated with the given keyword in paid SERP only. This value is based on Bing Ads data.
Possible values: 0.1, 0.5,0.90.1 – low competition,
0.5 – medium competition,
0.9 – high competition;
if there is no data the value is null

#### Defined in

main.ts:131572

___

### cpc

• `Optional` **cpc**: `number`

cost-per-click
represents the average cost per click (USD) historically paid for the keyword.
if there is no data, then the value is null

#### Defined in

main.ts:131576

___

### device

• `Optional` **device**: `string`

device type
indicates for what device type the data is provided;
possible values: all, mobile, desktop, tablet

#### Defined in

main.ts:131565

___

### keyword

• `Optional` **keyword**: `string`

keyword in a POST array

#### Defined in

main.ts:131553

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:131559

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:131556

___

### monthly\_searches

• `Optional` **monthly\_searches**: [`MonthlySearches`](../classes/MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword (as available for the past twelve months), targeted to the specified geographic locations.
if there is no data, then the value is null

#### Defined in

main.ts:131587

___

### search\_partners

• `Optional` **search\_partners**: `boolean`

indicates whether data from partner networks is included in the response

#### Defined in

main.ts:131561

___

### search\_volume

• `Optional` **search\_volume**: `number`

monthly average search volume rate
represents the (approximate) number of searches for the keyword on the Bing search engine, depending on the user’s targetingsearch volume is rounded to the closest decimal values
if there is no data, then the value is null

#### Defined in

main.ts:131580
