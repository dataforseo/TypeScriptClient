[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IKnowledgeGraphPartItemDataforseoLabsSerpElementItem

# Interface: IKnowledgeGraphPartItemDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### data\_attrid?

> `optional` **data\_attrid**: `string`

google defined data attribute ID
example:
kc:/local:place qa

#### Defined in

main.ts:99885

***

### links?

> `optional` **links**: [`LinkElement`](../classes/LinkElement.md)[]

link of the element

#### Defined in

main.ts:99889

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:99877

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:99873

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:99870

***

### text?

> `optional` **text**: `string`

content within the item

#### Defined in

main.ts:99887

***

### title?

> `optional` **title**: `string`

title of a given link element

#### Defined in

main.ts:99881

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:99879
