[dataforseo-client](../README.md) / [Exports](../modules.md) / ContentAnalysisCategoriesResultInfo

# Class: ContentAnalysisCategoriesResultInfo

## Implements

- [`IContentAnalysisCategoriesResultInfo`](../interfaces/IContentAnalysisCategoriesResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentAnalysisCategoriesResultInfo.md#constructor)

### Properties

- [category\_code](ContentAnalysisCategoriesResultInfo.md#category_code)
- [category\_code\_parent](ContentAnalysisCategoriesResultInfo.md#category_code_parent)
- [category\_name](ContentAnalysisCategoriesResultInfo.md#category_name)

### Methods

- [init](ContentAnalysisCategoriesResultInfo.md#init)
- [toJSON](ContentAnalysisCategoriesResultInfo.md#tojson)
- [fromJS](ContentAnalysisCategoriesResultInfo.md#fromjs)

## Constructors

### constructor

• **new ContentAnalysisCategoriesResultInfo**(`data?`): [`ContentAnalysisCategoriesResultInfo`](ContentAnalysisCategoriesResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentAnalysisCategoriesResultInfo`](../interfaces/IContentAnalysisCategoriesResultInfo.md) |

#### Returns

[`ContentAnalysisCategoriesResultInfo`](ContentAnalysisCategoriesResultInfo.md)

#### Defined in

[main.ts:155869](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L155869)

## Properties

### category\_code

• `Optional` **category\_code**: `number`

category code

#### Implementation of

[IContentAnalysisCategoriesResultInfo](../interfaces/IContentAnalysisCategoriesResultInfo.md).[category_code](../interfaces/IContentAnalysisCategoriesResultInfo.md#category_code)

#### Defined in

[main.ts:155853](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L155853)

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
"category_code": 10178,
"category_name": "Apparel Accessories"

#### Implementation of

[IContentAnalysisCategoriesResultInfo](../interfaces/IContentAnalysisCategoriesResultInfo.md).[category_code_parent](../interfaces/IContentAnalysisCategoriesResultInfo.md#category_code_parent)

#### Defined in

[main.ts:155865](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L155865)

___

### category\_name

• `Optional` **category\_name**: `string`

full name of the category

#### Implementation of

[IContentAnalysisCategoriesResultInfo](../interfaces/IContentAnalysisCategoriesResultInfo.md).[category_name](../interfaces/IContentAnalysisCategoriesResultInfo.md#category_name)

#### Defined in

[main.ts:155855](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L155855)

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

[main.ts:155878](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L155878)

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

[main.ts:155897](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L155897)

___

### fromJS

▸ **fromJS**(`data`): [`ContentAnalysisCategoriesResultInfo`](ContentAnalysisCategoriesResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentAnalysisCategoriesResultInfo`](ContentAnalysisCategoriesResultInfo.md)

#### Defined in

[main.ts:155890](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L155890)
