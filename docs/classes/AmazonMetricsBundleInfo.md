[**Documentation**](../README.md)

***

[Documentation](../README.md) / AmazonMetricsBundleInfo

# Class: AmazonMetricsBundleInfo

## Implements

- [`IAmazonMetricsBundleInfo`](../interfaces/IAmazonMetricsBundleInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AmazonMetricsBundleInfo()

> **new AmazonMetricsBundleInfo**(`data`?): [`AmazonMetricsBundleInfo`](AmazonMetricsBundleInfo.md)

#### Parameters

##### data?

[`IAmazonMetricsBundleInfo`](../interfaces/IAmazonMetricsBundleInfo.md)

#### Returns

[`AmazonMetricsBundleInfo`](AmazonMetricsBundleInfo.md)

#### Defined in

main.ts:113788

## Properties

### amazon\_paid?

> `optional` **amazon\_paid**: [`AppMetricsInfo`](AppMetricsInfo.md)

ranking data from Amazon paid SERP

#### Implementation of

[`IAmazonMetricsBundleInfo`](../interfaces/IAmazonMetricsBundleInfo.md).[`amazon_paid`](../interfaces/IAmazonMetricsBundleInfo.md#amazon_paid)

#### Defined in

main.ts:113784

***

### amazon\_serp?

> `optional` **amazon\_serp**: [`AppMetricsInfo`](AppMetricsInfo.md)

ranking data from Amazon organic SERP

#### Implementation of

[`IAmazonMetricsBundleInfo`](../interfaces/IAmazonMetricsBundleInfo.md).[`amazon_serp`](../interfaces/IAmazonMetricsBundleInfo.md#amazon_serp)

#### Defined in

main.ts:113782

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:113797

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:113815

***

### fromJS()

> `static` **fromJS**(`data`): [`AmazonMetricsBundleInfo`](AmazonMetricsBundleInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`AmazonMetricsBundleInfo`](AmazonMetricsBundleInfo.md)

#### Defined in

main.ts:113808
