**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ImpressionsInfo

# Class: ImpressionsInfo

## Implements

- [`IImpressionsInfo`](../interfaces/IImpressionsInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ImpressionsInfo(data)

> **new ImpressionsInfo**(`data`?): [`ImpressionsInfo`](ImpressionsInfo.md)

#### Parameters

• **data?**: [`IImpressionsInfo`](../interfaces/IImpressionsInfo.md)

#### Returns

[`ImpressionsInfo`](ImpressionsInfo.md)

#### Source

main.ts:83801

## Properties

### ad\_position\_average?

> **`optional`** **ad\_position\_average**: `number`

the average ad position
represents the average position of the advertisement

#### Implementation of

[`IImpressionsInfo`](../interfaces/IImpressionsInfo.md).[`ad_position_average`](../interfaces/IImpressionsInfo.md#ad_position_average)

#### Source

main.ts:83755

***

### ad\_position\_max?

> **`optional`** **ad\_position\_max**: `number`

the maximum ad position
represents the maximum position of the advertisement

#### Implementation of

[`IImpressionsInfo`](../interfaces/IImpressionsInfo.md).[`ad_position_max`](../interfaces/IImpressionsInfo.md#ad_position_max)

#### Source

main.ts:83752

***

### ad\_position\_min?

> **`optional`** **ad\_position\_min**: `number`

the minimum ad position
represents the minimum position of the advertisement

#### Implementation of

[`IImpressionsInfo`](../interfaces/IImpressionsInfo.md).[`ad_position_min`](../interfaces/IImpressionsInfo.md#ad_position_min)

#### Source

main.ts:83749

***

### bid?

> **`optional`** **bid**: `number`

the maximum CPC
it stands for the price you are willing to pay for an ad. The higher value, the higher positions and price you will getwe return the results for the 999 bid value to provide the highest number of impressions and level down the account-specific factors

#### Implementation of

[`IImpressionsInfo`](../interfaces/IImpressionsInfo.md).[`bid`](../interfaces/IImpressionsInfo.md#bid)

#### Source

main.ts:83743

***

### cpc\_average?

> **`optional`** **cpc\_average**: `number`

the average value of cost-per-click
the average cost-per-click (USD) for the keyword given that a bid is set to 999;
note: this field does not represent an actual CPC value;
you can find an actual CPC value for a keyword in the cpc field of the keyword_info object

#### Implementation of

[`IImpressionsInfo`](../interfaces/IImpressionsInfo.md).[`cpc_average`](../interfaces/IImpressionsInfo.md#cpc_average)

#### Source

main.ts:83770

***

### cpc\_max?

> **`optional`** **cpc\_max**: `number`

the maximum value of cost-per-click
the maximum cost-per-click (USD) for the keyword given that a bid is set to 999;
note: this field does not represent an actual CPC value;
you can find an actual CPC value for a keyword in the cpc field of the keyword_info object

#### Implementation of

[`IImpressionsInfo`](../interfaces/IImpressionsInfo.md).[`cpc_max`](../interfaces/IImpressionsInfo.md#cpc_max)

#### Source

main.ts:83765

***

### cpc\_min?

> **`optional`** **cpc\_min**: `number`

the minimum value of cost-per-click
the minimum cost-per-click (USD) for the keyword given that a bid is set to 999;
note: this field does not represent an actual CPC value;
you can find an actual CPC value for a keyword in the cpc field of the keyword_info object

#### Implementation of

[`IImpressionsInfo`](../interfaces/IImpressionsInfo.md).[`cpc_min`](../interfaces/IImpressionsInfo.md#cpc_min)

#### Source

main.ts:83760

***

### daily\_clicks\_average?

> **`optional`** **daily\_clicks\_average**: `number`

the average value of daily clicks
represents the average number of daily clicks on the advertisement

#### Implementation of

[`IImpressionsInfo`](../interfaces/IImpressionsInfo.md).[`daily_clicks_average`](../interfaces/IImpressionsInfo.md#daily_clicks_average)

#### Source

main.ts:83788

***

### daily\_clicks\_max?

> **`optional`** **daily\_clicks\_max**: `number`

the maximum value of daily clicks
represents the maximum number of daily clicks on the advertisement

#### Implementation of

[`IImpressionsInfo`](../interfaces/IImpressionsInfo.md).[`daily_clicks_max`](../interfaces/IImpressionsInfo.md#daily_clicks_max)

#### Source

main.ts:83785

***

### daily\_clicks\_min?

> **`optional`** **daily\_clicks\_min**: `number`

the minimum value of daily clicks
represents the minimum number of daily clicks on the advertisement

#### Implementation of

[`IImpressionsInfo`](../interfaces/IImpressionsInfo.md).[`daily_clicks_min`](../interfaces/IImpressionsInfo.md#daily_clicks_min)

#### Source

main.ts:83782

***

### daily\_cost\_average?

> **`optional`** **daily\_cost\_average**: `number`

the average daily charge value
represents the average daily cost of the advertisement (USD)

#### Implementation of

[`IImpressionsInfo`](../interfaces/IImpressionsInfo.md).[`daily_cost_average`](../interfaces/IImpressionsInfo.md#daily_cost_average)

#### Source

main.ts:83797

***

### daily\_cost\_max?

> **`optional`** **daily\_cost\_max**: `number`

the maximum daily charge value
represents the maximum daily cost of the advertisement (USD)

#### Implementation of

[`IImpressionsInfo`](../interfaces/IImpressionsInfo.md).[`daily_cost_max`](../interfaces/IImpressionsInfo.md#daily_cost_max)

#### Source

main.ts:83794

***

### daily\_cost\_min?

> **`optional`** **daily\_cost\_min**: `number`

the minimum daily charge value
represents the minimum daily cost of the advertisement (USD)

#### Implementation of

[`IImpressionsInfo`](../interfaces/IImpressionsInfo.md).[`daily_cost_min`](../interfaces/IImpressionsInfo.md#daily_cost_min)

#### Source

main.ts:83791

***

### daily\_impressions\_average?

> **`optional`** **daily\_impressions\_average**: `number`

the average value of daily impressions
represents the average number of daily impressions of the advertisement given that that a bid is set to 999; provides a more accurate alternative to Google search volume data

#### Implementation of

[`IImpressionsInfo`](../interfaces/IImpressionsInfo.md).[`daily_impressions_average`](../interfaces/IImpressionsInfo.md#daily_impressions_average)

#### Source

main.ts:83779

***

### daily\_impressions\_max?

> **`optional`** **daily\_impressions\_max**: `number`

the maximum value of daily impressions
represents the maximum number of daily impressions of the advertisement given that that a bid is set to 999; provides a more accurate alternative to Google search volume data

#### Implementation of

[`IImpressionsInfo`](../interfaces/IImpressionsInfo.md).[`daily_impressions_max`](../interfaces/IImpressionsInfo.md#daily_impressions_max)

#### Source

main.ts:83776

***

### daily\_impressions\_min?

> **`optional`** **daily\_impressions\_min**: `number`

the minimum value of daily impressions
represents the minimum number of daily impressions of the advertisement given that that a bid is set to 999; provides a more accurate alternative to Google search volume data

#### Implementation of

[`IImpressionsInfo`](../interfaces/IImpressionsInfo.md).[`daily_impressions_min`](../interfaces/IImpressionsInfo.md#daily_impressions_min)

#### Source

main.ts:83773

***

### last\_updated\_time?

> **`optional`** **last\_updated\_time**: `string`

date and time when impressions data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IImpressionsInfo`](../interfaces/IImpressionsInfo.md).[`last_updated_time`](../interfaces/IImpressionsInfo.md#last_updated_time)

#### Source

main.ts:83740

***

### match\_type?

> **`optional`** **match\_type**: `string`

type of keyword match
can take the following values: exact, broad, phrase

#### Implementation of

[`IImpressionsInfo`](../interfaces/IImpressionsInfo.md).[`match_type`](../interfaces/IImpressionsInfo.md#match_type)

#### Source

main.ts:83746

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IImpressionsInfo`](../interfaces/IImpressionsInfo.md).[`se_type`](../interfaces/IImpressionsInfo.md#se_type)

#### Source

main.ts:83735

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:83810

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:83845

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ImpressionsInfo`](ImpressionsInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`ImpressionsInfo`](ImpressionsInfo.md)

#### Source

main.ts:83838
