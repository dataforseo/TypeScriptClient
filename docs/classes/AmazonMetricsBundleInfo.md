[**Documentation**](../README.md)

***

[Documentation](../README.md) / AmazonMetricsBundleInfo

# Class: AmazonMetricsBundleInfo

Defined in: main.ts:113848

## Implements

- [`IAmazonMetricsBundleInfo`](../interfaces/IAmazonMetricsBundleInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AmazonMetricsBundleInfo()

> **new AmazonMetricsBundleInfo**(`data`?): [`AmazonMetricsBundleInfo`](AmazonMetricsBundleInfo.md)

Defined in: main.ts:113856

#### Parameters

##### data?

[`IAmazonMetricsBundleInfo`](../interfaces/IAmazonMetricsBundleInfo.md)

#### Returns

[`AmazonMetricsBundleInfo`](AmazonMetricsBundleInfo.md)

## Properties

### amazon\_paid?

> `optional` **amazon\_paid**: [`AppMetricsInfo`](AppMetricsInfo.md)

Defined in: main.ts:113852

ranking data from Amazon paid SERP

#### Implementation of

[`IAmazonMetricsBundleInfo`](../interfaces/IAmazonMetricsBundleInfo.md).[`amazon_paid`](../interfaces/IAmazonMetricsBundleInfo.md#amazon_paid)

***

### amazon\_serp?

> `optional` **amazon\_serp**: [`AppMetricsInfo`](AppMetricsInfo.md)

Defined in: main.ts:113850

ranking data from Amazon organic SERP

#### Implementation of

[`IAmazonMetricsBundleInfo`](../interfaces/IAmazonMetricsBundleInfo.md).[`amazon_serp`](../interfaces/IAmazonMetricsBundleInfo.md#amazon_serp)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:113865

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:113883

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AmazonMetricsBundleInfo`](AmazonMetricsBundleInfo.md)

Defined in: main.ts:113876

#### Parameters

##### data

`any`

#### Returns

[`AmazonMetricsBundleInfo`](AmazonMetricsBundleInfo.md)
