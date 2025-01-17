[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo

# Class: DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo

Defined in: main.ts:111628

## Implements

- [`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo()

> **new DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo**(`data`?): [`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md)

Defined in: main.ts:111646

#### Parameters

##### data?

[`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md)

## Properties

### items?

> `optional` **items**: [`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveItem`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveItem.md)[]

Defined in: main.ts:111642

array of items with relevant traffic estimation data

#### Implementation of

[`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:111640

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:111636

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:111633

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:111630

search engine type

#### Implementation of

[`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#se_type)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:111638

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:111655

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:111681

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md)

Defined in: main.ts:111674

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md)
