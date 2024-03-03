[Documentation](../README.md) / [Exports](../modules.md) / IAnswerBoxDataforseoLabsSerpElementItem

# Interface: IAnswerBoxDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

  ↳ **`IAnswerBoxDataforseoLabsSerpElementItem`**

## Implemented by

- [`AnswerBoxDataforseoLabsSerpElementItem`](../classes/AnswerBoxDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [links](IAnswerBoxDataforseoLabsSerpElementItem.md#links)
- [position](IAnswerBoxDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](IAnswerBoxDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](IAnswerBoxDataforseoLabsSerpElementItem.md#rank_group)
- [text](IAnswerBoxDataforseoLabsSerpElementItem.md#text)
- [xpath](IAnswerBoxDataforseoLabsSerpElementItem.md#xpath)

## Properties

### links

• `Optional` **links**: [`LinkElement`](../classes/LinkElement.md)[]

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Defined in

main.ts:92930

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:92921

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:92917

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:92914

___

### text

• `Optional` **text**: `string`[]

text
if there is none, equals null

#### Defined in

main.ts:92926

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:92923
