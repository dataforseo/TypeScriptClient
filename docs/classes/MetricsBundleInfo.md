[**Documentation**](../README.md)

***

[Documentation](../README.md) / MetricsBundleInfo

# Class: MetricsBundleInfo

Defined in: main.ts:89428

## Implements

- [`IMetricsBundleInfo`](../interfaces/IMetricsBundleInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MetricsBundleInfo()

> **new MetricsBundleInfo**(`data`?): [`MetricsBundleInfo`](MetricsBundleInfo.md)

Defined in: main.ts:89436

#### Parameters

##### data?

[`IMetricsBundleInfo`](../interfaces/IMetricsBundleInfo.md)

#### Returns

[`MetricsBundleInfo`](MetricsBundleInfo.md)

## Properties

### organic?

> `optional` **organic**: [`MetricsInfo`](MetricsInfo.md)

Defined in: main.ts:89430

ranking and traffic data from organic search

#### Implementation of

[`IMetricsBundleInfo`](../interfaces/IMetricsBundleInfo.md).[`organic`](../interfaces/IMetricsBundleInfo.md#organic)

***

### paid?

> `optional` **paid**: [`MetricsInfo`](MetricsInfo.md)

Defined in: main.ts:89432

ranking and traffic data from paid search

#### Implementation of

[`IMetricsBundleInfo`](../interfaces/IMetricsBundleInfo.md).[`paid`](../interfaces/IMetricsBundleInfo.md#paid)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:89445

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:89463

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`MetricsBundleInfo`](MetricsBundleInfo.md)

Defined in: main.ts:89456

#### Parameters

##### data

`any`

#### Returns

[`MetricsBundleInfo`](MetricsBundleInfo.md)
