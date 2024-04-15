**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / HistoricalMetricsInfo

# Class: HistoricalMetricsInfo

## Implements

- [`IHistoricalMetricsInfo`](../interfaces/IHistoricalMetricsInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new HistoricalMetricsInfo(data)

> **new HistoricalMetricsInfo**(`data`?): [`HistoricalMetricsInfo`](HistoricalMetricsInfo.md)

#### Parameters

• **data?**: [`IHistoricalMetricsInfo`](../interfaces/IHistoricalMetricsInfo.md)

#### Returns

[`HistoricalMetricsInfo`](HistoricalMetricsInfo.md)

#### Source

main.ts:100468

## Properties

### count?

> **`optional`** **count**: `number`

total count of organic SERPs that contain the domain

#### Implementation of

[`IHistoricalMetricsInfo`](../interfaces/IHistoricalMetricsInfo.md).[`count`](../interfaces/IHistoricalMetricsInfo.md#count)

#### Source

main.ts:100464

***

### etv?

> **`optional`** **etv**: `number`

estimated traffic volume
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of all keywords the domain ranks for
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IHistoricalMetricsInfo`](../interfaces/IHistoricalMetricsInfo.md).[`etv`](../interfaces/IHistoricalMetricsInfo.md#etv)

#### Source

main.ts:100462

***

### month?

> **`optional`** **month**: `number`

month for which the data is provided

#### Implementation of

[`IHistoricalMetricsInfo`](../interfaces/IHistoricalMetricsInfo.md).[`month`](../interfaces/IHistoricalMetricsInfo.md#month)

#### Source

main.ts:100457

***

### year?

> **`optional`** **year**: `number`

year for which the data is provided

#### Implementation of

[`IHistoricalMetricsInfo`](../interfaces/IHistoricalMetricsInfo.md).[`year`](../interfaces/IHistoricalMetricsInfo.md#year)

#### Source

main.ts:100455

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:100477

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:100497

***

### fromJS()

> **`static`** **fromJS**(`data`): [`HistoricalMetricsInfo`](HistoricalMetricsInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`HistoricalMetricsInfo`](HistoricalMetricsInfo.md)

#### Source

main.ts:100490
