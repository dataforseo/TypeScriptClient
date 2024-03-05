[dataforseo-client](../README.md) / [Exports](../modules.md) / ITwitterDataforseoLabsSerpElementItem

# Interface: ITwitterDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

  ↳ **`ITwitterDataforseoLabsSerpElementItem`**

## Implemented by

- [`TwitterDataforseoLabsSerpElementItem`](../classes/TwitterDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](ITwitterDataforseoLabsSerpElementItem.md#items)
- [position](ITwitterDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](ITwitterDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](ITwitterDataforseoLabsSerpElementItem.md#rank_group)
- [se\_type](ITwitterDataforseoLabsSerpElementItem.md#se_type)
- [title](ITwitterDataforseoLabsSerpElementItem.md#title)
- [url](ITwitterDataforseoLabsSerpElementItem.md#url)
- [xpath](ITwitterDataforseoLabsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`TwitterElement`](../classes/TwitterElement.md)[]

elements of search results found in SERP

#### Defined in

[main.ts:91319](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91319)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:91311](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91311)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:91307](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91307)

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:91304](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91304)

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

[main.ts:91301](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91301)

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

[main.ts:91315](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91315)

___

### url

• `Optional` **url**: `string`

URL link

#### Defined in

[main.ts:91317](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91317)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:91313](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91313)
