[**Documentation**](../README.md)

***

[Documentation](../README.md) / BulkMetricsInfo

# Class: BulkMetricsInfo

Defined in: main.ts:110876

## Implements

- [`IBulkMetricsInfo`](../interfaces/IBulkMetricsInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BulkMetricsInfo()

> **new BulkMetricsInfo**(`data`?): [`BulkMetricsInfo`](BulkMetricsInfo.md)

Defined in: main.ts:110892

#### Parameters

##### data?

[`IBulkMetricsInfo`](../interfaces/IBulkMetricsInfo.md)

#### Returns

[`BulkMetricsInfo`](BulkMetricsInfo.md)

## Properties

### clickstream\_etv?

> `optional` **clickstream\_etv**: `number`

Defined in: main.ts:110888

estimated traffic volume based on clickstream data
calculated as the product of click-through-rate and clickstream search volume values of all keywords the domain ranks for
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article https://dataforseo.com/help-center/whats-clickstream-estimated-traffic-volume-and-how-is-it-calculated

#### Implementation of

[`IBulkMetricsInfo`](../interfaces/IBulkMetricsInfo.md).[`clickstream_etv`](../interfaces/IBulkMetricsInfo.md#clickstream_etv)

***

### count?

> `optional` **count**: `number`

Defined in: main.ts:110883

total count of organic SERPs that contain the domain

#### Implementation of

[`IBulkMetricsInfo`](../interfaces/IBulkMetricsInfo.md).[`count`](../interfaces/IBulkMetricsInfo.md#count)

***

### etv?

> `optional` **etv**: `number`

Defined in: main.ts:110881

estimated traffic volume
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of all keywords the domain ranks for
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IBulkMetricsInfo`](../interfaces/IBulkMetricsInfo.md).[`etv`](../interfaces/IBulkMetricsInfo.md#etv)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:110901

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:110920

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BulkMetricsInfo`](BulkMetricsInfo.md)

Defined in: main.ts:110913

#### Parameters

##### data

`any`

#### Returns

[`BulkMetricsInfo`](BulkMetricsInfo.md)
