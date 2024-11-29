[**Documentation**](../README.md)

***

[Documentation](../README.md) / Redirect

# Class: Redirect

## Implements

- [`IRedirect`](../interfaces/IRedirect.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new Redirect()

> **new Redirect**(`data`?): [`Redirect`](Redirect.md)

#### Parameters

##### data?

[`IRedirect`](../interfaces/IRedirect.md)

#### Returns

[`Redirect`](Redirect.md)

#### Defined in

main.ts:151744

## Properties

### status\_code?

> `optional` **status\_code**: `number`

HTTP status code of the URL

#### Implementation of

[`IRedirect`](../interfaces/IRedirect.md).[`status_code`](../interfaces/IRedirect.md#status_code)

#### Defined in

main.ts:151738

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IRedirect`](../interfaces/IRedirect.md).[`type`](../interfaces/IRedirect.md#type)

#### Defined in

main.ts:151736

***

### url?

> `optional` **url**: `string`

indirect link URL

#### Implementation of

[`IRedirect`](../interfaces/IRedirect.md).[`url`](../interfaces/IRedirect.md#url)

#### Defined in

main.ts:151740

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:151753

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:151772

***

### fromJS()

> `static` **fromJS**(`data`): [`Redirect`](Redirect.md)

#### Parameters

##### data

`any`

#### Returns

[`Redirect`](Redirect.md)

#### Defined in

main.ts:151765
