**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsleBulkAppMetricsLiveItem

# Class: DataforseoLabsleBulkAppMetricsLiveItem

## Implements

- [`IDataforseoLabsleBulkAppMetricsLiveItem`](../interfaces/IDataforseoLabsleBulkAppMetricsLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsleBulkAppMetricsLiveItem(data)

> **new DataforseoLabsleBulkAppMetricsLiveItem**(`data`?): [`DataforseoLabsleBulkAppMetricsLiveItem`](DataforseoLabsleBulkAppMetricsLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsleBulkAppMetricsLiveItem`](../interfaces/IDataforseoLabsleBulkAppMetricsLiveItem.md)

#### Returns

[`DataforseoLabsleBulkAppMetricsLiveItem`](DataforseoLabsleBulkAppMetricsLiveItem.md)

#### Source

main.ts:112653

## Properties

### app\_id?

> **`optional`** **app\_id**: `string`

id of the app in a POST array

#### Implementation of

[`IDataforseoLabsleBulkAppMetricsLiveItem`](../interfaces/IDataforseoLabsleBulkAppMetricsLiveItem.md).[`app_id`](../interfaces/IDataforseoLabsleBulkAppMetricsLiveItem.md#app_id)

#### Source

main.ts:112646

***

### metrics?

> **`optional`** **metrics**: `Object`

metrics for the ranking keywords of the app
ranking data relevant to the keywords that the provided application ranks for on Google Play

#### Index signature

 \[`key`: `string`\]: [`AppMetricsInfo`](AppMetricsInfo.md)

#### Implementation of

[`IDataforseoLabsleBulkAppMetricsLiveItem`](../interfaces/IDataforseoLabsleBulkAppMetricsLiveItem.md).[`metrics`](../interfaces/IDataforseoLabsleBulkAppMetricsLiveItem.md#metrics)

#### Source

main.ts:112649

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsleBulkAppMetricsLiveItem`](../interfaces/IDataforseoLabsleBulkAppMetricsLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsleBulkAppMetricsLiveItem.md#se_type)

#### Source

main.ts:112644

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:112662

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:112687

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsleBulkAppMetricsLiveItem`](DataforseoLabsleBulkAppMetricsLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsleBulkAppMetricsLiveItem`](DataforseoLabsleBulkAppMetricsLiveItem.md)

#### Source

main.ts:112680
