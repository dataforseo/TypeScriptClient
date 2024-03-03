[Documentation](../README.md) / [Exports](../modules.md) / IAppDataAppStoreInfoOrganicSerpElementItem

# Interface: IAppDataAppStoreInfoOrganicSerpElementItem

## Hierarchy

- [`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md)

  ↳ **`IAppDataAppStoreInfoOrganicSerpElementItem`**

## Implemented by

- [`AppDataAppStoreInfoOrganicSerpElementItem`](../classes/AppDataAppStoreInfoOrganicSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [advisories](IAppDataAppStoreInfoOrganicSerpElementItem.md#advisories)
- [app\_id](IAppDataAppStoreInfoOrganicSerpElementItem.md#app_id)
- [categories](IAppDataAppStoreInfoOrganicSerpElementItem.md#categories)
- [description](IAppDataAppStoreInfoOrganicSerpElementItem.md#description)
- [developer](IAppDataAppStoreInfoOrganicSerpElementItem.md#developer)
- [developer\_id](IAppDataAppStoreInfoOrganicSerpElementItem.md#developer_id)
- [developer\_url](IAppDataAppStoreInfoOrganicSerpElementItem.md#developer_url)
- [icon](IAppDataAppStoreInfoOrganicSerpElementItem.md#icon)
- [images](IAppDataAppStoreInfoOrganicSerpElementItem.md#images)
- [is\_free](IAppDataAppStoreInfoOrganicSerpElementItem.md#is_free)
- [languages](IAppDataAppStoreInfoOrganicSerpElementItem.md#languages)
- [last\_update\_date](IAppDataAppStoreInfoOrganicSerpElementItem.md#last_update_date)
- [main\_category](IAppDataAppStoreInfoOrganicSerpElementItem.md#main_category)
- [minimum\_os\_version](IAppDataAppStoreInfoOrganicSerpElementItem.md#minimum_os_version)
- [more\_apps\_by\_developer](IAppDataAppStoreInfoOrganicSerpElementItem.md#more_apps_by_developer)
- [position](IAppDataAppStoreInfoOrganicSerpElementItem.md#position)
- [price](IAppDataAppStoreInfoOrganicSerpElementItem.md#price)
- [rank\_absolute](IAppDataAppStoreInfoOrganicSerpElementItem.md#rank_absolute)
- [rank\_group](IAppDataAppStoreInfoOrganicSerpElementItem.md#rank_group)
- [rating](IAppDataAppStoreInfoOrganicSerpElementItem.md#rating)
- [released\_date](IAppDataAppStoreInfoOrganicSerpElementItem.md#released_date)
- [reviews\_count](IAppDataAppStoreInfoOrganicSerpElementItem.md#reviews_count)
- [similar\_apps](IAppDataAppStoreInfoOrganicSerpElementItem.md#similar_apps)
- [size](IAppDataAppStoreInfoOrganicSerpElementItem.md#size)
- [title](IAppDataAppStoreInfoOrganicSerpElementItem.md#title)
- [update\_notes](IAppDataAppStoreInfoOrganicSerpElementItem.md#update_notes)
- [url](IAppDataAppStoreInfoOrganicSerpElementItem.md#url)
- [version](IAppDataAppStoreInfoOrganicSerpElementItem.md#version)

## Properties

### advisories

• `Optional` **advisories**: `string`[]

age rating and age-based content advisories

#### Defined in

main.ts:184733

___

### app\_id

• `Optional` **app\_id**: `string`

ID of the app

#### Defined in

main.ts:184709

___

### categories

• `Optional` **categories**: `string`[]

all relevant categories/genres of the app

#### Defined in

main.ts:184729

___

### description

• `Optional` **description**: `string`

description of the app

#### Defined in

main.ts:184717

___

### developer

• `Optional` **developer**: `string`

name of the app developer

#### Defined in

main.ts:184735

___

### developer\_id

• `Optional` **developer\_id**: `string`

ID of the app developer

#### Defined in

main.ts:184737

___

### developer\_url

• `Optional` **developer\_url**: `string`

URL to the developer page on App Store

#### Defined in

main.ts:184739

___

### icon

• `Optional` **icon**: `string`

URL to the app icon

#### Defined in

main.ts:184715

___

### images

• `Optional` **images**: `string`[]

app images
contains URLs to the images used on the app page on App Store

#### Defined in

main.ts:184761

___

### is\_free

• `Optional` **is\_free**: `boolean`

indicates whether the app is free

#### Defined in

main.ts:184725

___

### languages

• `Optional` **languages**: `string`[]

languages supported in the app

#### Defined in

main.ts:184731

___

### last\_update\_date

• `Optional` **last\_update\_date**: `string`

date and time when the app was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:184755

___

### main\_category

• `Optional` **main\_category**: `string`

main category/genre of the app

#### Defined in

main.ts:184727

___

### minimum\_os\_version

• `Optional` **minimum\_os\_version**: `string`

minimum OS version required to install the app

#### Defined in

main.ts:184743

___

### more\_apps\_by\_developer

• `Optional` **more\_apps\_by\_developer**: [`AppsInfo`](../classes/AppsInfo.md)[]

similar apps
information about apps built by the same developer

#### Defined in

main.ts:184767

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values: left

#### Defined in

main.ts:184707

___

### price

• `Optional` **price**: [`PriceInfo`](../classes/PriceInfo.md)

price of the app

#### Defined in

main.ts:184723

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank among all the listed apps
absolute position among all apps on the list

#### Defined in

main.ts:184704

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:184701

___

### rating

• `Optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

average rating of the app

#### Defined in

main.ts:184721

___

### released\_date

• `Optional` **released\_date**: `string`

date and time when the app was released
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:184750

___

### reviews\_count

• `Optional` **reviews\_count**: `number`

the total number of reviews of the app

#### Defined in

main.ts:184719

___

### similar\_apps

• `Optional` **similar\_apps**: [`AppsInfo`](../classes/AppsInfo.md)[]

similar apps
displays apps similar to the app in a POST request

#### Defined in

main.ts:184764

___

### size

• `Optional` **size**: `string`

size of the app

#### Defined in

main.ts:184745

___

### title

• `Optional` **title**: `string`

title of the app

#### Defined in

main.ts:184711

___

### update\_notes

• `Optional` **update\_notes**: `string`

update notes
contains the latest update notes from the developer

#### Defined in

main.ts:184758

___

### url

• `Optional` **url**: `string`

URL to the app page on App Store

#### Defined in

main.ts:184713

___

### version

• `Optional` **version**: `string`

current version of the app

#### Defined in

main.ts:184741
