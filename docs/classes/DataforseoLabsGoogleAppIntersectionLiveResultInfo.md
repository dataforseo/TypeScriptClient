[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / DataforseoLabsGoogleAppIntersectionLiveResultInfo

# Class: DataforseoLabsGoogleAppIntersectionLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleAppIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleAppIntersectionLiveResultInfo()

> **new DataforseoLabsGoogleAppIntersectionLiveResultInfo**(`data`?): [`DataforseoLabsGoogleAppIntersectionLiveResultInfo`](DataforseoLabsGoogleAppIntersectionLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleAppIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleAppIntersectionLiveResultInfo`](DataforseoLabsGoogleAppIntersectionLiveResultInfo.md)

#### Defined in

main.ts:116453

## Properties

### app\_ids?

> `optional` **app\_ids**: `object`

ids of the apps in a POST array

#### Index Signature

 \[`key`: `string`\]: `string`

#### Implementation of

[`IDataforseoLabsGoogleAppIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md).[`app_ids`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md#app_ids)

#### Defined in

main.ts:116439

***

### items?

> `optional` **items**: [`DataforseoLabsGoogleAppIntersectionLiveItem`](DataforseoLabsGoogleAppIntersectionLiveItem.md)[]

contains data related to the ranking keywords for the app specified in the app_id field

#### Implementation of

[`IDataforseoLabsGoogleAppIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md#items)

#### Defined in

main.ts:116449

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleAppIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md#items_count)

#### Defined in

main.ts:116447

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleAppIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md#language_code)

#### Defined in

main.ts:116443

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleAppIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md#location_code)

#### Defined in

main.ts:116441

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleAppIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md#se_type)

#### Defined in

main.ts:116437

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleAppIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md#total_count)

#### Defined in

main.ts:116445

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:116462

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:116495

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleAppIntersectionLiveResultInfo`](DataforseoLabsGoogleAppIntersectionLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleAppIntersectionLiveResultInfo`](DataforseoLabsGoogleAppIntersectionLiveResultInfo.md)

#### Defined in

main.ts:116488
