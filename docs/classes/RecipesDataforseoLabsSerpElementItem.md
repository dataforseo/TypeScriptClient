[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / RecipesDataforseoLabsSerpElementItem

# Class: RecipesDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IRecipesDataforseoLabsSerpElementItem`](../interfaces/IRecipesDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new RecipesDataforseoLabsSerpElementItem()

> **new RecipesDataforseoLabsSerpElementItem**(`data`?): [`RecipesDataforseoLabsSerpElementItem`](RecipesDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IRecipesDataforseoLabsSerpElementItem`](../interfaces/IRecipesDataforseoLabsSerpElementItem.md)

#### Returns

[`RecipesDataforseoLabsSerpElementItem`](RecipesDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Defined in

main.ts:101201

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20752

***

### items?

> `optional` **items**: [`RecipesElement`](RecipesElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IRecipesDataforseoLabsSerpElementItem`](../interfaces/IRecipesDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IRecipesDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:101197

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IRecipesDataforseoLabsSerpElementItem`](../interfaces/IRecipesDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IRecipesDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:101192

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IRecipesDataforseoLabsSerpElementItem`](../interfaces/IRecipesDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IRecipesDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:101188

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IRecipesDataforseoLabsSerpElementItem`](../interfaces/IRecipesDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IRecipesDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:101185

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IRecipesDataforseoLabsSerpElementItem`](../interfaces/IRecipesDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IRecipesDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:101194

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

#### Defined in

main.ts:101206

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

#### Defined in

main.ts:101232

***

### fromJS()

> `static` **fromJS**(`data`): [`RecipesDataforseoLabsSerpElementItem`](RecipesDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`RecipesDataforseoLabsSerpElementItem`](RecipesDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:101225
