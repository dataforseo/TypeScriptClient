[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IAppDataGoogleAppListingsSearchLiveResultInfo

# Interface: IAppDataGoogleAppListingsSearchLiveResultInfo

## Implemented by

- [`AppDataGoogleAppListingsSearchLiveResultInfo`](../classes/AppDataGoogleAppListingsSearchLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [count](IAppDataGoogleAppListingsSearchLiveResultInfo.md#count)
- [items](IAppDataGoogleAppListingsSearchLiveResultInfo.md#items)
- [offset](IAppDataGoogleAppListingsSearchLiveResultInfo.md#offset)
- [offset\_token](IAppDataGoogleAppListingsSearchLiveResultInfo.md#offset_token)
- [total\_count](IAppDataGoogleAppListingsSearchLiveResultInfo.md#total_count)

## Properties

### count

• `Optional` **count**: `number`

the number of items in the results array

#### Defined in

[main.ts:182440](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182440)

___


### items

• `Optional` **items**: [`AppDataleAppListingsSearchLiveItem`](../classes/AppDataleAppListingsSearchLiveItem.md)[]

array of apps and related data

#### Defined in

[main.ts:182447](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182447)

___


### offset

• `Optional` **offset**: `number`

offset in the results array of returned apps

#### Defined in

[main.ts:182442](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182442)

___


### offset\_token

• `Optional` **offset\_token**: `string`

token for subsequent requests
you can use this parameter in the POST request to avoid timeouts while trying to obtain over 100,000 results in a single request

#### Defined in

[main.ts:182445](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182445)

___


### total\_count

• `Optional` **total\_count**: `number`

the total number of relevant results in the database

#### Defined in

[main.ts:182438](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182438)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")