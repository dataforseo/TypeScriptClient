[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / GoogleBusinessPostBusinessDataSerpElementItem

# Class: GoogleBusinessPostBusinessDataSerpElementItem

## Extends

- [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)

## Implements

- [`IGoogleBusinessPostBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new GoogleBusinessPostBusinessDataSerpElementItem()

> **new GoogleBusinessPostBusinessDataSerpElementItem**(`data`?): [`GoogleBusinessPostBusinessDataSerpElementItem`](GoogleBusinessPostBusinessDataSerpElementItem.md)

#### Parameters

• **data?**: [`IGoogleBusinessPostBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md)

#### Returns

[`GoogleBusinessPostBusinessDataSerpElementItem`](GoogleBusinessPostBusinessDataSerpElementItem.md)

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`constructor`](BaseBusinessDataSerpElementItem.md#constructors)

#### Defined in

main.ts:207296

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`_discriminator`](BaseBusinessDataSerpElementItem.md#_discriminator)

#### Defined in

main.ts:21279

***

### author?

> `optional` **author**: `string`

author of the post

#### Implementation of

[`IGoogleBusinessPostBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[`author`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#author)

#### Defined in

main.ts:207273

***

### images\_url?

> `optional` **images\_url**: `string`

url of an image included in the post

#### Implementation of

[`IGoogleBusinessPostBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[`images_url`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#images_url)

#### Defined in

main.ts:207281

***

### links?

> `optional` **links**: [`LinkElement`](LinkElement.md)[]

links included in the post

#### Implementation of

[`IGoogleBusinessPostBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[`links`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#links)

#### Defined in

main.ts:207292

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values: right

#### Implementation of

[`IGoogleBusinessPostBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[`position`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#position)

#### Defined in

main.ts:207269

***

### post\_date?

> `optional` **post\_date**: `string`

date when a post was published
in the following format:
"mm/dd/yyyy hh:mm:ss"

#### Implementation of

[`IGoogleBusinessPostBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[`post_date`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#post_date)

#### Defined in

main.ts:207285

***

### post\_text?

> `optional` **post\_text**: `string`

main content of a post

#### Implementation of

[`IGoogleBusinessPostBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[`post_text`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#post_text)

#### Defined in

main.ts:207277

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank among all the listed updates
absolute position among all present elements

#### Implementation of

[`IGoogleBusinessPostBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:207266

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IGoogleBusinessPostBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[`rank_group`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#rank_group)

#### Defined in

main.ts:207263

***

### snippet?

> `optional` **snippet**: `string`

additional content of a post

#### Implementation of

[`IGoogleBusinessPostBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[`snippet`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#snippet)

#### Defined in

main.ts:207275

***

### timestamp?

> `optional` **timestamp**: `string`

time when a post was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IGoogleBusinessPostBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[`timestamp`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#timestamp)

#### Defined in

main.ts:207290

***

### url?

> `optional` **url**: `string`

url of a post

#### Implementation of

[`IGoogleBusinessPostBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[`url`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#url)

#### Defined in

main.ts:207279

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IGoogleBusinessPostBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[`xpath`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#xpath)

#### Defined in

main.ts:207271

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`init`](BaseBusinessDataSerpElementItem.md#init)

#### Defined in

main.ts:207301

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`toJSON`](BaseBusinessDataSerpElementItem.md#tojson)

#### Defined in

main.ts:207334

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleBusinessPostBusinessDataSerpElementItem`](GoogleBusinessPostBusinessDataSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`GoogleBusinessPostBusinessDataSerpElementItem`](GoogleBusinessPostBusinessDataSerpElementItem.md)

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`fromJS`](BaseBusinessDataSerpElementItem.md#fromjs)

#### Defined in

main.ts:207327
