[Documentation](../README.md) / [Exports](../modules.md) / GoogleJobsItemSerpElementItem

# Class: GoogleJobsItemSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`GoogleJobsItemSerpElementItem`**

## Implements

- [`IGoogleJobsItemSerpElementItem`](../interfaces/IGoogleJobsItemSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](GoogleJobsItemSerpElementItem.md#constructor)

### Properties

- [\_discriminator](GoogleJobsItemSerpElementItem.md#_discriminator)
- [contract\_type](GoogleJobsItemSerpElementItem.md#contract_type)
- [employer\_image\_url](GoogleJobsItemSerpElementItem.md#employer_image_url)
- [employer\_name](GoogleJobsItemSerpElementItem.md#employer_name)
- [employer\_url](GoogleJobsItemSerpElementItem.md#employer_url)
- [job\_id](GoogleJobsItemSerpElementItem.md#job_id)
- [location](GoogleJobsItemSerpElementItem.md#location)
- [position](GoogleJobsItemSerpElementItem.md#position)
- [rank\_absolute](GoogleJobsItemSerpElementItem.md#rank_absolute)
- [rank\_group](GoogleJobsItemSerpElementItem.md#rank_group)
- [rectangle](GoogleJobsItemSerpElementItem.md#rectangle)
- [salary](GoogleJobsItemSerpElementItem.md#salary)
- [source\_name](GoogleJobsItemSerpElementItem.md#source_name)
- [source\_url](GoogleJobsItemSerpElementItem.md#source_url)
- [time\_ago](GoogleJobsItemSerpElementItem.md#time_ago)
- [timestamp](GoogleJobsItemSerpElementItem.md#timestamp)
- [title](GoogleJobsItemSerpElementItem.md#title)
- [xpath](GoogleJobsItemSerpElementItem.md#xpath)

### Methods

- [init](GoogleJobsItemSerpElementItem.md#init)
- [toJSON](GoogleJobsItemSerpElementItem.md#tojson)
- [fromJS](GoogleJobsItemSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new GoogleJobsItemSerpElementItem**(`data?`): [`GoogleJobsItemSerpElementItem`](GoogleJobsItemSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IGoogleJobsItemSerpElementItem`](../interfaces/IGoogleJobsItemSerpElementItem.md) |

#### Returns

[`GoogleJobsItemSerpElementItem`](GoogleJobsItemSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

main.ts:49906

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:19788

___

### contract\_type

• `Optional` **contract\_type**: `string`

employment contract type

#### Implementation of

[IGoogleJobsItemSerpElementItem](../interfaces/IGoogleJobsItemSerpElementItem.md).[contract_type](../interfaces/IGoogleJobsItemSerpElementItem.md#contract_type)

#### Defined in

main.ts:49891

___

### employer\_image\_url

• `Optional` **employer\_image\_url**: `string`

URL to the image used in the job posting

#### Implementation of

[IGoogleJobsItemSerpElementItem](../interfaces/IGoogleJobsItemSerpElementItem.md).[employer_image_url](../interfaces/IGoogleJobsItemSerpElementItem.md#employer_image_url)

#### Defined in

main.ts:49880

___

### employer\_name

• `Optional` **employer\_name**: `string`

name of the employer

#### Implementation of

[IGoogleJobsItemSerpElementItem](../interfaces/IGoogleJobsItemSerpElementItem.md).[employer_name](../interfaces/IGoogleJobsItemSerpElementItem.md#employer_name)

#### Defined in

main.ts:49876

___

### employer\_url

• `Optional` **employer\_url**: `string`

URL to the employer’s website

#### Implementation of

[IGoogleJobsItemSerpElementItem](../interfaces/IGoogleJobsItemSerpElementItem.md).[employer_url](../interfaces/IGoogleJobsItemSerpElementItem.md#employer_url)

#### Defined in

main.ts:49878

___

### job\_id

• `Optional` **job\_id**: `string`

ID of the job on Google Jobs

#### Implementation of

[IGoogleJobsItemSerpElementItem](../interfaces/IGoogleJobsItemSerpElementItem.md).[job_id](../interfaces/IGoogleJobsItemSerpElementItem.md#job_id)

#### Defined in

main.ts:49872

___

### location

• `Optional` **location**: `string`

location for which the job vacancy is posted

#### Implementation of

[IGoogleJobsItemSerpElementItem](../interfaces/IGoogleJobsItemSerpElementItem.md).[location](../interfaces/IGoogleJobsItemSerpElementItem.md#location)

#### Defined in

main.ts:49882

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IGoogleJobsItemSerpElementItem](../interfaces/IGoogleJobsItemSerpElementItem.md).[position](../interfaces/IGoogleJobsItemSerpElementItem.md#position)

#### Defined in

main.ts:49868

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IGoogleJobsItemSerpElementItem](../interfaces/IGoogleJobsItemSerpElementItem.md).[rank_absolute](../interfaces/IGoogleJobsItemSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:49864

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IGoogleJobsItemSerpElementItem](../interfaces/IGoogleJobsItemSerpElementItem.md).[rank_group](../interfaces/IGoogleJobsItemSerpElementItem.md#rank_group)

#### Defined in

main.ts:49861

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP;
in this case, will equal null

#### Implementation of

[IGoogleJobsItemSerpElementItem](../interfaces/IGoogleJobsItemSerpElementItem.md).[rectangle](../interfaces/IGoogleJobsItemSerpElementItem.md#rectangle)

#### Defined in

main.ts:49902

___

### salary

• `Optional` **salary**: `string`

the salary indicated in the job vacancy
if the salary isn’t indicated, this field will equal null

#### Implementation of

[IGoogleJobsItemSerpElementItem](../interfaces/IGoogleJobsItemSerpElementItem.md).[salary](../interfaces/IGoogleJobsItemSerpElementItem.md#salary)

#### Defined in

main.ts:49889

___

### source\_name

• `Optional` **source\_name**: `string`

original source of the job vacancy

#### Implementation of

[IGoogleJobsItemSerpElementItem](../interfaces/IGoogleJobsItemSerpElementItem.md).[source_name](../interfaces/IGoogleJobsItemSerpElementItem.md#source_name)

#### Defined in

main.ts:49884

___

### source\_url

• `Optional` **source\_url**: `string`

URL to the original source of the job vacancy

#### Implementation of

[IGoogleJobsItemSerpElementItem](../interfaces/IGoogleJobsItemSerpElementItem.md).[source_url](../interfaces/IGoogleJobsItemSerpElementItem.md#source_url)

#### Defined in

main.ts:49886

___

### time\_ago

• `Optional` **time\_ago**: `string`

indicates how long ago the job vacancy was posted

#### Implementation of

[IGoogleJobsItemSerpElementItem](../interfaces/IGoogleJobsItemSerpElementItem.md).[time_ago](../interfaces/IGoogleJobsItemSerpElementItem.md#time_ago)

#### Defined in

main.ts:49898

___

### timestamp

• `Optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IGoogleJobsItemSerpElementItem](../interfaces/IGoogleJobsItemSerpElementItem.md).[timestamp](../interfaces/IGoogleJobsItemSerpElementItem.md#timestamp)

#### Defined in

main.ts:49896

___

### title

• `Optional` **title**: `string`

title of the job

#### Implementation of

[IGoogleJobsItemSerpElementItem](../interfaces/IGoogleJobsItemSerpElementItem.md).[title](../interfaces/IGoogleJobsItemSerpElementItem.md#title)

#### Defined in

main.ts:49874

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IGoogleJobsItemSerpElementItem](../interfaces/IGoogleJobsItemSerpElementItem.md).[xpath](../interfaces/IGoogleJobsItemSerpElementItem.md#xpath)

#### Defined in

main.ts:49870

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[init](BaseSerpElementItem.md#init)

#### Defined in

main.ts:49911

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[toJSON](BaseSerpElementItem.md#tojson)

#### Defined in

main.ts:49945

___

### fromJS

▸ **fromJS**(`data`): [`GoogleJobsItemSerpElementItem`](GoogleJobsItemSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`GoogleJobsItemSerpElementItem`](GoogleJobsItemSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:49938
