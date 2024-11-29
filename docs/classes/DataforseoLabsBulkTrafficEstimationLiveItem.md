[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsBulkTrafficEstimationLiveItem

# Class: DataforseoLabsBulkTrafficEstimationLiveItem

## Implements

- [`IDataforseoLabsBulkTrafficEstimationLiveItem`](../interfaces/IDataforseoLabsBulkTrafficEstimationLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBulkTrafficEstimationLiveItem()

> **new DataforseoLabsBulkTrafficEstimationLiveItem**(`data`?): [`DataforseoLabsBulkTrafficEstimationLiveItem`](DataforseoLabsBulkTrafficEstimationLiveItem.md)

#### Parameters

##### data?

[`IDataforseoLabsBulkTrafficEstimationLiveItem`](../interfaces/IDataforseoLabsBulkTrafficEstimationLiveItem.md)

#### Returns

[`DataforseoLabsBulkTrafficEstimationLiveItem`](DataforseoLabsBulkTrafficEstimationLiveItem.md)

#### Defined in

main.ts:110824

## Properties

### metrics?

> `optional` **metrics**: `object`

traffic data relevant to the specified domain

#### Index Signature

 \[`key`: `string`\]: [`BulkMetricsInfo`](BulkMetricsInfo.md)

#### Implementation of

[`IDataforseoLabsBulkTrafficEstimationLiveItem`](../interfaces/IDataforseoLabsBulkTrafficEstimationLiveItem.md).[`metrics`](../interfaces/IDataforseoLabsBulkTrafficEstimationLiveItem.md#metrics)

#### Defined in

main.ts:110820

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsBulkTrafficEstimationLiveItem`](../interfaces/IDataforseoLabsBulkTrafficEstimationLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsBulkTrafficEstimationLiveItem.md#se_type)

#### Defined in

main.ts:110816

***

### target?

> `optional` **target**: `string`

target domain in a POST array

#### Implementation of

[`IDataforseoLabsBulkTrafficEstimationLiveItem`](../interfaces/IDataforseoLabsBulkTrafficEstimationLiveItem.md).[`target`](../interfaces/IDataforseoLabsBulkTrafficEstimationLiveItem.md#target)

#### Defined in

main.ts:110818

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:110833

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:110858

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsBulkTrafficEstimationLiveItem`](DataforseoLabsBulkTrafficEstimationLiveItem.md)

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsBulkTrafficEstimationLiveItem`](DataforseoLabsBulkTrafficEstimationLiveItem.md)

#### Defined in

main.ts:110851
