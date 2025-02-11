[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsAppleAppIntersectionLiveResultInfo

# Class: DataforseoLabsAppleAppIntersectionLiveResultInfo

Defined in: main.ts:125174

## Implements

- [`IDataforseoLabsAppleAppIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAppleAppIntersectionLiveResultInfo()

> **new DataforseoLabsAppleAppIntersectionLiveResultInfo**(`data`?): [`DataforseoLabsAppleAppIntersectionLiveResultInfo`](DataforseoLabsAppleAppIntersectionLiveResultInfo.md)

Defined in: main.ts:125192

#### Parameters

##### data?

[`IDataforseoLabsAppleAppIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResultInfo.md)

#### Returns

[`DataforseoLabsAppleAppIntersectionLiveResultInfo`](DataforseoLabsAppleAppIntersectionLiveResultInfo.md)

## Properties

### app\_ids?

> `optional` **app\_ids**: `object`

Defined in: main.ts:125178

ids of the apps in a POST array

#### Index Signature

\[`key`: `string`\]: `string`

#### Implementation of

[`IDataforseoLabsAppleAppIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResultInfo.md).[`app_ids`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResultInfo.md#app_ids)

***

### items?

> `optional` **items**: [`DataforseoLabsAppleAppIntersectionLiveItem`](DataforseoLabsAppleAppIntersectionLiveItem.md)[]

Defined in: main.ts:125188

contains data related to the ranking keywords for the app specified in the app_id field

#### Implementation of

[`IDataforseoLabsAppleAppIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:125186

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsAppleAppIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:125182

language code in a POST array

#### Implementation of

[`IDataforseoLabsAppleAppIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:125180

location code in a POST array

#### Implementation of

[`IDataforseoLabsAppleAppIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResultInfo.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:125176

search engine type

#### Implementation of

[`IDataforseoLabsAppleAppIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResultInfo.md#se_type)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:125184

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsAppleAppIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:125201

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:125234

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsAppleAppIntersectionLiveResultInfo`](DataforseoLabsAppleAppIntersectionLiveResultInfo.md)

Defined in: main.ts:125227

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsAppleAppIntersectionLiveResultInfo`](DataforseoLabsAppleAppIntersectionLiveResultInfo.md)
