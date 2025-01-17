[**Documentation**](../README.md)

***

[Documentation](../README.md) / ImpressionsInfo

# Class: ImpressionsInfo

Defined in: main.ts:92772

## Implements

- [`IImpressionsInfo`](../interfaces/IImpressionsInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ImpressionsInfo()

> **new ImpressionsInfo**(`data`?): [`ImpressionsInfo`](ImpressionsInfo.md)

Defined in: main.ts:92840

#### Parameters

##### data?

[`IImpressionsInfo`](../interfaces/IImpressionsInfo.md)

#### Returns

[`ImpressionsInfo`](ImpressionsInfo.md)

## Properties

### ad\_position\_average?

> `optional` **ad\_position\_average**: `number`

Defined in: main.ts:92794

the average ad position
represents the average position of the advertisement

#### Implementation of

[`IImpressionsInfo`](../interfaces/IImpressionsInfo.md).[`ad_position_average`](../interfaces/IImpressionsInfo.md#ad_position_average)

***

### ad\_position\_max?

> `optional` **ad\_position\_max**: `number`

Defined in: main.ts:92791

the maximum ad position
represents the maximum position of the advertisement

#### Implementation of

[`IImpressionsInfo`](../interfaces/IImpressionsInfo.md).[`ad_position_max`](../interfaces/IImpressionsInfo.md#ad_position_max)

***

### ad\_position\_min?

> `optional` **ad\_position\_min**: `number`

Defined in: main.ts:92788

the minimum ad position
represents the minimum position of the advertisement

#### Implementation of

[`IImpressionsInfo`](../interfaces/IImpressionsInfo.md).[`ad_position_min`](../interfaces/IImpressionsInfo.md#ad_position_min)

***

### bid?

> `optional` **bid**: `number`

Defined in: main.ts:92782

the maximum CPC
it stands for the price you are willing to pay for an ad. The higher value, the higher positions and price you will getwe return the results for the 999 bid value to provide the highest number of impressions and level down the account-specific factors

#### Implementation of

[`IImpressionsInfo`](../interfaces/IImpressionsInfo.md).[`bid`](../interfaces/IImpressionsInfo.md#bid)

***

### cpc\_average?

> `optional` **cpc\_average**: `number`

Defined in: main.ts:92809

the average value of cost-per-click
the average cost-per-click (USD) for the keyword given that a bid is set to 999;
note: this field does not represent an actual CPC value;
you can find an actual CPC value for a keyword in the cpc field of the keyword_info object

#### Implementation of

[`IImpressionsInfo`](../interfaces/IImpressionsInfo.md).[`cpc_average`](../interfaces/IImpressionsInfo.md#cpc_average)

***

### cpc\_max?

> `optional` **cpc\_max**: `number`

Defined in: main.ts:92804

the maximum value of cost-per-click
the maximum cost-per-click (USD) for the keyword given that a bid is set to 999;
note: this field does not represent an actual CPC value;
you can find an actual CPC value for a keyword in the cpc field of the keyword_info object

#### Implementation of

[`IImpressionsInfo`](../interfaces/IImpressionsInfo.md).[`cpc_max`](../interfaces/IImpressionsInfo.md#cpc_max)

***

### cpc\_min?

> `optional` **cpc\_min**: `number`

Defined in: main.ts:92799

the minimum value of cost-per-click
the minimum cost-per-click (USD) for the keyword given that a bid is set to 999;
note: this field does not represent an actual CPC value;
you can find an actual CPC value for a keyword in the cpc field of the keyword_info object

#### Implementation of

[`IImpressionsInfo`](../interfaces/IImpressionsInfo.md).[`cpc_min`](../interfaces/IImpressionsInfo.md#cpc_min)

***

### daily\_clicks\_average?

> `optional` **daily\_clicks\_average**: `number`

Defined in: main.ts:92827

the average value of daily clicks
represents the average number of daily clicks on the advertisement

#### Implementation of

[`IImpressionsInfo`](../interfaces/IImpressionsInfo.md).[`daily_clicks_average`](../interfaces/IImpressionsInfo.md#daily_clicks_average)

***

### daily\_clicks\_max?

> `optional` **daily\_clicks\_max**: `number`

Defined in: main.ts:92824

the maximum value of daily clicks
represents the maximum number of daily clicks on the advertisement

#### Implementation of

[`IImpressionsInfo`](../interfaces/IImpressionsInfo.md).[`daily_clicks_max`](../interfaces/IImpressionsInfo.md#daily_clicks_max)

***

### daily\_clicks\_min?

> `optional` **daily\_clicks\_min**: `number`

Defined in: main.ts:92821

the minimum value of daily clicks
represents the minimum number of daily clicks on the advertisement

#### Implementation of

[`IImpressionsInfo`](../interfaces/IImpressionsInfo.md).[`daily_clicks_min`](../interfaces/IImpressionsInfo.md#daily_clicks_min)

***

### daily\_cost\_average?

> `optional` **daily\_cost\_average**: `number`

Defined in: main.ts:92836

the average daily charge value
represents the average daily cost of the advertisement (USD)

#### Implementation of

[`IImpressionsInfo`](../interfaces/IImpressionsInfo.md).[`daily_cost_average`](../interfaces/IImpressionsInfo.md#daily_cost_average)

***

### daily\_cost\_max?

> `optional` **daily\_cost\_max**: `number`

Defined in: main.ts:92833

the maximum daily charge value
represents the maximum daily cost of the advertisement (USD)

#### Implementation of

[`IImpressionsInfo`](../interfaces/IImpressionsInfo.md).[`daily_cost_max`](../interfaces/IImpressionsInfo.md#daily_cost_max)

***

### daily\_cost\_min?

> `optional` **daily\_cost\_min**: `number`

Defined in: main.ts:92830

the minimum daily charge value
represents the minimum daily cost of the advertisement (USD)

#### Implementation of

[`IImpressionsInfo`](../interfaces/IImpressionsInfo.md).[`daily_cost_min`](../interfaces/IImpressionsInfo.md#daily_cost_min)

***

### daily\_impressions\_average?

> `optional` **daily\_impressions\_average**: `number`

Defined in: main.ts:92818

the average value of daily impressions
represents the average number of daily impressions of the advertisement given that that a bid is set to 999; provides a more accurate alternative to Google search volume data

#### Implementation of

[`IImpressionsInfo`](../interfaces/IImpressionsInfo.md).[`daily_impressions_average`](../interfaces/IImpressionsInfo.md#daily_impressions_average)

***

### daily\_impressions\_max?

> `optional` **daily\_impressions\_max**: `number`

Defined in: main.ts:92815

the maximum value of daily impressions
represents the maximum number of daily impressions of the advertisement given that that a bid is set to 999; provides a more accurate alternative to Google search volume data

#### Implementation of

[`IImpressionsInfo`](../interfaces/IImpressionsInfo.md).[`daily_impressions_max`](../interfaces/IImpressionsInfo.md#daily_impressions_max)

***

### daily\_impressions\_min?

> `optional` **daily\_impressions\_min**: `number`

Defined in: main.ts:92812

the minimum value of daily impressions
represents the minimum number of daily impressions of the advertisement given that that a bid is set to 999; provides a more accurate alternative to Google search volume data

#### Implementation of

[`IImpressionsInfo`](../interfaces/IImpressionsInfo.md).[`daily_impressions_min`](../interfaces/IImpressionsInfo.md#daily_impressions_min)

***

### last\_updated\_time?

> `optional` **last\_updated\_time**: `string`

Defined in: main.ts:92779

date and time when SERP data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IImpressionsInfo`](../interfaces/IImpressionsInfo.md).[`last_updated_time`](../interfaces/IImpressionsInfo.md#last_updated_time)

***

### match\_type?

> `optional` **match\_type**: `string`

Defined in: main.ts:92785

type of keyword match
can take the following values: exact, broad, phrase

#### Implementation of

[`IImpressionsInfo`](../interfaces/IImpressionsInfo.md).[`match_type`](../interfaces/IImpressionsInfo.md#match_type)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:92774

search engine type

#### Implementation of

[`IImpressionsInfo`](../interfaces/IImpressionsInfo.md).[`se_type`](../interfaces/IImpressionsInfo.md#se_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:92849

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:92884

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`ImpressionsInfo`](ImpressionsInfo.md)

Defined in: main.ts:92877

#### Parameters

##### data

`any`

#### Returns

[`ImpressionsInfo`](ImpressionsInfo.md)
