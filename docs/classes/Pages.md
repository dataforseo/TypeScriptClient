[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / Pages

# Class: Pages

## Implements

- [`IPages`](../interfaces/IPages.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new Pages()

> **new Pages**(`data`?): [`Pages`](Pages.md)

#### Parameters

• **data?**: [`IPages`](../interfaces/IPages.md)

#### Returns

[`Pages`](Pages.md)

#### Defined in

main.ts:157279

## Properties

### page?

> `optional` **page**: [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)[]

information about the page with duplicate content

#### Implementation of

[`IPages`](../interfaces/IPages.md).[`page`](../interfaces/IPages.md#page)

#### Defined in

main.ts:157275

***

### similarity?

> `optional` **similarity**: `number`

content similarity score
by default, the content is considered duplicate if the value is greater than or equals 6
can take values from 0 to 10

#### Implementation of

[`IPages`](../interfaces/IPages.md).[`similarity`](../interfaces/IPages.md#similarity)

#### Defined in

main.ts:157273

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:157288

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:157310

***

### fromJS()

> `static` **fromJS**(`data`): [`Pages`](Pages.md)

#### Parameters

• **data**: `any`

#### Returns

[`Pages`](Pages.md)

#### Defined in

main.ts:157303
