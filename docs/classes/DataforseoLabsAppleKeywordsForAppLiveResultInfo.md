[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsAppleKeywordsForAppLiveResultInfo

# Class: DataforseoLabsAppleKeywordsForAppLiveResultInfo

## Implements

- [`IDataforseoLabsAppleKeywordsForAppLiveResultInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAppleKeywordsForAppLiveResultInfo()

> **new DataforseoLabsAppleKeywordsForAppLiveResultInfo**(`data`?): [`DataforseoLabsAppleKeywordsForAppLiveResultInfo`](DataforseoLabsAppleKeywordsForAppLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsAppleKeywordsForAppLiveResultInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md)

#### Returns

[`DataforseoLabsAppleKeywordsForAppLiveResultInfo`](DataforseoLabsAppleKeywordsForAppLiveResultInfo.md)

#### Defined in

main.ts:114623

## Properties

### app\_id?

> `optional` **app\_id**: `string`

id of the app in a POST array

#### Implementation of

[`IDataforseoLabsAppleKeywordsForAppLiveResultInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md).[`app_id`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md#app_id)

#### Defined in

main.ts:114609

***

### items?

> `optional` **items**: [`DataforseoLabsAppleKeywordsForAppLiveItem`](DataforseoLabsAppleKeywordsForAppLiveItem.md)[]

contains data related to the ranking keywords for the app specified in the app_id field

#### Implementation of

[`IDataforseoLabsAppleKeywordsForAppLiveResultInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md#items)

#### Defined in

main.ts:114619

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsAppleKeywordsForAppLiveResultInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md#items_count)

#### Defined in

main.ts:114617

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsAppleKeywordsForAppLiveResultInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md#language_code)

#### Defined in

main.ts:114613

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsAppleKeywordsForAppLiveResultInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md#location_code)

#### Defined in

main.ts:114611

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsAppleKeywordsForAppLiveResultInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md#se_type)

#### Defined in

main.ts:114607

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsAppleKeywordsForAppLiveResultInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md#total_count)

#### Defined in

main.ts:114615

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:114632

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:114659

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsAppleKeywordsForAppLiveResultInfo`](DataforseoLabsAppleKeywordsForAppLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsAppleKeywordsForAppLiveResultInfo`](DataforseoLabsAppleKeywordsForAppLiveResultInfo.md)

#### Defined in

main.ts:114652
