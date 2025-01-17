[**Documentation**](../README.md)

***

[Documentation](../README.md) / Rectangle

# Class: Rectangle

Defined in: main.ts:23315

## Implements

- [`IRectangle`](../interfaces/IRectangle.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new Rectangle()

> **new Rectangle**(`data`?): [`Rectangle`](Rectangle.md)

Defined in: main.ts:23329

#### Parameters

##### data?

[`IRectangle`](../interfaces/IRectangle.md)

#### Returns

[`Rectangle`](Rectangle.md)

## Properties

### height?

> `optional` **height**: `number`

Defined in: main.ts:23325

height of the element in pixels

#### Implementation of

[`IRectangle`](../interfaces/IRectangle.md).[`height`](../interfaces/IRectangle.md#height)

***

### width?

> `optional` **width**: `number`

Defined in: main.ts:23323

width of the element in pixels

#### Implementation of

[`IRectangle`](../interfaces/IRectangle.md).[`width`](../interfaces/IRectangle.md#width)

***

### x?

> `optional` **x**: `number`

Defined in: main.ts:23318

x-axis coordinate
x-axis coordinate of the top-left corner of the result’s snippet, where top-left corner of the screen is the origin

#### Implementation of

[`IRectangle`](../interfaces/IRectangle.md).[`x`](../interfaces/IRectangle.md#x)

***

### y?

> `optional` **y**: `number`

Defined in: main.ts:23321

y-axis coordinate
y-axis coordinate of the top-left corner of the result’s snippet, where top-left corner of the screen is the origin

#### Implementation of

[`IRectangle`](../interfaces/IRectangle.md).[`y`](../interfaces/IRectangle.md#y)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:23338

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:23358

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`Rectangle`](Rectangle.md)

Defined in: main.ts:23351

#### Parameters

##### data

`any`

#### Returns

[`Rectangle`](Rectangle.md)
