[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ApiException

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

[main.ts:213433](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213433)

## Properties

### headers

• **headers**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[main.ts:213430](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213430)

___


### isApiException

• `Protected` **isApiException**: `boolean` = `true`

#### Defined in

[main.ts:213443](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213443)

___


### message

• **message**: `string`

#### Overrides

Error.message

#### Defined in

[main.ts:213427](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213427)

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

[main.ts:213429](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213429)

___


### result

• **result**: `any`

#### Defined in

[main.ts:213431](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213431)

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

[main.ts:213428](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213428)

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

[main.ts:213445](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213445)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")