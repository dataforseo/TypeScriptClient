[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / LocalBusinessMenuLink

# Class: LocalBusinessMenuLink

## Extends

- [`BaseLocalBusinessLink`](BaseLocalBusinessLink.md)

## Implements

- [`ILocalBusinessMenuLink`](../interfaces/ILocalBusinessMenuLink.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new LocalBusinessMenuLink()

> **new LocalBusinessMenuLink**(`data`?): [`LocalBusinessMenuLink`](LocalBusinessMenuLink.md)

#### Parameters

• **data?**: [`ILocalBusinessMenuLink`](../interfaces/ILocalBusinessMenuLink.md)

#### Returns

[`LocalBusinessMenuLink`](LocalBusinessMenuLink.md)

#### Overrides

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`constructor`](BaseLocalBusinessLink.md#constructors)

#### Defined in

main.ts:24088

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`_discriminator`](BaseLocalBusinessLink.md#_discriminator)

#### Defined in

main.ts:23850

***

### title?

> `optional` **title**: `string`

title of the element
domain of the online menu system

#### Implementation of

[`ILocalBusinessMenuLink`](../interfaces/ILocalBusinessMenuLink.md).[`title`](../interfaces/ILocalBusinessMenuLink.md#title)

#### Defined in

main.ts:24082

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ILocalBusinessMenuLink`](../interfaces/ILocalBusinessMenuLink.md).[`type`](../interfaces/ILocalBusinessMenuLink.md#type)

#### Inherited from

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`type`](BaseLocalBusinessLink.md#type)

#### Defined in

main.ts:23848

***

### url?

> `optional` **url**: `string`

URL to view the menu

#### Implementation of

[`ILocalBusinessMenuLink`](../interfaces/ILocalBusinessMenuLink.md).[`url`](../interfaces/ILocalBusinessMenuLink.md#url)

#### Defined in

main.ts:24084

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`init`](BaseLocalBusinessLink.md#init)

#### Defined in

main.ts:24093

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`toJSON`](BaseLocalBusinessLink.md#tojson)

#### Defined in

main.ts:24112

***

### fromJS()

> `static` **fromJS**(`data`): [`LocalBusinessMenuLink`](LocalBusinessMenuLink.md)

#### Parameters

• **data**: `any`

#### Returns

[`LocalBusinessMenuLink`](LocalBusinessMenuLink.md)

#### Overrides

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`fromJS`](BaseLocalBusinessLink.md#fromjs)

#### Defined in

main.ts:24105
