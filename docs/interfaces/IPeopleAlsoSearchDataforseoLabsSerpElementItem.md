**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IPeopleAlsoSearchDataforseoLabsSerpElementItem

# Interface: IPeopleAlsoSearchDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> **`optional`** **items**: `string`[]

additional items present in the element
if there are none, equals null

#### Source

main.ts:95843

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:95836

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:95832

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:95829

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:95826

***

### title?

> **`optional`** **title**: `string`

title of the item

#### Source

main.ts:95840

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:95838
