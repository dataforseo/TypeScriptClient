[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BulkMetricsInfo

# Class: BulkMetricsInfo

## Implements

- [`IBulkMetricsInfo`](../interfaces/IBulkMetricsInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BulkMetricsInfo()

> **new BulkMetricsInfo**(`data`?): [`BulkMetricsInfo`](BulkMetricsInfo.md)

#### Parameters

• **data?**: [`IBulkMetricsInfo`](../interfaces/IBulkMetricsInfo.md)

#### Returns

[`BulkMetricsInfo`](BulkMetricsInfo.md)

#### Defined in

main.ts:100985

## Properties

### clickstream\_etv?

> `optional` **clickstream\_etv**: `number`

estimated traffic volume based on clickstream data
calculated as the product of click-through-rate and clickstream search volume values of all keywords the domain ranks for
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article https://dataforseo.com/help-center/whats-clickstream-estimated-traffic-volume-and-how-is-it-calculated

#### Implementation of

[`IBulkMetricsInfo`](../interfaces/IBulkMetricsInfo.md).[`clickstream_etv`](../interfaces/IBulkMetricsInfo.md#clickstream_etv)

#### Defined in

main.ts:100981

***

### count?

> `optional` **count**: `number`

total count of organic SERPs that contain the domain

#### Implementation of

[`IBulkMetricsInfo`](../interfaces/IBulkMetricsInfo.md).[`count`](../interfaces/IBulkMetricsInfo.md#count)

#### Defined in

main.ts:100976

***

### etv?

> `optional` **etv**: `number`

estimated traffic volume
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of all keywords the domain ranks for
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IBulkMetricsInfo`](../interfaces/IBulkMetricsInfo.md).[`etv`](../interfaces/IBulkMetricsInfo.md#etv)

#### Defined in

main.ts:100974

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:100994

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:101013

***

### fromJS()

> `static` **fromJS**(`data`): [`BulkMetricsInfo`](BulkMetricsInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BulkMetricsInfo`](BulkMetricsInfo.md)

#### Defined in

main.ts:101006
