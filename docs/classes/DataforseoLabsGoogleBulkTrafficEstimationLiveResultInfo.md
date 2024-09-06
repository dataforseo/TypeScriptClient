[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo

# Class: DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo()

> **new DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo**(`data`?): [`DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md)

#### Defined in

main.ts:101168

## Properties

### items?

> `optional` **items**: [`DataforseoLabsBBulkTrafficEstimationLiveItem`](DataforseoLabsBBulkTrafficEstimationLiveItem.md)[]

array of items with relevant traffic estimation data

#### Implementation of

[`IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#items)

#### Defined in

main.ts:101164

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#items_count)

#### Defined in

main.ts:101162

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#language_code)

#### Defined in

main.ts:101158

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#location_code)

#### Defined in

main.ts:101155

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#se_type)

#### Defined in

main.ts:101152

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#total_count)

#### Defined in

main.ts:101160

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:101177

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:101203

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md)

#### Defined in

main.ts:101196
