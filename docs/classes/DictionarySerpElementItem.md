**Documentation** • [Readme](../README.md) \| [API](../globals.md)

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

### new DictionarySerpElementItem(data)

> **new DictionarySerpElementItem**(`data`?): [`DictionarySerpElementItem`](DictionarySerpElementItem.md)

#### Parameters

• **data?**: [`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md)

#### Returns

[`DictionarySerpElementItem`](DictionarySerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:70839

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:19855

***

### breadcrumb?

> **`optional`** **breadcrumb**: `string`

breadcrumb of the Ad element in SERP

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`breadcrumb`](../interfaces/IDictionarySerpElementItem.md#breadcrumb)

#### Source

main.ts:70821

***

### domain?

> **`optional`** **domain**: `string`

domain in SERP

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`domain`](../interfaces/IDictionarySerpElementItem.md#domain)

#### Source

main.ts:70819

***

### keyword?

> **`optional`** **keyword**: `string`

keyword highlighted in the result

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`keyword`](../interfaces/IDictionarySerpElementItem.md#keyword)

#### Source

main.ts:70823

***

### links?

> **`optional`** **links**: [`LinkElement`](LinkElement.md)[]

sitelinks
the links shown below some of search results
if there are none, equals null

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`links`](../interfaces/IDictionarySerpElementItem.md#links)

#### Source

main.ts:70831

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`position`](../interfaces/IDictionarySerpElementItem.md#position)

#### Source

main.ts:70811

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`rank_absolute`](../interfaces/IDictionarySerpElementItem.md#rank_absolute)

#### Source

main.ts:70807

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`rank_group`](../interfaces/IDictionarySerpElementItem.md#rank_group)

#### Source

main.ts:70804

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
note: calculate_rectangles parameter is not yet available when setting tasks for Baidu search engine, that’s why rectangle always equals null

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`rectangle`](../interfaces/IDictionarySerpElementItem.md#rectangle)

#### Source

main.ts:70835

***

### snippet?

> **`optional`** **snippet**: `string`

snippet of the element

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`snippet`](../interfaces/IDictionarySerpElementItem.md#snippet)

#### Source

main.ts:70825

***

### text?

> **`optional`** **text**: `boolean`

description of the results element in SERP

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`text`](../interfaces/IDictionarySerpElementItem.md#text)

#### Source

main.ts:70827

***

### title?

> **`optional`** **title**: `string`

title of the result in SERP

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`title`](../interfaces/IDictionarySerpElementItem.md#title)

#### Source

main.ts:70815

***

### url?

> **`optional`** **url**: `string`

relevant URL of the Ad element in SERP

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`url`](../interfaces/IDictionarySerpElementItem.md#url)

#### Source

main.ts:70817

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md).[`xpath`](../interfaces/IDictionarySerpElementItem.md#xpath)

#### Source

main.ts:70813

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Source

main.ts:70844

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Source

main.ts:70878

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DictionarySerpElementItem`](DictionarySerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DictionarySerpElementItem`](DictionarySerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:70871
