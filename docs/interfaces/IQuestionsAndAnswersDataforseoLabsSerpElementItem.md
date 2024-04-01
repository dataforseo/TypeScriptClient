[Documentation](../README.md) / [Exports](../modules.md) / IQuestionsAndAnswersDataforseoLabsSerpElementItem

# Interface: IQuestionsAndAnswersDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

  ↳ **`IQuestionsAndAnswersDataforseoLabsSerpElementItem`**

## Implemented by

- [`QuestionsAndAnswersDataforseoLabsSerpElementItem`](../classes/QuestionsAndAnswersDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IQuestionsAndAnswersDataforseoLabsSerpElementItem.md#items)
- [position](IQuestionsAndAnswersDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](IQuestionsAndAnswersDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](IQuestionsAndAnswersDataforseoLabsSerpElementItem.md#rank_group)
- [xpath](IQuestionsAndAnswersDataforseoLabsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`QuestionsAndAnswersElement`](../classes/QuestionsAndAnswersElement.md)[]

elements of search results found in SERP

#### Defined in

main.ts:97973

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:97969

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:97965

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:97962

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:97971
