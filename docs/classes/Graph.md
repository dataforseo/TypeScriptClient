[**Documentation**](../README.md)

***

[Documentation](../README.md) / Graph

# Class: Graph

Defined in: main.ts:35019

## Implements

- [`IGraph`](../interfaces/IGraph.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new Graph()

> **new Graph**(`data`?): [`Graph`](Graph.md)

Defined in: main.ts:35028

#### Parameters

##### data?

[`IGraph`](../interfaces/IGraph.md)

#### Returns

[`Graph`](Graph.md)

## Properties

### items?

> `optional` **items**: [`GraphElement`](GraphElement.md)[]

Defined in: main.ts:35021

contains arrays of elements available in the list

#### Implementation of

[`IGraph`](../interfaces/IGraph.md).[`items`](../interfaces/IGraph.md#items)

***

### previous\_items?

> `optional` **previous\_items**: [`GraphElement`](GraphElement.md)[]

Defined in: main.ts:35024

previous close data
contains stock price data based on the preceding time period

#### Implementation of

[`IGraph`](../interfaces/IGraph.md).[`previous_items`](../interfaces/IGraph.md#previous_items)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:35037

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:35063

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`Graph`](Graph.md)

Defined in: main.ts:35056

#### Parameters

##### data

`any`

#### Returns

[`Graph`](Graph.md)
