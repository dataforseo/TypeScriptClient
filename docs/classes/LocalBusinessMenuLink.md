[**Documentation**](../README.md)

***

[Documentation](../README.md) / LocalBusinessMenuLink

# Class: LocalBusinessMenuLink

Defined in: main.ts:25149

## Extends

- [`BaseLocalBusinessLink`](BaseLocalBusinessLink.md)

## Implements

- [`ILocalBusinessMenuLink`](../interfaces/ILocalBusinessMenuLink.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new LocalBusinessMenuLink()

> **new LocalBusinessMenuLink**(`data`?): [`LocalBusinessMenuLink`](LocalBusinessMenuLink.md)

Defined in: main.ts:25158

#### Parameters

##### data?

[`ILocalBusinessMenuLink`](../interfaces/ILocalBusinessMenuLink.md)

#### Returns

[`LocalBusinessMenuLink`](LocalBusinessMenuLink.md)

#### Overrides

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`constructor`](BaseLocalBusinessLink.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:24920

#### Inherited from

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`_discriminator`](BaseLocalBusinessLink.md#_discriminator)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:25152

title of the element
domain of the online menu system

#### Implementation of

[`ILocalBusinessMenuLink`](../interfaces/ILocalBusinessMenuLink.md).[`title`](../interfaces/ILocalBusinessMenuLink.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:24918

type of element

#### Implementation of

[`ILocalBusinessMenuLink`](../interfaces/ILocalBusinessMenuLink.md).[`type`](../interfaces/ILocalBusinessMenuLink.md#type)

#### Inherited from

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`type`](BaseLocalBusinessLink.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:25154

URL to view the menu

#### Implementation of

[`ILocalBusinessMenuLink`](../interfaces/ILocalBusinessMenuLink.md).[`url`](../interfaces/ILocalBusinessMenuLink.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:25163

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`init`](BaseLocalBusinessLink.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:25182

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`toJSON`](BaseLocalBusinessLink.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`LocalBusinessMenuLink`](LocalBusinessMenuLink.md)

Defined in: main.ts:25175

#### Parameters

##### data

`any`

#### Returns

[`LocalBusinessMenuLink`](LocalBusinessMenuLink.md)

#### Overrides

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`fromJS`](BaseLocalBusinessLink.md#fromjs)
