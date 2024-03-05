[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsCategoriesResultInfo

# Class: DataforseoLabsCategoriesResultInfo

## Implements

- [`IDataforseoLabsCategoriesResultInfo`](../interfaces/IDataforseoLabsCategoriesResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsCategoriesResultInfo.md#constructor)

### Properties

- [category\_code](DataforseoLabsCategoriesResultInfo.md#category_code)
- [category\_code\_parent](DataforseoLabsCategoriesResultInfo.md#category_code_parent)
- [category\_name](DataforseoLabsCategoriesResultInfo.md#category_name)

### Methods

- [init](DataforseoLabsCategoriesResultInfo.md#init)
- [toJSON](DataforseoLabsCategoriesResultInfo.md#tojson)
- [fromJS](DataforseoLabsCategoriesResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsCategoriesResultInfo**(`data?`): [`DataforseoLabsCategoriesResultInfo`](DataforseoLabsCategoriesResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsCategoriesResultInfo`](../interfaces/IDataforseoLabsCategoriesResultInfo.md) |

#### Returns

[`DataforseoLabsCategoriesResultInfo`](DataforseoLabsCategoriesResultInfo.md)

#### Defined in

[main.ts:78151](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L78151)

## Properties

### category\_code

• `Optional` **category\_code**: `number`

category code

#### Implementation of

[IDataforseoLabsCategoriesResultInfo](../interfaces/IDataforseoLabsCategoriesResultInfo.md).[category_code](../interfaces/IDataforseoLabsCategoriesResultInfo.md#category_code)

#### Defined in

[main.ts:78134](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L78134)

___

### category\_code\_parent

• `Optional` **category\_code\_parent**: `number`

the code of the superordinate category
example:
"category_code": 10178,
"category_name": "Apparel Accessories",
"category_code_parent": 10021
where category_code_parent
corresponds to:
"category_code": 10021,
"category_name": "Apparel"
"category_code_parent": null

#### Implementation of

[IDataforseoLabsCategoriesResultInfo](../interfaces/IDataforseoLabsCategoriesResultInfo.md).[category_code_parent](../interfaces/IDataforseoLabsCategoriesResultInfo.md#category_code_parent)

#### Defined in

[main.ts:78147](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L78147)

___

### category\_name

• `Optional` **category\_name**: `string`

full name of the category

#### Implementation of

[IDataforseoLabsCategoriesResultInfo](../interfaces/IDataforseoLabsCategoriesResultInfo.md).[category_name](../interfaces/IDataforseoLabsCategoriesResultInfo.md#category_name)

#### Defined in

[main.ts:78136](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L78136)

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

[main.ts:78160](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L78160)

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

[main.ts:78179](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L78179)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsCategoriesResultInfo`](DataforseoLabsCategoriesResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsCategoriesResultInfo`](DataforseoLabsCategoriesResultInfo.md)

#### Defined in

[main.ts:78172](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L78172)
