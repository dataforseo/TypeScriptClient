[dataforseo-client](../README.md) / [Exports](../modules.md) / IAppDataGooglePlayInfoOrganicSerpElementItem

# Interface: IAppDataGooglePlayInfoOrganicSerpElementItem

## Hierarchy

- [`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md)

  ↳ **`IAppDataGooglePlayInfoOrganicSerpElementItem`**

## Implemented by

- [`AppDataGooglePlayInfoOrganicSerpElementItem`](../classes/AppDataGooglePlayInfoOrganicSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [app\_id](IAppDataGooglePlayInfoOrganicSerpElementItem.md#app_id)
- [description](IAppDataGooglePlayInfoOrganicSerpElementItem.md#description)
- [developer](IAppDataGooglePlayInfoOrganicSerpElementItem.md#developer)
- [developer\_address](IAppDataGooglePlayInfoOrganicSerpElementItem.md#developer_address)
- [developer\_email](IAppDataGooglePlayInfoOrganicSerpElementItem.md#developer_email)
- [developer\_id](IAppDataGooglePlayInfoOrganicSerpElementItem.md#developer_id)
- [developer\_url](IAppDataGooglePlayInfoOrganicSerpElementItem.md#developer_url)
- [developer\_website](IAppDataGooglePlayInfoOrganicSerpElementItem.md#developer_website)
- [genres](IAppDataGooglePlayInfoOrganicSerpElementItem.md#genres)
- [icon](IAppDataGooglePlayInfoOrganicSerpElementItem.md#icon)
- [images](IAppDataGooglePlayInfoOrganicSerpElementItem.md#images)
- [installs](IAppDataGooglePlayInfoOrganicSerpElementItem.md#installs)
- [installs\_count](IAppDataGooglePlayInfoOrganicSerpElementItem.md#installs_count)
- [is\_free](IAppDataGooglePlayInfoOrganicSerpElementItem.md#is_free)
- [last\_update\_date](IAppDataGooglePlayInfoOrganicSerpElementItem.md#last_update_date)
- [main\_category](IAppDataGooglePlayInfoOrganicSerpElementItem.md#main_category)
- [minimum\_os\_version](IAppDataGooglePlayInfoOrganicSerpElementItem.md#minimum_os_version)
- [more\_apps\_by\_developer](IAppDataGooglePlayInfoOrganicSerpElementItem.md#more_apps_by_developer)
- [position](IAppDataGooglePlayInfoOrganicSerpElementItem.md#position)
- [price](IAppDataGooglePlayInfoOrganicSerpElementItem.md#price)
- [rank\_absolute](IAppDataGooglePlayInfoOrganicSerpElementItem.md#rank_absolute)
- [rank\_group](IAppDataGooglePlayInfoOrganicSerpElementItem.md#rank_group)
- [rating](IAppDataGooglePlayInfoOrganicSerpElementItem.md#rating)
- [released\_date](IAppDataGooglePlayInfoOrganicSerpElementItem.md#released_date)
- [reviews\_count](IAppDataGooglePlayInfoOrganicSerpElementItem.md#reviews_count)
- [similar\_apps](IAppDataGooglePlayInfoOrganicSerpElementItem.md#similar_apps)
- [size](IAppDataGooglePlayInfoOrganicSerpElementItem.md#size)
- [tags](IAppDataGooglePlayInfoOrganicSerpElementItem.md#tags)
- [title](IAppDataGooglePlayInfoOrganicSerpElementItem.md#title)
- [update\_notes](IAppDataGooglePlayInfoOrganicSerpElementItem.md#update_notes)
- [url](IAppDataGooglePlayInfoOrganicSerpElementItem.md#url)
- [version](IAppDataGooglePlayInfoOrganicSerpElementItem.md#version)
- [videos](IAppDataGooglePlayInfoOrganicSerpElementItem.md#videos)

## Properties

### app\_id

• `Optional` **app\_id**: `string`

ID of the app

#### Defined in

[main.ts:180066](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180066)

___

### description

• `Optional` **description**: `string`

description of the app

#### Defined in

[main.ts:180074](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180074)

___

### developer

• `Optional` **developer**: `string`

name of the app developer

#### Defined in

[main.ts:180092](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180092)

___

### developer\_address

• `Optional` **developer\_address**: `string`

physical address of the developer

#### Defined in

[main.ts:180100](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180100)

___

### developer\_email

• `Optional` **developer\_email**: `string`

email address of the developer

#### Defined in

[main.ts:180098](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180098)

___

### developer\_id

• `Optional` **developer\_id**: `string`

ID of the app developer

#### Defined in

[main.ts:180094](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180094)

___

### developer\_url

• `Optional` **developer\_url**: `string`

URL to the developer page on Google Play

#### Defined in

[main.ts:180096](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180096)

___

### developer\_website

• `Optional` **developer\_website**: `string`

official website of the developer

#### Defined in

[main.ts:180102](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180102)

___

### genres

• `Optional` **genres**: `string`[]

app genres
contains relevant app categories

#### Defined in

[main.ts:180136](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180136)

___

### icon

• `Optional` **icon**: `string`

URL to the app icon

#### Defined in

[main.ts:180072](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180072)

___

### images

• `Optional` **images**: `string`[]

app images
contains URLs to the images published on the app page on Google Play

#### Defined in

[main.ts:180124](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180124)

___

### installs

• `Optional` **installs**: `string`

number of installs of the app
approximate number of installs as displayed on the app page

#### Defined in

[main.ts:180087](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180087)

___

### installs\_count

• `Optional` **installs\_count**: `number`

number of installs of the app
the exact number of installs of the app

#### Defined in

[main.ts:180090](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180090)

___

### is\_free

• `Optional` **is\_free**: `boolean`

indicates whether the app is free

#### Defined in

[main.ts:180082](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180082)

___

### last\_update\_date

• `Optional` **last\_update\_date**: `string`

date and time when the app was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:180118](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180118)

___

### main\_category

• `Optional` **main\_category**: `string`

main category of the app

#### Defined in

[main.ts:180084](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180084)

___

### minimum\_os\_version

• `Optional` **minimum\_os\_version**: `string`

minimum OS version required to install the app

#### Defined in

[main.ts:180106](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180106)

___

### more\_apps\_by\_developer

• `Optional` **more\_apps\_by\_developer**: [`AppsInfo`](../classes/AppsInfo.md)[]

similar apps
information about apps built by the same developer

#### Defined in

[main.ts:180133](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180133)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values: left

#### Defined in

[main.ts:180064](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180064)

___

### price

• `Optional` **price**: [`PriceInfo`](../classes/PriceInfo.md)

price of the app

#### Defined in

[main.ts:180080](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180080)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank among all the listed apps
absolute position among all apps on the list

#### Defined in

[main.ts:180061](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180061)

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:180058](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180058)

___

### rating

• `Optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

average rating of the app

#### Defined in

[main.ts:180078](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180078)

___

### released\_date

• `Optional` **released\_date**: `string`

date and time when the app was released
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:180113](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180113)

