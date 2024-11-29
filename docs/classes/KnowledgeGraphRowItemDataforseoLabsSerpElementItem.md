[**Documentation**](../README.md)

***

[Documentation](../README.md) / KnowledgeGraphRowItemDataforseoLabsSerpElementItem

# Class: KnowledgeGraphRowItemDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IKnowledgeGraphRowItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphRowItemDataforseoLabsSerpElementItem()

> **new KnowledgeGraphRowItemDataforseoLabsSerpElementItem**(`data`?): [`KnowledgeGraphRowItemDataforseoLabsSerpElementItem`](KnowledgeGraphRowItemDataforseoLabsSerpElementItem.md)

#### Parameters

##### data?

[`IKnowledgeGraphRowItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md)

#### Returns

[`KnowledgeGraphRowItemDataforseoLabsSerpElementItem`](KnowledgeGraphRowItemDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Defined in

main.ts:105870

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:21425

***

### data\_attrid?

> `optional` **data\_attrid**: `string`

google defined data attribute ID
example:
action:listen_artist

#### Implementation of

[`IKnowledgeGraphRowItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md).[`data_attrid`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md#data_attrid)

#### Defined in

main.ts:105860

***

### links?

> `optional` **links**: [`LinkElement`](LinkElement.md)[]

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Implementation of

[`IKnowledgeGraphRowItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md).[`links`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md#links)

#### Defined in

main.ts:105866

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphRowItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:21421

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphRowItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:21417

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IKnowledgeGraphRowItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:21414

***

### text?

> `optional` **text**: `string`

row content

#### Implementation of

[`IKnowledgeGraphRowItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md).[`text`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md#text)

#### Defined in

main.ts:105862

***

### title?

> `optional` **title**: `string`

title of the item

#### Implementation of

[`IKnowledgeGraphRowItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md#title)

#### Defined in

main.ts:105856

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IKnowledgeGraphRowItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

#### Defined in

main.ts:21411

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IKnowledgeGraphRowItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:21423

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

#### Defined in

main.ts:105875

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

#### Defined in

main.ts:105900

***

### fromJS()

> `static` **fromJS**(`data`): [`KnowledgeGraphRowItemDataforseoLabsSerpElementItem`](KnowledgeGraphRowItemDataforseoLabsSerpElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`KnowledgeGraphRowItemDataforseoLabsSerpElementItem`](KnowledgeGraphRowItemDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:105893
