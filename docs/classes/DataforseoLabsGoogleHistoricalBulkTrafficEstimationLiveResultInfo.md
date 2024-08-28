[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo

# Class: DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo()

> **new DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo**(`data`?): [`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md)

#### Defined in

main.ts:104657

## Properties

### items?

> `optional` **items**: [`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveItem`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveItem.md)[]

array of items with relevant traffic estimation data

#### Implementation of

[`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#items)

#### Defined in

main.ts:104653

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#items_count)

#### Defined in

main.ts:104651

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#language_code)

#### Defined in

main.ts:104647

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#location_code)

#### Defined in

main.ts:104644

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#se_type)

#### Defined in

main.ts:104641

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#total_count)

#### Defined in

main.ts:104649

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:104666

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:104692

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md)

#### Defined in

main.ts:104685
