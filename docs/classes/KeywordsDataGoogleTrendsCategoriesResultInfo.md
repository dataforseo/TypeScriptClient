[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleTrendsCategoriesResultInfo

# Class: KeywordsDataGoogleTrendsCategoriesResultInfo

## Implements

- [`IKeywordsDataGoogleTrendsCategoriesResultInfo`](../interfaces/IKeywordsDataGoogleTrendsCategoriesResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleTrendsCategoriesResultInfo.md#constructor)

### Properties

- [category\_code](KeywordsDataGoogleTrendsCategoriesResultInfo.md#category_code)
- [category\_code\_parent](KeywordsDataGoogleTrendsCategoriesResultInfo.md#category_code_parent)
- [category\_name](KeywordsDataGoogleTrendsCategoriesResultInfo.md#category_name)

### Methods

- [init](KeywordsDataGoogleTrendsCategoriesResultInfo.md#init)
- [toJSON](KeywordsDataGoogleTrendsCategoriesResultInfo.md#tojson)
- [fromJS](KeywordsDataGoogleTrendsCategoriesResultInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleTrendsCategoriesResultInfo**(`data?`): [`KeywordsDataGoogleTrendsCategoriesResultInfo`](KeywordsDataGoogleTrendsCategoriesResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleTrendsCategoriesResultInfo`](../interfaces/IKeywordsDataGoogleTrendsCategoriesResultInfo.md) |

#### Returns

[`KeywordsDataGoogleTrendsCategoriesResultInfo`](KeywordsDataGoogleTrendsCategoriesResultInfo.md)

#### Defined in

[main.ts:119616](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119616)

## Properties

### category\_code

• `Optional` **category\_code**: `number`

unique google trends category identifier

#### Implementation of

[IKeywordsDataGoogleTrendsCategoriesResultInfo](../interfaces/IKeywordsDataGoogleTrendsCategoriesResultInfo.md).[category_code](../interfaces/IKeywordsDataGoogleTrendsCategoriesResultInfo.md#category_code)

#### Defined in

[main.ts:119601](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119601)

___

### category\_code\_parent

• `Optional` **category\_code\_parent**: `number`

the code of the superordinate category
example:
"category_code": 1100,
"category_name": "Superhero Films",
"category_code_parent": 1097
where category_code_parent corresponds to:
"category_code": 1097,
"category_name": "Action & Adventure Films"

#### Implementation of

[IKeywordsDataGoogleTrendsCategoriesResultInfo](../interfaces/IKeywordsDataGoogleTrendsCategoriesResultInfo.md).[category_code_parent](../interfaces/IKeywordsDataGoogleTrendsCategoriesResultInfo.md#category_code_parent)

#### Defined in

[main.ts:119612](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119612)

___

### category\_name

• `Optional` **category\_name**: `string`

name of the google trends category

#### Implementation of

[IKeywordsDataGoogleTrendsCategoriesResultInfo](../interfaces/IKeywordsDataGoogleTrendsCategoriesResultInfo.md).[category_name](../interfaces/IKeywordsDataGoogleTrendsCategoriesResultInfo.md#category_name)

#### Defined in

[main.ts:119603](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119603)

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

[main.ts:119625](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119625)

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

[main.ts:119644](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119644)

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleTrendsCategoriesResultInfo`](KeywordsDataGoogleTrendsCategoriesResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleTrendsCategoriesResultInfo`](KeywordsDataGoogleTrendsCategoriesResultInfo.md)

#### Defined in

[main.ts:119637](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119637)
