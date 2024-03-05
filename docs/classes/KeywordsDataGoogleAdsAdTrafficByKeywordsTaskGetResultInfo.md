[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo

# Class: KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo

## Implements

- [`IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#constructor)

### Properties

- [average\_cpc](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#average_cpc)
- [bid](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#bid)
- [clicks](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#clicks)
- [cost](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#cost)
- [ctr](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#ctr)
- [date\_interval](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#date_interval)
- [impressions](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#impressions)
- [keyword](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#keyword)
- [language\_code](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#language_code)
- [location\_code](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#location_code)
- [match](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#match)
- [search\_partners](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#search_partners)

### Methods

- [init](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#init)
- [toJSON](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#tojson)
- [fromJS](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo**(`data?`): [`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md) |

#### Returns

[`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md)

#### Defined in

[main.ts:118235](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118235)

## Properties

### average\_cpc

• `Optional` **average\_cpc**: `number`

the average cost-per-click value
represents the cost-per-click (USD) estimated for a keyword based on the specified time period and historical data;
if there is no data, then the value is null

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md).[average_cpc](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#average_cpc)

#### Defined in

[main.ts:118223](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118223)

___

### bid

• `Optional` **bid**: `number`

the maximum custom bid
the bid you have specified when setting the task
represents the price you are willing to pay for an ad
the higher value you have specified, the higher metrics and cost you receive in response
learn more in this help center article

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md).[bid](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#bid)

#### Defined in

[main.ts:118207](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118207)

___

### clicks

• `Optional` **clicks**: `number`

number of clicks on an ad
number of clicks an ad is projected to get within the specified time period
if there is no data, then the value is null

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md).[clicks](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#clicks)

#### Defined in

[main.ts:118231](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118231)

___

### cost

• `Optional` **cost**: `number`

charge for an ad
amount that will be charged for running an ad within the specified time period
if there is no data, then the value is null

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md).[cost](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#cost)

#### Defined in

[main.ts:118227](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118227)

___

### ctr

• `Optional` **ctr**: `number`

projected clickthrough rate (CTR) of the advertisement
number of clicks an ad is projected to receive divided by the number of ad impressions; the CTR is projected for the specified time period
if there is no data, then the value is null

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md).[ctr](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#ctr)

#### Defined in

[main.ts:118219](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118219)

___

### date\_interval

• `Optional` **date\_interval**: `string`

forecasting date interval in a POST array

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md).[date_interval](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#date_interval)

#### Defined in

[main.ts:118196](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118196)

___

### impressions

• `Optional` **impressions**: `number`

projected number of ad impressions
number of impressions an ad is projected to get within the specified time period
if there is no data, then the value is null
learn more about impressions in this help center article

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md).[impressions](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#impressions)

#### Defined in

[main.ts:118215](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118215)

___

### keyword

• `Optional` **keyword**: `string`

keyword in a POST array
metrics are provided for all the keywords specified in the POST array

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md).[keyword](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#keyword)

#### Defined in

[main.ts:118188](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118188)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md).[language_code](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#language_code)

#### Defined in

[main.ts:118194](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118194)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md).[location_code](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#location_code)

#### Defined in

[main.ts:118191](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118191)

___

### match

• `Optional` **match**: `string`

keywords match-type
can take the following values: exact, broad, phrase

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md).[match](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#match)

#### Defined in

[main.ts:118210](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118210)

___

### search\_partners

• `Optional` **search\_partners**: `boolean`

include Google search partners
the value you specified when setting the task
if true, the results are returned for owned, operated, and syndicated networks across Google and partner sites that host Google search;
if false, the results are returned for Google search sites only

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md).[search_partners](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#search_partners)

#### Defined in

[main.ts:118201](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118201)

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

[main.ts:118244](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118244)

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

[main.ts:118272](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118272)

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md)

#### Defined in

[main.ts:118265](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118265)
