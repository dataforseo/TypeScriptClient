[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsBulkTrafficEstimationLiveItem

# Class: DataforseoLabsBulkTrafficEstimationLiveItem

Defined in: main.ts:110882

## Implements

- [`IDataforseoLabsBulkTrafficEstimationLiveItem`](../interfaces/IDataforseoLabsBulkTrafficEstimationLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBulkTrafficEstimationLiveItem()

> **new DataforseoLabsBulkTrafficEstimationLiveItem**(`data`?): [`DataforseoLabsBulkTrafficEstimationLiveItem`](DataforseoLabsBulkTrafficEstimationLiveItem.md)

Defined in: main.ts:110892

#### Parameters

##### data?

[`IDataforseoLabsBulkTrafficEstimationLiveItem`](../interfaces/IDataforseoLabsBulkTrafficEstimationLiveItem.md)

#### Returns

[`DataforseoLabsBulkTrafficEstimationLiveItem`](DataforseoLabsBulkTrafficEstimationLiveItem.md)

## Properties

### metrics?

> `optional` **metrics**: `object`

Defined in: main.ts:110888

traffic data relevant to the specified domain

#### Index Signature

\[`key`: `string`\]: [`BulkMetricsInfo`](BulkMetricsInfo.md)

#### Implementation of

[`IDataforseoLabsBulkTrafficEstimationLiveItem`](../interfaces/IDataforseoLabsBulkTrafficEstimationLiveItem.md).[`metrics`](../interfaces/IDataforseoLabsBulkTrafficEstimationLiveItem.md#metrics)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:110884

search engine type

#### Implementation of

[`IDataforseoLabsBulkTrafficEstimationLiveItem`](../interfaces/IDataforseoLabsBulkTrafficEstimationLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsBulkTrafficEstimationLiveItem.md#se_type)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:110886

target domain in a POST array

#### Implementation of

[`IDataforseoLabsBulkTrafficEstimationLiveItem`](../interfaces/IDataforseoLabsBulkTrafficEstimationLiveItem.md).[`target`](../interfaces/IDataforseoLabsBulkTrafficEstimationLiveItem.md#target)

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

Defined in: main.ts:110926

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsBulkTrafficEstimationLiveItem`](DataforseoLabsBulkTrafficEstimationLiveItem.md)

Defined in: main.ts:110919

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsBulkTrafficEstimationLiveItem`](DataforseoLabsBulkTrafficEstimationLiveItem.md)
