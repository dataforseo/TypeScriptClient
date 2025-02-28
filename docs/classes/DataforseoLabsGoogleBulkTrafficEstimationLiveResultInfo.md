[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo

# Class: DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo

Defined in: main.ts:111024

## Implements

- [`IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo()

> **new DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo**(`data`?): [`DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md)

Defined in: main.ts:111042

#### Parameters

##### data?

[`IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md)

## Properties

### items?

> `optional` **items**: [`DataforseoLabsBulkTrafficEstimationLiveItem`](DataforseoLabsBulkTrafficEstimationLiveItem.md)[]

Defined in: main.ts:111038

array of items with relevant traffic estimation data

#### Implementation of

[`IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:111036

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:111032

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:111029

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:111026

search engine type

#### Implementation of

[`IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#se_type)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:111034

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:111051

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:111077

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md)

Defined in: main.ts:111070

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md)
