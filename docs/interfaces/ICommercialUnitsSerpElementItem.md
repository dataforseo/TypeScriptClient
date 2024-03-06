[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ICommercialUnitsSerpElementItem

# Interface: ICommercialUnitsSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)
  
  ↳ **`ICommercialUnitsSerpElementItem`**

## Implemented by

- [`CommercialUnitsSerpElementItem`](../classes/CommercialUnitsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](ICommercialUnitsSerpElementItem.md#items)
- [position](ICommercialUnitsSerpElementItem.md#position)
- [rank\_absolute](ICommercialUnitsSerpElementItem.md#rank_absolute)
- [rank\_group](ICommercialUnitsSerpElementItem.md#rank_group)
- [rectangle](ICommercialUnitsSerpElementItem.md#rectangle)
- [title](ICommercialUnitsSerpElementItem.md#title)
- [xpath](ICommercialUnitsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`CommercialUnitsElement`](../classes/CommercialUnitsElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Defined in

[main.ts:33571](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33571)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:33565](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33565)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:33561](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33561)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:33558](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33558)

___


### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

[main.ts:33575](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33575)

___


### title

• `Optional` **title**: `string`

title of a given link element

#### Defined in

[main.ts:33569](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33569)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:33567](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33567)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")