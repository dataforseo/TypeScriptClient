**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / Rectangle

# Class: Rectangle

## Implements

- [`IRectangle`](../interfaces/IRectangle.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new Rectangle(data)

> **new Rectangle**(`data`?): [`Rectangle`](Rectangle.md)

#### Parameters

• **data?**: [`IRectangle`](../interfaces/IRectangle.md)

#### Returns

[`Rectangle`](Rectangle.md)

#### Source

main.ts:21506

## Properties

### height?

> **`optional`** **height**: `number`

height of the element in pixels

#### Implementation of

[`IRectangle`](../interfaces/IRectangle.md).[`height`](../interfaces/IRectangle.md#height)

#### Source

main.ts:21502

***

### width?

> **`optional`** **width**: `number`

width of the element in pixels

#### Implementation of

[`IRectangle`](../interfaces/IRectangle.md).[`width`](../interfaces/IRectangle.md#width)

#### Source

main.ts:21500

***

### x?

> **`optional`** **x**: `number`

x-axis coordinate
x-axis coordinate of the top-left corner of the result’s snippet, where top-left corner of the screen is the origin

#### Implementation of

[`IRectangle`](../interfaces/IRectangle.md).[`x`](../interfaces/IRectangle.md#x)

#### Source

main.ts:21495

***

### y?

> **`optional`** **y**: `number`

y-axis coordinate
y-axis coordinate of the top-left corner of the result’s snippet, where top-left corner of the screen is the origin

#### Implementation of

[`IRectangle`](../interfaces/IRectangle.md).[`y`](../interfaces/IRectangle.md#y)

#### Source

main.ts:21498

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:21515

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:21535

***

### fromJS()

> **`static`** **fromJS**(`data`): [`Rectangle`](Rectangle.md)

#### Parameters

• **data**: `any`

#### Returns

[`Rectangle`](Rectangle.md)

#### Source

main.ts:21528
