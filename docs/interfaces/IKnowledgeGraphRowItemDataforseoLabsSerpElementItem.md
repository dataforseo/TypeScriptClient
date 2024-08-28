[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IKnowledgeGraphRowItemDataforseoLabsSerpElementItem

# Interface: IKnowledgeGraphRowItemDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### data\_attrid?

> `optional` **data\_attrid**: `string`

google defined data attribute ID
example:
action:listen_artist

#### Defined in

main.ts:97960

***

### links?

> `optional` **links**: [`LinkElement`](../classes/LinkElement.md)[]

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Defined in

main.ts:97966

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:97952

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:97948

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:97945

***

### text?

> `optional` **text**: `string`

row content

#### Defined in

main.ts:97962

***

### title?

> `optional` **title**: `string`

title of the link

#### Defined in

main.ts:97956

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:97954
