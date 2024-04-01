[Documentation](../README.md) / [Exports](../modules.md) / IKnowledgeGraphHotelsBookingItemSerpElementItem

# Interface: IKnowledgeGraphHotelsBookingItemSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IKnowledgeGraphHotelsBookingItemSerpElementItem`**

## Implemented by

- [`KnowledgeGraphHotelsBookingItemSerpElementItem`](../classes/KnowledgeGraphHotelsBookingItemSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [data\_attrid](IKnowledgeGraphHotelsBookingItemSerpElementItem.md#data_attrid)
- [date\_from](IKnowledgeGraphHotelsBookingItemSerpElementItem.md#date_from)
- [date\_to](IKnowledgeGraphHotelsBookingItemSerpElementItem.md#date_to)
- [items](IKnowledgeGraphHotelsBookingItemSerpElementItem.md#items)
- [position](IKnowledgeGraphHotelsBookingItemSerpElementItem.md#position)
- [rank\_absolute](IKnowledgeGraphHotelsBookingItemSerpElementItem.md#rank_absolute)
- [rank\_group](IKnowledgeGraphHotelsBookingItemSerpElementItem.md#rank_group)
- [rectangle](IKnowledgeGraphHotelsBookingItemSerpElementItem.md#rectangle)
- [title](IKnowledgeGraphHotelsBookingItemSerpElementItem.md#title)
- [xpath](IKnowledgeGraphHotelsBookingItemSerpElementItem.md#xpath)

## Properties

### data\_attrid

• `Optional` **data\_attrid**: `string`

google defined data attribute ID
example:
kc:/local:hotel booking

#### Defined in

main.ts:28253

___

### date\_from

• `Optional` **date\_from**: `string`

starting date of stay
in the format “year-month-date”
example:
2019-11-15

#### Defined in

main.ts:28244

___

### date\_to

• `Optional` **date\_to**: `string`

ending date of stay
in the format “year-month-date”
example:
2019-11-17

#### Defined in

main.ts:28249

___

### items

• `Optional` **items**: [`KnowledgeGraphHotelsBookingElement`](../classes/KnowledgeGraphHotelsBookingElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:28256

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:28235

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:28231

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:28228

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:28260

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Defined in

main.ts:28239

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:28237
