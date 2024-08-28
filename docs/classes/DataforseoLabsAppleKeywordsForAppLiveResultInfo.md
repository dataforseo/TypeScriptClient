[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / DataforseoLabsAppleKeywordsForAppLiveResultInfo

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

main.ts:117565

## Properties

### app\_id?

> `optional` **app\_id**: `string`

id of the app in a POST array

#### Implementation of

[`IDataforseoLabsAppleKeywordsForAppLiveResultInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md).[`app_id`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md#app_id)

#### Defined in

main.ts:117551

***

### items?

> `optional` **items**: [`DataforseoLabsAppleKeywordsForAppLiveItem`](DataforseoLabsAppleKeywordsForAppLiveItem.md)[]

contains data related to the ranking keywords for the app specified in the app_id field

#### Implementation of

[`IDataforseoLabsAppleKeywordsForAppLiveResultInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md#items)

#### Defined in

main.ts:117561

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsAppleKeywordsForAppLiveResultInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md#items_count)

#### Defined in

main.ts:117559

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsAppleKeywordsForAppLiveResultInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md#language_code)

#### Defined in

main.ts:117555

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsAppleKeywordsForAppLiveResultInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md#location_code)

#### Defined in

main.ts:117553

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsAppleKeywordsForAppLiveResultInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md#se_type)

#### Defined in

main.ts:117549

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsAppleKeywordsForAppLiveResultInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md#total_count)

#### Defined in

main.ts:117557

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:117574

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:117601

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsAppleKeywordsForAppLiveResultInfo`](DataforseoLabsAppleKeywordsForAppLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsAppleKeywordsForAppLiveResultInfo`](DataforseoLabsAppleKeywordsForAppLiveResultInfo.md)

#### Defined in

main.ts:117594
