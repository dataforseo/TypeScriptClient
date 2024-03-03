[Documentation](../README.md) / [Exports](../modules.md) / IGoogleFlightsDataforseoLabsSerpElementItem

# Interface: IGoogleFlightsDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

  ↳ **`IGoogleFlightsDataforseoLabsSerpElementItem`**

## Implemented by

- [`GoogleFlightsDataforseoLabsSerpElementItem`](../classes/GoogleFlightsDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IGoogleFlightsDataforseoLabsSerpElementItem.md#items)
- [position](IGoogleFlightsDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](IGoogleFlightsDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](IGoogleFlightsDataforseoLabsSerpElementItem.md#rank_group)
- [title](IGoogleFlightsDataforseoLabsSerpElementItem.md#title)
- [url](IGoogleFlightsDataforseoLabsSerpElementItem.md#url)
- [xpath](IGoogleFlightsDataforseoLabsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`GoogleFlightsElement`](../classes/GoogleFlightsElement.md)[]

elements of search results found in SERP

#### Defined in

main.ts:94690

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:94682

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:94678

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:94675

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:94686

___

### url

• `Optional` **url**: `string`

URL link

#### Defined in

main.ts:94688

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:94684
