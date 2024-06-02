**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KnowledgeGraphDataforseoLabsSerpElementItem

# Class: KnowledgeGraphDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphDataforseoLabsSerpElementItem(data)

> **new KnowledgeGraphDataforseoLabsSerpElementItem**(`data`?): [`KnowledgeGraphDataforseoLabsSerpElementItem`](KnowledgeGraphDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md)

#### Returns

[`KnowledgeGraphDataforseoLabsSerpElementItem`](KnowledgeGraphDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Source

main.ts:94821

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Source

main.ts:20051

***

### card\_id?

> **`optional`** **card\_id**: `string`

card id

#### Implementation of

[`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[`card_id`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#card_id)

#### Source

main.ts:94807

***

### cid?

> **`optional`** **cid**: `string`

google-defined client id

#### Implementation of

[`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[`cid`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#cid)

#### Source

main.ts:94815

***

### description?

> **`optional`** **description**: `string`

description of the results element in SERP

#### Implementation of

[`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[`description`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#description)

#### Source

main.ts:94805

***

### image\_url?

> **`optional`** **image\_url**: `string`

URL of the image from knowledge graph

#### Implementation of

[`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[`image_url`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#image_url)

#### Source

main.ts:94811

***

### items?

> **`optional`** **items**: [`PeopleAlsoAskElement`](PeopleAlsoAskElement.md)[]

elements of search results found in SERP

#### Implementation of

[`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#items)

#### Source

main.ts:94817

***

### logo\_url?

> **`optional`** **logo\_url**: `string`

URL of the logo from knowledge graph

#### Implementation of

[`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[`logo_url`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#logo_url)

#### Source

main.ts:94813

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#position)

#### Source

main.ts:94797

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#rank_absolute)

#### Source

main.ts:94793

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#rank_group)

#### Source

main.ts:94790

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[`se_type`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#se_type)

#### Source

main.ts:94786

***

### sub\_title?

> **`optional`** **sub\_title**: `string`

subtitle of the item

#### Implementation of

[`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[`sub_title`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#sub_title)

#### Source

main.ts:94803

***

### title?

> **`optional`** **title**: `string`

title of the result in SERP

#### Implementation of

[`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#title)

#### Source

main.ts:94801

***

### url?

> **`optional`** **url**: `string`

relevant URL in SERP

#### Implementation of

[`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[`url`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#url)

#### Source

main.ts:94809

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#xpath)

#### Source

main.ts:94799

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

#### Source

main.ts:94826

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

#### Source

main.ts:94861

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KnowledgeGraphDataforseoLabsSerpElementItem`](KnowledgeGraphDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`KnowledgeGraphDataforseoLabsSerpElementItem`](KnowledgeGraphDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Source

main.ts:94854
