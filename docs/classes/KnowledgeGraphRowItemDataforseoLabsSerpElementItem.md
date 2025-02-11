[**Documentation**](../README.md)

***

[Documentation](../README.md) / KnowledgeGraphRowItemDataforseoLabsSerpElementItem

# Class: KnowledgeGraphRowItemDataforseoLabsSerpElementItem

Defined in: main.ts:106060

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IKnowledgeGraphRowItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphRowItemDataforseoLabsSerpElementItem()

> **new KnowledgeGraphRowItemDataforseoLabsSerpElementItem**(`data`?): [`KnowledgeGraphRowItemDataforseoLabsSerpElementItem`](KnowledgeGraphRowItemDataforseoLabsSerpElementItem.md)

Defined in: main.ts:106076

#### Parameters

##### data?

[`IKnowledgeGraphRowItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md)

#### Returns

[`KnowledgeGraphRowItemDataforseoLabsSerpElementItem`](KnowledgeGraphRowItemDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21425

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

***

### data\_attrid?

> `optional` **data\_attrid**: `string`

Defined in: main.ts:106066

google defined data attribute ID
example:
action:listen_artist

#### Implementation of

[`IKnowledgeGraphRowItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md).[`data_attrid`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md#data_attrid)

***

### links?

> `optional` **links**: [`LinkElement`](LinkElement.md)[]

Defined in: main.ts:106072

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Implementation of

[`IKnowledgeGraphRowItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md).[`links`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md#links)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21421

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphRowItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21417

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphRowItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21414

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IKnowledgeGraphRowItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

***

### text?

> `optional` **text**: `string`

Defined in: main.ts:106068

row content

#### Implementation of

[`IKnowledgeGraphRowItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md).[`text`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md#text)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:106062

title of the item

#### Implementation of

[`IKnowledgeGraphRowItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21411

type of element

#### Implementation of

[`IKnowledgeGraphRowItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21423

the XPath of the element

#### Implementation of

[`IKnowledgeGraphRowItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:106081

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

Defined in: main.ts:106106

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KnowledgeGraphRowItemDataforseoLabsSerpElementItem`](KnowledgeGraphRowItemDataforseoLabsSerpElementItem.md)

Defined in: main.ts:106099

#### Parameters

##### data

`any`

#### Returns

[`KnowledgeGraphRowItemDataforseoLabsSerpElementItem`](KnowledgeGraphRowItemDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)
