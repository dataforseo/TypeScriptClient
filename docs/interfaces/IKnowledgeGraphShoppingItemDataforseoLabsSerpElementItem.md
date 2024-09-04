[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem

# Interface: IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### data\_attrid?

> `optional` **data\_attrid**: `string`

google defined data attribute ID
example:
kc:/shopping/gpc:organic-offers

#### Defined in

main.ts:100098

***

### items?

> `optional` **items**: [`KnowledgeGraphShoppingElement`](../classes/KnowledgeGraphShoppingElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:100101

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:100090

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:100086

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:100083

***

### title?

> `optional` **title**: `string`

title of the item

#### Defined in

main.ts:100094

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:100092
