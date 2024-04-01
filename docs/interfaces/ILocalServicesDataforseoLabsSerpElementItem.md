[Documentation](../README.md) / [Exports](../modules.md) / ILocalServicesDataforseoLabsSerpElementItem

# Interface: ILocalServicesDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

  ↳ **`ILocalServicesDataforseoLabsSerpElementItem`**

## Implemented by

- [`LocalServicesDataforseoLabsSerpElementItem`](../classes/LocalServicesDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [domain](ILocalServicesDataforseoLabsSerpElementItem.md#domain)
- [items](ILocalServicesDataforseoLabsSerpElementItem.md#items)
- [position](ILocalServicesDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](ILocalServicesDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](ILocalServicesDataforseoLabsSerpElementItem.md#rank_group)
- [title](ILocalServicesDataforseoLabsSerpElementItem.md#title)
- [url](ILocalServicesDataforseoLabsSerpElementItem.md#url)
- [xpath](ILocalServicesDataforseoLabsSerpElementItem.md#xpath)

## Properties

### domain

• `Optional` **domain**: `string`

domain where a link points

#### Defined in

main.ts:98473

___

### items

• `Optional` **items**: [`LocalServicesElement`](../classes/LocalServicesElement.md)[]

elements of search results found in SERP

#### Defined in

main.ts:98475

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:98465

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:98461

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:98458

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:98469

___

### url

• `Optional` **url**: `string`

relevant URL of the Ad element in SERP

#### Defined in

main.ts:98471

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:98467
