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

main.ts:97436

***

### links?

> **`optional`** **links**: [`LinkElement`](../classes/LinkElement.md)[]

link of the element

#### Source

main.ts:97440

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:97428

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:97424

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:97421

***

### text?

> **`optional`** **text**: `string`

content within the item

#### Source

main.ts:97438

***

### title?

> **`optional`** **title**: `string`

title of a given link element

#### Source

main.ts:97432

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:97430
