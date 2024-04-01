[Documentation](../README.md) / [Exports](../modules.md) / IScholarlyArticlesDataforseoLabsSerpElementItem

# Interface: IScholarlyArticlesDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

  ↳ **`IScholarlyArticlesDataforseoLabsSerpElementItem`**

## Implemented by

- [`ScholarlyArticlesDataforseoLabsSerpElementItem`](../classes/ScholarlyArticlesDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IScholarlyArticlesDataforseoLabsSerpElementItem.md#items)
- [position](IScholarlyArticlesDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](IScholarlyArticlesDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](IScholarlyArticlesDataforseoLabsSerpElementItem.md#rank_group)
- [title](IScholarlyArticlesDataforseoLabsSerpElementItem.md#title)
- [url](IScholarlyArticlesDataforseoLabsSerpElementItem.md#url)
- [xpath](IScholarlyArticlesDataforseoLabsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`ScholarlyArticlesElement`](../classes/ScholarlyArticlesElement.md)[]

elements of search results found in SERP

#### Defined in

main.ts:97709

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:97701

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:97697

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:97694

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:97705

___

### url

• `Optional` **url**: `string`

relevant URL of the Ad element in SERP

#### Defined in

main.ts:97707

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:97703
