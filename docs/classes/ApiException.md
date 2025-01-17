[**Documentation**](../README.md)

***

[Documentation](../README.md) / ApiException

# Class: ApiException

Defined in: main.ts:239772

## Extends

- `Error`

## Constructors

### new ApiException()

> **new ApiException**(`message`, `status`, `response`, `headers`, `result`): [`ApiException`](ApiException.md)

Defined in: main.ts:239779

#### Parameters

##### message

`string`

##### status

`number`

##### response

`string`

##### headers

##### result

`any`

#### Returns

[`ApiException`](ApiException.md)

#### Overrides

`Error.constructor`

## Properties

### headers

> **headers**: `object`

Defined in: main.ts:239776

#### Index Signature

\[`key`: `string`\]: `any`

***

### isApiException

> `protected` **isApiException**: `boolean` = `true`

Defined in: main.ts:239789

***

### message

> **message**: `string`

Defined in: main.ts:239773

#### Overrides

`Error.message`

***

### name

> **name**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

`Error.name`

***

### response

> **response**: `string`

Defined in: main.ts:239775

***

### result

> **result**: `any`

Defined in: main.ts:239777

***

### stack?

> `optional` **stack**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1078

#### Inherited from

`Error.stack`

***

### status

> **status**: `number`

Defined in: main.ts:239774

## Methods

### isApiException()

> `static` **isApiException**(`obj`): `obj is ApiException`

Defined in: main.ts:239791

#### Parameters

##### obj

`any`

#### Returns

`obj is ApiException`
