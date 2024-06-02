**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsAppleBulkAppMetricsLiveResultInfo

# Class: DataforseoLabsAppleBulkAppMetricsLiveResultInfo

## Implements

- [`IDataforseoLabsAppleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAppleBulkAppMetricsLiveResultInfo(data)

> **new DataforseoLabsAppleBulkAppMetricsLiveResultInfo**(`data`?): [`DataforseoLabsAppleBulkAppMetricsLiveResultInfo`](DataforseoLabsAppleBulkAppMetricsLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsAppleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md)

#### Returns

[`DataforseoLabsAppleBulkAppMetricsLiveResultInfo`](DataforseoLabsAppleBulkAppMetricsLiveResultInfo.md)

#### Source

main.ts:114072

## Properties

### items?

> **`optional`** **items**: [`DataforseoLabsleBulkAppMetricsLiveItem`](DataforseoLabsleBulkAppMetricsLiveItem.md)[]

contains data related to the ranking app metrics of the specified application

#### Implementation of

[`IDataforseoLabsAppleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#items)

#### Source

main.ts:114068

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsAppleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#items_count)

#### Source

main.ts:114066

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsAppleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#language_code)

#### Source

main.ts:114062

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsAppleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#location_code)

#### Source

main.ts:114060

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsAppleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#se_type)

#### Source

main.ts:114058

***

### total\_count?

> **`optional`** **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsAppleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#total_count)

#### Source

main.ts:114064

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:114081

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:114107

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsAppleBulkAppMetricsLiveResultInfo`](DataforseoLabsAppleBulkAppMetricsLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsAppleBulkAppMetricsLiveResultInfo`](DataforseoLabsAppleBulkAppMetricsLiveResultInfo.md)

#### Source

main.ts:114100
