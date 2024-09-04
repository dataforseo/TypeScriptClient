[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / Graph

# Class: Graph

## Implements

- [`IGraph`](../interfaces/IGraph.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new Graph()

> **new Graph**(`data`?): [`Graph`](Graph.md)

#### Parameters

• **data?**: [`IGraph`](../interfaces/IGraph.md)

#### Returns

[`Graph`](Graph.md)

#### Defined in

main.ts:33236

## Properties

### items?

> `optional` **items**: [`GraphElement`](GraphElement.md)[]

contains arrays of specific images

#### Implementation of

[`IGraph`](../interfaces/IGraph.md).[`items`](../interfaces/IGraph.md#items)

#### Defined in

main.ts:33229

***

### previous\_items?

> `optional` **previous\_items**: [`GraphElement`](GraphElement.md)[]

previous close data
contains stock price data based on the preceding time period

#### Implementation of

[`IGraph`](../interfaces/IGraph.md).[`previous_items`](../interfaces/IGraph.md#previous_items)

#### Defined in

main.ts:33232

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:33245

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:33271

***

### fromJS()

> `static` **fromJS**(`data`): [`Graph`](Graph.md)

#### Parameters

• **data**: `any`

#### Returns

[`Graph`](Graph.md)

#### Defined in

main.ts:33264
