[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / DataforseoLabsGoogleAppCompetitorsLiveResultInfo

# Class: DataforseoLabsGoogleAppCompetitorsLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleAppCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleAppCompetitorsLiveResultInfo()

> **new DataforseoLabsGoogleAppCompetitorsLiveResultInfo**(`data`?): [`DataforseoLabsGoogleAppCompetitorsLiveResultInfo`](DataforseoLabsGoogleAppCompetitorsLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleAppCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleAppCompetitorsLiveResultInfo`](DataforseoLabsGoogleAppCompetitorsLiveResultInfo.md)

#### Defined in

main.ts:115889

## Properties

### app\_id?

> `optional` **app\_id**: `string`

id of the app in a POST array

#### Implementation of

[`IDataforseoLabsGoogleAppCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md).[`app_id`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md#app_id)

#### Defined in

main.ts:115875

***

### items?

> `optional` **items**: [`DataforseoLabsGoogleAppCompetitorsLiveItem`](DataforseoLabsGoogleAppCompetitorsLiveItem.md)[]

contains data related to the app_id and competitor applications

#### Implementation of

[`IDataforseoLabsGoogleAppCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md#items)

#### Defined in

main.ts:115885

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleAppCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md#items_count)

#### Defined in

main.ts:115883

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleAppCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md#language_code)

#### Defined in

main.ts:115879

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleAppCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md#location_code)

#### Defined in

main.ts:115877

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleAppCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md#se_type)

#### Defined in

main.ts:115873

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleAppCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md#total_count)

#### Defined in

main.ts:115881

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:115898

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:115925

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleAppCompetitorsLiveResultInfo`](DataforseoLabsGoogleAppCompetitorsLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleAppCompetitorsLiveResultInfo`](DataforseoLabsGoogleAppCompetitorsLiveResultInfo.md)

#### Defined in

main.ts:115918
