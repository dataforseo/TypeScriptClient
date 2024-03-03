[Documentation](../README.md) / [Exports](../modules.md) / ApiException

# Class: ApiException

## Hierarchy

- `Error`

  ↳ **`ApiException`**

## Table of contents

### Constructors

- [constructor](ApiException.md#constructor)

### Properties

- [headers](ApiException.md#headers)
- [isApiException](ApiException.md#isapiexception)
- [message](ApiException.md#message)
- [name](ApiException.md#name)
- [response](ApiException.md#response)
- [result](ApiException.md#result)
- [stack](ApiException.md#stack)
- [status](ApiException.md#status)

### Methods

- [isApiException](ApiException.md#isapiexception-1)

## Constructors

### constructor

• **new ApiException**(`message`, `status`, `response`, `headers`, `result`): [`ApiException`](ApiException.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `status` | `number` |
| `response` | `string` |
| `headers` | `Object` |
| `result` | `any` |

#### Returns

[`ApiException`](ApiException.md)

#### Overrides

Error.constructor

#### Defined in

main.ts:213553

## Properties

### headers

• **headers**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

main.ts:213550

___

### isApiException

• `Protected` **isApiException**: `boolean` = `true`

#### Defined in

main.ts:213563

___

### message

• **message**: `string`

#### Overrides

Error.message

#### Defined in

main.ts:213547

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

C:/Users/thewa/AppData/Roaming/npm/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1075

___

### response

• **response**: `string`

#### Defined in

main.ts:213549

___

### result

• **result**: `any`

#### Defined in

main.ts:213551

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

C:/Users/thewa/AppData/Roaming/npm/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1077

___

### status

• **status**: `number`

#### Defined in

main.ts:213548

## Methods

### isApiException

▸ **isApiException**(`obj`): obj is ApiException

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

obj is ApiException

#### Defined in

main.ts:213565
