[Documentation](../README.md) / [Exports](../modules.md) / Rectangle

# Class: Rectangle

## Implements

- [`IRectangle`](../interfaces/IRectangle.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](Rectangle.md#constructor)

### Properties

- [height](Rectangle.md#height)
- [width](Rectangle.md#width)
- [x](Rectangle.md#x)
- [y](Rectangle.md#y)

### Methods

- [init](Rectangle.md#init)
- [toJSON](Rectangle.md#tojson)
- [fromJS](Rectangle.md#fromjs)

## Constructors

### constructor

• **new Rectangle**(`data?`): [`Rectangle`](Rectangle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IRectangle`](../interfaces/IRectangle.md) |

#### Returns

[`Rectangle`](Rectangle.md)

#### Defined in

main.ts:21378

## Properties

### height

• `Optional` **height**: `number`

height of the element in pixels

#### Implementation of

[IRectangle](../interfaces/IRectangle.md).[height](../interfaces/IRectangle.md#height)

#### Defined in

main.ts:21374

___

### width

• `Optional` **width**: `number`

width of the element in pixels

#### Implementation of

[IRectangle](../interfaces/IRectangle.md).[width](../interfaces/IRectangle.md#width)

#### Defined in

main.ts:21372

___

### x

• `Optional` **x**: `number`

x-axis coordinate
x-axis coordinate of the top-left corner of the result’s snippet, where top-left corner of the screen is the origin

#### Implementation of

[IRectangle](../interfaces/IRectangle.md).[x](../interfaces/IRectangle.md#x)

#### Defined in

main.ts:21367

___

### y

• `Optional` **y**: `number`

y-axis coordinate
y-axis coordinate of the top-left corner of the result’s snippet, where top-left corner of the screen is the origin

#### Implementation of

[IRectangle](../interfaces/IRectangle.md).[y](../interfaces/IRectangle.md#y)

#### Defined in

main.ts:21370

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

main.ts:21387

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

main.ts:21407

___

### fromJS

▸ **fromJS**(`data`): [`Rectangle`](Rectangle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`Rectangle`](Rectangle.md)

#### Defined in

main.ts:21400
