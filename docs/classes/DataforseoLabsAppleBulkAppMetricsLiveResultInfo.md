[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsAppleBulkAppMetricsLiveResultInfo

# Class: DataforseoLabsAppleBulkAppMetricsLiveResultInfo

Defined in: main.ts:123462

## Implements

- [`IDataforseoLabsAppleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAppleBulkAppMetricsLiveResultInfo()

> **new DataforseoLabsAppleBulkAppMetricsLiveResultInfo**(`data`?): [`DataforseoLabsAppleBulkAppMetricsLiveResultInfo`](DataforseoLabsAppleBulkAppMetricsLiveResultInfo.md)

Defined in: main.ts:123478

#### Parameters

##### data?

[`IDataforseoLabsAppleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md)

#### Returns

[`DataforseoLabsAppleBulkAppMetricsLiveResultInfo`](DataforseoLabsAppleBulkAppMetricsLiveResultInfo.md)

## Properties

### items?

> `optional` **items**: [`DataforseoLabsleBulkAppMetricsLiveItem`](DataforseoLabsleBulkAppMetricsLiveItem.md)[]

Defined in: main.ts:123474

contains data related to the ranking app metrics of the specified application

#### Implementation of

[`IDataforseoLabsAppleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:123472

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsAppleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:123468

language code in a POST array

#### Implementation of

[`IDataforseoLabsAppleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:123466

location code in a POST array

#### Implementation of

[`IDataforseoLabsAppleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:123464

search engine type

#### Implementation of

[`IDataforseoLabsAppleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#se_type)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:123470

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsAppleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:123487

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:123513

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsAppleBulkAppMetricsLiveResultInfo`](DataforseoLabsAppleBulkAppMetricsLiveResultInfo.md)

Defined in: main.ts:123506

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsAppleBulkAppMetricsLiveResultInfo`](DataforseoLabsAppleBulkAppMetricsLiveResultInfo.md)
