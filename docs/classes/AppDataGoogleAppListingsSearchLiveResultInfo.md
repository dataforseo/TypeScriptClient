**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppDataGoogleAppListingsSearchLiveResultInfo

# Class: AppDataGoogleAppListingsSearchLiveResultInfo

## Implements

- [`IAppDataGoogleAppListingsSearchLiveResultInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppListingsSearchLiveResultInfo(data)

> **new AppDataGoogleAppListingsSearchLiveResultInfo**(`data`?): [`AppDataGoogleAppListingsSearchLiveResultInfo`](AppDataGoogleAppListingsSearchLiveResultInfo.md)

#### Parameters

• **data?**: [`IAppDataGoogleAppListingsSearchLiveResultInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveResultInfo.md)

#### Returns

[`AppDataGoogleAppListingsSearchLiveResultInfo`](AppDataGoogleAppListingsSearchLiveResultInfo.md)

#### Source

main.ts:192141

## Properties

### count?

> **`optional`** **count**: `number`

the number of items in the results array

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveResultInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveResultInfo.md).[`count`](../interfaces/IAppDataGoogleAppListingsSearchLiveResultInfo.md#count)

#### Source

main.ts:192130

***

### items?

> **`optional`** **items**: [`AppDataGoogleAppListingsSearchLiveItem`](AppDataGoogleAppListingsSearchLiveItem.md)[]

array of apps and related data

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveResultInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveResultInfo.md).[`items`](../interfaces/IAppDataGoogleAppListingsSearchLiveResultInfo.md#items)

#### Source

main.ts:192137

***

### offset?

> **`optional`** **offset**: `number`

offset in the results array of returned apps

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveResultInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveResultInfo.md).[`offset`](../interfaces/IAppDataGoogleAppListingsSearchLiveResultInfo.md#offset)

#### Source

main.ts:192132

***

### offset\_token?

> **`optional`** **offset\_token**: `string`

token for subsequent requests
you can use this parameter in the POST request to avoid timeouts while trying to obtain over 100,000 results in a single request

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveResultInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveResultInfo.md).[`offset_token`](../interfaces/IAppDataGoogleAppListingsSearchLiveResultInfo.md#offset_token)

#### Source

main.ts:192135

***

### total\_count?

> **`optional`** **total\_count**: `number`

the total number of relevant results in the database

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveResultInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveResultInfo.md).[`total_count`](../interfaces/IAppDataGoogleAppListingsSearchLiveResultInfo.md#total_count)

#### Source

main.ts:192128

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:192150

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:192175

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppDataGoogleAppListingsSearchLiveResultInfo`](AppDataGoogleAppListingsSearchLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataGoogleAppListingsSearchLiveResultInfo`](AppDataGoogleAppListingsSearchLiveResultInfo.md)

#### Source

main.ts:192168
