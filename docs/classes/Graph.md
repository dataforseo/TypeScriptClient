[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / Graph

# Class: Graph

## Implements

- [`IGraph`](../interfaces/IGraph.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](Graph.md#constructor)

### Properties

- [items](Graph.md#items)
- [previous\_items](Graph.md#previous_items)

### Methods

- [init](Graph.md#init)
- [toJSON](Graph.md#tojson)
- [fromJS](Graph.md#fromjs)

## Constructors

### constructor

• **new Graph**(`data?`): [`Graph`](Graph.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IGraph`](../interfaces/IGraph.md) |

#### Returns

[`Graph`](Graph.md)

#### Defined in

[main.ts:32414](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32414)

## Properties

### items

• `Optional` **items**: [`GraphElement`](GraphElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[IGraph](../interfaces/IGraph.md).[items](../interfaces/IGraph.md#items)

#### Defined in

[main.ts:32407](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32407)

___


### previous\_items

• `Optional` **previous\_items**: [`GraphElement`](GraphElement.md)[]

previous close data
contains stock price data based on the preceding time period

#### Implementation of

[IGraph](../interfaces/IGraph.md).[previous_items](../interfaces/IGraph.md#previous_items)

#### Defined in

[main.ts:32410](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32410)

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

[main.ts:32423](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32423)

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

[main.ts:32449](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32449)

___


### fromJS

▸ **fromJS**(`data`): [`Graph`](Graph.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`Graph`](Graph.md)

#### Defined in

[main.ts:32442](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32442)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")