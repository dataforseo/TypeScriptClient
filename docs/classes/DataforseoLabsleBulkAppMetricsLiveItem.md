[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsleBulkAppMetricsLiveItem

# Class: DataforseoLabsleBulkAppMetricsLiveItem

## Implements

- [`IDataforseoLabsleBulkAppMetricsLiveItem`](../interfaces/IDataforseoLabsleBulkAppMetricsLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsleBulkAppMetricsLiveItem()

> **new DataforseoLabsleBulkAppMetricsLiveItem**(`data`?): [`DataforseoLabsleBulkAppMetricsLiveItem`](DataforseoLabsleBulkAppMetricsLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsleBulkAppMetricsLiveItem`](../interfaces/IDataforseoLabsleBulkAppMetricsLiveItem.md)

#### Returns

[`DataforseoLabsleBulkAppMetricsLiveItem`](DataforseoLabsleBulkAppMetricsLiveItem.md)

#### Defined in

main.ts:111582

## Properties

### app\_id?

> `optional` **app\_id**: `string`

id of the app in a POST array

#### Implementation of

[`IDataforseoLabsleBulkAppMetricsLiveItem`](../interfaces/IDataforseoLabsleBulkAppMetricsLiveItem.md).[`app_id`](../interfaces/IDataforseoLabsleBulkAppMetricsLiveItem.md#app_id)

#### Defined in

main.ts:111575

***

### metrics?

> `optional` **metrics**: `object`

metrics for the ranking keywords of the app
ranking data relevant to the keywords that the provided application ranks for on Google Play

#### Index Signature

 \[`key`: `string`\]: [`AppMetricsInfo`](AppMetricsInfo.md)

#### Implementation of

[`IDataforseoLabsleBulkAppMetricsLiveItem`](../interfaces/IDataforseoLabsleBulkAppMetricsLiveItem.md).[`metrics`](../interfaces/IDataforseoLabsleBulkAppMetricsLiveItem.md#metrics)

#### Defined in

main.ts:111578

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsleBulkAppMetricsLiveItem`](../interfaces/IDataforseoLabsleBulkAppMetricsLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsleBulkAppMetricsLiveItem.md#se_type)

#### Defined in

main.ts:111573

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:111591

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:111616

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsleBulkAppMetricsLiveItem`](DataforseoLabsleBulkAppMetricsLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsleBulkAppMetricsLiveItem`](DataforseoLabsleBulkAppMetricsLiveItem.md)

#### Defined in

main.ts:111609
