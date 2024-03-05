[dataforseo-client](../README.md) / [Exports](../modules.md) / IQuestionsAndAnswersSerpElementItem

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

contains results featured in the ‘hotels_pack’ element of SERP

#### Defined in

[main.ts:32973](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32973)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:32969](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32969)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:32965](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32965)

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:32962](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32962)

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

[main.ts:32977](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32977)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:32971](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32971)
