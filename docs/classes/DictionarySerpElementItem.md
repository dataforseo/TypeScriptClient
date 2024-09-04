[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DictionarySerpElementItem

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

• **data?**: [`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md)

#### Returns

[`DictionarySerpElementItem`](DictionarySerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:71890

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20354

***

### breadcrumb?

> `optional` **breadcrumb**: `string`

breadcrumb of the Ad element in SERP

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`breadcrumb`](../interfaces/IDictionarySerpElementItem.md#breadcrumb)

#### Defined in

main.ts:71872

***

### domain?

> `optional` **domain**: `string`

domain in SERP

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`domain`](../interfaces/IDictionarySerpElementItem.md#domain)

#### Defined in

main.ts:71870

***

### keyword?

> `optional` **keyword**: `string`

keyword highlighted in the result

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`keyword`](../interfaces/IDictionarySerpElementItem.md#keyword)

#### Defined in

main.ts:71874

***

### links?

> `optional` **links**: [`LinkElement`](LinkElement.md)[]

sitelinks
the links shown below some of search results
if there are none, equals null

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`links`](../interfaces/IDictionarySerpElementItem.md#links)

#### Defined in

main.ts:71882

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`position`](../interfaces/IDictionarySerpElementItem.md#position)

#### Defined in

main.ts:71862

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`rank_absolute`](../interfaces/IDictionarySerpElementItem.md#rank_absolute)

#### Defined in

main.ts:71858

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`rank_group`](../interfaces/IDictionarySerpElementItem.md#rank_group)

#### Defined in

main.ts:71855

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
note: calculate_rectangles parameter is not yet available when setting tasks for Baidu search engine, that’s why rectangle always equals null

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`rectangle`](../interfaces/IDictionarySerpElementItem.md#rectangle)

#### Defined in

main.ts:71886

***

### snippet?

> `optional` **snippet**: `string`

snippet of the element

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`snippet`](../interfaces/IDictionarySerpElementItem.md#snippet)

#### Defined in

main.ts:71876

***

### text?

> `optional` **text**: `boolean`

description of the results element in SERP

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`text`](../interfaces/IDictionarySerpElementItem.md#text)

#### Defined in

main.ts:71878

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`title`](../interfaces/IDictionarySerpElementItem.md#title)

#### Defined in

main.ts:71866

***

### url?

> `optional` **url**: `string`

relevant URL of the Ad element in SERP

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`url`](../interfaces/IDictionarySerpElementItem.md#url)

#### Defined in

main.ts:71868

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`xpath`](../interfaces/IDictionarySerpElementItem.md#xpath)

#### Defined in

main.ts:71864

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Defined in

main.ts:71895

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Defined in

main.ts:71929

***

### fromJS()

> `static` **fromJS**(`data`): [`DictionarySerpElementItem`](DictionarySerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DictionarySerpElementItem`](DictionarySerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:71922
