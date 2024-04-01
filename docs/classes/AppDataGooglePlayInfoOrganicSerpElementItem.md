[Documentation](../README.md) / [Exports](../modules.md) / AppDataGooglePlayInfoOrganicSerpElementItem

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

main.ts:185361

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseAppDataSerpElementItem](BaseAppDataSerpElementItem.md).[_discriminator](BaseAppDataSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20969

___

### app\_id

• `Optional` **app\_id**: `string`

ID of the app

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[app_id](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#app_id)

#### Defined in

main.ts:185284

___

### description

• `Optional` **description**: `string`

description of the app

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[description](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#description)

#### Defined in

main.ts:185292

___

### developer

• `Optional` **developer**: `string`

name of the app developer

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[developer](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#developer)

#### Defined in

main.ts:185310

___

### developer\_address

• `Optional` **developer\_address**: `string`

physical address of the developer

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[developer_address](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#developer_address)

#### Defined in

main.ts:185318

___

### developer\_email

• `Optional` **developer\_email**: `string`

email address of the developer

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[developer_email](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#developer_email)

#### Defined in

main.ts:185316

___

### developer\_id

• `Optional` **developer\_id**: `string`

ID of the app developer

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[developer_id](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#developer_id)

#### Defined in

main.ts:185312

___

### developer\_url

• `Optional` **developer\_url**: `string`

URL to the developer page on Google Play

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[developer_url](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#developer_url)

#### Defined in

main.ts:185314

___

### developer\_website

• `Optional` **developer\_website**: `string`

official website of the developer

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[developer_website](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#developer_website)

#### Defined in

main.ts:185320

___

### genres

• `Optional` **genres**: `string`[]

app genres
contains relevant app categories

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[genres](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#genres)

#### Defined in

main.ts:185354

___

### icon

• `Optional` **icon**: `string`

URL to the app icon

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[icon](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#icon)

#### Defined in

main.ts:185290

___

### images

• `Optional` **images**: `string`[]

app images
contains URLs to the images published on the app page on Google Play

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[images](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#images)

#### Defined in

main.ts:185342

___

### installs

• `Optional` **installs**: `string`

number of installs of the app
approximate number of installs as displayed on the app page

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[installs](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#installs)

#### Defined in

main.ts:185305

___

### installs\_count

• `Optional` **installs\_count**: `number`

number of installs of the app
the exact number of installs of the app

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[installs_count](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#installs_count)

#### Defined in

main.ts:185308

___

### is\_free

• `Optional` **is\_free**: `boolean`

indicates whether the app is free

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[is_free](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#is_free)

#### Defined in

main.ts:185300

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

main.ts:185336

___

### main\_category

• `Optional` **main\_category**: `string`

main category of the app

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[main_category](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#main_category)

#### Defined in

main.ts:185302

___

### minimum\_os\_version

• `Optional` **minimum\_os\_version**: `string`

minimum OS version required to install the app

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[minimum_os_version](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#minimum_os_version)

#### Defined in

main.ts:185324

___

### more\_apps\_by\_developer

• `Optional` **more\_apps\_by\_developer**: [`AppsInfo`](AppsInfo.md)[]

similar apps
information about apps built by the same developer

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[more_apps_by_developer](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#more_apps_by_developer)

#### Defined in

main.ts:185351

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values: left

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[position](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#position)

#### Defined in

main.ts:185282

___

### price

• `Optional` **price**: [`PriceInfo`](PriceInfo.md)

price of the app

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[price](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#price)

#### Defined in

main.ts:185298

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank among all the listed apps
absolute position among all apps on the list

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[rank_absolute](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:185279

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[rank_group](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#rank_group)

#### Defined in

main.ts:185276

___

### rating

• `Optional` **rating**: [`RatingInfo`](RatingInfo.md)

average rating of the app

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[rating](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#rating)

#### Defined in

main.ts:185296

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

main.ts:185331

___

### reviews\_count

• `Optional` **reviews\_count**: `number`

the total number of reviews the app has

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[reviews_count](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#reviews_count)

#### Defined in

main.ts:185294

___

### similar\_apps

• `Optional` **similar\_apps**: [`AppsInfo`](AppsInfo.md)[]

similar apps
displays apps similar to the app in a POST request

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[similar_apps](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#similar_apps)

#### Defined in

main.ts:185348

___

### size

• `Optional` **size**: `string`

size of the app

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[size](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#size)

#### Defined in

main.ts:185326

___

### tags

• `Optional` **tags**: `string`[]

app tags
contains relevant app tags

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[tags](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#tags)

#### Defined in

main.ts:185357

___

### title

• `Optional` **title**: `string`

title of the app

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[title](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#title)

#### Defined in

main.ts:185286

___

### update\_notes

• `Optional` **update\_notes**: `string`

update notes
contains the latest update notes from the developer

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[update_notes](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#update_notes)

#### Defined in

main.ts:185339

___

### url

• `Optional` **url**: `string`

URL to the app page on Google Play

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[url](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#url)

#### Defined in

main.ts:185288

___

### version

• `Optional` **version**: `string`

current version of the app

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[version](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#version)

#### Defined in

main.ts:185322

___

### videos

• `Optional` **videos**: `string`[]

app videos
contains URLs to the video published on the app page on Google Play

#### Implementation of

[IAppDataGooglePlayInfoOrganicSerpElementItem](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[videos](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#videos)

#### Defined in

main.ts:185345

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

main.ts:185366

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

main.ts:185440

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

main.ts:185433
