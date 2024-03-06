[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BaseOnPageResourceItemInfo

# Class: BaseOnPageResourceItemInfo

## Hierarchy

- **`BaseOnPageResourceItemInfo`**
  
  ↳ [`HtmlResourceElementItem`](HtmlResourceElementItem.md)
  
  ↳ [`ScriptResourceElementItem`](ScriptResourceElementItem.md)
  
  ↳ [`StylesheetResourceElementItem`](StylesheetResourceElementItem.md)
  
  ↳ [`ImageResourceElementItem`](ImageResourceElementItem.md)
  
  ↳ [`BrokenResourceElementItem`](BrokenResourceElementItem.md)

## Implements

- [`IBaseOnPageResourceItemInfo`](../interfaces/IBaseOnPageResourceItemInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BaseOnPageResourceItemInfo.md#constructor)

### Properties

- [\_discriminator](BaseOnPageResourceItemInfo.md#_discriminator)

### Methods

- [init](BaseOnPageResourceItemInfo.md#init)
- [toJSON](BaseOnPageResourceItemInfo.md#tojson)
- [fromJS](BaseOnPageResourceItemInfo.md#fromjs)

## Constructors

### constructor

• **new BaseOnPageResourceItemInfo**(`data?`): [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBaseOnPageResourceItemInfo`](../interfaces/IBaseOnPageResourceItemInfo.md) |

#### Returns

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)

#### Defined in

[main.ts:20181](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L20181)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Defined in

[main.ts:20179](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L20179)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

[main.ts:20191](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L20191)

___


### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

[main.ts:20232](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L20232)

___


### fromJS

▸ **fromJS**(`data`): [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)

#### Defined in

[main.ts:20200](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L20200)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")