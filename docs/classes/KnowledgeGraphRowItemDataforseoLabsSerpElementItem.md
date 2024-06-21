**Documentation** • [Readme](../README.md) \| [API](../globals.md)

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

### new KnowledgeGraphRowItemDataforseoLabsSerpElementItem(data)

> **new KnowledgeGraphRowItemDataforseoLabsSerpElementItem**(`data`?): [`KnowledgeGraphRowItemDataforseoLabsSerpElementItem`](KnowledgeGraphRowItemDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IKnowledgeGraphRowItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md)

#### Returns

[`KnowledgeGraphRowItemDataforseoLabsSerpElementItem`](KnowledgeGraphRowItemDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Source

main.ts:96073

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Source

main.ts:20243

***

### data\_attrid?

> **`optional`** **data\_attrid**: `string`

google defined data attribute ID
example:
action:listen_artist

#### Implementation of

[`IKnowledgeGraphRowItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md).[`data_attrid`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md#data_attrid)

#### Source

main.ts:96063

***

### links?

> **`optional`** **links**: [`LinkElement`](LinkElement.md)[]

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Implementation of

[`IKnowledgeGraphRowItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md).[`links`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md#links)

#### Source

main.ts:96069

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphRowItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md#position)

#### Source

main.ts:96055

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphRowItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md#rank_absolute)

#### Source

main.ts:96051

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IKnowledgeGraphRowItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md#rank_group)

#### Source

main.ts:96048

***

### text?

> **`optional`** **text**: `string`

row content

#### Implementation of

[`IKnowledgeGraphRowItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md).[`text`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md#text)

#### Source

main.ts:96065

***

### title?

> **`optional`** **title**: `string`

title of the link

#### Implementation of

[`IKnowledgeGraphRowItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md#title)

#### Source

main.ts:96059

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IKnowledgeGraphRowItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md#xpath)

#### Source

main.ts:96057

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

main.ts:96078

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

main.ts:96107

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KnowledgeGraphRowItemDataforseoLabsSerpElementItem`](KnowledgeGraphRowItemDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`KnowledgeGraphRowItemDataforseoLabsSerpElementItem`](KnowledgeGraphRowItemDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Source

main.ts:96100
