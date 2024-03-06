[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IScholarlyArticlesSerpElementItem

# Interface: IScholarlyArticlesSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)
  
  ↳ **`IScholarlyArticlesSerpElementItem`**

## Implemented by

- [`ScholarlyArticlesSerpElementItem`](../classes/ScholarlyArticlesSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IScholarlyArticlesSerpElementItem.md#items)
- [position](IScholarlyArticlesSerpElementItem.md#position)
- [rank\_absolute](IScholarlyArticlesSerpElementItem.md#rank_absolute)
- [rank\_group](IScholarlyArticlesSerpElementItem.md#rank_group)
- [rectangle](IScholarlyArticlesSerpElementItem.md#rectangle)
- [title](IScholarlyArticlesSerpElementItem.md#title)
- [url](IScholarlyArticlesSerpElementItem.md#url)
- [xpath](IScholarlyArticlesSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`ScholarlyArticlesElement`](../classes/ScholarlyArticlesElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Defined in

[main.ts:31971](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31971)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:31963](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31963)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:31959](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31959)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:31956](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31956)

___


### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

[main.ts:31975](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31975)

___


### title

• `Optional` **title**: `string`

title of a given link element

#### Defined in

[main.ts:31967](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31967)

___


### url

• `Optional` **url**: `string`

URL

#### Defined in

[main.ts:31969](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31969)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:31965](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31965)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")