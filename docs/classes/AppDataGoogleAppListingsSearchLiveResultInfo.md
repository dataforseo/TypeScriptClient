[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataGoogleAppListingsSearchLiveResultInfo

# Class: AppDataGoogleAppListingsSearchLiveResultInfo

Defined in: main.ts:204542

## Implements

- [`IAppDataGoogleAppListingsSearchLiveResultInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppListingsSearchLiveResultInfo()

> **new AppDataGoogleAppListingsSearchLiveResultInfo**(`data`?): [`AppDataGoogleAppListingsSearchLiveResultInfo`](AppDataGoogleAppListingsSearchLiveResultInfo.md)

Defined in: main.ts:204557

#### Parameters

##### data?

[`IAppDataGoogleAppListingsSearchLiveResultInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveResultInfo.md)

#### Returns

[`AppDataGoogleAppListingsSearchLiveResultInfo`](AppDataGoogleAppListingsSearchLiveResultInfo.md)

## Properties

### count?

> `optional` **count**: `number`

Defined in: main.ts:204546

the number of items in the results array

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveResultInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveResultInfo.md).[`count`](../interfaces/IAppDataGoogleAppListingsSearchLiveResultInfo.md#count)

***

### items?

> `optional` **items**: [`AppDataGoogleAppListingsSearchLiveItem`](AppDataGoogleAppListingsSearchLiveItem.md)[]

Defined in: main.ts:204553

array of apps and related data

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveResultInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveResultInfo.md).[`items`](../interfaces/IAppDataGoogleAppListingsSearchLiveResultInfo.md#items)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:204548

offset in the results array of returned apps

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveResultInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveResultInfo.md).[`offset`](../interfaces/IAppDataGoogleAppListingsSearchLiveResultInfo.md#offset)

***

### offset\_token?

> `optional` **offset\_token**: `string`

Defined in: main.ts:204551

token for subsequent requests
you can use this parameter in the POST request to avoid timeouts while trying to obtain over 100,000 results in a single request

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveResultInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveResultInfo.md).[`offset_token`](../interfaces/IAppDataGoogleAppListingsSearchLiveResultInfo.md#offset_token)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:204544

the total number of relevant results in the database

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveResultInfo`](../interfaces/IAppDataGoogleAppListingsSearchLiveResultInfo.md).[`total_count`](../interfaces/IAppDataGoogleAppListingsSearchLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:204566

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:204591

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataGoogleAppListingsSearchLiveResultInfo`](AppDataGoogleAppListingsSearchLiveResultInfo.md)

Defined in: main.ts:204584

#### Parameters

##### data

`any`

#### Returns

[`AppDataGoogleAppListingsSearchLiveResultInfo`](AppDataGoogleAppListingsSearchLiveResultInfo.md)
