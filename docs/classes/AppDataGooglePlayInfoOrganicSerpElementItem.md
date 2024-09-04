[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / AppDataGooglePlayInfoOrganicSerpElementItem

# Class: AppDataGooglePlayInfoOrganicSerpElementItem

## Extends

- [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)

## Implements

- [`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataGooglePlayInfoOrganicSerpElementItem()

> **new AppDataGooglePlayInfoOrganicSerpElementItem**(`data`?): [`AppDataGooglePlayInfoOrganicSerpElementItem`](AppDataGooglePlayInfoOrganicSerpElementItem.md)

#### Parameters

• **data?**: [`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md)

#### Returns

[`AppDataGooglePlayInfoOrganicSerpElementItem`](AppDataGooglePlayInfoOrganicSerpElementItem.md)

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`constructor`](BaseAppDataSerpElementItem.md#constructors)

#### Defined in

main.ts:194185

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`_discriminator`](BaseAppDataSerpElementItem.md#_discriminator)

#### Defined in

main.ts:21701

***

### app\_id?

> `optional` **app\_id**: `string`

ID of the app

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`app_id`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#app_id)

#### Defined in

main.ts:194108

***

### description?

> `optional` **description**: `string`

description of the app

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`description`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#description)

#### Defined in

main.ts:194116

***

### developer?

> `optional` **developer**: `string`

name of the app developer

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`developer`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#developer)

#### Defined in

main.ts:194134

***

### developer\_address?

> `optional` **developer\_address**: `string`

physical address of the developer

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`developer_address`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#developer_address)

#### Defined in

main.ts:194142

***

### developer\_email?

> `optional` **developer\_email**: `string`

email address of the developer

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`developer_email`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#developer_email)

#### Defined in

main.ts:194140

***

### developer\_id?

> `optional` **developer\_id**: `string`

ID of the app developer

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`developer_id`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#developer_id)

#### Defined in

main.ts:194136

***

### developer\_url?

> `optional` **developer\_url**: `string`

URL to the developer page on Google Play

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`developer_url`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#developer_url)

#### Defined in

main.ts:194138

***

### developer\_website?

> `optional` **developer\_website**: `string`

official website of the developer

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`developer_website`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#developer_website)

#### Defined in

main.ts:194144

***

### genres?

> `optional` **genres**: `string`[]

app genres
contains relevant app categories

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`genres`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#genres)

#### Defined in

main.ts:194178

***

### icon?

> `optional` **icon**: `string`

URL to the app icon

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`icon`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#icon)

#### Defined in

main.ts:194114

***

### images?

> `optional` **images**: `string`[]

app images
contains URLs to the images published on the app page on Google Play

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`images`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#images)

#### Defined in

main.ts:194166

***

### installs?

> `optional` **installs**: `string`

number of installs of the app
approximate number of installs as displayed on the app page

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`installs`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#installs)

#### Defined in

main.ts:194129

***

### installs\_count?

> `optional` **installs\_count**: `number`

number of installs of the app
the exact number of installs of the app

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`installs_count`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#installs_count)

#### Defined in

main.ts:194132

***

### is\_free?

> `optional` **is\_free**: `boolean`

indicates whether the app is free

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`is_free`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#is_free)

#### Defined in

main.ts:194124

***

### last\_update\_date?

> `optional` **last\_update\_date**: `string`

date and time when the app was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`last_update_date`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#last_update_date)

#### Defined in

main.ts:194160

***

### main\_category?

> `optional` **main\_category**: `string`

main category of the app

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`main_category`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#main_category)

#### Defined in

main.ts:194126

***

### minimum\_os\_version?

> `optional` **minimum\_os\_version**: `string`

minimum OS version required to install the app

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`minimum_os_version`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#minimum_os_version)

#### Defined in

main.ts:194148

***

### more\_apps\_by\_developer?

> `optional` **more\_apps\_by\_developer**: [`AppsInfo`](AppsInfo.md)[]

similar apps
information about apps built by the same developer

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`more_apps_by_developer`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#more_apps_by_developer)

#### Defined in

main.ts:194175

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values: left

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`position`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#position)

#### Defined in

main.ts:194106

***

### price?

> `optional` **price**: [`Price`](Price.md)

price of the app

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`price`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#price)

#### Defined in

main.ts:194122

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank among all the listed apps
absolute position among all apps on the list

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`rank_absolute`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:194103

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`rank_group`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#rank_group)

#### Defined in

main.ts:194100

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

average rating of the app

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`rating`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#rating)

#### Defined in

main.ts:194120

***

### released\_date?

> `optional` **released\_date**: `string`

date and time when the app was released
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`released_date`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#released_date)

#### Defined in

main.ts:194155

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

the total number of reviews the app has

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`reviews_count`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#reviews_count)

#### Defined in

main.ts:194118

***

### similar\_apps?

> `optional` **similar\_apps**: [`AppsInfo`](AppsInfo.md)[]

similar apps
displays apps similar to the app in a POST request

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`similar_apps`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#similar_apps)

#### Defined in

main.ts:194172

***

### size?

> `optional` **size**: `string`

size of the app

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`size`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#size)

#### Defined in

main.ts:194150

***

### tags?

> `optional` **tags**: `string`[]

app tags
contains relevant app tags

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`tags`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#tags)

#### Defined in

main.ts:194181

***

### title?

> `optional` **title**: `string`

title of the app

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`title`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#title)

#### Defined in

main.ts:194110

***

### update\_notes?

> `optional` **update\_notes**: `string`

update notes
contains the latest update notes from the developer

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`update_notes`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#update_notes)

#### Defined in

main.ts:194163

***

### url?

> `optional` **url**: `string`

URL to the app page on Google Play

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`url`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#url)

#### Defined in

main.ts:194112

***

### version?

> `optional` **version**: `string`

current version of the app

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`version`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#version)

#### Defined in

main.ts:194146

***

### videos?

> `optional` **videos**: `string`[]

app videos
contains URLs to the video published on the app page on Google Play

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`videos`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#videos)

#### Defined in

main.ts:194169

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`init`](BaseAppDataSerpElementItem.md#init)

#### Defined in

main.ts:194190

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`toJSON`](BaseAppDataSerpElementItem.md#tojson)

#### Defined in

main.ts:194264

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataGooglePlayInfoOrganicSerpElementItem`](AppDataGooglePlayInfoOrganicSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataGooglePlayInfoOrganicSerpElementItem`](AppDataGooglePlayInfoOrganicSerpElementItem.md)

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`fromJS`](BaseAppDataSerpElementItem.md#fromjs)

#### Defined in

main.ts:194257
