[**Documentation**](../README.md)

***

[Documentation](../README.md) / Redirect

# Class: Redirect

Defined in: main.ts:151966

## Implements

- [`IRedirect`](../interfaces/IRedirect.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new Redirect()

> **new Redirect**(`data`?): [`Redirect`](Redirect.md)

Defined in: main.ts:151976

#### Parameters

##### data?

[`IRedirect`](../interfaces/IRedirect.md)

#### Returns

[`Redirect`](Redirect.md)

## Properties

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:151970

HTTP status code of the URL

#### Implementation of

[`IRedirect`](../interfaces/IRedirect.md).[`status_code`](../interfaces/IRedirect.md#status_code)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:151968

type of element

#### Implementation of

[`IRedirect`](../interfaces/IRedirect.md).[`type`](../interfaces/IRedirect.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:151972

indirect link URL

#### Implementation of

[`IRedirect`](../interfaces/IRedirect.md).[`url`](../interfaces/IRedirect.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:151985

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:152004

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`Redirect`](Redirect.md)

Defined in: main.ts:151997

#### Parameters

##### data

`any`

#### Returns

[`Redirect`](Redirect.md)
