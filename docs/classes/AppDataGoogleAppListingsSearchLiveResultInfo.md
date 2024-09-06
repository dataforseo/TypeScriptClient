[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / AppDataGoogleAppListingsSearchLiveResultInfo

# Class: AppDataGoogleAppListingsSearchLiveResultInfo

## Implements

- [`IAppDataGoogleAppListingsSearchLiveResultInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppListingsSearchLiveResultInfo()

> **new AppDataGoogleAppListingsSearchLiveResultInfo**(`data`?): [`AppDataGoogleAppListingsSearchLiveResultInfo`](AppDataGoogleAppListingsSearchLiveResultInfo.md)

#### Parameters

• **data?**: [`IAppDataGoogleAppListingsSearchLiveResultInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveResultInfo.md)

#### Returns

[`AppDataGoogleAppListingsSearchLiveResultInfo`](AppDataGoogleAppListingsSearchLiveResultInfo.md)

#### Defined in

main.ts:192153

## Properties

### count?

> `optional` **count**: `number`

the number of items in the results array

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveResultInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveResultInfo.md).[`count`](../interfaces/IAppDataGoogleAppListingsSearchLiveResultInfo.md#count)

#### Defined in

main.ts:192142

***

### items?

> `optional` **items**: [`AppDataGoogleAppListingsSearchLiveItem`](AppDataGoogleAppListingsSearchLiveItem.md)[]

array of apps and related data

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveResultInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveResultInfo.md).[`items`](../interfaces/IAppDataGoogleAppListingsSearchLiveResultInfo.md#items)

#### Defined in

main.ts:192149

***

### offset?

> `optional` **offset**: `number`

offset in the results array of returned apps

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveResultInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveResultInfo.md).[`offset`](../interfaces/IAppDataGoogleAppListingsSearchLiveResultInfo.md#offset)

#### Defined in

main.ts:192144

***

### offset\_token?

> `optional` **offset\_token**: `string`

token for subsequent requests
you can use this parameter in the POST request to avoid timeouts while trying to obtain over 100,000 results in a single request

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveResultInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveResultInfo.md).[`offset_token`](../interfaces/IAppDataGoogleAppListingsSearchLiveResultInfo.md#offset_token)

#### Defined in

main.ts:192147

***

### total\_count?

> `optional` **total\_count**: `number`

the total number of relevant results in the database

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveResultInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveResultInfo.md).[`total_count`](../interfaces/IAppDataGoogleAppListingsSearchLiveResultInfo.md#total_count)

#### Defined in

main.ts:192140

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:192162

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:192187

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataGoogleAppListingsSearchLiveResultInfo`](AppDataGoogleAppListingsSearchLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataGoogleAppListingsSearchLiveResultInfo`](AppDataGoogleAppListingsSearchLiveResultInfo.md)

#### Defined in

main.ts:192180
