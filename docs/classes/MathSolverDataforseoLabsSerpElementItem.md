[**Documentation**](../README.md)

***

[Documentation](../README.md) / MathSolverDataforseoLabsSerpElementItem

# Class: MathSolverDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IMathSolverDataforseoLabsSerpElementItem`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MathSolverDataforseoLabsSerpElementItem()

> **new MathSolverDataforseoLabsSerpElementItem**(`data`?): [`MathSolverDataforseoLabsSerpElementItem`](MathSolverDataforseoLabsSerpElementItem.md)

#### Parameters

##### data?

[`IMathSolverDataforseoLabsSerpElementItem`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md)

#### Returns

[`MathSolverDataforseoLabsSerpElementItem`](MathSolverDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Defined in

main.ts:106934

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:21425

***

### items?

> `optional` **items**: [`MathSolverElement`](MathSolverElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Implementation of

[`IMathSolverDataforseoLabsSerpElementItem`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:106926

***

### links?

> `optional` **links**: [`LinkElement`](LinkElement.md)[]

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Implementation of

[`IMathSolverDataforseoLabsSerpElementItem`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md).[`links`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md#links)

#### Defined in

main.ts:106930

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IMathSolverDataforseoLabsSerpElementItem`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md#position)

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

[`IMathSolverDataforseoLabsSerpElementItem`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md#rank_absolute)

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

[`IMathSolverDataforseoLabsSerpElementItem`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:21414

***

### result?

> `optional` **result**: `string`

solution to the equation
solution to the mathematical equation specified in the keyword field when setting a task

#### Implementation of

[`IMathSolverDataforseoLabsSerpElementItem`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md).[`result`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md#result)

#### Defined in

main.ts:106924

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Implementation of

[`IMathSolverDataforseoLabsSerpElementItem`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md#title)

#### Defined in

main.ts:106921

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IMathSolverDataforseoLabsSerpElementItem`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

#### Defined in

main.ts:21411

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IMathSolverDataforseoLabsSerpElementItem`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md#xpath)

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

main.ts:106939

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

main.ts:106968

***

### fromJS()

> `static` **fromJS**(`data`): [`MathSolverDataforseoLabsSerpElementItem`](MathSolverDataforseoLabsSerpElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`MathSolverDataforseoLabsSerpElementItem`](MathSolverDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:106961
