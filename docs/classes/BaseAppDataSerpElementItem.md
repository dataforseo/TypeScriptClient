[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BaseAppDataSerpElementItem

# Class: BaseAppDataSerpElementItem

## Hierarchy

- **`BaseAppDataSerpElementItem`**
  
  ↳ [`AppDataGooglePlaySearchOrganicSerpElementItem`](AppDataGooglePlaySearchOrganicSerpElementItem.md)
  
  ↳ [`AppDataAppStoreSearchOrganicSerpElementItem`](AppDataAppStoreSearchOrganicSerpElementItem.md)
  
  ↳ [`AppDataGooglePlayInfoOrganicSerpElementItem`](AppDataGooglePlayInfoOrganicSerpElementItem.md)
  
  ↳ [`AppDataGooglePlayReviewsSearchSerpElementItem`](AppDataGooglePlayReviewsSearchSerpElementItem.md)
  
  ↳ [`AppDataAppStoreInfoOrganicSerpElementItem`](AppDataAppStoreInfoOrganicSerpElementItem.md)
  
  ↳ [`AppDataAppStoreReviewsSearchSerpElementItem`](AppDataAppStoreReviewsSearchSerpElementItem.md)

## Implements

- [`IBaseAppDataSerpElementItem`](../interfaces/IBaseAppDataSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BaseAppDataSerpElementItem.md#constructor)

### Properties

- [\_discriminator](BaseAppDataSerpElementItem.md#_discriminator)

### Methods

- [init](BaseAppDataSerpElementItem.md#init)
- [toJSON](BaseAppDataSerpElementItem.md#tojson)
- [fromJS](BaseAppDataSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new BaseAppDataSerpElementItem**(`data?`): [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBaseAppDataSerpElementItem`](../interfaces/IBaseAppDataSerpElementItem.md) |

#### Returns

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)

#### Defined in

[main.ts:20452](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L20452)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Defined in

[main.ts:20450](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L20450)

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

[main.ts:20462](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L20462)

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

[main.ts:20508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L20508)

___


### fromJS

▸ **fromJS**(`data`): [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)

#### Defined in

[main.ts:20471](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L20471)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")