[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleBulkAppMetricsLiveResultInfo

# Class: DataforseoLabsGoogleBulkAppMetricsLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleBulkAppMetricsLiveResultInfo()

> **new DataforseoLabsGoogleBulkAppMetricsLiveResultInfo**(`data`?): [`DataforseoLabsGoogleBulkAppMetricsLiveResultInfo`](DataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md)

#### Parameters

##### data?

[`IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleBulkAppMetricsLiveResultInfo`](DataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md)

#### Defined in

main.ts:121028

## Properties

### items?

> `optional` **items**: [`DataforseoLabsleBulkAppMetricsLiveItem`](DataforseoLabsleBulkAppMetricsLiveItem.md)[]

contains data related to the ranking app metrics of the specified application

#### Implementation of

[`IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md#items)

#### Defined in

main.ts:121024

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md#items_count)

#### Defined in

main.ts:121022

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md#language_code)

#### Defined in

main.ts:121018

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md#location_code)

#### Defined in

main.ts:121016

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md#se_type)

#### Defined in

main.ts:121014

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md#total_count)

#### Defined in

main.ts:121020

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:121037

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:121063

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleBulkAppMetricsLiveResultInfo`](DataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleBulkAppMetricsLiveResultInfo`](DataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md)

#### Defined in

main.ts:121056
