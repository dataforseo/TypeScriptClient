[dataforseo-client](../README.md) / [Exports](../modules.md) / MapSerpElementItem

# Class: MapSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`MapSerpElementItem`**

## Implements

- [`IMapSerpElementItem`](../interfaces/IMapSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MapSerpElementItem.md#constructor)

### Properties

- [\_discriminator](MapSerpElementItem.md#_discriminator)
- [position](MapSerpElementItem.md#position)
- [rank\_absolute](MapSerpElementItem.md#rank_absolute)
- [rank\_group](MapSerpElementItem.md#rank_group)
- [rectangle](MapSerpElementItem.md#rectangle)
- [title](MapSerpElementItem.md#title)
- [url](MapSerpElementItem.md#url)
- [xpath](MapSerpElementItem.md#xpath)

### Methods

- [init](MapSerpElementItem.md#init)
- [toJSON](MapSerpElementItem.md#tojson)
- [fromJS](MapSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new MapSerpElementItem**(`data?`): [`MapSerpElementItem`](MapSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMapSerpElementItem`](../interfaces/IMapSerpElementItem.md) |

#### Returns

[`MapSerpElementItem`](MapSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

[main.ts:29533](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29533)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19337)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IMapSerpElementItem](../interfaces/IMapSerpElementItem.md).[position](../interfaces/IMapSerpElementItem.md#position)

#### Defined in

[main.ts:29519](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29519)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IMapSerpElementItem](../interfaces/IMapSerpElementItem.md).[rank_absolute](../interfaces/IMapSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:29515](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29515)

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IMapSerpElementItem](../interfaces/IMapSerpElementItem.md).[rank_group](../interfaces/IMapSerpElementItem.md#rank_group)

#### Defined in

[main.ts:29512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29512)

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IMapSerpElementItem](../interfaces/IMapSerpElementItem.md).[rectangle](../interfaces/IMapSerpElementItem.md#rectangle)

#### Defined in

[main.ts:29529](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29529)

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Implementation of

[IMapSerpElementItem](../interfaces/IMapSerpElementItem.md).[title](../interfaces/IMapSerpElementItem.md#title)

#### Defined in

[main.ts:29523](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29523)

___

### url

• `Optional` **url**: `string`

URL

#### Implementation of

[IMapSerpElementItem](../interfaces/IMapSerpElementItem.md).[url](../interfaces/IMapSerpElementItem.md#url)

#### Defined in

[main.ts:29525](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29525)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IMapSerpElementItem](../interfaces/IMapSerpElementItem.md).[xpath](../interfaces/IMapSerpElementItem.md#xpath)

#### Defined in

[main.ts:29521](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29521)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[init](BaseSerpElementItem.md#init)

#### Defined in

[main.ts:29538](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29538)

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[toJSON](BaseSerpElementItem.md#tojson)

#### Defined in

[main.ts:29562](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29562)

___

### fromJS

▸ **fromJS**(`data`): [`MapSerpElementItem`](MapSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MapSerpElementItem`](MapSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

[main.ts:29555](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29555)
