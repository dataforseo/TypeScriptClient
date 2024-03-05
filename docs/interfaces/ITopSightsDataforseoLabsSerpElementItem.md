[dataforseo-client](../README.md) / [Exports](../modules.md) / ITopSightsDataforseoLabsSerpElementItem

# Interface: ITopSightsDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

  ↳ **`ITopSightsDataforseoLabsSerpElementItem`**

## Implemented by

- [`TopSightsDataforseoLabsSerpElementItem`](../classes/TopSightsDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](ITopSightsDataforseoLabsSerpElementItem.md#items)
- [position](ITopSightsDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](ITopSightsDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](ITopSightsDataforseoLabsSerpElementItem.md#rank_group)
- [title](ITopSightsDataforseoLabsSerpElementItem.md#title)
- [xpath](ITopSightsDataforseoLabsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`TopSightsElement`](../classes/TopSightsElement.md)[]

elements of search results found in SERP

#### Defined in

[main.ts:95232](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95232)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:95226](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95226)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:95222](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95222)

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:95219](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95219)

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

[main.ts:95230](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95230)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:95228](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95228)
