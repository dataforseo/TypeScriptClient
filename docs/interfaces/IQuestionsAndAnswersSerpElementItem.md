[Documentation](../README.md) / [Exports](../modules.md) / IQuestionsAndAnswersSerpElementItem

# Interface: IQuestionsAndAnswersSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IQuestionsAndAnswersSerpElementItem`**

## Implemented by

- [`QuestionsAndAnswersSerpElementItem`](../classes/QuestionsAndAnswersSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IQuestionsAndAnswersSerpElementItem.md#items)
- [position](IQuestionsAndAnswersSerpElementItem.md#position)
- [rank\_absolute](IQuestionsAndAnswersSerpElementItem.md#rank_absolute)
- [rank\_group](IQuestionsAndAnswersSerpElementItem.md#rank_group)
- [rectangle](IQuestionsAndAnswersSerpElementItem.md#rectangle)
- [xpath](IQuestionsAndAnswersSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`QuestionsAndAnswersElement`](../classes/QuestionsAndAnswersElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:33868

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:33863

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Defined in

main.ts:33859

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Defined in

main.ts:33855

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:33872

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:33865
