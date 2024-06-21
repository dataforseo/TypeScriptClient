**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleAppIntersectionLiveResultInfo

# Class: DataforseoLabsGoogleAppIntersectionLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleAppIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleAppIntersectionLiveResultInfo(data)

> **new DataforseoLabsGoogleAppIntersectionLiveResultInfo**(`data`?): [`DataforseoLabsGoogleAppIntersectionLiveResultInfo`](DataforseoLabsGoogleAppIntersectionLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleAppIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleAppIntersectionLiveResultInfo`](DataforseoLabsGoogleAppIntersectionLiveResultInfo.md)

#### Source

main.ts:114658

## Properties

### app\_ids?

> **`optional`** **app\_ids**: `Object`

ids of the apps in a POST array

#### Index signature

 \[`key`: `string`\]: `string`

#### Implementation of

[`IDataforseoLabsGoogleAppIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md).[`app_ids`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md#app_ids)

#### Source

main.ts:114644

***

### items?

> **`optional`** **items**: [`DataforseoLabsleAppIntersectionLiveItem`](DataforseoLabsleAppIntersectionLiveItem.md)[]

contains data related to the ranking keywords for the app specified in the app_id field

#### Implementation of

[`IDataforseoLabsGoogleAppIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md#items)

#### Source

main.ts:114654

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleAppIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md#items_count)

#### Source

main.ts:114652

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleAppIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md#language_code)

#### Source

main.ts:114648

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleAppIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md#location_code)

#### Source

main.ts:114646

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleAppIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md#se_type)

#### Source

main.ts:114642

***

### total\_count?

> **`optional`** **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleAppIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md#total_count)

#### Source

main.ts:114650

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:114667

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:114700

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsGoogleAppIntersectionLiveResultInfo`](DataforseoLabsGoogleAppIntersectionLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleAppIntersectionLiveResultInfo`](DataforseoLabsGoogleAppIntersectionLiveResultInfo.md)

#### Source

main.ts:114693
