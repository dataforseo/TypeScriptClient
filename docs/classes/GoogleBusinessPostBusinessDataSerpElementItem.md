**Documentation** • [Readme](../README.md) \| [API](../globals.md)

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

### new GoogleBusinessPostBusinessDataSerpElementItem(data)

> **new GoogleBusinessPostBusinessDataSerpElementItem**(`data`?): [`GoogleBusinessPostBusinessDataSerpElementItem`](GoogleBusinessPostBusinessDataSerpElementItem.md)

#### Parameters

• **data?**: [`IGoogleBusinessPostBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md)

#### Returns

[`GoogleBusinessPostBusinessDataSerpElementItem`](GoogleBusinessPostBusinessDataSerpElementItem.md)

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`constructor`](BaseBusinessDataSerpElementItem.md#constructors)

#### Source

main.ts:197844

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`_discriminator`](BaseBusinessDataSerpElementItem.md#_discriminator)

#### Source

main.ts:20532

***

### author?

> **`optional`** **author**: `string`

author of the post

#### Implementation of

[`IGoogleBusinessPostBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[`author`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#author)

#### Source

main.ts:197821

***

### images\_url?

> **`optional`** **images\_url**: `string`

url of an image included in the post

#### Implementation of

[`IGoogleBusinessPostBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[`images_url`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#images_url)

#### Source

main.ts:197829

***

### links?

> **`optional`** **links**: [`LinkElement`](LinkElement.md)[]

links included in the post

#### Implementation of

[`IGoogleBusinessPostBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[`links`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#links)

#### Source

main.ts:197840

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values: right

#### Implementation of

[`IGoogleBusinessPostBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[`position`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#position)

#### Source

main.ts:197817

***

### post\_date?

> **`optional`** **post\_date**: `string`

date when a post was published
in the following format:
"mm/dd/yyyy hh:mm:ss"

#### Implementation of

[`IGoogleBusinessPostBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[`post_date`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#post_date)

#### Source

main.ts:197833

***

### post\_text?

> **`optional`** **post\_text**: `string`

main content of a post

#### Implementation of

[`IGoogleBusinessPostBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[`post_text`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#post_text)

#### Source

main.ts:197825

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank among all the listed updates
absolute position among all present elements

#### Implementation of

[`IGoogleBusinessPostBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#rank_absolute)

#### Source

main.ts:197814

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IGoogleBusinessPostBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[`rank_group`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#rank_group)

#### Source

main.ts:197811

***

### snippet?

> **`optional`** **snippet**: `string`

additional content of a post

#### Implementation of

[`IGoogleBusinessPostBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[`snippet`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#snippet)

#### Source

main.ts:197823

***

### timestamp?

> **`optional`** **timestamp**: `string`

time when a post was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IGoogleBusinessPostBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[`timestamp`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#timestamp)

#### Source

main.ts:197838

***

### url?

> **`optional`** **url**: `string`

url of a post

#### Implementation of

[`IGoogleBusinessPostBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[`url`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#url)

#### Source

main.ts:197827

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IGoogleBusinessPostBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[`xpath`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#xpath)

#### Source

main.ts:197819

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`init`](BaseBusinessDataSerpElementItem.md#init)

#### Source

main.ts:197849

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`toJSON`](BaseBusinessDataSerpElementItem.md#tojson)

#### Source

main.ts:197882

***

### fromJS()

> **`static`** **fromJS**(`data`): [`GoogleBusinessPostBusinessDataSerpElementItem`](GoogleBusinessPostBusinessDataSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`GoogleBusinessPostBusinessDataSerpElementItem`](GoogleBusinessPostBusinessDataSerpElementItem.md)

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`fromJS`](BaseBusinessDataSerpElementItem.md#fromjs)

#### Source

main.ts:197875
