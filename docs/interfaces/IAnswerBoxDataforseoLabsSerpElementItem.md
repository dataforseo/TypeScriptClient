[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IAnswerBoxDataforseoLabsSerpElementItem

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

[main.ts:92786](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92786)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:92777](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92777)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:92773](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92773)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:92770](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92770)

___


### text

• `Optional` **text**: `string`[]

text
if there is none, equals null

#### Defined in

[main.ts:92782](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92782)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:92779](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92779)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")