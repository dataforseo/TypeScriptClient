[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsAppleAppCompetitorsLiveResultInfo

# Class: DataforseoLabsAppleAppCompetitorsLiveResultInfo

## Implements

- [`IDataforseoLabsAppleAppCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAppleAppCompetitorsLiveResultInfo()

> **new DataforseoLabsAppleAppCompetitorsLiveResultInfo**(`data`?): [`DataforseoLabsAppleAppCompetitorsLiveResultInfo`](DataforseoLabsAppleAppCompetitorsLiveResultInfo.md)

#### Parameters

##### data?

[`IDataforseoLabsAppleAppCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md)

#### Returns

[`DataforseoLabsAppleAppCompetitorsLiveResultInfo`](DataforseoLabsAppleAppCompetitorsLiveResultInfo.md)

#### Defined in

main.ts:124444

## Properties

### app\_id?

> `optional` **app\_id**: `string`

id of the app in a POST array

#### Implementation of

[`IDataforseoLabsAppleAppCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md).[`app_id`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md#app_id)

#### Defined in

main.ts:124430

***

### items?

> `optional` **items**: [`DataforseoLabsAppleAppCompetitorsLiveItem`](DataforseoLabsAppleAppCompetitorsLiveItem.md)[]

contains data related to the app_id and competitor applications

#### Implementation of

[`IDataforseoLabsAppleAppCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md#items)

#### Defined in

main.ts:124440

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsAppleAppCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md#items_count)

#### Defined in

main.ts:124438

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsAppleAppCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md#language_code)

#### Defined in

main.ts:124434

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsAppleAppCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md#location_code)

#### Defined in

main.ts:124432

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsAppleAppCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md#se_type)

#### Defined in

main.ts:124428

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsAppleAppCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md#total_count)

#### Defined in

main.ts:124436

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:124453

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:124480

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsAppleAppCompetitorsLiveResultInfo`](DataforseoLabsAppleAppCompetitorsLiveResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsAppleAppCompetitorsLiveResultInfo`](DataforseoLabsAppleAppCompetitorsLiveResultInfo.md)

#### Defined in

main.ts:124473
