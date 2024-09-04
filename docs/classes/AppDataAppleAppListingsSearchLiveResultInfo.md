[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / AppDataAppleAppListingsSearchLiveResultInfo

# Class: AppDataAppleAppListingsSearchLiveResultInfo

## Implements

- [`IAppDataAppleAppListingsSearchLiveResultInfo`](../interfaces/IAppDataAppleAppListingsSearchLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataAppleAppListingsSearchLiveResultInfo()

> **new AppDataAppleAppListingsSearchLiveResultInfo**(`data`?): [`AppDataAppleAppListingsSearchLiveResultInfo`](AppDataAppleAppListingsSearchLiveResultInfo.md)

#### Parameters

• **data?**: [`IAppDataAppleAppListingsSearchLiveResultInfo`](../interfaces/IAppDataAppleAppListingsSearchLiveResultInfo.md)

#### Returns

[`AppDataAppleAppListingsSearchLiveResultInfo`](AppDataAppleAppListingsSearchLiveResultInfo.md)

#### Defined in

main.ts:196748

## Properties

### count?

> `optional` **count**: `number`

the number of items in the results array

#### Implementation of

[`IAppDataAppleAppListingsSearchLiveResultInfo`](../interfaces/IAppDataAppleAppListingsSearchLiveResultInfo.md).[`count`](../interfaces/IAppDataAppleAppListingsSearchLiveResultInfo.md#count)

#### Defined in

main.ts:196737

***

### items?

> `optional` **items**: [`AppDataAppleAppListingsSearchLiveItem`](AppDataAppleAppListingsSearchLiveItem.md)[]

array of apps and related data

#### Implementation of

[`IAppDataAppleAppListingsSearchLiveResultInfo`](../interfaces/IAppDataAppleAppListingsSearchLiveResultInfo.md).[`items`](../interfaces/IAppDataAppleAppListingsSearchLiveResultInfo.md#items)

#### Defined in

main.ts:196744

***

### offset?

> `optional` **offset**: `number`

offset in the results array of returned apps

#### Implementation of

[`IAppDataAppleAppListingsSearchLiveResultInfo`](../interfaces/IAppDataAppleAppListingsSearchLiveResultInfo.md).[`offset`](../interfaces/IAppDataAppleAppListingsSearchLiveResultInfo.md#offset)

#### Defined in

main.ts:196739

***

### offset\_token?

> `optional` **offset\_token**: `string`

token for subsequent requests
you can use this parameter in the POST request to avoid timeouts while trying to obtain over 100,000 results in a single request

#### Implementation of

[`IAppDataAppleAppListingsSearchLiveResultInfo`](../interfaces/IAppDataAppleAppListingsSearchLiveResultInfo.md).[`offset_token`](../interfaces/IAppDataAppleAppListingsSearchLiveResultInfo.md#offset_token)

#### Defined in

main.ts:196742

***

### total\_count?

> `optional` **total\_count**: `number`

the total number of relevant results in the database

#### Implementation of

[`IAppDataAppleAppListingsSearchLiveResultInfo`](../interfaces/IAppDataAppleAppListingsSearchLiveResultInfo.md).[`total_count`](../interfaces/IAppDataAppleAppListingsSearchLiveResultInfo.md#total_count)

#### Defined in

main.ts:196735

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:196757

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:196782

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataAppleAppListingsSearchLiveResultInfo`](AppDataAppleAppListingsSearchLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataAppleAppListingsSearchLiveResultInfo`](AppDataAppleAppListingsSearchLiveResultInfo.md)

#### Defined in

main.ts:196775
