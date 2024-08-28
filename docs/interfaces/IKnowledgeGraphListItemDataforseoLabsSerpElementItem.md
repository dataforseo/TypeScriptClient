[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IKnowledgeGraphListItemDataforseoLabsSerpElementItem

# Interface: IKnowledgeGraphListItemDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### data\_attrid?

> `optional` **data\_attrid**: `string`

google defined data attribute ID
example:
kc:/common/topic:social media presence

#### Defined in

main.ts:99774

***

### items?

> `optional` **items**: [`KnowledgeGraphListElement`](../classes/KnowledgeGraphListElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:99779

***

### link?

> `optional` **link**: [`LinkElement`](../classes/LinkElement.md)

link of the element

#### Defined in

main.ts:99776

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:99766

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:99762

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:99759

***

### title?

> `optional` **title**: `string`

title of a given link element

#### Defined in

main.ts:99770

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:99768
