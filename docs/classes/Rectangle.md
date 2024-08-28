[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / Rectangle

# Class: Rectangle

## Implements

- [`IRectangle`](../interfaces/IRectangle.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new Rectangle()

> **new Rectangle**(`data`?): [`Rectangle`](Rectangle.md)

#### Parameters

• **data?**: [`IRectangle`](../interfaces/IRectangle.md)

#### Returns

[`Rectangle`](Rectangle.md)

#### Defined in

main.ts:22110

## Properties

### height?

> `optional` **height**: `number`

height of the element in pixels

#### Implementation of

[`IRectangle`](../interfaces/IRectangle.md).[`height`](../interfaces/IRectangle.md#height)

#### Defined in

main.ts:22106

***

### width?

> `optional` **width**: `number`

width of the element in pixels

#### Implementation of

[`IRectangle`](../interfaces/IRectangle.md).[`width`](../interfaces/IRectangle.md#width)

#### Defined in

main.ts:22104

***

### x?

> `optional` **x**: `number`

x-axis coordinate
x-axis coordinate of the top-left corner of the result’s snippet, where top-left corner of the screen is the origin

#### Implementation of

[`IRectangle`](../interfaces/IRectangle.md).[`x`](../interfaces/IRectangle.md#x)

#### Defined in

main.ts:22099

***

### y?

> `optional` **y**: `number`

y-axis coordinate
y-axis coordinate of the top-left corner of the result’s snippet, where top-left corner of the screen is the origin

#### Implementation of

[`IRectangle`](../interfaces/IRectangle.md).[`y`](../interfaces/IRectangle.md#y)

#### Defined in

main.ts:22102

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:22119

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:22139

***

### fromJS()

> `static` **fromJS**(`data`): [`Rectangle`](Rectangle.md)

#### Parameters

• **data**: `any`

#### Returns

[`Rectangle`](Rectangle.md)

#### Defined in

main.ts:22132
