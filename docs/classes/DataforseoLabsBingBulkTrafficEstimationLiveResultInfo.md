[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsBingBulkTrafficEstimationLiveResultInfo

# Class: DataforseoLabsBingBulkTrafficEstimationLiveResultInfo

Defined in: main.ts:115818

## Implements

- [`IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBingBulkTrafficEstimationLiveResultInfo()

> **new DataforseoLabsBingBulkTrafficEstimationLiveResultInfo**(`data`?): [`DataforseoLabsBingBulkTrafficEstimationLiveResultInfo`](DataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md)

Defined in: main.ts:115836

#### Parameters

##### data?

[`IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md)

#### Returns

[`DataforseoLabsBingBulkTrafficEstimationLiveResultInfo`](DataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md)

## Properties

### items?

> `optional` **items**: [`DataforseoLabsBulkTrafficEstimationLiveItem`](DataforseoLabsBulkTrafficEstimationLiveItem.md)[]

Defined in: main.ts:115832

array of items with relevant traffic estimation data

#### Implementation of

[`IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:115830

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:115826

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:115823

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:115820

search engine type

#### Implementation of

[`IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md#se_type)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:115828

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:115845

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:115871

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsBingBulkTrafficEstimationLiveResultInfo`](DataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md)

Defined in: main.ts:115864

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsBingBulkTrafficEstimationLiveResultInfo`](DataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md)
