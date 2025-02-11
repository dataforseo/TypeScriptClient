[**Documentation**](../README.md)

***

[Documentation](../README.md) / GraphElement

# Class: GraphElement

Defined in: main.ts:34973

## Implements

- [`IGraphElement`](../interfaces/IGraphElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new GraphElement()

> **new GraphElement**(`data`?): [`GraphElement`](GraphElement.md)

Defined in: main.ts:34983

#### Parameters

##### data?

[`IGraphElement`](../interfaces/IGraphElement.md)

#### Returns

[`GraphElement`](GraphElement.md)

## Properties

### date?

> `optional` **date**: `string`

Defined in: main.ts:34977

the posting date

#### Implementation of

[`IGraphElement`](../interfaces/IGraphElement.md).[`date`](../interfaces/IGraphElement.md#date)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:34975

type of element

#### Implementation of

[`IGraphElement`](../interfaces/IGraphElement.md).[`type`](../interfaces/IGraphElement.md#type)

***

### value?

> `optional` **value**: `number`

Defined in: main.ts:34979

the value of the rating

#### Implementation of

[`IGraphElement`](../interfaces/IGraphElement.md).[`value`](../interfaces/IGraphElement.md#value)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:34992

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:35011

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`GraphElement`](GraphElement.md)

Defined in: main.ts:35004

#### Parameters

##### data

`any`

#### Returns

[`GraphElement`](GraphElement.md)
