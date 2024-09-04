[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / TwitterElement

# Class: TwitterElement

## Implements

- [`ITwitterElement`](../interfaces/ITwitterElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new TwitterElement()

> **new TwitterElement**(`data`?): [`TwitterElement`](TwitterElement.md)

#### Parameters

• **data?**: [`ITwitterElement`](../interfaces/ITwitterElement.md)

#### Returns

[`TwitterElement`](TwitterElement.md)

#### Defined in

main.ts:30734

## Properties

### date?

> `optional` **date**: `string`

the date when the page source of the element was published

#### Implementation of

[`ITwitterElement`](../interfaces/ITwitterElement.md).[`date`](../interfaces/ITwitterElement.md#date)

#### Defined in

main.ts:30723

***

### timestamp?

> `optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ITwitterElement`](../interfaces/ITwitterElement.md).[`timestamp`](../interfaces/ITwitterElement.md#timestamp)

#### Defined in

main.ts:30728

***

### tweet?

> `optional` **tweet**: `string`

tweet message

#### Implementation of

[`ITwitterElement`](../interfaces/ITwitterElement.md).[`tweet`](../interfaces/ITwitterElement.md#tweet)

#### Defined in

main.ts:30721

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ITwitterElement`](../interfaces/ITwitterElement.md).[`type`](../interfaces/ITwitterElement.md#type)

#### Defined in

main.ts:30719

***

### url?

> `optional` **url**: `string`

URL

#### Implementation of

[`ITwitterElement`](../interfaces/ITwitterElement.md).[`url`](../interfaces/ITwitterElement.md#url)

#### Defined in

main.ts:30730

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:30743

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:30764

***

### fromJS()

> `static` **fromJS**(`data`): [`TwitterElement`](TwitterElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`TwitterElement`](TwitterElement.md)

#### Defined in

main.ts:30757
