**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo

# Class: DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo(data)

> **new DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo**(`data`?): [`DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md)

#### Source

main.ts:102352

## Properties

### items?

> **`optional`** **items**: [`DataforseoLabsBBulkTrafficEstimationLiveItem`](DataforseoLabsBBulkTrafficEstimationLiveItem.md)[]

array of items with relevant traffic estimation data

#### Implementation of

[`IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#items)

#### Source

main.ts:102348

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#items_count)

#### Source

main.ts:102346

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#language_code)

#### Source

main.ts:102342

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#location_code)

#### Source

main.ts:102339

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#se_type)

#### Source

main.ts:102336

***

### total\_count?

> **`optional`** **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#total_count)

#### Source

main.ts:102344

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:102361

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:102387

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md)

#### Source

main.ts:102380
