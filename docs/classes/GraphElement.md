**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / GraphElement

# Class: GraphElement

## Implements

- [`IGraphElement`](../interfaces/IGraphElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new GraphElement(data)

> **new GraphElement**(`data`?): [`GraphElement`](GraphElement.md)

#### Parameters

• **data?**: [`IGraphElement`](../interfaces/IGraphElement.md)

#### Returns

[`GraphElement`](GraphElement.md)

#### Source

main.ts:34021

## Properties

### date?

> **`optional`** **date**: `string`

the posting date

#### Implementation of

[`IGraphElement`](../interfaces/IGraphElement.md).[`date`](../interfaces/IGraphElement.md#date)

#### Source

main.ts:34015

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IGraphElement`](../interfaces/IGraphElement.md).[`type`](../interfaces/IGraphElement.md#type)

#### Source

main.ts:34013

***

### value?

> **`optional`** **value**: `number`

the value of the rating

#### Implementation of

[`IGraphElement`](../interfaces/IGraphElement.md).[`value`](../interfaces/IGraphElement.md#value)

#### Source

main.ts:34017

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:34030

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:34049

***

### fromJS()

> **`static`** **fromJS**(`data`): [`GraphElement`](GraphElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`GraphElement`](GraphElement.md)

#### Source

main.ts:34042
