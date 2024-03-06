[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IQuestionsAndAnswersDataforseoLabsSerpElementItem

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

[main.ts:95596](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95596)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:95592](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95592)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:95588](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95588)

___


### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:95585](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95585)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:95594](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95594)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")