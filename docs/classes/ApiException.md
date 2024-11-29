[**Documentation**](../README.md)

***

[Documentation](../README.md) / ApiException

# Class: ApiException

## Extends

- `Error`

## Constructors

### new ApiException()

> **new ApiException**(`message`, `status`, `response`, `headers`, `result`): [`ApiException`](ApiException.md)

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

#### Defined in

main.ts:239711

## Properties

### headers

> **headers**: `object`

#### Index Signature

 \[`key`: `string`\]: `any`

#### Defined in

main.ts:239708

***

### isApiException

> `protected` **isApiException**: `boolean` = `true`

#### Defined in

main.ts:239721

***

### message

> **message**: `string`

#### Overrides

`Error.message`

#### Defined in

main.ts:239705

***

### name

> **name**: `string`

#### Inherited from

`Error.name`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1076

***

### response

> **response**: `string`

#### Defined in

main.ts:239707

***

### result

> **result**: `any`

#### Defined in

main.ts:239709

***

### stack?

> `optional` **stack**: `string`

#### Inherited from

`Error.stack`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1078

***

### status

> **status**: `number`

#### Defined in

main.ts:239706

## Methods

### isApiException()

> `static` **isApiException**(`obj`): `obj is ApiException`

#### Parameters

##### obj

`any`

#### Returns

`obj is ApiException`

#### Defined in

main.ts:239723
