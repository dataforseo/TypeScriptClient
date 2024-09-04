[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsBBulkTrafficEstimationLiveItem

# Class: DataforseoLabsBBulkTrafficEstimationLiveItem

## Implements

- [`IDataforseoLabsBBulkTrafficEstimationLiveItem`](../interfaces/IDataforseoLabsBBulkTrafficEstimationLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBBulkTrafficEstimationLiveItem()

> **new DataforseoLabsBBulkTrafficEstimationLiveItem**(`data`?): [`DataforseoLabsBBulkTrafficEstimationLiveItem`](DataforseoLabsBBulkTrafficEstimationLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsBBulkTrafficEstimationLiveItem`](../interfaces/IDataforseoLabsBBulkTrafficEstimationLiveItem.md)

#### Returns

[`DataforseoLabsBBulkTrafficEstimationLiveItem`](DataforseoLabsBBulkTrafficEstimationLiveItem.md)

#### Defined in

main.ts:101053

## Properties

### metrics?

> `optional` **metrics**: `object`

traffic data relevant to the specified domain

#### Index Signature

 \[`key`: `string`\]: [`BulkMetricsInfo`](BulkMetricsInfo.md)

#### Implementation of

[`IDataforseoLabsBBulkTrafficEstimationLiveItem`](../interfaces/IDataforseoLabsBBulkTrafficEstimationLiveItem.md).[`metrics`](../interfaces/IDataforseoLabsBBulkTrafficEstimationLiveItem.md#metrics)

#### Defined in

main.ts:101049

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsBBulkTrafficEstimationLiveItem`](../interfaces/IDataforseoLabsBBulkTrafficEstimationLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsBBulkTrafficEstimationLiveItem.md#se_type)

#### Defined in

main.ts:101045

***

### target?

> `optional` **target**: `string`

target domain in a POST array

#### Implementation of

[`IDataforseoLabsBBulkTrafficEstimationLiveItem`](../interfaces/IDataforseoLabsBBulkTrafficEstimationLiveItem.md).[`target`](../interfaces/IDataforseoLabsBBulkTrafficEstimationLiveItem.md#target)

#### Defined in

main.ts:101047

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:101062

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:101087

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsBBulkTrafficEstimationLiveItem`](DataforseoLabsBBulkTrafficEstimationLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsBBulkTrafficEstimationLiveItem`](DataforseoLabsBBulkTrafficEstimationLiveItem.md)

#### Defined in

main.ts:101080
