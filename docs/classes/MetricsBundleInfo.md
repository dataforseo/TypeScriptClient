[**Documentation**](../README.md)

***

[Documentation](../README.md) / MetricsBundleInfo

# Class: MetricsBundleInfo

## Implements

- [`IMetricsBundleInfo`](../interfaces/IMetricsBundleInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MetricsBundleInfo()

> **new MetricsBundleInfo**(`data`?): [`MetricsBundleInfo`](MetricsBundleInfo.md)

#### Parameters

##### data?

[`IMetricsBundleInfo`](../interfaces/IMetricsBundleInfo.md)

#### Returns

[`MetricsBundleInfo`](MetricsBundleInfo.md)

#### Defined in

main.ts:89436

## Properties

### organic?

> `optional` **organic**: [`MetricsInfo`](MetricsInfo.md)

ranking and traffic data from organic search

#### Implementation of

[`IMetricsBundleInfo`](../interfaces/IMetricsBundleInfo.md).[`organic`](../interfaces/IMetricsBundleInfo.md#organic)

#### Defined in

main.ts:89430

***

### paid?

> `optional` **paid**: [`MetricsInfo`](MetricsInfo.md)

ranking and traffic data from paid search

#### Implementation of

[`IMetricsBundleInfo`](../interfaces/IMetricsBundleInfo.md).[`paid`](../interfaces/IMetricsBundleInfo.md#paid)

#### Defined in

main.ts:89432

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:89445

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:89463

***

### fromJS()

> `static` **fromJS**(`data`): [`MetricsBundleInfo`](MetricsBundleInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`MetricsBundleInfo`](MetricsBundleInfo.md)

#### Defined in

main.ts:89456
