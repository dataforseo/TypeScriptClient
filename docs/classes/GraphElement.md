[Documentation](../README.md) / [Exports](../modules.md) / GraphElement

# Class: GraphElement

## Implements

- [`IGraphElement`](../interfaces/IGraphElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](GraphElement.md#constructor)

### Properties

- [date](GraphElement.md#date)
- [type](GraphElement.md#type)
- [value](GraphElement.md#value)

### Methods

- [init](GraphElement.md#init)
- [toJSON](GraphElement.md#tojson)
- [fromJS](GraphElement.md#fromjs)

## Constructors

### constructor

• **new GraphElement**(`data?`): [`GraphElement`](GraphElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IGraphElement`](../interfaces/IGraphElement.md) |

#### Returns

[`GraphElement`](GraphElement.md)

#### Defined in

main.ts:33233

## Properties

### date

• `Optional` **date**: `string`

the posting date

#### Implementation of

[IGraphElement](../interfaces/IGraphElement.md).[date](../interfaces/IGraphElement.md#date)

#### Defined in

main.ts:33227

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IGraphElement](../interfaces/IGraphElement.md).[type](../interfaces/IGraphElement.md#type)

#### Defined in

main.ts:33225

___

### value

• `Optional` **value**: `number`

the value of the rating

#### Implementation of

[IGraphElement](../interfaces/IGraphElement.md).[value](../interfaces/IGraphElement.md#value)

#### Defined in

main.ts:33229

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

main.ts:33242

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

main.ts:33261

___

### fromJS

▸ **fromJS**(`data`): [`GraphElement`](GraphElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`GraphElement`](GraphElement.md)

#### Defined in

main.ts:33254
