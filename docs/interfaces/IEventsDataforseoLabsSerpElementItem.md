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

main.ts:97333

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:97325

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:97321

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:97318

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:97329

___

### url

• `Optional` **url**: `string`

relevant URL of the Ad element in SERP

#### Defined in

main.ts:97331

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:97327
