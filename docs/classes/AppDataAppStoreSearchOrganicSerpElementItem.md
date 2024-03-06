[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataAppStoreSearchOrganicSerpElementItem

# Class: AppDataAppStoreSearchOrganicSerpElementItem

## Hierarchy

- [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)
  
  ↳ **`AppDataAppStoreSearchOrganicSerpElementItem`**

## Implements

- [`IAppDataAppStoreSearchOrganicSerpElementItem`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataAppStoreSearchOrganicSerpElementItem.md#constructor)

### Properties

- [\_discriminator](AppDataAppStoreSearchOrganicSerpElementItem.md#_discriminator)
- [app\_id](AppDataAppStoreSearchOrganicSerpElementItem.md#app_id)
- [icon](AppDataAppStoreSearchOrganicSerpElementItem.md#icon)
- [is\_free](AppDataAppStoreSearchOrganicSerpElementItem.md#is_free)
- [position](AppDataAppStoreSearchOrganicSerpElementItem.md#position)
- [price](AppDataAppStoreSearchOrganicSerpElementItem.md#price)
- [rank\_absolute](AppDataAppStoreSearchOrganicSerpElementItem.md#rank_absolute)
- [rank\_group](AppDataAppStoreSearchOrganicSerpElementItem.md#rank_group)
- [rating](AppDataAppStoreSearchOrganicSerpElementItem.md#rating)
- [reviews\_count](AppDataAppStoreSearchOrganicSerpElementItem.md#reviews_count)
- [title](AppDataAppStoreSearchOrganicSerpElementItem.md#title)
- [url](AppDataAppStoreSearchOrganicSerpElementItem.md#url)

### Methods

- [init](AppDataAppStoreSearchOrganicSerpElementItem.md#init)
- [toJSON](AppDataAppStoreSearchOrganicSerpElementItem.md#tojson)
- [fromJS](AppDataAppStoreSearchOrganicSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new AppDataAppStoreSearchOrganicSerpElementItem**(`data?`): [`AppDataAppStoreSearchOrganicSerpElementItem`](AppDataAppStoreSearchOrganicSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataAppStoreSearchOrganicSerpElementItem`](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md) |

#### Returns

[`AppDataAppStoreSearchOrganicSerpElementItem`](AppDataAppStoreSearchOrganicSerpElementItem.md)

#### Overrides

[BaseAppDataSerpElementItem](BaseAppDataSerpElementItem.md).[constructor](BaseAppDataSerpElementItem.md#constructor)

#### Defined in

[main.ts:110814](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110814)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseAppDataSerpElementItem](BaseAppDataSerpElementItem.md).[_discriminator](BaseAppDataSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:20450](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L20450)

___


### app\_id

• `Optional` **app\_id**: `string`

id of the app

#### Implementation of

[IAppDataAppStoreSearchOrganicSerpElementItem](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md).[app_id](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md#app_id)

#### Defined in

[main.ts:110796](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110796)

___


### icon

• `Optional` **icon**: `string`

URL to the app icon

#### Implementation of

[IAppDataAppStoreSearchOrganicSerpElementItem](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md).[icon](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md#icon)

#### Defined in

[main.ts:110802](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110802)

___


### is\_free

• `Optional` **is\_free**: `boolean`

indicates whether the app is free

#### Implementation of

[IAppDataAppStoreSearchOrganicSerpElementItem](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md).[is_free](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md#is_free)

#### Defined in

[main.ts:110808](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110808)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IAppDataAppStoreSearchOrganicSerpElementItem](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md).[position](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md#position)

#### Defined in

[main.ts:110794](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110794)

___


### price

• `Optional` **price**: [`PriceInfo`](PriceInfo.md)

price of the app

#### Implementation of

[IAppDataAppStoreSearchOrganicSerpElementItem](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md).[price](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md#price)

#### Defined in

[main.ts:110810](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110810)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IAppDataAppStoreSearchOrganicSerpElementItem](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md).[rank_absolute](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:110790](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110790)

___


### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IAppDataAppStoreSearchOrganicSerpElementItem](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md).[rank_group](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md#rank_group)

#### Defined in

[main.ts:110787](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110787)

___


### rating

• `Optional` **rating**: [`RatingInfo`](RatingInfo.md)

average rating of the app

#### Implementation of

[IAppDataAppStoreSearchOrganicSerpElementItem](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md).[rating](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md#rating)

#### Defined in

[main.ts:110806](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110806)

___


### reviews\_count

• `Optional` **reviews\_count**: `number`

the total number of reviews of the app

#### Implementation of

[IAppDataAppStoreSearchOrganicSerpElementItem](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md).[reviews_count](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md#reviews_count)

#### Defined in

[main.ts:110804](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110804)

___


### title

• `Optional` **title**: `string`

title of the app

#### Implementation of

[IAppDataAppStoreSearchOrganicSerpElementItem](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md).[title](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md#title)

#### Defined in

[main.ts:110798](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110798)

___


### url

• `Optional` **url**: `string`

URL to the app page on App Store

#### Implementation of

[IAppDataAppStoreSearchOrganicSerpElementItem](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md).[url](../interfaces/IAppDataAppStoreSearchOrganicSerpElementItem.md#url)

#### Defined in

[main.ts:110800](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110800)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Overrides

[BaseAppDataSerpElementItem](BaseAppDataSerpElementItem.md).[init](BaseAppDataSerpElementItem.md#init)

#### Defined in

[main.ts:110819](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110819)

___


### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Overrides

[BaseAppDataSerpElementItem](BaseAppDataSerpElementItem.md).[toJSON](BaseAppDataSerpElementItem.md#tojson)

#### Defined in

[main.ts:110847](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110847)

___


### fromJS

▸ **fromJS**(`data`): [`AppDataAppStoreSearchOrganicSerpElementItem`](AppDataAppStoreSearchOrganicSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataAppStoreSearchOrganicSerpElementItem`](AppDataAppStoreSearchOrganicSerpElementItem.md)

#### Overrides

[BaseAppDataSerpElementItem](BaseAppDataSerpElementItem.md).[fromJS](BaseAppDataSerpElementItem.md#fromjs)

#### Defined in

[main.ts:110840](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110840)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")