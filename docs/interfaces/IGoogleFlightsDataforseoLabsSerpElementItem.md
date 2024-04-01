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

main.ts:96923

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:96915

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:96911

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:96908

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:96919

___

### url

• `Optional` **url**: `string`

relevant URL of the Ad element in SERP

#### Defined in

main.ts:96921

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:96917
