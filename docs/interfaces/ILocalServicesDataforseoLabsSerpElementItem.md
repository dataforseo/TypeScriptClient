[dataforseo-client](../README.md) / [Exports](../modules.md) / ILocalServicesDataforseoLabsSerpElementItem

# Interface: ILocalServicesDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

  ↳ **`ILocalServicesDataforseoLabsSerpElementItem`**

## Implemented by

- [`LocalServicesDataforseoLabsSerpElementItem`](../classes/LocalServicesDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [domain](ILocalServicesDataforseoLabsSerpElementItem.md#domain)
- [items](ILocalServicesDataforseoLabsSerpElementItem.md#items)
- [position](ILocalServicesDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](ILocalServicesDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](ILocalServicesDataforseoLabsSerpElementItem.md#rank_group)
- [title](ILocalServicesDataforseoLabsSerpElementItem.md#title)
- [url](ILocalServicesDataforseoLabsSerpElementItem.md#url)
- [xpath](ILocalServicesDataforseoLabsSerpElementItem.md#xpath)

## Properties

### domain

• `Optional` **domain**: `string`

domain where a link points

#### Defined in

[main.ts:96096](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96096)

___

### items

• `Optional` **items**: [`LocalServicesElement`](../classes/LocalServicesElement.md)[]

elements of search results found in SERP

#### Defined in

[main.ts:96098](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96098)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:96088](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96088)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:96084](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96084)

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:96081](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96081)

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

[main.ts:96092](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96092)

___

### url

• `Optional` **url**: `string`

URL link

#### Defined in

[main.ts:96094](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96094)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:96090](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96090)
