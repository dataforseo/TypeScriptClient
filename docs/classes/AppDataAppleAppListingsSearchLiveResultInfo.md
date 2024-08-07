**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppDataAppleAppListingsSearchLiveResultInfo

# Class: AppDataAppleAppListingsSearchLiveResultInfo

## Implements

- [`IAppDataAppleAppListingsSearchLiveResultInfo`](../interfaces/IAppDataAppleAppListingsSearchLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataAppleAppListingsSearchLiveResultInfo(data)

> **new AppDataAppleAppListingsSearchLiveResultInfo**(`data`?): [`AppDataAppleAppListingsSearchLiveResultInfo`](AppDataAppleAppListingsSearchLiveResultInfo.md)

#### Parameters

• **data?**: [`IAppDataAppleAppListingsSearchLiveResultInfo`](../interfaces/IAppDataAppleAppListingsSearchLiveResultInfo.md)

#### Returns

[`AppDataAppleAppListingsSearchLiveResultInfo`](AppDataAppleAppListingsSearchLiveResultInfo.md)

#### Source

main.ts:199534

## Properties

### count?

> **`optional`** **count**: `number`

the number of items in the results array

#### Implementation of

[`IAppDataAppleAppListingsSearchLiveResultInfo`](../interfaces/IAppDataAppleAppListingsSearchLiveResultInfo.md).[`count`](../interfaces/IAppDataAppleAppListingsSearchLiveResultInfo.md#count)

#### Source

main.ts:199523

***

### items?

> **`optional`** **items**: [`AppDataAppleAppListingsSearchLiveItem`](AppDataAppleAppListingsSearchLiveItem.md)[]

array of apps and related data

#### Implementation of

[`IAppDataAppleAppListingsSearchLiveResultInfo`](../interfaces/IAppDataAppleAppListingsSearchLiveResultInfo.md).[`items`](../interfaces/IAppDataAppleAppListingsSearchLiveResultInfo.md#items)

#### Source

main.ts:199530

***

### offset?

> **`optional`** **offset**: `number`

offset in the results array of returned apps

#### Implementation of

[`IAppDataAppleAppListingsSearchLiveResultInfo`](../interfaces/IAppDataAppleAppListingsSearchLiveResultInfo.md).[`offset`](../interfaces/IAppDataAppleAppListingsSearchLiveResultInfo.md#offset)

#### Source

main.ts:199525

***

### offset\_token?

> **`optional`** **offset\_token**: `string`

token for subsequent requests
you can use this parameter in the POST request to avoid timeouts while trying to obtain over 100,000 results in a single request

#### Implementation of

[`IAppDataAppleAppListingsSearchLiveResultInfo`](../interfaces/IAppDataAppleAppListingsSearchLiveResultInfo.md).[`offset_token`](../interfaces/IAppDataAppleAppListingsSearchLiveResultInfo.md#offset_token)

#### Source

main.ts:199528

***

### total\_count?

> **`optional`** **total\_count**: `number`

the total number of relevant results in the database

#### Implementation of

[`IAppDataAppleAppListingsSearchLiveResultInfo`](../interfaces/IAppDataAppleAppListingsSearchLiveResultInfo.md).[`total_count`](../interfaces/IAppDataAppleAppListingsSearchLiveResultInfo.md#total_count)

#### Source

main.ts:199521

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:199543

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:199568

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppDataAppleAppListingsSearchLiveResultInfo`](AppDataAppleAppListingsSearchLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataAppleAppListingsSearchLiveResultInfo`](AppDataAppleAppListingsSearchLiveResultInfo.md)

#### Source

main.ts:199561
