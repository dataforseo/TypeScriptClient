**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IKnowledgeGraphPartItemDataforseoLabsSerpElementItem

# Interface: IKnowledgeGraphPartItemDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### data\_attrid?

> **`optional`** **data\_attrid**: `string`

google defined data attribute ID
example:
kc:/local:place qa

#### Source

main.ts:98158

***

### links?

> **`optional`** **links**: [`LinkElement`](../classes/LinkElement.md)[]

link of the element

#### Source

main.ts:98162

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:98150

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:98146

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:98143

***

### text?

> **`optional`** **text**: `string`

content within the item

#### Source

main.ts:98160

***

### title?

> **`optional`** **title**: `string`

title of a given link element

#### Source

main.ts:98154

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:98152
