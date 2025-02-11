[**Documentation**](../README.md)

***

[Documentation](../README.md) / JobsDataforseoLabsSerpElementItem

# Class: JobsDataforseoLabsSerpElementItem

Defined in: main.ts:108431

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IJobsDataforseoLabsSerpElementItem`](../interfaces/IJobsDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new JobsDataforseoLabsSerpElementItem()

> **new JobsDataforseoLabsSerpElementItem**(`data`?): [`JobsDataforseoLabsSerpElementItem`](JobsDataforseoLabsSerpElementItem.md)

Defined in: main.ts:108441

#### Parameters

##### data?

[`IJobsDataforseoLabsSerpElementItem`](../interfaces/IJobsDataforseoLabsSerpElementItem.md)

#### Returns

[`JobsDataforseoLabsSerpElementItem`](JobsDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21425

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

***

### items?

> `optional` **items**: [`JobsElement`](JobsElement.md)[]

Defined in: main.ts:108437

elements of search results found in SERP

#### Implementation of

[`IJobsDataforseoLabsSerpElementItem`](../interfaces/IJobsDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IJobsDataforseoLabsSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21421

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IJobsDataforseoLabsSerpElementItem`](../interfaces/IJobsDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IJobsDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21417

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IJobsDataforseoLabsSerpElementItem`](../interfaces/IJobsDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IJobsDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21414

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IJobsDataforseoLabsSerpElementItem`](../interfaces/IJobsDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IJobsDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:108433

title of the result in SERP

#### Implementation of

[`IJobsDataforseoLabsSerpElementItem`](../interfaces/IJobsDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IJobsDataforseoLabsSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21411

type of element

#### Implementation of

[`IJobsDataforseoLabsSerpElementItem`](../interfaces/IJobsDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IJobsDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:108435

relevant URL of the Ad element in SERP

#### Implementation of

[`IJobsDataforseoLabsSerpElementItem`](../interfaces/IJobsDataforseoLabsSerpElementItem.md).[`url`](../interfaces/IJobsDataforseoLabsSerpElementItem.md#url)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21423

the XPath of the element

#### Implementation of

[`IJobsDataforseoLabsSerpElementItem`](../interfaces/IJobsDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IJobsDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:108446

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

Defined in: main.ts:108470

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`JobsDataforseoLabsSerpElementItem`](JobsDataforseoLabsSerpElementItem.md)

Defined in: main.ts:108463

#### Parameters

##### data

`any`

#### Returns

[`JobsDataforseoLabsSerpElementItem`](JobsDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)