___

### reviews\_count

• `Optional` **reviews\_count**: `number`

the total number of reviews the app has

#### Defined in

[main.ts:180076](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180076)

___

### similar\_apps

• `Optional` **similar\_apps**: [`AppsInfo`](../classes/AppsInfo.md)[]

similar apps
displays apps similar to the app in a POST request

#### Defined in

[main.ts:180130](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180130)

___

### size

• `Optional` **size**: `string`

size of the app

#### Defined in

[main.ts:180108](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180108)

___

### tags

• `Optional` **tags**: `string`[]

app tags
contains relevant app tags

#### Defined in

[main.ts:180139](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180139)

___

### title

• `Optional` **title**: `string`

title of the app

#### Defined in

[main.ts:180068](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180068)

___

### update\_notes

• `Optional` **update\_notes**: `string`

update notes
contains the latest update notes from the developer

#### Defined in

[main.ts:180121](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180121)

___

### url

• `Optional` **url**: `string`

URL to the app page on Google Play

#### Defined in

[main.ts:180070](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180070)

___

### version

• `Optional` **version**: `string`

current version of the app

#### Defined in

[main.ts:180104](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180104)

___

### videos

• `Optional` **videos**: `string`[]

app videos
contains URLs to the video published on the app page on Google Play

#### Defined in

[main.ts:180127](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180127)
