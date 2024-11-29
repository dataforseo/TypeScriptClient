[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKnowledgeGraphDataforseoLabsSerpElementItem

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

main.ts:106111

***

### cid?

> `optional` **cid**: `string`

google-defined client id

#### Defined in

main.ts:106119

***

### description?

> `optional` **description**: `string`

description of the results element in SERP

#### Defined in

main.ts:106109

***

### image\_url?

> `optional` **image\_url**: `string`

URL of the image from knowledge graph

#### Defined in

main.ts:106115

***

### items?

> `optional` **items**: [`BaseDataforseoLabsSerpElementItem`](../classes/BaseDataforseoLabsSerpElementItem.md)[]

elements of search results found in SERP

#### Defined in

main.ts:106121

***

### logo\_url?

> `optional` **logo\_url**: `string`

URL of the logo from knowledge graph

#### Defined in

main.ts:106117

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Inherited from

[`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md).[`position`](IBaseDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:21703

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](IBaseDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:21699

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md).[`rank_group`](IBaseDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:21696

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:106103

***

### sub\_title?

> `optional` **sub\_title**: `string`

subtitle of the item

#### Defined in

main.ts:106107

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:106105

***

### type?

> `optional` **type**: `string`

type of element

#### Inherited from

[`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md).[`type`](IBaseDataforseoLabsSerpElementItem.md#type)

#### Defined in

main.ts:21693

***

### url?

> `optional` **url**: `string`

relevant URL of the Ad element in SERP

#### Defined in

main.ts:106113

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Inherited from

[`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md).[`xpath`](IBaseDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:21705
