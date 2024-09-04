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

main.ts:33175

## Properties

### date?

> `optional` **date**: `string`

the posting date

#### Implementation of

[`IGraphElement`](../interfaces/IGraphElement.md).[`date`](../interfaces/IGraphElement.md#date)

#### Defined in

main.ts:33169

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IGraphElement`](../interfaces/IGraphElement.md).[`type`](../interfaces/IGraphElement.md#type)

#### Defined in

main.ts:33167

***

### value?

> `optional` **value**: `number`

the value of the rating

#### Implementation of

[`IGraphElement`](../interfaces/IGraphElement.md).[`value`](../interfaces/IGraphElement.md#value)

#### Defined in

main.ts:33171

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:33184

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:33203

***

### fromJS()

> `static` **fromJS**(`data`): [`GraphElement`](GraphElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`GraphElement`](GraphElement.md)

#### Defined in

main.ts:33196
