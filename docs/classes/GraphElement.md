[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / GraphElement

# Class: GraphElement

## Implements

- [`IGraphElement`](../interfaces/IGraphElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new GraphElement()

> **new GraphElement**(`data`?): [`GraphElement`](GraphElement.md)

#### Parameters

• **data?**: [`IGraphElement`](../interfaces/IGraphElement.md)

#### Returns

[`GraphElement`](GraphElement.md)

#### Defined in

main.ts:33414

## Properties

### date?

> `optional` **date**: `string`

the posting date

#### Implementation of

[`IGraphElement`](../interfaces/IGraphElement.md).[`date`](../interfaces/IGraphElement.md#date)

#### Defined in

main.ts:33408

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IGraphElement`](../interfaces/IGraphElement.md).[`type`](../interfaces/IGraphElement.md#type)

#### Defined in

main.ts:33406

***

### value?

> `optional` **value**: `number`

the value of the rating

#### Implementation of

[`IGraphElement`](../interfaces/IGraphElement.md).[`value`](../interfaces/IGraphElement.md#value)

#### Defined in

main.ts:33410

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:33423

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:33442

***

### fromJS()

> `static` **fromJS**(`data`): [`GraphElement`](GraphElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`GraphElement`](GraphElement.md)

#### Defined in

main.ts:33435
