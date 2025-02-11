[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsleBulkAppMetricsLiveItem

# Class: DataforseoLabsleBulkAppMetricsLiveItem

Defined in: main.ts:121120

## Implements

- [`IDataforseoLabsleBulkAppMetricsLiveItem`](../interfaces/IDataforseoLabsleBulkAppMetricsLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsleBulkAppMetricsLiveItem()

> **new DataforseoLabsleBulkAppMetricsLiveItem**(`data`?): [`DataforseoLabsleBulkAppMetricsLiveItem`](DataforseoLabsleBulkAppMetricsLiveItem.md)

Defined in: main.ts:121131

#### Parameters

##### data?

[`IDataforseoLabsleBulkAppMetricsLiveItem`](../interfaces/IDataforseoLabsleBulkAppMetricsLiveItem.md)

#### Returns

[`DataforseoLabsleBulkAppMetricsLiveItem`](DataforseoLabsleBulkAppMetricsLiveItem.md)

## Properties

### app\_id?

> `optional` **app\_id**: `string`

Defined in: main.ts:121124

id of the app in a POST array

#### Implementation of

[`IDataforseoLabsleBulkAppMetricsLiveItem`](../interfaces/IDataforseoLabsleBulkAppMetricsLiveItem.md).[`app_id`](../interfaces/IDataforseoLabsleBulkAppMetricsLiveItem.md#app_id)

***

### metrics?

> `optional` **metrics**: `object`

Defined in: main.ts:121127

metrics for the ranking keywords of the app
ranking data relevant to the keywords that the provided application ranks for on Google Play

#### Index Signature

\[`key`: `string`\]: [`AppMetricsInfo`](AppMetricsInfo.md)

#### Implementation of

[`IDataforseoLabsleBulkAppMetricsLiveItem`](../interfaces/IDataforseoLabsleBulkAppMetricsLiveItem.md).[`metrics`](../interfaces/IDataforseoLabsleBulkAppMetricsLiveItem.md#metrics)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:121122

search engine type

#### Implementation of

[`IDataforseoLabsleBulkAppMetricsLiveItem`](../interfaces/IDataforseoLabsleBulkAppMetricsLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsleBulkAppMetricsLiveItem.md#se_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:121140

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:121165

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsleBulkAppMetricsLiveItem`](DataforseoLabsleBulkAppMetricsLiveItem.md)

Defined in: main.ts:121158

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsleBulkAppMetricsLiveItem`](DataforseoLabsleBulkAppMetricsLiveItem.md)
