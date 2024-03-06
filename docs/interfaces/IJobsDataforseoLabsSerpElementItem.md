[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IJobsDataforseoLabsSerpElementItem

# Interface: IJobsDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)
  
  ↳ **`IJobsDataforseoLabsSerpElementItem`**

## Implemented by

- [`JobsDataforseoLabsSerpElementItem`](../classes/JobsDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IJobsDataforseoLabsSerpElementItem.md#items)
- [position](IJobsDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](IJobsDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](IJobsDataforseoLabsSerpElementItem.md#rank_group)
- [title](IJobsDataforseoLabsSerpElementItem.md#title)
- [url](IJobsDataforseoLabsSerpElementItem.md#url)
- [xpath](IJobsDataforseoLabsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`JobsElement`](../classes/JobsElement.md)[]

elements of search results found in SERP

#### Defined in

[main.ts:94856](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94856)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:94848](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94848)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:94844](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94844)

___


### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:94841](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94841)

___


### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

[main.ts:94852](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94852)

___


### url

• `Optional` **url**: `string`

URL link

#### Defined in

[main.ts:94854](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94854)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:94850](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94850)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")