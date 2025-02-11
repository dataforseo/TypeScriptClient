[**Documentation**](../README.md)

***

[Documentation](../README.md) / DictionarySerpElementItem

# Class: DictionarySerpElementItem

Defined in: main.ts:80052

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DictionarySerpElementItem()

> **new DictionarySerpElementItem**(`data`?): [`DictionarySerpElementItem`](DictionarySerpElementItem.md)

Defined in: main.ts:80078

#### Parameters

##### data?

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md)

#### Returns

[`DictionarySerpElementItem`](DictionarySerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21045

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

***

### breadcrumb?

> `optional` **breadcrumb**: `string`

Defined in: main.ts:80060

breadcrumb of the Ad element in SERP

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`breadcrumb`](../interfaces/IDictionarySerpElementItem.md#breadcrumb)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:80058

domain in SERP

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`domain`](../interfaces/IDictionarySerpElementItem.md#domain)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:80062

keyword highlighted in the result

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`keyword`](../interfaces/IDictionarySerpElementItem.md#keyword)

***

### links?

> `optional` **links**: [`LinkElement`](LinkElement.md)[]

Defined in: main.ts:80070

sitelinks
the links shown below some of search results
if there are none, equals null

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`links`](../interfaces/IDictionarySerpElementItem.md#links)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21041

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`position`](../interfaces/IDictionarySerpElementItem.md#position)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`position`](BaseSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21037

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`rank_absolute`](../interfaces/IDictionarySerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_absolute`](BaseSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21034

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`rank_group`](../interfaces/IDictionarySerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:80074

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
note: calculate_rectangles parameter is not yet available when setting tasks for Baidu search engine, that’s why rectangle always equals null

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`rectangle`](../interfaces/IDictionarySerpElementItem.md#rectangle)

***

### snippet?

> `optional` **snippet**: `string`

Defined in: main.ts:80064

snippet of the element

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`snippet`](../interfaces/IDictionarySerpElementItem.md#snippet)

***

### text?

> `optional` **text**: `string`

Defined in: main.ts:80066

description of the results element in SERP

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`text`](../interfaces/IDictionarySerpElementItem.md#text)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:80054

title of the result in SERP

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`title`](../interfaces/IDictionarySerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21030

type of element

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`type`](../interfaces/IDictionarySerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:80056

relevant URL of the Ad element in SERP

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`url`](../interfaces/IDictionarySerpElementItem.md#url)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21043

the XPath of the element

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`xpath`](../interfaces/IDictionarySerpElementItem.md#xpath)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`xpath`](BaseSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:80083

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:80113

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`DictionarySerpElementItem`](DictionarySerpElementItem.md)

Defined in: main.ts:80106

#### Parameters

##### data

`any`

#### Returns

[`DictionarySerpElementItem`](DictionarySerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
