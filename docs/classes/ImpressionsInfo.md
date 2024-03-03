[Documentation](../README.md) / [Exports](../modules.md) / ImpressionsInfo

# Class: ImpressionsInfo

## Implements

- [`IImpressionsInfo`](../interfaces/IImpressionsInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ImpressionsInfo.md#constructor)

### Properties

- [ad\_position\_average](ImpressionsInfo.md#ad_position_average)
- [ad\_position\_max](ImpressionsInfo.md#ad_position_max)
- [ad\_position\_min](ImpressionsInfo.md#ad_position_min)
- [bid](ImpressionsInfo.md#bid)
- [cpc\_average](ImpressionsInfo.md#cpc_average)
- [cpc\_max](ImpressionsInfo.md#cpc_max)
- [cpc\_min](ImpressionsInfo.md#cpc_min)
- [daily\_clicks\_average](ImpressionsInfo.md#daily_clicks_average)
- [daily\_clicks\_max](ImpressionsInfo.md#daily_clicks_max)
- [daily\_clicks\_min](ImpressionsInfo.md#daily_clicks_min)
- [daily\_cost\_average](ImpressionsInfo.md#daily_cost_average)
- [daily\_cost\_max](ImpressionsInfo.md#daily_cost_max)
- [daily\_cost\_min](ImpressionsInfo.md#daily_cost_min)
- [daily\_impressions\_average](ImpressionsInfo.md#daily_impressions_average)
- [daily\_impressions\_max](ImpressionsInfo.md#daily_impressions_max)
- [daily\_impressions\_min](ImpressionsInfo.md#daily_impressions_min)
- [last\_updated\_time](ImpressionsInfo.md#last_updated_time)
- [match\_type](ImpressionsInfo.md#match_type)
- [se\_type](ImpressionsInfo.md#se_type)

### Methods

- [init](ImpressionsInfo.md#init)
- [toJSON](ImpressionsInfo.md#tojson)
- [fromJS](ImpressionsInfo.md#fromjs)

## Constructors

### constructor

• **new ImpressionsInfo**(`data?`): [`ImpressionsInfo`](ImpressionsInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IImpressionsInfo`](../interfaces/IImpressionsInfo.md) |

#### Returns

[`ImpressionsInfo`](ImpressionsInfo.md)

#### Defined in

main.ts:79326

## Properties

### ad\_position\_average

• `Optional` **ad\_position\_average**: `number`

the average ad position
represents the average position of the advertisement

#### Implementation of

[IImpressionsInfo](../interfaces/IImpressionsInfo.md).[ad_position_average](../interfaces/IImpressionsInfo.md#ad_position_average)

#### Defined in

main.ts:79280

___

### ad\_position\_max

• `Optional` **ad\_position\_max**: `number`

the maximum ad position
represents the maximum position of the advertisement

#### Implementation of

[IImpressionsInfo](../interfaces/IImpressionsInfo.md).[ad_position_max](../interfaces/IImpressionsInfo.md#ad_position_max)

#### Defined in

main.ts:79277

___

### ad\_position\_min

• `Optional` **ad\_position\_min**: `number`

the minimum ad position
represents the minimum position of the advertisement

#### Implementation of

[IImpressionsInfo](../interfaces/IImpressionsInfo.md).[ad_position_min](../interfaces/IImpressionsInfo.md#ad_position_min)

#### Defined in

main.ts:79274

___

### bid

• `Optional` **bid**: `number`

the maximum CPC
it stands for the price you are willing to pay for an ad. The higher value, the higher positions and price you will getwe return the results for the 999 bid value to provide the highest number of impressions and level down the account-specific factors

#### Implementation of

[IImpressionsInfo](../interfaces/IImpressionsInfo.md).[bid](../interfaces/IImpressionsInfo.md#bid)

#### Defined in

main.ts:79268

___

### cpc\_average

• `Optional` **cpc\_average**: `number`

the average value of cost-per-click
the average cost-per-click (USD) for the keyword given that a bid is set to 999;
note: this field does not represent an actual CPC value;
you can find an actual CPC value for a keyword in the cpc field of the keyword_info object

#### Implementation of

[IImpressionsInfo](../interfaces/IImpressionsInfo.md).[cpc_average](../interfaces/IImpressionsInfo.md#cpc_average)

#### Defined in

main.ts:79295

___

### cpc\_max

• `Optional` **cpc\_max**: `number`

the maximum value of cost-per-click
the maximum cost-per-click (USD) for the keyword given that a bid is set to 999;
note: this field does not represent an actual CPC value;
you can find an actual CPC value for a keyword in the cpc field of the keyword_info object

#### Implementation of

[IImpressionsInfo](../interfaces/IImpressionsInfo.md).[cpc_max](../interfaces/IImpressionsInfo.md#cpc_max)

#### Defined in

main.ts:79290

___

### cpc\_min

• `Optional` **cpc\_min**: `number`

the minimum value of cost-per-click
the minimum cost-per-click (USD) for the keyword given that a bid is set to 999;
note: this field does not represent an actual CPC value;
you can find an actual CPC value for a keyword in the cpc field of the keyword_info object

#### Implementation of

[IImpressionsInfo](../interfaces/IImpressionsInfo.md).[cpc_min](../interfaces/IImpressionsInfo.md#cpc_min)

#### Defined in

main.ts:79285

___

### daily\_clicks\_average

• `Optional` **daily\_clicks\_average**: `number`

the average value of daily clicks
represents the average number of daily clicks on the advertisement

#### Implementation of

[IImpressionsInfo](../interfaces/IImpressionsInfo.md).[daily_clicks_average](../interfaces/IImpressionsInfo.md#daily_clicks_average)

#### Defined in

main.ts:79313

___

### daily\_clicks\_max

• `Optional` **daily\_clicks\_max**: `number`

the maximum value of daily clicks
represents the maximum number of daily clicks on the advertisement

#### Implementation of

[IImpressionsInfo](../interfaces/IImpressionsInfo.md).[daily_clicks_max](../interfaces/IImpressionsInfo.md#daily_clicks_max)

#### Defined in

main.ts:79310

___

### daily\_clicks\_min

• `Optional` **daily\_clicks\_min**: `number`

the minimum value of daily clicks
represents the minimum number of daily clicks on the advertisement

#### Implementation of

[IImpressionsInfo](../interfaces/IImpressionsInfo.md).[daily_clicks_min](../interfaces/IImpressionsInfo.md#daily_clicks_min)

#### Defined in

main.ts:79307

___

### daily\_cost\_average

• `Optional` **daily\_cost\_average**: `number`

the average daily charge value
represents the average daily cost of the advertisement (USD)

#### Implementation of

[IImpressionsInfo](../interfaces/IImpressionsInfo.md).[daily_cost_average](../interfaces/IImpressionsInfo.md#daily_cost_average)

#### Defined in

main.ts:79322

___

### daily\_cost\_max

• `Optional` **daily\_cost\_max**: `number`

the maximum daily charge value
represents the maximum daily cost of the advertisement (USD)

#### Implementation of

[IImpressionsInfo](../interfaces/IImpressionsInfo.md).[daily_cost_max](../interfaces/IImpressionsInfo.md#daily_cost_max)

#### Defined in

main.ts:79319

___

### daily\_cost\_min

• `Optional` **daily\_cost\_min**: `number`

the minimum daily charge value
represents the minimum daily cost of the advertisement (USD)

#### Implementation of

[IImpressionsInfo](../interfaces/IImpressionsInfo.md).[daily_cost_min](../interfaces/IImpressionsInfo.md#daily_cost_min)

#### Defined in

main.ts:79316

___

### daily\_impressions\_average

• `Optional` **daily\_impressions\_average**: `number`

the average value of daily impressions
represents the average number of daily impressions of the advertisement given that that a bid is set to 999; provides a more accurate alternative to Google search volume data

#### Implementation of

[IImpressionsInfo](../interfaces/IImpressionsInfo.md).[daily_impressions_average](../interfaces/IImpressionsInfo.md#daily_impressions_average)

#### Defined in

main.ts:79304

___

### daily\_impressions\_max

• `Optional` **daily\_impressions\_max**: `number`

the maximum value of daily impressions
represents the maximum number of daily impressions of the advertisement given that that a bid is set to 999; provides a more accurate alternative to Google search volume data

#### Implementation of

[IImpressionsInfo](../interfaces/IImpressionsInfo.md).[daily_impressions_max](../interfaces/IImpressionsInfo.md#daily_impressions_max)

#### Defined in

main.ts:79301

___

### daily\_impressions\_min

• `Optional` **daily\_impressions\_min**: `number`

the minimum value of daily impressions
represents the minimum number of daily impressions of the advertisement given that that a bid is set to 999; provides a more accurate alternative to Google search volume data

#### Implementation of

[IImpressionsInfo](../interfaces/IImpressionsInfo.md).[daily_impressions_min](../interfaces/IImpressionsInfo.md#daily_impressions_min)

#### Defined in

main.ts:79298

___

### last\_updated\_time

• `Optional` **last\_updated\_time**: `string`

date and time when impressions data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IImpressionsInfo](../interfaces/IImpressionsInfo.md).[last_updated_time](../interfaces/IImpressionsInfo.md#last_updated_time)

#### Defined in

main.ts:79265

___

### match\_type

• `Optional` **match\_type**: `string`

type of keyword match
can take the following values: exact, broad, phrase

#### Implementation of

[IImpressionsInfo](../interfaces/IImpressionsInfo.md).[match_type](../interfaces/IImpressionsInfo.md#match_type)

#### Defined in

main.ts:79271

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IImpressionsInfo](../interfaces/IImpressionsInfo.md).[se_type](../interfaces/IImpressionsInfo.md#se_type)

#### Defined in

main.ts:79260

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

main.ts:79335

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

main.ts:79370

___

### fromJS

▸ **fromJS**(`data`): [`ImpressionsInfo`](ImpressionsInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ImpressionsInfo`](ImpressionsInfo.md)

#### Defined in

main.ts:79363
