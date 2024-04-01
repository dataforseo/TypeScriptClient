[Documentation](../README.md) / [Exports](../modules.md) / IJobsDataforseoLabsSerpElementItem

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

main.ts:97233

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:97225

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:97221

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:97218

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:97229

___

### url

• `Optional` **url**: `string`

relevant URL of the Ad element in SERP

#### Defined in

main.ts:97231

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:97227
