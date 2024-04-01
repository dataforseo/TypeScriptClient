[Documentation](../README.md) / [Exports](../modules.md) / IMapDataforseoLabsSerpElementItem

# Interface: IMapDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

  ↳ **`IMapDataforseoLabsSerpElementItem`**

## Implemented by

- [`MapDataforseoLabsSerpElementItem`](../classes/MapDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [position](IMapDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](IMapDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](IMapDataforseoLabsSerpElementItem.md#rank_group)
- [title](IMapDataforseoLabsSerpElementItem.md#title)
- [url](IMapDataforseoLabsSerpElementItem.md#url)
- [xpath](IMapDataforseoLabsSerpElementItem.md#xpath)

## Properties

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:95459

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:95455

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:95452

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:95463

___

### url

• `Optional` **url**: `string`

relevant URL of the Ad element in SERP

#### Defined in

main.ts:95465

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:95461
