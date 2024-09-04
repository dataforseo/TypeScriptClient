[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ApiException

# Class: ApiException

## Extends

- `Error`

## Constructors

### new ApiException()

> **new ApiException**(`message`, `status`, `response`, `headers`, `result`): [`ApiException`](ApiException.md)

#### Parameters

• **message**: `string`

• **status**: `number`

• **response**: `string`

• **headers**

• **result**: `any`

#### Returns

[`ApiException`](ApiException.md)

#### Overrides

`Error.constructor`

#### Defined in

main.ts:229669

## Properties

### headers

> **headers**: `object`

#### Index Signature

 \[`key`: `string`\]: `any`

#### Defined in

main.ts:229666

***

### isApiException

> `protected` **isApiException**: `boolean` = `true`

#### Defined in

main.ts:229679

***

### message

> **message**: `string`

#### Overrides

`Error.message`

#### Defined in

main.ts:229663

***

### name

> **name**: `string`

#### Inherited from

`Error.name`

#### Defined in

C:/Users/thewa/AppData/Roaming/npm/node\_modules/typedoc/node\_modules/typescript/lib/lib.es5.d.ts:1076

***

### response

> **response**: `string`

#### Defined in

main.ts:229665

***

### result

> **result**: `any`

#### Defined in

main.ts:229667

***

### stack?

> `optional` **stack**: `string`

#### Inherited from

`Error.stack`

#### Defined in

C:/Users/thewa/AppData/Roaming/npm/node\_modules/typedoc/node\_modules/typescript/lib/lib.es5.d.ts:1078

***

### status

> **status**: `number`

#### Defined in

main.ts:229664

## Methods

### isApiException()

> `static` **isApiException**(`obj`): `obj is ApiException`

#### Parameters

• **obj**: `any`

#### Returns

`obj is ApiException`

#### Defined in

main.ts:229681
