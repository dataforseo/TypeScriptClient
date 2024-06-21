**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AmazonMetricsBundleInfo

# Class: AmazonMetricsBundleInfo

## Implements

- [`IAmazonMetricsBundleInfo`](../interfaces/IAmazonMetricsBundleInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AmazonMetricsBundleInfo(data)

> **new AmazonMetricsBundleInfo**(`data`?): [`AmazonMetricsBundleInfo`](AmazonMetricsBundleInfo.md)

#### Parameters

• **data?**: [`IAmazonMetricsBundleInfo`](../interfaces/IAmazonMetricsBundleInfo.md)

#### Returns

[`AmazonMetricsBundleInfo`](AmazonMetricsBundleInfo.md)

#### Source

main.ts:105190

## Properties

### amazon\_paid?

> **`optional`** **amazon\_paid**: [`AppMetricsInfo`](AppMetricsInfo.md)

ranking data from Amazon paid SERP

#### Implementation of

[`IAmazonMetricsBundleInfo`](../interfaces/IAmazonMetricsBundleInfo.md).[`amazon_paid`](../interfaces/IAmazonMetricsBundleInfo.md#amazon_paid)

#### Source

main.ts:105186

***

### amazon\_serp?

> **`optional`** **amazon\_serp**: [`AppMetricsInfo`](AppMetricsInfo.md)

ranking data from Amazon organic SERP

#### Implementation of

[`IAmazonMetricsBundleInfo`](../interfaces/IAmazonMetricsBundleInfo.md).[`amazon_serp`](../interfaces/IAmazonMetricsBundleInfo.md#amazon_serp)

#### Source

main.ts:105184

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:105199

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:105217

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AmazonMetricsBundleInfo`](AmazonMetricsBundleInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AmazonMetricsBundleInfo`](AmazonMetricsBundleInfo.md)

#### Source

main.ts:105210
