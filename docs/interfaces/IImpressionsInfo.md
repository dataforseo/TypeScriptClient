[dataforseo-client](../README.md) / [Exports](../modules.md) / IImpressionsInfo

# Interface: IImpressionsInfo

## Implemented by

- [`ImpressionsInfo`](../classes/ImpressionsInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [ad\_position\_average](IImpressionsInfo.md#ad_position_average)
- [ad\_position\_max](IImpressionsInfo.md#ad_position_max)
- [ad\_position\_min](IImpressionsInfo.md#ad_position_min)
- [bid](IImpressionsInfo.md#bid)
- [cpc\_average](IImpressionsInfo.md#cpc_average)
- [cpc\_max](IImpressionsInfo.md#cpc_max)
- [cpc\_min](IImpressionsInfo.md#cpc_min)
- [daily\_clicks\_average](IImpressionsInfo.md#daily_clicks_average)
- [daily\_clicks\_max](IImpressionsInfo.md#daily_clicks_max)
- [daily\_clicks\_min](IImpressionsInfo.md#daily_clicks_min)
- [daily\_cost\_average](IImpressionsInfo.md#daily_cost_average)
- [daily\_cost\_max](IImpressionsInfo.md#daily_cost_max)
- [daily\_cost\_min](IImpressionsInfo.md#daily_cost_min)
- [daily\_impressions\_average](IImpressionsInfo.md#daily_impressions_average)
- [daily\_impressions\_max](IImpressionsInfo.md#daily_impressions_max)
- [daily\_impressions\_min](IImpressionsInfo.md#daily_impressions_min)
- [last\_updated\_time](IImpressionsInfo.md#last_updated_time)
- [match\_type](IImpressionsInfo.md#match_type)
- [se\_type](IImpressionsInfo.md#se_type)

## Properties

### ad\_position\_average

• `Optional` **ad\_position\_average**: `number`

the average ad position
represents the average position of the advertisement

#### Defined in

[main.ts:79277](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79277)

___

### ad\_position\_max

• `Optional` **ad\_position\_max**: `number`

the maximum ad position
represents the maximum position of the advertisement

#### Defined in

[main.ts:79274](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79274)

___

### ad\_position\_min

• `Optional` **ad\_position\_min**: `number`

the minimum ad position
represents the minimum position of the advertisement

#### Defined in

[main.ts:79271](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79271)

___

### bid

• `Optional` **bid**: `number`

the maximum CPC
it stands for the price you are willing to pay for an ad. The higher value, the higher positions and price you will getwe return the results for the 999 bid value to provide the highest number of impressions and level down the account-specific factors

#### Defined in

[main.ts:79265](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79265)

___

### cpc\_average

• `Optional` **cpc\_average**: `number`

the average value of cost-per-click
the average cost-per-click (USD) for the keyword given that a bid is set to 999;
note: this field does not represent an actual CPC value;
you can find an actual CPC value for a keyword in the cpc field of the keyword_info object

#### Defined in

[main.ts:79292](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79292)

___

### cpc\_max

• `Optional` **cpc\_max**: `number`

the maximum value of cost-per-click
the maximum cost-per-click (USD) for the keyword given that a bid is set to 999;
note: this field does not represent an actual CPC value;
you can find an actual CPC value for a keyword in the cpc field of the keyword_info object

#### Defined in

[main.ts:79287](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79287)

___

### cpc\_min

• `Optional` **cpc\_min**: `number`

the minimum value of cost-per-click
the minimum cost-per-click (USD) for the keyword given that a bid is set to 999;
note: this field does not represent an actual CPC value;
you can find an actual CPC value for a keyword in the cpc field of the keyword_info object

#### Defined in

[main.ts:79282](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79282)

___

### daily\_clicks\_average

• `Optional` **daily\_clicks\_average**: `number`

the average value of daily clicks
represents the average number of daily clicks on the advertisement

#### Defined in

[main.ts:79310](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79310)

___

### daily\_clicks\_max

• `Optional` **daily\_clicks\_max**: `number`

the maximum value of daily clicks
represents the maximum number of daily clicks on the advertisement

#### Defined in

[main.ts:79307](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79307)

___

### daily\_clicks\_min

• `Optional` **daily\_clicks\_min**: `number`

the minimum value of daily clicks
represents the minimum number of daily clicks on the advertisement

#### Defined in

[main.ts:79304](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79304)

___

### daily\_cost\_average

• `Optional` **daily\_cost\_average**: `number`

the average daily charge value
represents the average daily cost of the advertisement (USD)

#### Defined in

[main.ts:79319](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79319)

___

### daily\_cost\_max

• `Optional` **daily\_cost\_max**: `number`

the maximum daily charge value
represents the maximum daily cost of the advertisement (USD)

#### Defined in

[main.ts:79316](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79316)

___

### daily\_cost\_min

• `Optional` **daily\_cost\_min**: `number`

the minimum daily charge value
represents the minimum daily cost of the advertisement (USD)

#### Defined in

[main.ts:79313](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79313)

___

### daily\_impressions\_average

• `Optional` **daily\_impressions\_average**: `number`

the average value of daily impressions
represents the average number of daily impressions of the advertisement given that that a bid is set to 999; provides a more accurate alternative to Google search volume data

#### Defined in

[main.ts:79301](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79301)

___

### daily\_impressions\_max

• `Optional` **daily\_impressions\_max**: `number`

the maximum value of daily impressions
represents the maximum number of daily impressions of the advertisement given that that a bid is set to 999; provides a more accurate alternative to Google search volume data

#### Defined in

[main.ts:79298](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79298)

___

### daily\_impressions\_min

• `Optional` **daily\_impressions\_min**: `number`

the minimum value of daily impressions
represents the minimum number of daily impressions of the advertisement given that that a bid is set to 999; provides a more accurate alternative to Google search volume data

#### Defined in

[main.ts:79295](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79295)

___

### last\_updated\_time

• `Optional` **last\_updated\_time**: `string`

date and time when impressions data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:79262](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79262)

___

### match\_type

• `Optional` **match\_type**: `string`

type of keyword match
can take the following values: exact, broad, phrase

#### Defined in

[main.ts:79268](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79268)

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

[main.ts:79257](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79257)
