**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ApiException

# Class: ApiException

## Extends

- `Error`

## Constructors

### new ApiException(message, status, response, headers, result)

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

#### Source

main.ts:220114

## Properties

### headers

> **headers**: `Object`

#### Index signature

 \[`key`: `string`\]: `any`

#### Source

main.ts:220111

***

### isApiException

> **`protected`** **isApiException**: `boolean` = `true`

#### Source

main.ts:220124

***

### message

> **message**: `string`

#### Overrides

`Error.message`

#### Source

main.ts:220108

***

### name

> **name**: `string`

#### Inherited from

`Error.name`

#### Source

C:/Users/thewa/AppData/Roaming/npm/node\_modules/typedoc/node\_modules/typescript/lib/lib.es5.d.ts:1076

***

### response

> **response**: `string`

#### Source

main.ts:220110

***

### result

> **result**: `any`

#### Source

main.ts:220112

***

### stack?

> **`optional`** **stack**: `string`

#### Inherited from

`Error.stack`

#### Source

C:/Users/thewa/AppData/Roaming/npm/node\_modules/typedoc/node\_modules/typescript/lib/lib.es5.d.ts:1078

***

### status

> **status**: `number`

#### Source

main.ts:220109

## Methods

### isApiException()

> **`static`** **isApiException**(`obj`): `obj is ApiException`

#### Parameters

• **obj**: `any`

#### Returns

`obj is ApiException`

#### Source

main.ts:220126
