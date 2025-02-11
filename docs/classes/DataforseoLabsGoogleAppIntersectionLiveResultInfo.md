[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleAppIntersectionLiveResultInfo

# Class: DataforseoLabsGoogleAppIntersectionLiveResultInfo

Defined in: main.ts:123080

## Implements

- [`IDataforseoLabsGoogleAppIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleAppIntersectionLiveResultInfo()

> **new DataforseoLabsGoogleAppIntersectionLiveResultInfo**(`data`?): [`DataforseoLabsGoogleAppIntersectionLiveResultInfo`](DataforseoLabsGoogleAppIntersectionLiveResultInfo.md)

Defined in: main.ts:123098

#### Parameters

##### data?

[`IDataforseoLabsGoogleAppIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleAppIntersectionLiveResultInfo`](DataforseoLabsGoogleAppIntersectionLiveResultInfo.md)

## Properties

### app\_ids?

> `optional` **app\_ids**: `object`

Defined in: main.ts:123084

ids of the apps in a POST array

#### Index Signature

\[`key`: `string`\]: `string`

#### Implementation of

[`IDataforseoLabsGoogleAppIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md).[`app_ids`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md#app_ids)

***

### items?

> `optional` **items**: [`DataforseoLabsGoogleAppIntersectionLiveItem`](DataforseoLabsGoogleAppIntersectionLiveItem.md)[]

Defined in: main.ts:123094

contains data related to the ranking keywords for the app specified in the app_id field

#### Implementation of

[`IDataforseoLabsGoogleAppIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:123092

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleAppIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:123088

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleAppIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:123086

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleAppIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:123082

search engine type

#### Implementation of

[`IDataforseoLabsGoogleAppIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md#se_type)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:123090

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleAppIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:123107

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:123140

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleAppIntersectionLiveResultInfo`](DataforseoLabsGoogleAppIntersectionLiveResultInfo.md)

Defined in: main.ts:123133

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleAppIntersectionLiveResultInfo`](DataforseoLabsGoogleAppIntersectionLiveResultInfo.md)
