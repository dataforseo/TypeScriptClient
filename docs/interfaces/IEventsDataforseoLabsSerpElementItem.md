[Documentation](../README.md) / [Exports](../modules.md) / IEventsDataforseoLabsSerpElementItem

# Interface: IEventsDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

  ↳ **`IEventsDataforseoLabsSerpElementItem`**

## Implemented by

- [`EventsDataforseoLabsSerpElementItem`](../classes/EventsDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IEventsDataforseoLabsSerpElementItem.md#items)
- [position](IEventsDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](IEventsDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](IEventsDataforseoLabsSerpElementItem.md#rank_group)
- [title](IEventsDataforseoLabsSerpElementItem.md#title)
- [url](IEventsDataforseoLabsSerpElementItem.md#url)
- [xpath](IEventsDataforseoLabsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`EventsElement`](../classes/EventsElement.md)[]

elements of search results found in SERP

#### Defined in

main.ts:95100

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:95092

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:95088

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:95085

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:95096

___

### url

• `Optional` **url**: `string`

URL link

#### Defined in

main.ts:95098

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:95094
