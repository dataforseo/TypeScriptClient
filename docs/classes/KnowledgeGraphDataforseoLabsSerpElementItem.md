[**Documentation**](../README.md)

***

[Documentation](../README.md) / KnowledgeGraphDataforseoLabsSerpElementItem

# Class: KnowledgeGraphDataforseoLabsSerpElementItem

Defined in: main.ts:106084

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphDataforseoLabsSerpElementItem()

> **new KnowledgeGraphDataforseoLabsSerpElementItem**(`data`?): [`KnowledgeGraphDataforseoLabsSerpElementItem`](KnowledgeGraphDataforseoLabsSerpElementItem.md)

Defined in: main.ts:106108

#### Parameters

##### data?

[`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md)

#### Returns

[`KnowledgeGraphDataforseoLabsSerpElementItem`](KnowledgeGraphDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21425

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

***

### card\_id?

> `optional` **card\_id**: `string`

Defined in: main.ts:106094

card id

#### Implementation of

[`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[`card_id`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#card_id)

***

### cid?

> `optional` **cid**: `string`

Defined in: main.ts:106102

google-defined client id

#### Implementation of

[`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[`cid`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#cid)

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:106092

description of the results element in SERP

#### Implementation of

[`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[`description`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#description)

***

### image\_url?

> `optional` **image\_url**: `string`

Defined in: main.ts:106098

URL of the image from knowledge graph

#### Implementation of

[`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[`image_url`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#image_url)

***

### items?

> `optional` **items**: [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)[]

Defined in: main.ts:106104

elements of search results found in SERP

#### Implementation of

[`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#items)

***

### logo\_url?

> `optional` **logo\_url**: `string`

Defined in: main.ts:106100

URL of the logo from knowledge graph

#### Implementation of

[`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[`logo_url`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#logo_url)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21421

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21417

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21414

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:106086

search engine type

#### Implementation of

[`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[`se_type`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#se_type)

***

### sub\_title?

> `optional` **sub\_title**: `string`

Defined in: main.ts:106090

subtitle of the item

#### Implementation of

[`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[`sub_title`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#sub_title)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:106088

title of the result in SERP

#### Implementation of

[`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21411

type of element

#### Implementation of

[`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:106096

relevant URL of the Ad element in SERP

#### Implementation of

[`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[`url`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#url)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21423

the XPath of the element

#### Implementation of

[`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:106113

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:106144

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KnowledgeGraphDataforseoLabsSerpElementItem`](KnowledgeGraphDataforseoLabsSerpElementItem.md)

Defined in: main.ts:106137

#### Parameters

##### data

`any`

#### Returns

[`KnowledgeGraphDataforseoLabsSerpElementItem`](KnowledgeGraphDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)
