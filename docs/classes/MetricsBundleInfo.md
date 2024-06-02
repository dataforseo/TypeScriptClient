**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MetricsBundleInfo

# Class: MetricsBundleInfo

## Implements

- [`IMetricsBundleInfo`](../interfaces/IMetricsBundleInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MetricsBundleInfo(data)

> **new MetricsBundleInfo**(`data`?): [`MetricsBundleInfo`](MetricsBundleInfo.md)

#### Parameters

• **data?**: [`IMetricsBundleInfo`](../interfaces/IMetricsBundleInfo.md)

#### Returns

[`MetricsBundleInfo`](MetricsBundleInfo.md)

#### Source

main.ts:79460

## Properties

### organic?

> **`optional`** **organic**: [`MetricsInfo`](MetricsInfo.md)

ranking and traffic data from organic search

#### Implementation of

[`IMetricsBundleInfo`](../interfaces/IMetricsBundleInfo.md).[`organic`](../interfaces/IMetricsBundleInfo.md#organic)

#### Source

main.ts:79454

***

### paid?

> **`optional`** **paid**: [`MetricsInfo`](MetricsInfo.md)

ranking and traffic data from paid search

#### Implementation of

[`IMetricsBundleInfo`](../interfaces/IMetricsBundleInfo.md).[`paid`](../interfaces/IMetricsBundleInfo.md#paid)

#### Source

main.ts:79456

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:79469

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:79487

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MetricsBundleInfo`](MetricsBundleInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MetricsBundleInfo`](MetricsBundleInfo.md)

#### Source

main.ts:79480
