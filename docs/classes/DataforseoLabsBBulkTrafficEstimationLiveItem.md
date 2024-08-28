[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / DataforseoLabsBBulkTrafficEstimationLiveItem

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

main.ts:103903

## Properties

### metrics?

> `optional` **metrics**: `object`

traffic data relevant to the specified domain

#### Index Signature

 \[`key`: `string`\]: [`BulkMetricsInfo`](BulkMetricsInfo.md)

#### Implementation of

[`IDataforseoLabsBBulkTrafficEstimationLiveItem`](../interfaces/IDataforseoLabsBBulkTrafficEstimationLiveItem.md).[`metrics`](../interfaces/IDataforseoLabsBBulkTrafficEstimationLiveItem.md#metrics)

#### Defined in

main.ts:103899

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsBBulkTrafficEstimationLiveItem`](../interfaces/IDataforseoLabsBBulkTrafficEstimationLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsBBulkTrafficEstimationLiveItem.md#se_type)

#### Defined in

main.ts:103895

***

### target?

> `optional` **target**: `string`

target domain in a POST array

#### Implementation of

[`IDataforseoLabsBBulkTrafficEstimationLiveItem`](../interfaces/IDataforseoLabsBBulkTrafficEstimationLiveItem.md).[`target`](../interfaces/IDataforseoLabsBBulkTrafficEstimationLiveItem.md#target)

#### Defined in

main.ts:103897

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:103912

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:103937

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsBBulkTrafficEstimationLiveItem`](DataforseoLabsBBulkTrafficEstimationLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsBBulkTrafficEstimationLiveItem`](DataforseoLabsBBulkTrafficEstimationLiveItem.md)

#### Defined in

main.ts:103930
