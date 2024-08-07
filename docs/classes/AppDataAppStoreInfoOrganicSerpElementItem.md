**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppDataAppStoreInfoOrganicSerpElementItem

# Class: AppDataAppStoreInfoOrganicSerpElementItem

## Extends

- [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)

## Implements

- [`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataAppStoreInfoOrganicSerpElementItem(data)

> **new AppDataAppStoreInfoOrganicSerpElementItem**(`data`?): [`AppDataAppStoreInfoOrganicSerpElementItem`](AppDataAppStoreInfoOrganicSerpElementItem.md)

#### Parameters

• **data?**: [`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md)

#### Returns

[`AppDataAppStoreInfoOrganicSerpElementItem`](AppDataAppStoreInfoOrganicSerpElementItem.md)

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`constructor`](BaseAppDataSerpElementItem.md#constructors)

#### Source

main.ts:196906

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`_discriminator`](BaseAppDataSerpElementItem.md#_discriminator)

#### Source

main.ts:21519

***

### advisories?

> **`optional`** **advisories**: `string`[]

age rating and age-based content advisories

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`advisories`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#advisories)

#### Source

main.ts:196868

***

### app\_id?

> **`optional`** **app\_id**: `string`

ID of the app

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`app_id`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#app_id)

#### Source

main.ts:196844

***

### categories?

> **`optional`** **categories**: `string`[]

all relevant categories/genres of the app

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`categories`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#categories)

#### Source

main.ts:196864

***

### description?

> **`optional`** **description**: `string`

description of the app

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`description`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#description)

#### Source

main.ts:196852

***

### developer?

> **`optional`** **developer**: `string`

name of the app developer

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`developer`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#developer)

#### Source

main.ts:196870

***

### developer\_id?

> **`optional`** **developer\_id**: `string`

ID of the app developer

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`developer_id`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#developer_id)

#### Source

main.ts:196872

***

### developer\_url?

> **`optional`** **developer\_url**: `string`

URL to the developer page on App Store

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`developer_url`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#developer_url)

#### Source

main.ts:196874

***

### icon?

> **`optional`** **icon**: `string`

URL to the app icon

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`icon`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#icon)

#### Source

main.ts:196850

***

### images?

> **`optional`** **images**: `string`[]

app images
contains URLs to the images used on the app page on App Store

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`images`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#images)

#### Source

main.ts:196896

***

### is\_free?

> **`optional`** **is\_free**: `boolean`

indicates whether the app is free

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`is_free`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#is_free)

#### Source

main.ts:196860

***

### languages?

> **`optional`** **languages**: `string`[]

languages supported in the app

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`languages`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#languages)

#### Source

main.ts:196866

***

### last\_update\_date?

> **`optional`** **last\_update\_date**: `string`

date and time when the app was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`last_update_date`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#last_update_date)

#### Source

main.ts:196890

***

### main\_category?

> **`optional`** **main\_category**: `string`

main category/genre of the app

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`main_category`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#main_category)

#### Source

main.ts:196862

***

### minimum\_os\_version?

> **`optional`** **minimum\_os\_version**: `string`

minimum OS version required to install the app

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`minimum_os_version`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#minimum_os_version)

#### Source

main.ts:196878

***

### more\_apps\_by\_developer?

> **`optional`** **more\_apps\_by\_developer**: [`AppsInfo`](AppsInfo.md)[]

similar apps
information about apps built by the same developer

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`more_apps_by_developer`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#more_apps_by_developer)

#### Source

main.ts:196902

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values: left

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`position`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#position)

#### Source

main.ts:196842

***

### price?

> **`optional`** **price**: [`Price`](Price.md)

price of the app

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`price`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#price)

#### Source

main.ts:196858

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank among all the listed apps
absolute position among all apps on the list

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`rank_absolute`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#rank_absolute)

#### Source

main.ts:196839

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`rank_group`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#rank_group)

#### Source

main.ts:196836

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](RatingInfo.md)

average rating of the app

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`rating`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#rating)

#### Source

main.ts:196856

***

### released\_date?

> **`optional`** **released\_date**: `string`

date and time when the app was released
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`released_date`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#released_date)

#### Source

main.ts:196885

***

### reviews\_count?

> **`optional`** **reviews\_count**: `number`

the total number of reviews of the app

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`reviews_count`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#reviews_count)

#### Source

main.ts:196854

***

### similar\_apps?

> **`optional`** **similar\_apps**: [`AppsInfo`](AppsInfo.md)[]

similar apps
displays apps similar to the app in a POST request

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`similar_apps`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#similar_apps)

#### Source

main.ts:196899

***

### size?

> **`optional`** **size**: `string`

size of the app

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`size`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#size)

#### Source

main.ts:196880

***

### title?

> **`optional`** **title**: `string`

title of the app

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`title`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#title)

#### Source

main.ts:196846

***

### update\_notes?

> **`optional`** **update\_notes**: `string`

update notes
contains the latest update notes from the developer

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`update_notes`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#update_notes)

#### Source

main.ts:196893

***

### url?

> **`optional`** **url**: `string`

URL to the app page on App Store

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`url`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#url)

#### Source

main.ts:196848

***

### version?

> **`optional`** **version**: `string`

current version of the app

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`version`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#version)

#### Source

main.ts:196876

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`init`](BaseAppDataSerpElementItem.md#init)

#### Source

main.ts:196911

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`toJSON`](BaseAppDataSerpElementItem.md#tojson)

#### Source

main.ts:196980

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppDataAppStoreInfoOrganicSerpElementItem`](AppDataAppStoreInfoOrganicSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataAppStoreInfoOrganicSerpElementItem`](AppDataAppStoreInfoOrganicSerpElementItem.md)

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`fromJS`](BaseAppDataSerpElementItem.md#fromjs)

#### Source

main.ts:196973
