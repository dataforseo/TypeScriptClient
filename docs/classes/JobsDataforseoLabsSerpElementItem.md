[**Documentation**](../README.md)

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

### new JobsDataforseoLabsSerpElementItem()

> **new JobsDataforseoLabsSerpElementItem**(`data`?): [`JobsDataforseoLabsSerpElementItem`](JobsDataforseoLabsSerpElementItem.md)

#### Parameters

##### data?

[`IJobsDataforseoLabsSerpElementItem`](../interfaces/IJobsDataforseoLabsSerpElementItem.md)

#### Returns

[`JobsDataforseoLabsSerpElementItem`](JobsDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Defined in

main.ts:108317

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:21425

***

### items?

> `optional` **items**: [`JobsElement`](JobsElement.md)[]

elements of search results found in SERP

#### Implementation of

[`IJobsDataforseoLabsSerpElementItem`](../interfaces/IJobsDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IJobsDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:108313

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IJobsDataforseoLabsSerpElementItem`](../interfaces/IJobsDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IJobsDataforseoLabsSerpElementItem.md#position)

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

[`IJobsDataforseoLabsSerpElementItem`](../interfaces/IJobsDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IJobsDataforseoLabsSerpElementItem.md#rank_absolute)

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

[`IJobsDataforseoLabsSerpElementItem`](../interfaces/IJobsDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IJobsDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:21414

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Implementation of

[`IJobsDataforseoLabsSerpElementItem`](../interfaces/IJobsDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IJobsDataforseoLabsSerpElementItem.md#title)

#### Defined in

main.ts:108309

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IJobsDataforseoLabsSerpElementItem`](../interfaces/IJobsDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IJobsDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

#### Defined in

main.ts:21411

***

### url?

> `optional` **url**: `string`

relevant URL of the Ad element in SERP

#### Implementation of

[`IJobsDataforseoLabsSerpElementItem`](../interfaces/IJobsDataforseoLabsSerpElementItem.md).[`url`](../interfaces/IJobsDataforseoLabsSerpElementItem.md#url)

#### Defined in

main.ts:108311

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IJobsDataforseoLabsSerpElementItem`](../interfaces/IJobsDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IJobsDataforseoLabsSerpElementItem.md#xpath)

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

main.ts:108322

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

main.ts:108346

***

### fromJS()

> `static` **fromJS**(`data`): [`JobsDataforseoLabsSerpElementItem`](JobsDataforseoLabsSerpElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`JobsDataforseoLabsSerpElementItem`](JobsDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:108339
