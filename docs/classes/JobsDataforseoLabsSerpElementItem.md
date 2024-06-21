**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / JobsDataforseoLabsSerpElementItem

# Class: JobsDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IJobsDataforseoLabsSerpElementItem`](../interfaces/IJobsDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new JobsDataforseoLabsSerpElementItem(data)

> **new JobsDataforseoLabsSerpElementItem**(`data`?): [`JobsDataforseoLabsSerpElementItem`](JobsDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IJobsDataforseoLabsSerpElementItem`](../interfaces/IJobsDataforseoLabsSerpElementItem.md)

#### Returns

[`JobsDataforseoLabsSerpElementItem`](JobsDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Source

main.ts:98924

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Source

main.ts:20243

***

### items?

> **`optional`** **items**: [`JobsElement`](JobsElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IJobsDataforseoLabsSerpElementItem`](../interfaces/IJobsDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IJobsDataforseoLabsSerpElementItem.md#items)

#### Source

main.ts:98920

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IJobsDataforseoLabsSerpElementItem`](../interfaces/IJobsDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IJobsDataforseoLabsSerpElementItem.md#position)

#### Source

main.ts:98911

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IJobsDataforseoLabsSerpElementItem`](../interfaces/IJobsDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IJobsDataforseoLabsSerpElementItem.md#rank_absolute)

#### Source

main.ts:98907

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IJobsDataforseoLabsSerpElementItem`](../interfaces/IJobsDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IJobsDataforseoLabsSerpElementItem.md#rank_group)

#### Source

main.ts:98904

***

### title?

> **`optional`** **title**: `string`

title of the item

#### Implementation of

[`IJobsDataforseoLabsSerpElementItem`](../interfaces/IJobsDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IJobsDataforseoLabsSerpElementItem.md#title)

#### Source

main.ts:98915

***

### url?

> **`optional`** **url**: `string`

URL link

#### Implementation of

[`IJobsDataforseoLabsSerpElementItem`](../interfaces/IJobsDataforseoLabsSerpElementItem.md).[`url`](../interfaces/IJobsDataforseoLabsSerpElementItem.md#url)

#### Source

main.ts:98917

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IJobsDataforseoLabsSerpElementItem`](../interfaces/IJobsDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IJobsDataforseoLabsSerpElementItem.md#xpath)

#### Source

main.ts:98913

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

main.ts:98929

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

main.ts:98957

***

### fromJS()

> **`static`** **fromJS**(`data`): [`JobsDataforseoLabsSerpElementItem`](JobsDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`JobsDataforseoLabsSerpElementItem`](JobsDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Source

main.ts:98950
