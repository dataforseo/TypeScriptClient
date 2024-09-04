[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IKnowledgeGraphDataforseoLabsSerpElementItem

# Interface: IKnowledgeGraphDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### card\_id?

> `optional` **card\_id**: `string`

card id

#### Defined in

main.ts:97338

***

### cid?

> `optional` **cid**: `string`

google-defined client id

#### Defined in

main.ts:97346

***

### description?

> `optional` **description**: `string`

description of the results element in SERP

#### Defined in

main.ts:97336

***

### image\_url?

> `optional` **image\_url**: `string`

URL of the image from knowledge graph

#### Defined in

main.ts:97342

***

### items?

> `optional` **items**: [`PeopleAlsoAskElement`](../classes/PeopleAlsoAskElement.md)[]

elements of search results found in SERP

#### Defined in

main.ts:97348

***

### logo\_url?

> `optional` **logo\_url**: `string`

URL of the logo from knowledge graph

#### Defined in

main.ts:97344

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:97328

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:97324

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:97321

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:97317

***

### sub\_title?

> `optional` **sub\_title**: `string`

subtitle of the item

#### Defined in

main.ts:97334

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:97332

***

### url?

> `optional` **url**: `string`

relevant URL in SERP

#### Defined in

main.ts:97340

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:97330
