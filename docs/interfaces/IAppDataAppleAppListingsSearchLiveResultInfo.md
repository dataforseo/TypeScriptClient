[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IAppDataAppleAppListingsSearchLiveResultInfo

# Interface: IAppDataAppleAppListingsSearchLiveResultInfo

## Implemented by

- [`AppDataAppleAppListingsSearchLiveResultInfo`](../classes/AppDataAppleAppListingsSearchLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [count](IAppDataAppleAppListingsSearchLiveResultInfo.md#count)
- [items](IAppDataAppleAppListingsSearchLiveResultInfo.md#items)
- [offset](IAppDataAppleAppListingsSearchLiveResultInfo.md#offset)
- [offset\_token](IAppDataAppleAppListingsSearchLiveResultInfo.md#offset_token)
- [total\_count](IAppDataAppleAppListingsSearchLiveResultInfo.md#total_count)

## Properties

### count

• `Optional` **count**: `number`

the number of items in the results array

#### Defined in

[main.ts:187020](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L187020)

___


### items

• `Optional` **items**: [`AppDataleAppListingsSearchLiveItem`](../classes/AppDataleAppListingsSearchLiveItem.md)[]

array of apps and related data

#### Defined in

[main.ts:187027](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L187027)

___


### offset

• `Optional` **offset**: `number`

offset in the results array of returned apps

#### Defined in

[main.ts:187022](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L187022)

___


### offset\_token

• `Optional` **offset\_token**: `string`

token for subsequent requests
you can use this parameter in the POST request to avoid timeouts while trying to obtain over 100,000 results in a single request

#### Defined in

[main.ts:187025](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L187025)

___


### total\_count

• `Optional` **total\_count**: `number`

the total number of relevant results in the database

#### Defined in

[main.ts:187018](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L187018)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")