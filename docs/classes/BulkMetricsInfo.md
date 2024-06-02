**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BulkMetricsInfo

# Class: BulkMetricsInfo

## Implements

- [`IBulkMetricsInfo`](../interfaces/IBulkMetricsInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BulkMetricsInfo(data)

> **new BulkMetricsInfo**(`data`?): [`BulkMetricsInfo`](BulkMetricsInfo.md)

#### Parameters

• **data?**: [`IBulkMetricsInfo`](../interfaces/IBulkMetricsInfo.md)

#### Returns

[`BulkMetricsInfo`](BulkMetricsInfo.md)

#### Source

main.ts:101095

## Properties

### count?

> **`optional`** **count**: `number`

total count of organic SERPs that contain the domain

#### Implementation of

[`IBulkMetricsInfo`](../interfaces/IBulkMetricsInfo.md).[`count`](../interfaces/IBulkMetricsInfo.md#count)

#### Source

main.ts:101091

***

### etv?

> **`optional`** **etv**: `number`

estimated traffic volume
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of all keywords the domain ranks for
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IBulkMetricsInfo`](../interfaces/IBulkMetricsInfo.md).[`etv`](../interfaces/IBulkMetricsInfo.md#etv)

#### Source

main.ts:101089

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:101104

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:101122

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BulkMetricsInfo`](BulkMetricsInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BulkMetricsInfo`](BulkMetricsInfo.md)

#### Source

main.ts:101115
