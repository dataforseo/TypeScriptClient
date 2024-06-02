**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleAppCompetitorsLiveResultInfo

# Class: DataforseoLabsGoogleAppCompetitorsLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleAppCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleAppCompetitorsLiveResultInfo(data)

> **new DataforseoLabsGoogleAppCompetitorsLiveResultInfo**(`data`?): [`DataforseoLabsGoogleAppCompetitorsLiveResultInfo`](DataforseoLabsGoogleAppCompetitorsLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleAppCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleAppCompetitorsLiveResultInfo`](DataforseoLabsGoogleAppCompetitorsLiveResultInfo.md)

#### Source

main.ts:113128

## Properties

### app\_id?

> **`optional`** **app\_id**: `string`

id of the app in a POST array

#### Implementation of

[`IDataforseoLabsGoogleAppCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md).[`app_id`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md#app_id)

#### Source

main.ts:113114

***

### items?

> **`optional`** **items**: [`DataforseoLabsGoogleAppCompetitorsLiveItem`](DataforseoLabsGoogleAppCompetitorsLiveItem.md)[]

contains data related to the app_id and competitor applications

#### Implementation of

[`IDataforseoLabsGoogleAppCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md#items)

#### Source

main.ts:113124

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleAppCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md#items_count)

#### Source

main.ts:113122

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleAppCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md#language_code)

#### Source

main.ts:113118

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleAppCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md#location_code)

#### Source

main.ts:113116

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleAppCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md#se_type)

#### Source

main.ts:113112

***

### total\_count?

> **`optional`** **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleAppCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md#total_count)

#### Source

main.ts:113120

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:113137

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:113164

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsGoogleAppCompetitorsLiveResultInfo`](DataforseoLabsGoogleAppCompetitorsLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleAppCompetitorsLiveResultInfo`](DataforseoLabsGoogleAppCompetitorsLiveResultInfo.md)

#### Source

main.ts:113157
