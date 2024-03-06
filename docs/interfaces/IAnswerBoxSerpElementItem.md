[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IAnswerBoxSerpElementItem

# Interface: IAnswerBoxSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)
  
  ↳ **`IAnswerBoxSerpElementItem`**

## Implemented by

- [`AnswerBoxSerpElementItem`](../classes/AnswerBoxSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [links](IAnswerBoxSerpElementItem.md#links)
- [position](IAnswerBoxSerpElementItem.md#position)
- [rank\_absolute](IAnswerBoxSerpElementItem.md#rank_absolute)
- [rank\_group](IAnswerBoxSerpElementItem.md#rank_group)
- [rectangle](IAnswerBoxSerpElementItem.md#rectangle)
- [text](IAnswerBoxSerpElementItem.md#text)
- [xpath](IAnswerBoxSerpElementItem.md#xpath)

## Properties

### links

• `Optional` **links**: [`LinkElement`](../classes/LinkElement.md)[]

link of the element

#### Defined in

[main.ts:30385](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30385)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:30378](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30378)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:30374](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30374)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:30371](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30371)

___


### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

[main.ts:30389](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30389)

___


### text

• `Optional` **text**: `string`[]

text
if there is none, equals null

#### Defined in

[main.ts:30383](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30383)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:30380](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30380)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")