[Documentation](../README.md) / [Exports](../modules.md) / ICommercialUnitsDataforseoLabsSerpElementItem

# Interface: ICommercialUnitsDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

  ↳ **`ICommercialUnitsDataforseoLabsSerpElementItem`**

## Implemented by

- [`CommercialUnitsDataforseoLabsSerpElementItem`](../classes/CommercialUnitsDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](ICommercialUnitsDataforseoLabsSerpElementItem.md#items)
- [position](ICommercialUnitsDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](ICommercialUnitsDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](ICommercialUnitsDataforseoLabsSerpElementItem.md#rank_group)
- [title](ICommercialUnitsDataforseoLabsSerpElementItem.md#title)
- [xpath](ICommercialUnitsDataforseoLabsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`CommercialUnitsElement`](../classes/CommercialUnitsElement.md)[]

elements of search results found in SERP

#### Defined in

main.ts:96136

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:96130

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:96126

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:96123

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:96134

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:96132
