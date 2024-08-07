**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleKeywordsForAppLiveResultInfo

# Class: DataforseoLabsGoogleKeywordsForAppLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleKeywordsForAppLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleKeywordsForAppLiveResultInfo(data)

> **new DataforseoLabsGoogleKeywordsForAppLiveResultInfo**(`data`?): [`DataforseoLabsGoogleKeywordsForAppLiveResultInfo`](DataforseoLabsGoogleKeywordsForAppLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleKeywordsForAppLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleKeywordsForAppLiveResultInfo`](DataforseoLabsGoogleKeywordsForAppLiveResultInfo.md)

#### Source

main.ts:114641

## Properties

### app\_id?

> **`optional`** **app\_id**: `string`

id of the app in a POST array

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForAppLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md).[`app_id`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md#app_id)

#### Source

main.ts:114627

***

### items?

> **`optional`** **items**: [`DataforseoLabsGoogleKeywordsForAppLiveItem`](DataforseoLabsGoogleKeywordsForAppLiveItem.md)[]

contains data related to the ranking keywords for the app specified in the app_id field

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForAppLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md#items)

#### Source

main.ts:114637

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForAppLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md#items_count)

#### Source

main.ts:114635

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForAppLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md#language_code)

#### Source

main.ts:114631

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForAppLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md#location_code)

#### Source

main.ts:114629

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForAppLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md#se_type)

#### Source

main.ts:114625

***

### total\_count?

> **`optional`** **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForAppLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md#total_count)

#### Source

main.ts:114633

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:114650

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:114677

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsGoogleKeywordsForAppLiveResultInfo`](DataforseoLabsGoogleKeywordsForAppLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleKeywordsForAppLiveResultInfo`](DataforseoLabsGoogleKeywordsForAppLiveResultInfo.md)

#### Source

main.ts:114670
