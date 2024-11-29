[**Documentation**](../README.md)

***

[Documentation](../README.md) / DictionarySerpElementItem

# Class: DictionarySerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DictionarySerpElementItem()

> **new DictionarySerpElementItem**(`data`?): [`DictionarySerpElementItem`](DictionarySerpElementItem.md)

#### Parameters

##### data?

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md)

#### Returns

[`DictionarySerpElementItem`](DictionarySerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:80042

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:21045

***

### breadcrumb?

> `optional` **breadcrumb**: `string`

breadcrumb of the Ad element in SERP

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`breadcrumb`](../interfaces/IDictionarySerpElementItem.md#breadcrumb)

#### Defined in

main.ts:80024

***

### domain?

> `optional` **domain**: `string`

domain in SERP

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`domain`](../interfaces/IDictionarySerpElementItem.md#domain)

#### Defined in

main.ts:80022

***

### keyword?

> `optional` **keyword**: `string`

keyword highlighted in the result

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`keyword`](../interfaces/IDictionarySerpElementItem.md#keyword)

#### Defined in

main.ts:80026

***

### links?

> `optional` **links**: [`LinkElement`](LinkElement.md)[]

sitelinks
the links shown below some of search results
if there are none, equals null

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`links`](../interfaces/IDictionarySerpElementItem.md#links)

#### Defined in

main.ts:80034

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`position`](../interfaces/IDictionarySerpElementItem.md#position)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`position`](BaseSerpElementItem.md#position)

#### Defined in

main.ts:21041

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`rank_absolute`](../interfaces/IDictionarySerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_absolute`](BaseSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:21037

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`rank_group`](../interfaces/IDictionarySerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

#### Defined in

main.ts:21034

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
note: calculate_rectangles parameter is not yet available when setting tasks for Baidu search engine, that’s why rectangle always equals null

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`rectangle`](../interfaces/IDictionarySerpElementItem.md#rectangle)

#### Defined in

main.ts:80038

***

### snippet?

> `optional` **snippet**: `string`

snippet of the element

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`snippet`](../interfaces/IDictionarySerpElementItem.md#snippet)

#### Defined in

main.ts:80028

***

### text?

> `optional` **text**: `string`

description of the results element in SERP

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`text`](../interfaces/IDictionarySerpElementItem.md#text)

#### Defined in

main.ts:80030

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`title`](../interfaces/IDictionarySerpElementItem.md#title)

#### Defined in

main.ts:80018

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`type`](../interfaces/IDictionarySerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

#### Defined in

main.ts:21030

***

### url?

> `optional` **url**: `string`

relevant URL of the Ad element in SERP

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`url`](../interfaces/IDictionarySerpElementItem.md#url)

#### Defined in

main.ts:80020

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`xpath`](../interfaces/IDictionarySerpElementItem.md#xpath)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`xpath`](BaseSerpElementItem.md#xpath)

#### Defined in

main.ts:21043

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Defined in

main.ts:80047

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Defined in

main.ts:80077

***

### fromJS()

> `static` **fromJS**(`data`): [`DictionarySerpElementItem`](DictionarySerpElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`DictionarySerpElementItem`](DictionarySerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:80070
