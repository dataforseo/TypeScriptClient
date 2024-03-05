[dataforseo-client](../README.md) / [Exports](../modules.md) / IEventsDataforseoLabsSerpElementItem

# Interface: IEventsDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

  ↳ **`IEventsDataforseoLabsSerpElementItem`**

## Implemented by

- [`EventsDataforseoLabsSerpElementItem`](../classes/EventsDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IEventsDataforseoLabsSerpElementItem.md#items)
- [position](IEventsDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](IEventsDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](IEventsDataforseoLabsSerpElementItem.md#rank_group)
- [title](IEventsDataforseoLabsSerpElementItem.md#title)
- [url](IEventsDataforseoLabsSerpElementItem.md#url)
- [xpath](IEventsDataforseoLabsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`EventsElement`](../classes/EventsElement.md)[]

elements of search results found in SERP

#### Defined in

[main.ts:94956](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94956)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:94948](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94948)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:94944](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94944)

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:94941](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94941)

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

[main.ts:94952](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94952)

___

### url

• `Optional` **url**: `string`

URL link

#### Defined in

[main.ts:94954](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94954)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:94950](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94950)
