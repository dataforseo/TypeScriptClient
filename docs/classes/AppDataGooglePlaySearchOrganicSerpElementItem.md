[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataGooglePlaySearchOrganicSerpElementItem

# Class: AppDataGooglePlaySearchOrganicSerpElementItem

## Hierarchy

- [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)
  
  ↳ **`AppDataGooglePlaySearchOrganicSerpElementItem`**

## Implements

- [`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGooglePlaySearchOrganicSerpElementItem.md#constructor)

### Properties

- [\_discriminator](AppDataGooglePlaySearchOrganicSerpElementItem.md#_discriminator)
- [app\_id](AppDataGooglePlaySearchOrganicSerpElementItem.md#app_id)
- [developer](AppDataGooglePlaySearchOrganicSerpElementItem.md#developer)
- [developer\_url](AppDataGooglePlaySearchOrganicSerpElementItem.md#developer_url)
- [icon](AppDataGooglePlaySearchOrganicSerpElementItem.md#icon)
- [is\_free](AppDataGooglePlaySearchOrganicSerpElementItem.md#is_free)
- [position](AppDataGooglePlaySearchOrganicSerpElementItem.md#position)
- [price](AppDataGooglePlaySearchOrganicSerpElementItem.md#price)
- [rank\_absolute](AppDataGooglePlaySearchOrganicSerpElementItem.md#rank_absolute)
- [rank\_group](AppDataGooglePlaySearchOrganicSerpElementItem.md#rank_group)
- [rating](AppDataGooglePlaySearchOrganicSerpElementItem.md#rating)
- [reviews\_count](AppDataGooglePlaySearchOrganicSerpElementItem.md#reviews_count)
- [title](AppDataGooglePlaySearchOrganicSerpElementItem.md#title)
- [url](AppDataGooglePlaySearchOrganicSerpElementItem.md#url)

### Methods

- [init](AppDataGooglePlaySearchOrganicSerpElementItem.md#init)
- [toJSON](AppDataGooglePlaySearchOrganicSerpElementItem.md#tojson)
- [fromJS](AppDataGooglePlaySearchOrganicSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new AppDataGooglePlaySearchOrganicSerpElementItem**(`data?`): [`AppDataGooglePlaySearchOrganicSerpElementItem`](AppDataGooglePlaySearchOrganicSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGooglePlaySearchOrganicSerpElementItem`](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md) |

#### Returns

[`AppDataGooglePlaySearchOrganicSerpElementItem`](AppDataGooglePlaySearchOrganicSerpElementItem.md)

#### Overrides

[BaseAppDataSerpElementItem](BaseAppDataSerpElementItem.md).[constructor](BaseAppDataSerpElementItem.md#constructor)

#### Defined in

[main.ts:108514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108514)

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

[IAppDataGooglePlaySearchOrganicSerpElementItem](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[app_id](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#app_id)

#### Defined in

[main.ts:108492](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108492)

___


### developer

• `Optional` **developer**: `string`

name of the app developer

#### Implementation of

[IAppDataGooglePlaySearchOrganicSerpElementItem](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[developer](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#developer)

#### Defined in

[main.ts:108508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108508)

___


### developer\_url

• `Optional` **developer\_url**: `string`

URL to the developer page on Google Play

#### Implementation of

[IAppDataGooglePlaySearchOrganicSerpElementItem](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[developer_url](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#developer_url)

#### Defined in

[main.ts:108510](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108510)

___


### icon

• `Optional` **icon**: `string`

URL to the app icon

#### Implementation of

[IAppDataGooglePlaySearchOrganicSerpElementItem](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[icon](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#icon)

#### Defined in

[main.ts:108498](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108498)

___


### is\_free

• `Optional` **is\_free**: `boolean`

indicates whether the app is free

#### Implementation of

[IAppDataGooglePlaySearchOrganicSerpElementItem](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[is_free](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#is_free)

#### Defined in

[main.ts:108504](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108504)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IAppDataGooglePlaySearchOrganicSerpElementItem](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[position](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#position)

#### Defined in

[main.ts:108490](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108490)

___


### price

• `Optional` **price**: [`PriceInfo`](PriceInfo.md)

price of the app

#### Implementation of

[IAppDataGooglePlaySearchOrganicSerpElementItem](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[price](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#price)

#### Defined in

[main.ts:108506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108506)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IAppDataGooglePlaySearchOrganicSerpElementItem](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[rank_absolute](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:108486](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108486)

___


### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IAppDataGooglePlaySearchOrganicSerpElementItem](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[rank_group](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#rank_group)

#### Defined in

[main.ts:108483](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108483)

___


### rating

• `Optional` **rating**: [`RatingInfo`](RatingInfo.md)

average rating of the app

#### Implementation of

[IAppDataGooglePlaySearchOrganicSerpElementItem](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[rating](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#rating)

#### Defined in

[main.ts:108502](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108502)

___


### reviews\_count

• `Optional` **reviews\_count**: `number`

the total number of reviews of the app

#### Implementation of

[IAppDataGooglePlaySearchOrganicSerpElementItem](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[reviews_count](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#reviews_count)

#### Defined in

[main.ts:108500](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108500)

___


### title

• `Optional` **title**: `string`

title of the app

#### Implementation of

[IAppDataGooglePlaySearchOrganicSerpElementItem](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[title](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#title)

#### Defined in

[main.ts:108494](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108494)

___


### url

• `Optional` **url**: `string`

URL to the app page on Google Play

#### Implementation of

[IAppDataGooglePlaySearchOrganicSerpElementItem](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md).[url](../interfaces/IAppDataGooglePlaySearchOrganicSerpElementItem.md#url)

#### Defined in

[main.ts:108496](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108496)

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

[main.ts:108519](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108519)

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

[main.ts:108549](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108549)

___


### fromJS

▸ **fromJS**(`data`): [`AppDataGooglePlaySearchOrganicSerpElementItem`](AppDataGooglePlaySearchOrganicSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGooglePlaySearchOrganicSerpElementItem`](AppDataGooglePlaySearchOrganicSerpElementItem.md)

#### Overrides

[BaseAppDataSerpElementItem](BaseAppDataSerpElementItem.md).[fromJS](BaseAppDataSerpElementItem.md#fromjs)

#### Defined in

[main.ts:108542](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108542)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")