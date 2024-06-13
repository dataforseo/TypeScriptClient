**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveItem

# Class: DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveItem

## Implements

- [`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveItem(data)

> **new DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveItem**(`data`?): [`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveItem`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveItem.md)

#### Returns

[`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveItem`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveItem.md)

#### Source

main.ts:102108

## Properties

### metrics?

> **`optional`** **metrics**: [`HistoricalMetricsBundleInfo`](HistoricalMetricsBundleInfo.md)

traffic data relevant to the specified domain

#### Implementation of

[`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveItem.md).[`metrics`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveItem.md#metrics)

#### Source

main.ts:102104

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveItem.md#se_type)

#### Source

main.ts:102100

***

### target?

> **`optional`** **target**: `string`

target domain in a POST array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveItem.md).[`target`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveItem.md#target)

#### Source

main.ts:102102

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:102117

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:102136

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveItem`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveItem`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveItem.md)

#### Source

main.ts:102129
