[dataforseo-client](../README.md) / [Exports](../modules.md) / IPeopleAlsoAskDataforseoLabsSerpElementItem

# Interface: IPeopleAlsoAskDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

  ↳ **`IPeopleAlsoAskDataforseoLabsSerpElementItem`**

## Implemented by

- [`PeopleAlsoAskDataforseoLabsSerpElementItem`](../classes/PeopleAlsoAskDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IPeopleAlsoAskDataforseoLabsSerpElementItem.md#items)
- [position](IPeopleAlsoAskDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](IPeopleAlsoAskDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](IPeopleAlsoAskDataforseoLabsSerpElementItem.md#rank_group)
- [se\_type](IPeopleAlsoAskDataforseoLabsSerpElementItem.md#se_type)
- [xpath](IPeopleAlsoAskDataforseoLabsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`PeopleAlsoAskElement`](../classes/PeopleAlsoAskElement.md)[]

elements of search results found in SERP

#### Defined in

[main.ts:91213](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91213)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:91209](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91209)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:91205](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91205)

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:91202](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91202)

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

[main.ts:91199](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91199)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:91211](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91211)
