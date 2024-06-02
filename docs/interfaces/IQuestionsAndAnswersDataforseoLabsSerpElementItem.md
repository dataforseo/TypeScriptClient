**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IQuestionsAndAnswersDataforseoLabsSerpElementItem

# Interface: IQuestionsAndAnswersDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> **`optional`** **items**: [`QuestionsAndAnswersElement`](../classes/QuestionsAndAnswersElement.md)[]

additional items present in the element
if there are none, equals null

#### Source

main.ts:99032

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:99027

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:99023

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:99020

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:99029
