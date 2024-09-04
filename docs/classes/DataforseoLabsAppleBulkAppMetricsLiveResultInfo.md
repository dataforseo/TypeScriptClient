[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsAppleBulkAppMetricsLiveResultInfo

# Class: DataforseoLabsAppleBulkAppMetricsLiveResultInfo

## Implements

- [`IDataforseoLabsAppleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAppleBulkAppMetricsLiveResultInfo()

> **new DataforseoLabsAppleBulkAppMetricsLiveResultInfo**(`data`?): [`DataforseoLabsAppleBulkAppMetricsLiveResultInfo`](DataforseoLabsAppleBulkAppMetricsLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsAppleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md)

#### Returns

[`DataforseoLabsAppleBulkAppMetricsLiveResultInfo`](DataforseoLabsAppleBulkAppMetricsLiveResultInfo.md)

#### Defined in

main.ts:113929

## Properties

### items?

> `optional` **items**: [`DataforseoLabsleBulkAppMetricsLiveItem`](DataforseoLabsleBulkAppMetricsLiveItem.md)[]

contains data related to the ranking app metrics of the specified application

#### Implementation of

[`IDataforseoLabsAppleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#items)

#### Defined in

main.ts:113925

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsAppleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#items_count)

#### Defined in

main.ts:113923

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsAppleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#language_code)

#### Defined in

main.ts:113919

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsAppleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#location_code)

#### Defined in

main.ts:113917

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsAppleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#se_type)

#### Defined in

main.ts:113915

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsAppleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#total_count)

#### Defined in

main.ts:113921

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:113938

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:113964

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsAppleBulkAppMetricsLiveResultInfo`](DataforseoLabsAppleBulkAppMetricsLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsAppleBulkAppMetricsLiveResultInfo`](DataforseoLabsAppleBulkAppMetricsLiveResultInfo.md)

#### Defined in

main.ts:113957
