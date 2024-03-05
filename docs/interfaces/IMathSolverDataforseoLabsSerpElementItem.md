[dataforseo-client](../README.md) / [Exports](../modules.md) / IMathSolverDataforseoLabsSerpElementItem

# Interface: IMathSolverDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

  ↳ **`IMathSolverDataforseoLabsSerpElementItem`**

## Implemented by

- [`MathSolverDataforseoLabsSerpElementItem`](../classes/MathSolverDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IMathSolverDataforseoLabsSerpElementItem.md#items)
- [links](IMathSolverDataforseoLabsSerpElementItem.md#links)
- [position](IMathSolverDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](IMathSolverDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](IMathSolverDataforseoLabsSerpElementItem.md#rank_group)
- [result](IMathSolverDataforseoLabsSerpElementItem.md#result)
- [title](IMathSolverDataforseoLabsSerpElementItem.md#title)
- [xpath](IMathSolverDataforseoLabsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`MathSolverElement`](../classes/MathSolverElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

[main.ts:92906](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92906)

___

### links

• `Optional` **links**: [`LinkElement`](../classes/LinkElement.md)[]

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Defined in

[main.ts:92910](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92910)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:92896](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92896)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:92892](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92892)

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:92889](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92889)

___

### result

• `Optional` **result**: `string`

solution to the equation
solution to the mathematical equation specified in the keyword field when setting a task

#### Defined in

[main.ts:92903](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92903)

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

[main.ts:92900](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92900)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:92898](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92898)
