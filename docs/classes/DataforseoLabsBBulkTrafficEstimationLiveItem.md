**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsBBulkTrafficEstimationLiveItem

# Class: DataforseoLabsBBulkTrafficEstimationLiveItem

## Implements

- [`IDataforseoLabsBBulkTrafficEstimationLiveItem`](../interfaces/IDataforseoLabsBBulkTrafficEstimationLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBBulkTrafficEstimationLiveItem(data)

> **new DataforseoLabsBBulkTrafficEstimationLiveItem**(`data`?): [`DataforseoLabsBBulkTrafficEstimationLiveItem`](DataforseoLabsBBulkTrafficEstimationLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsBBulkTrafficEstimationLiveItem`](../interfaces/IDataforseoLabsBBulkTrafficEstimationLiveItem.md)

#### Returns

[`DataforseoLabsBBulkTrafficEstimationLiveItem`](DataforseoLabsBBulkTrafficEstimationLiveItem.md)

#### Source

main.ts:102270

## Properties

### metrics?

> **`optional`** **metrics**: `Object`

traffic data relevant to the specified domain

#### Index signature

 \[`key`: `string`\]: [`BulkMetricsInfo`](BulkMetricsInfo.md)

#### Implementation of

[`IDataforseoLabsBBulkTrafficEstimationLiveItem`](../interfaces/IDataforseoLabsBBulkTrafficEstimationLiveItem.md).[`metrics`](../interfaces/IDataforseoLabsBBulkTrafficEstimationLiveItem.md#metrics)

#### Source

main.ts:102266

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsBBulkTrafficEstimationLiveItem`](../interfaces/IDataforseoLabsBBulkTrafficEstimationLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsBBulkTrafficEstimationLiveItem.md#se_type)

#### Source

main.ts:102262

***

### target?

> **`optional`** **target**: `string`

target domain in a POST array

#### Implementation of

[`IDataforseoLabsBBulkTrafficEstimationLiveItem`](../interfaces/IDataforseoLabsBBulkTrafficEstimationLiveItem.md).[`target`](../interfaces/IDataforseoLabsBBulkTrafficEstimationLiveItem.md#target)

#### Source

main.ts:102264

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:102279

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:102304

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsBBulkTrafficEstimationLiveItem`](DataforseoLabsBBulkTrafficEstimationLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsBBulkTrafficEstimationLiveItem`](DataforseoLabsBBulkTrafficEstimationLiveItem.md)

#### Source

main.ts:102297
