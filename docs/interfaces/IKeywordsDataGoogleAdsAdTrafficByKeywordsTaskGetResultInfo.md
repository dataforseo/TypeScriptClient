[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo

# Interface: IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo

## Implemented by

- [`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo`](../classes/KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [average\_cpc](IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#average_cpc)
- [bid](IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#bid)
- [clicks](IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#clicks)
- [cost](IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#cost)
- [ctr](IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#ctr)
- [date\_interval](IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#date_interval)
- [impressions](IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#impressions)
- [keyword](IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#keyword)
- [language\_code](IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#language_code)
- [location\_code](IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#location_code)
- [match](IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#match)
- [search\_partners](IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#search_partners)

## Properties

### average\_cpc

• `Optional` **average\_cpc**: `number`

the average cost-per-click value
represents the cost-per-click (USD) estimated for a keyword based on the specified time period and historical data;
if there is no data, then the value is null

#### Defined in

[main.ts:118332](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118332)

___


### bid

• `Optional` **bid**: `number`

the maximum custom bid
the bid you have specified when setting the task
represents the price you are willing to pay for an ad
the higher value you have specified, the higher metrics and cost you receive in response
learn more in this help center article

#### Defined in

[main.ts:118316](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118316)

___


### clicks

• `Optional` **clicks**: `number`

number of clicks on an ad
number of clicks an ad is projected to get within the specified time period
if there is no data, then the value is null

#### Defined in

[main.ts:118340](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118340)

___


### cost

• `Optional` **cost**: `number`

charge for an ad
amount that will be charged for running an ad within the specified time period
if there is no data, then the value is null

#### Defined in

[main.ts:118336](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118336)

___


### ctr

• `Optional` **ctr**: `number`

projected clickthrough rate (CTR) of the advertisement
number of clicks an ad is projected to receive divided by the number of ad impressions; the CTR is projected for the specified time period
if there is no data, then the value is null

#### Defined in

[main.ts:118328](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118328)

___


### date\_interval

• `Optional` **date\_interval**: `string`

forecasting date interval in a POST array

#### Defined in

[main.ts:118305](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118305)

___


### impressions

• `Optional` **impressions**: `number`

projected number of ad impressions
number of impressions an ad is projected to get within the specified time period
if there is no data, then the value is null
learn more about impressions in this help center article

#### Defined in

[main.ts:118324](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118324)

___


### keyword

• `Optional` **keyword**: `string`

keyword in a POST array
metrics are provided for all the keywords specified in the POST array

#### Defined in

[main.ts:118297](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118297)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

[main.ts:118303](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118303)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

[main.ts:118300](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118300)

___


### match

• `Optional` **match**: `string`

keywords match-type
can take the following values: exact, broad, phrase

#### Defined in

[main.ts:118319](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118319)

___


### search\_partners

• `Optional` **search\_partners**: `boolean`

include Google search partners
the value you specified when setting the task
if true, the results are returned for owned, operated, and syndicated networks across Google and partner sites that host Google search;
if false, the results are returned for Google search sites only

#### Defined in

[main.ts:118310](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118310)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")