[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataGooglePlayInfoOrganicSerpElementItem

# Class: AppDataGooglePlayInfoOrganicSerpElementItem

## Hierarchy

- [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)
  
  ↳ **`AppDataGooglePlayInfoOrganicSerpElementItem`**

## Implements

- [`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGooglePlayInfoOrganicSerpElementItem.md#constructor)

### Properties

- [\_discriminator](AppDataGooglePlayInfoOrganicSerpElementItem.md#_discriminator)
- [app\_id](AppDataGooglePlayInfoOrganicSerpElementItem.md#app_id)
- [description](AppDataGooglePlayInfoOrganicSerpElementItem.md#description)
- [developer](AppDataGooglePlayInfoOrganicSerpElementItem.md#developer)
- [developer\_address](AppDataGooglePlayInfoOrganicSerpElementItem.md#developer_address)
- [developer\_email](AppDataGooglePlayInfoOrganicSerpElementItem.md#developer_email)
- [developer\_id](AppDataGooglePlayInfoOrganicSerpElementItem.md#developer_id)
- [developer\_url](AppDataGooglePlayInfoOrganicSerpElementItem.md#developer_url)
- [developer\_website](AppDataGooglePlayInfoOrganicSerpElementItem.md#developer_website)
- [genres](AppDataGooglePlayInfoOrganicSerpElementItem.md#genres)
- [icon](AppDataGooglePlayInfoOrganicSerpElementItem.md#icon)
- [images](AppDataGooglePlayInfoOrganicSerpElementItem.md#images)
- [installs](AppDataGooglePlayInfoOrganicSerpElementItem.md#installs)
- [installs\_count](AppDataGooglePlayInfoOrganicSerpElementItem.md#installs_count)
- [is\_free](AppDataGooglePlayInfoOrganicSerpElementItem.md#is_free)
- [last\_update\_date](AppDataGooglePlayInfoOrganicSerpElementItem.md#last_update_date)
- [main\_category](AppDataGooglePlayInfoOrganicSerpElementItem.md#main_category)
- [minimum\_os\_version](AppDataGooglePlayInfoOrganicSerpElementItem.md#minimum_os_version)
- [more\_apps\_by\_developer](AppDataGooglePlayInfoOrganicSerpElementItem.md#more_apps_by_developer)
- [position](AppDataGooglePlayInfoOrganicSerpElementItem.md#position)
- [price](AppDataGooglePlayInfoOrganicSerpElementItem.md#price)
- [rank\_absolute](AppDataGooglePlayInfoOrganicSerpElementItem.md#rank_absolute)
- [rank\_group](AppDataGooglePlayInfoOrganicSerpElementItem.md#rank_group)
- [rating](AppDataGooglePlayInfoOrganicSerpElementItem.md#rating)
- [released\_date](AppDataGooglePlayInfoOrganicSerpElementItem.md#released_date)
- [reviews\_count](AppDataGooglePlayInfoOrganicSerpElementItem.md#reviews_count)
- [similar\_apps](AppDataGooglePlayInfoOrganicSerpElementItem.md#similar_apps)
- [size](AppDataGooglePlayInfoOrganicSerpElementItem.md#size)
- [tags](AppDataGooglePlayInfoOrganicSerpElementItem.md#tags)
- [title](AppDataGooglePlayInfoOrganicSerpElementItem.md#title)
- [update\_notes](AppDataGooglePlayInfoOrganicSerpElementItem.md#update_notes)
- [url](AppDataGooglePlayInfoOrganicSerpElementItem.md#url)
- [version](AppDataGooglePlayInfoOrganicSerpElementItem.md#version)
- [videos](AppDataGooglePlayInfoOrganicSerpElementItem.md#videos)

### Methods

- [init](AppDataGooglePlayInfoOrganicSerpElementItem.md#init)
- [toJSON](AppDataGooglePlayInfoOrganicSerpElementItem.md#tojson)
- [fromJS](AppDataGooglePlayInfoOrganicSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new AppDataGooglePlayInfoOrganicSerpElementItem**(`data?`): [`AppDataGooglePlayInfoOrganicSerpElementItem`](AppDataGooglePlayInfoOrganicSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md) |

#### Returns

[`AppDataGooglePlayInfoOrganicSerpElementItem`](AppDataGooglePlayInfoOrganicSerpElementItem.md)

#### Overrides

[BaseAppDataSerpElementItem](BaseAppDataSerpElementItem.md).[constructor](BaseAppDataSerpElementItem.md#constructor)

#### Defined in

[main.ts:179908](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179908)

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

ID of the app

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[app_id](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#app_id)

#### Defined in

[main.ts:179831](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179831)

___


### description

• `Optional` **description**: `string`

description of the app

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[description](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#description)

#### Defined in

[main.ts:179839](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179839)

___


### developer

• `Optional` **developer**: `string`

name of the app developer

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[developer](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#developer)

#### Defined in

[main.ts:179857](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179857)

___


### developer\_address

• `Optional` **developer\_address**: `string`

physical address of the developer

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[developer_address](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#developer_address)

#### Defined in

[main.ts:179865](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179865)

___


### developer\_email

• `Optional` **developer\_email**: `string`

email address of the developer

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[developer_email](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#developer_email)

#### Defined in

[main.ts:179863](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179863)

___


### developer\_id

• `Optional` **developer\_id**: `string`

ID of the app developer

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[developer_id](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#developer_id)

#### Defined in

[main.ts:179859](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179859)

___


### developer\_url

• `Optional` **developer\_url**: `string`

URL to the developer page on Google Play

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[developer_url](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#developer_url)

#### Defined in

[main.ts:179861](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179861)

___


### developer\_website

• `Optional` **developer\_website**: `string`

official website of the developer

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[developer_website](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#developer_website)

#### Defined in

[main.ts:179867](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179867)

___


### genres

• `Optional` **genres**: `string`[]

app genres
contains relevant app categories

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[genres](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#genres)

#### Defined in

[main.ts:179901](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179901)

___


### icon

• `Optional` **icon**: `string`

URL to the app icon

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[icon](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#icon)

#### Defined in

[main.ts:179837](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179837)

___


### images

• `Optional` **images**: `string`[]

app images
contains URLs to the images published on the app page on Google Play

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[images](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#images)

#### Defined in

[main.ts:179889](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179889)

___


### installs

• `Optional` **installs**: `string`

number of installs of the app
approximate number of installs as displayed on the app page

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[installs](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#installs)

#### Defined in

[main.ts:179852](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179852)

___


### installs\_count

• `Optional` **installs\_count**: `number`

number of installs of the app
the exact number of installs of the app

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[installs_count](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#installs_count)

#### Defined in

[main.ts:179855](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179855)

___


### is\_free

• `Optional` **is\_free**: `boolean`

indicates whether the app is free

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[is_free](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#is_free)

#### Defined in

[main.ts:179847](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179847)

___


### last\_update\_date

• `Optional` **last\_update\_date**: `string`

date and time when the app was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[last_update_date](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#last_update_date)

#### Defined in

[main.ts:179883](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179883)

___


### main\_category

• `Optional` **main\_category**: `string`

main category of the app

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[main_category](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#main_category)

#### Defined in

[main.ts:179849](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179849)

___


### minimum\_os\_version

• `Optional` **minimum\_os\_version**: `string`

minimum OS version required to install the app

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[minimum_os_version](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#minimum_os_version)

#### Defined in

[main.ts:179871](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179871)

___


### more\_apps\_by\_developer

• `Optional` **more\_apps\_by\_developer**: [`AppsInfo`](AppsInfo.md)[]

similar apps
information about apps built by the same developer

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[more_apps_by_developer](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#more_apps_by_developer)

#### Defined in

[main.ts:179898](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179898)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values: left

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[position](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#position)

#### Defined in

[main.ts:179829](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179829)

___


### price

• `Optional` **price**: [`PriceInfo`](PriceInfo.md)

price of the app

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[price](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#price)

#### Defined in

[main.ts:179845](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179845)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank among all the listed apps
absolute position among all apps on the list

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[rank_absolute](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:179826](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179826)

___


### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[rank_group](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#rank_group)

#### Defined in

[main.ts:179823](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179823)

___


### rating

• `Optional` **rating**: [`RatingInfo`](RatingInfo.md)

average rating of the app

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[rating](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#rating)

#### Defined in

[main.ts:179843](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179843)

___


### released\_date

• `Optional` **released\_date**: `string`

date and time when the app was released
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[released_date](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#released_date)

#### Defined in

[main.ts:179878](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179878)

___


### reviews\_count

• `Optional` **reviews\_count**: `number`

the total number of reviews the app has

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[reviews_count](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#reviews_count)

#### Defined in

[main.ts:179841](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179841)

___


### similar\_apps

• `Optional` **similar\_apps**: [`AppsInfo`](AppsInfo.md)[]

similar apps
displays apps similar to the app in a POST request

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[similar_apps](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#similar_apps)

#### Defined in

[main.ts:179895](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179895)

___


### size

• `Optional` **size**: `string`

size of the app

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[size](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#size)

#### Defined in

[main.ts:179873](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179873)

___


### tags

• `Optional` **tags**: `string`[]

app tags
contains relevant app tags

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[tags](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#tags)

#### Defined in

[main.ts:179904](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179904)

___


### title

• `Optional` **title**: `string`

title of the app

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[title](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#title)

#### Defined in

[main.ts:179833](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179833)

___


### update\_notes

• `Optional` **update\_notes**: `string`

update notes
contains the latest update notes from the developer

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[update_notes](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#update_notes)

#### Defined in

[main.ts:179886](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179886)

___


### url

• `Optional` **url**: `string`

URL to the app page on Google Play

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[url](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#url)

#### Defined in

[main.ts:179835](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179835)

___


### version

• `Optional` **version**: `string`

current version of the app

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[version](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#version)

#### Defined in

[main.ts:179869](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179869)

___


### videos

• `Optional` **videos**: `string`[]

app videos
contains URLs to the video published on the app page on Google Play

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[videos](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#videos)

#### Defined in

[main.ts:179892](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179892)

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

[main.ts:179913](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179913)

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

[main.ts:179987](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179987)

___


### fromJS

▸ **fromJS**(`data`): [`AppDataGooglePlayInfoOrganicSerpElementItem`](AppDataGooglePlayInfoOrganicSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGooglePlayInfoOrganicSerpElementItem`](AppDataGooglePlayInfoOrganicSerpElementItem.md)

#### Overrides

[BaseAppDataSerpElementItem](BaseAppDataSerpElementItem.md).[fromJS](BaseAppDataSerpElementItem.md#fromjs)

#### Defined in

[main.ts:179980](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179980)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")