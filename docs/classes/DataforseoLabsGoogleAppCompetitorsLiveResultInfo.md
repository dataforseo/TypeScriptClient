[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleAppCompetitorsLiveResultInfo

# Class: DataforseoLabsGoogleAppCompetitorsLiveResultInfo

Defined in: main.ts:122516

## Implements

- [`IDataforseoLabsGoogleAppCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleAppCompetitorsLiveResultInfo()

> **new DataforseoLabsGoogleAppCompetitorsLiveResultInfo**(`data`?): [`DataforseoLabsGoogleAppCompetitorsLiveResultInfo`](DataforseoLabsGoogleAppCompetitorsLiveResultInfo.md)

Defined in: main.ts:122534

#### Parameters

##### data?

[`IDataforseoLabsGoogleAppCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleAppCompetitorsLiveResultInfo`](DataforseoLabsGoogleAppCompetitorsLiveResultInfo.md)

## Properties

### app\_id?

> `optional` **app\_id**: `string`

Defined in: main.ts:122520

id of the app in a POST array

#### Implementation of

[`IDataforseoLabsGoogleAppCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md).[`app_id`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md#app_id)

***

### items?

> `optional` **items**: [`DataforseoLabsGoogleAppCompetitorsLiveItem`](DataforseoLabsGoogleAppCompetitorsLiveItem.md)[]

Defined in: main.ts:122530

contains data related to the app_id and competitor applications

#### Implementation of

[`IDataforseoLabsGoogleAppCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:122528

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleAppCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:122524

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleAppCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:122522

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleAppCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:122518

search engine type

#### Implementation of

[`IDataforseoLabsGoogleAppCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md#se_type)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:122526

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleAppCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:122543

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:122570

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleAppCompetitorsLiveResultInfo`](DataforseoLabsGoogleAppCompetitorsLiveResultInfo.md)

Defined in: main.ts:122563

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleAppCompetitorsLiveResultInfo`](DataforseoLabsGoogleAppCompetitorsLiveResultInfo.md)
