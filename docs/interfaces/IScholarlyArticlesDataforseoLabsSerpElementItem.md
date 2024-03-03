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

main.ts:95476

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:95468

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:95464

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:95461

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:95472

___

### url

• `Optional` **url**: `string`

URL link

#### Defined in

main.ts:95474

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:95470
