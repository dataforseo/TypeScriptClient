[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksBulkRanksLiveItem

# Class: BacklinksBulkRanksLiveItem

## Implements

- [`IBacklinksBulkRanksLiveItem`](../interfaces/IBacklinksBulkRanksLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksBulkRanksLiveItem.md#constructor)

### Properties

- [rank](BacklinksBulkRanksLiveItem.md#rank)
- [target](BacklinksBulkRanksLiveItem.md#target)

### Methods

- [init](BacklinksBulkRanksLiveItem.md#init)
- [toJSON](BacklinksBulkRanksLiveItem.md#tojson)
- [fromJS](BacklinksBulkRanksLiveItem.md#fromjs)

## Constructors

### constructor

• **new BacklinksBulkRanksLiveItem**(`data?`): [`BacklinksBulkRanksLiveItem`](BacklinksBulkRanksLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksBulkRanksLiveItem`](../interfaces/IBacklinksBulkRanksLiveItem.md) |

#### Returns

[`BacklinksBulkRanksLiveItem`](BacklinksBulkRanksLiveItem.md)

#### Defined in

[main.ts:139413](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139413)

## Properties

### rank

• `Optional` **rank**: `number`

rank of the target
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[IBacklinksBulkRanksLiveItem](../interfaces/IBacklinksBulkRanksLiveItem.md).[rank](../interfaces/IBacklinksBulkRanksLiveItem.md#rank)

#### Defined in

[main.ts:139409](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139409)

___


### target

• `Optional` **target**: `string`

domain, subdomain or webpage from a POST array

#### Implementation of

[IBacklinksBulkRanksLiveItem](../interfaces/IBacklinksBulkRanksLiveItem.md).[target](../interfaces/IBacklinksBulkRanksLiveItem.md#target)

#### Defined in

[main.ts:139405](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139405)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

[main.ts:139422](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139422)

___


### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

[main.ts:139440](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139440)

___


### fromJS

▸ **fromJS**(`data`): [`BacklinksBulkRanksLiveItem`](BacklinksBulkRanksLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksBulkRanksLiveItem`](BacklinksBulkRanksLiveItem.md)

#### Defined in

[main.ts:139433](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139433)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")