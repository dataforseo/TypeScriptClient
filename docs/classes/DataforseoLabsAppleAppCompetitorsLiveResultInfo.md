[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsAppleAppCompetitorsLiveResultInfo

# Class: DataforseoLabsAppleAppCompetitorsLiveResultInfo

Defined in: main.ts:124610

## Implements

- [`IDataforseoLabsAppleAppCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAppleAppCompetitorsLiveResultInfo()

> **new DataforseoLabsAppleAppCompetitorsLiveResultInfo**(`data`?): [`DataforseoLabsAppleAppCompetitorsLiveResultInfo`](DataforseoLabsAppleAppCompetitorsLiveResultInfo.md)

Defined in: main.ts:124628

#### Parameters

##### data?

[`IDataforseoLabsAppleAppCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md)

#### Returns

[`DataforseoLabsAppleAppCompetitorsLiveResultInfo`](DataforseoLabsAppleAppCompetitorsLiveResultInfo.md)

## Properties

### app\_id?

> `optional` **app\_id**: `string`

Defined in: main.ts:124614

id of the app in a POST array

#### Implementation of

[`IDataforseoLabsAppleAppCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md).[`app_id`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md#app_id)

***

### items?

> `optional` **items**: [`DataforseoLabsAppleAppCompetitorsLiveItem`](DataforseoLabsAppleAppCompetitorsLiveItem.md)[]

Defined in: main.ts:124624

contains data related to the app_id and competitor applications

#### Implementation of

[`IDataforseoLabsAppleAppCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:124622

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsAppleAppCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:124618

language code in a POST array

#### Implementation of

[`IDataforseoLabsAppleAppCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:124616

location code in a POST array

#### Implementation of

[`IDataforseoLabsAppleAppCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:124612

search engine type

#### Implementation of

[`IDataforseoLabsAppleAppCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md#se_type)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:124620

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsAppleAppCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:124637

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:124664

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsAppleAppCompetitorsLiveResultInfo`](DataforseoLabsAppleAppCompetitorsLiveResultInfo.md)

Defined in: main.ts:124657

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsAppleAppCompetitorsLiveResultInfo`](DataforseoLabsAppleAppCompetitorsLiveResultInfo.md)
