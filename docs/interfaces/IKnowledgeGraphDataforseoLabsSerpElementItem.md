[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKnowledgeGraphDataforseoLabsSerpElementItem

# Interface: IKnowledgeGraphDataforseoLabsSerpElementItem

Defined in: main.ts:106307

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### card\_id?

> `optional` **card\_id**: `string`

Defined in: main.ts:106317

card id

***

### cid?

> `optional` **cid**: `string`

Defined in: main.ts:106325

google-defined client id

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:106315

description of the results element in SERP

***

### image\_url?

> `optional` **image\_url**: `string`

Defined in: main.ts:106321

URL of the image from knowledge graph

***

### items?

> `optional` **items**: [`BaseDataforseoLabsSerpElementItem`](../classes/BaseDataforseoLabsSerpElementItem.md)[]

Defined in: main.ts:106327

elements of search results found in SERP

***

### logo\_url?

> `optional` **logo\_url**: `string`

Defined in: main.ts:106323

URL of the logo from knowledge graph

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21703

the alignment of the element in SERP
can take the following values:
left, right

#### Inherited from

[`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md).[`position`](IBaseDataforseoLabsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21699

absolute rank in SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](IBaseDataforseoLabsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21696

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md).[`rank_group`](IBaseDataforseoLabsSerpElementItem.md#rank_group)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:106309

search engine type

***

### sub\_title?

> `optional` **sub\_title**: `string`

Defined in: main.ts:106313

subtitle of the item

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:106311

title of the result in SERP

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21693

type of element

#### Inherited from

[`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md).[`type`](IBaseDataforseoLabsSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:106319

relevant URL of the Ad element in SERP

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21705

the XPath of the element

#### Inherited from

[`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md).[`xpath`](IBaseDataforseoLabsSerpElementItem.md#xpath)
