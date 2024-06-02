**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / Graph

# Class: Graph

## Implements

- [`IGraph`](../interfaces/IGraph.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new Graph(data)

> **new Graph**(`data`?): [`Graph`](Graph.md)

#### Parameters

• **data?**: [`IGraph`](../interfaces/IGraph.md)

#### Returns

[`Graph`](Graph.md)

#### Source

main.ts:33555

## Properties

### items?

> **`optional`** **items**: [`GraphElement`](GraphElement.md)[]

contains arrays of specific images

#### Implementation of

[`IGraph`](../interfaces/IGraph.md).[`items`](../interfaces/IGraph.md#items)

#### Source

main.ts:33548

***

### previous\_items?

> **`optional`** **previous\_items**: [`GraphElement`](GraphElement.md)[]

previous close data
contains stock price data based on the preceding time period

#### Implementation of

[`IGraph`](../interfaces/IGraph.md).[`previous_items`](../interfaces/IGraph.md#previous_items)

#### Source

main.ts:33551

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:33564

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:33590

***

### fromJS()

> **`static`** **fromJS**(`data`): [`Graph`](Graph.md)

#### Parameters

• **data**: `any`

#### Returns

[`Graph`](Graph.md)

#### Source

main.ts:33583
