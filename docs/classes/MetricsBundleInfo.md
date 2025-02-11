[**Documentation**](../README.md)

***

[Documentation](../README.md) / MetricsBundleInfo

# Class: MetricsBundleInfo

Defined in: main.ts:89464

## Implements

- [`IMetricsBundleInfo`](../interfaces/IMetricsBundleInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MetricsBundleInfo()

> **new MetricsBundleInfo**(`data`?): [`MetricsBundleInfo`](MetricsBundleInfo.md)

Defined in: main.ts:89472

#### Parameters

##### data?

[`IMetricsBundleInfo`](../interfaces/IMetricsBundleInfo.md)

#### Returns

[`MetricsBundleInfo`](MetricsBundleInfo.md)

## Properties

### organic?

> `optional` **organic**: [`MetricsInfo`](MetricsInfo.md)

Defined in: main.ts:89466

ranking and traffic data from organic search

#### Implementation of

[`IMetricsBundleInfo`](../interfaces/IMetricsBundleInfo.md).[`organic`](../interfaces/IMetricsBundleInfo.md#organic)

***

### paid?

> `optional` **paid**: [`MetricsInfo`](MetricsInfo.md)

Defined in: main.ts:89468

ranking and traffic data from paid search

#### Implementation of

[`IMetricsBundleInfo`](../interfaces/IMetricsBundleInfo.md).[`paid`](../interfaces/IMetricsBundleInfo.md#paid)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:89481

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:89499

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`MetricsBundleInfo`](MetricsBundleInfo.md)

Defined in: main.ts:89492

#### Parameters

##### data

`any`

#### Returns

[`MetricsBundleInfo`](MetricsBundleInfo.md)
