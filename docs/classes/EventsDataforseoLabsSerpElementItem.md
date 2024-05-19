**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / EventsDataforseoLabsSerpElementItem

# Class: EventsDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IEventsDataforseoLabsSerpElementItem`](../interfaces/IEventsDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new EventsDataforseoLabsSerpElementItem(data)

> **new EventsDataforseoLabsSerpElementItem**(`data`?): [`EventsDataforseoLabsSerpElementItem`](EventsDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IEventsDataforseoLabsSerpElementItem`](../interfaces/IEventsDataforseoLabsSerpElementItem.md)

#### Returns

[`EventsDataforseoLabsSerpElementItem`](EventsDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Source

main.ts:98224

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Source

main.ts:20377

***

### items?

> **`optional`** **items**: [`EventsElement`](EventsElement.md)[]

elements of search results found in SERP

#### Implementation of

[`IEventsDataforseoLabsSerpElementItem`](../interfaces/IEventsDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IEventsDataforseoLabsSerpElementItem.md#items)

#### Source

main.ts:98220

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IEventsDataforseoLabsSerpElementItem`](../interfaces/IEventsDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IEventsDataforseoLabsSerpElementItem.md#position)

#### Source

main.ts:98212

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IEventsDataforseoLabsSerpElementItem`](../interfaces/IEventsDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IEventsDataforseoLabsSerpElementItem.md#rank_absolute)

#### Source

main.ts:98208

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IEventsDataforseoLabsSerpElementItem`](../interfaces/IEventsDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IEventsDataforseoLabsSerpElementItem.md#rank_group)

#### Source

main.ts:98205

***

### title?

> **`optional`** **title**: `string`

title of the result in SERP

#### Implementation of

[`IEventsDataforseoLabsSerpElementItem`](../interfaces/IEventsDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IEventsDataforseoLabsSerpElementItem.md#title)

#### Source

main.ts:98216

***

### url?

> **`optional`** **url**: `string`

relevant URL of the Ad element in SERP

#### Implementation of

[`IEventsDataforseoLabsSerpElementItem`](../interfaces/IEventsDataforseoLabsSerpElementItem.md).[`url`](../interfaces/IEventsDataforseoLabsSerpElementItem.md#url)

#### Source

main.ts:98218

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IEventsDataforseoLabsSerpElementItem`](../interfaces/IEventsDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IEventsDataforseoLabsSerpElementItem.md#xpath)

#### Source

main.ts:98214

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

main.ts:98229

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

main.ts:98257

***

### fromJS()

> **`static`** **fromJS**(`data`): [`EventsDataforseoLabsSerpElementItem`](EventsDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`EventsDataforseoLabsSerpElementItem`](EventsDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Source

main.ts:98250
