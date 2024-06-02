**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IKnowledgeGraphListItemDataforseoLabsSerpElementItem

# Interface: IKnowledgeGraphListItemDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### data\_attrid?

> **`optional`** **data\_attrid**: `string`

google defined data attribute ID
example:
kc:/common/topic:social media presence

#### Source

main.ts:97325

***

### items?

> **`optional`** **items**: [`KnowledgeGraphListElement`](../classes/KnowledgeGraphListElement.md)[]

additional items present in the element
if there are none, equals null

#### Source

main.ts:97330

***

### link?

> **`optional`** **link**: [`LinkElement`](../classes/LinkElement.md)

link of the element

#### Source

main.ts:97327

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:97317

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:97313

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:97310

***

### title?

> **`optional`** **title**: `string`

title of a given link element

#### Source

main.ts:97321

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:97319
