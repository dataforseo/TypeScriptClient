[Documentation](../README.md) / [Exports](../modules.md) / IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo

# Interface: IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo

## Implemented by

- [`KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](../classes/KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [average\_cpc](IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md#average_cpc)
- [bid](IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md#bid)
- [clicks](IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md#clicks)
- [cost](IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md#cost)
- [ctr](IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md#ctr)
- [date\_interval](IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md#date_interval)
- [impressions](IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md#impressions)
- [keyword](IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md#keyword)
- [language\_code](IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md#language_code)
- [location\_code](IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md#location_code)
- [match](IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md#match)
- [search\_partners](IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md#search_partners)

## Properties

### average\_cpc

• `Optional` **average\_cpc**: `number`

the average cost-per-click value
represents the cost-per-click (USD) estimated for a keyword based on the specified time period and historical data;
if there is no data, then the value is null

#### Defined in

main.ts:119022

___

### bid

• `Optional` **bid**: `number`

the maximum custom bid
the bid you have specified when setting the task
represents the price you are willing to pay for an ad
the higher value you have specified, the higher metrics and cost you receive in response
learn more in this help center article

#### Defined in

main.ts:119006

___

### clicks

• `Optional` **clicks**: `number`

number of clicks on an ad
number of clicks an ad is projected to get within the specified time period
if there is no data, then the value is null

#### Defined in

main.ts:119030

___

### cost

• `Optional` **cost**: `number`

charge for an ad
amount that will be charged for running an ad within the specified time period
if there is no data, then the value is null

#### Defined in

main.ts:119026

___

### ctr

• `Optional` **ctr**: `number`

projected click through rate (CTR) of the advertisement
number of clicks an ad is projected to receive divided by the number of ad impressions; the CTR is projected for the specified time period
if there is no data, then the value is null

#### Defined in

main.ts:119018

___

### date\_interval

• `Optional` **date\_interval**: `string`

forecasting date interval in a POST array

#### Defined in

main.ts:118995

___

### impressions

• `Optional` **impressions**: `number`

projected number of ad impressions
number of impressions an ad is projected to get within the specified time period
if there is no data, then the value is null
learn more about impressions in this help center article

#### Defined in

main.ts:119014

___

### keyword

• `Optional` **keyword**: `string`

keyword in a POST array

#### Defined in

main.ts:118987

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:118993

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:118990

___

### match

• `Optional` **match**: `string`

keywords match-type
can take the following values: exact, broad, phrase

#### Defined in

main.ts:119009

___

### search\_partners

• `Optional` **search\_partners**: `boolean`

include Google search partners
the value you specified when setting the task
if true, the results are returned for owned, operated, and syndicated networks across Google and partner sites that host Google search;
if false, the results are returned for Google search sites only

#### Defined in

main.ts:119000
