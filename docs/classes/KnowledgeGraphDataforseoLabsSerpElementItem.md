[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KnowledgeGraphDataforseoLabsSerpElementItem

# Class: KnowledgeGraphDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphDataforseoLabsSerpElementItem()

> **new KnowledgeGraphDataforseoLabsSerpElementItem**(`data`?): [`KnowledgeGraphDataforseoLabsSerpElementItem`](KnowledgeGraphDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md)

#### Returns

[`KnowledgeGraphDataforseoLabsSerpElementItem`](KnowledgeGraphDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Defined in

main.ts:96396

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20747

***

### card\_id?

> `optional` **card\_id**: `string`

card id

#### Implementation of

[`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[`card_id`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#card_id)

#### Defined in

main.ts:96382

***

### cid?

> `optional` **cid**: `string`

google-defined client id

#### Implementation of

[`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[`cid`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#cid)

#### Defined in

main.ts:96390

***

### description?

> `optional` **description**: `string`

description of the results element in SERP

#### Implementation of

[`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[`description`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#description)

#### Defined in

main.ts:96380

***

### image\_url?

> `optional` **image\_url**: `string`

URL of the image from knowledge graph

#### Implementation of

[`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[`image_url`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#image_url)

#### Defined in

main.ts:96386

***

### items?

> `optional` **items**: [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)[]

elements of search results found in SERP

#### Implementation of

[`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:96392

***

### logo\_url?

> `optional` **logo\_url**: `string`

URL of the logo from knowledge graph

#### Implementation of

[`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[`logo_url`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#logo_url)

#### Defined in

main.ts:96388

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:20743

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:20739

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:20736

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[`se_type`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#se_type)

#### Defined in

main.ts:96374

***

### sub\_title?

> `optional` **sub\_title**: `string`

subtitle of the item

#### Implementation of

[`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[`sub_title`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#sub_title)

#### Defined in

main.ts:96378

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Implementation of

[`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#title)

#### Defined in

main.ts:96376

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

#### Defined in

main.ts:20733

***

### url?

> `optional` **url**: `string`

relevant URL of the Ad element in SERP

#### Implementation of

[`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[`url`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#url)

#### Defined in

main.ts:96384

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:20745

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

#### Defined in

main.ts:96401

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

#### Defined in

main.ts:96432

***

### fromJS()

> `static` **fromJS**(`data`): [`KnowledgeGraphDataforseoLabsSerpElementItem`](KnowledgeGraphDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`KnowledgeGraphDataforseoLabsSerpElementItem`](KnowledgeGraphDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:96425
