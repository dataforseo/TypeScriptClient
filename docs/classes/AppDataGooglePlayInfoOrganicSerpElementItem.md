**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppDataGooglePlayInfoOrganicSerpElementItem

# Class: AppDataGooglePlayInfoOrganicSerpElementItem

## Extends

- [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)

## Implements

- [`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataGooglePlayInfoOrganicSerpElementItem(data)

> **new AppDataGooglePlayInfoOrganicSerpElementItem**(`data`?): [`AppDataGooglePlayInfoOrganicSerpElementItem`](AppDataGooglePlayInfoOrganicSerpElementItem.md)

#### Parameters

• **data?**: [`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md)

#### Returns

[`AppDataGooglePlayInfoOrganicSerpElementItem`](AppDataGooglePlayInfoOrganicSerpElementItem.md)

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`constructor`](BaseAppDataSerpElementItem.md#constructors)

#### Source

main.ts:188542

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`_discriminator`](BaseAppDataSerpElementItem.md#_discriminator)

#### Source

main.ts:21154

***

### app\_id?

> **`optional`** **app\_id**: `string`

ID of the app

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`app_id`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#app_id)

#### Source

main.ts:188465

***

### description?

> **`optional`** **description**: `string`

description of the app

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`description`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#description)

#### Source

main.ts:188473

***

### developer?

> **`optional`** **developer**: `string`

name of the app developer

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`developer`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#developer)

#### Source

main.ts:188491

***

### developer\_address?

> **`optional`** **developer\_address**: `string`

physical address of the developer

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`developer_address`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#developer_address)

#### Source

main.ts:188499

***

### developer\_email?

> **`optional`** **developer\_email**: `string`

email address of the developer

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`developer_email`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#developer_email)

#### Source

main.ts:188497

***

### developer\_id?

> **`optional`** **developer\_id**: `string`

ID of the app developer

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`developer_id`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#developer_id)

#### Source

main.ts:188493

***

### developer\_url?

> **`optional`** **developer\_url**: `string`

URL to the developer page on Google Play

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`developer_url`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#developer_url)

#### Source

main.ts:188495

***

### developer\_website?

> **`optional`** **developer\_website**: `string`

official website of the developer

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`developer_website`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#developer_website)

#### Source

main.ts:188501

***

### genres?

> **`optional`** **genres**: `string`[]

app genres
contains relevant app categories

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`genres`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#genres)

#### Source

main.ts:188535

***

### icon?

> **`optional`** **icon**: `string`

URL to the app icon

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`icon`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#icon)

#### Source

main.ts:188471

***

### images?

> **`optional`** **images**: `string`[]

app images
contains URLs to the images published on the app page on Google Play

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`images`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#images)

#### Source

main.ts:188523

***

### installs?

> **`optional`** **installs**: `string`

number of installs of the app
approximate number of installs as displayed on the app page

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`installs`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#installs)

#### Source

main.ts:188486

***

### installs\_count?

> **`optional`** **installs\_count**: `number`

number of installs of the app
the exact number of installs of the app

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`installs_count`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#installs_count)

#### Source

main.ts:188489

***

### is\_free?

> **`optional`** **is\_free**: `boolean`

indicates whether the app is free

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`is_free`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#is_free)

#### Source

main.ts:188481

***

### last\_update\_date?

> **`optional`** **last\_update\_date**: `string`

date and time when the app was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`last_update_date`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#last_update_date)

#### Source

main.ts:188517

***

### main\_category?

> **`optional`** **main\_category**: `string`

main category of the app

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`main_category`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#main_category)

#### Source

main.ts:188483

***

### minimum\_os\_version?

> **`optional`** **minimum\_os\_version**: `string`

minimum OS version required to install the app

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`minimum_os_version`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#minimum_os_version)

#### Source

main.ts:188505

***

### more\_apps\_by\_developer?

> **`optional`** **more\_apps\_by\_developer**: [`AppsInfo`](AppsInfo.md)[]

similar apps
information about apps built by the same developer

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`more_apps_by_developer`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#more_apps_by_developer)

#### Source

main.ts:188532

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values: left

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`position`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#position)

#### Source

main.ts:188463

***

### price?

> **`optional`** **price**: [`PriceInfo`](PriceInfo.md)

price of the app

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`price`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#price)

#### Source

main.ts:188479

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank among all the listed apps
absolute position among all apps on the list

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`rank_absolute`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#rank_absolute)

#### Source

main.ts:188460

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`rank_group`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#rank_group)

#### Source

main.ts:188457

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](RatingInfo.md)

average rating of the app

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`rating`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#rating)

#### Source

main.ts:188477

***

### released\_date?

> **`optional`** **released\_date**: `string`

date and time when the app was released
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`released_date`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#released_date)

#### Source

main.ts:188512

***

### reviews\_count?

> **`optional`** **reviews\_count**: `number`

the total number of reviews the app has

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`reviews_count`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#reviews_count)

#### Source

main.ts:188475

***

### similar\_apps?

> **`optional`** **similar\_apps**: [`AppsInfo`](AppsInfo.md)[]

similar apps
displays apps similar to the app in a POST request

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`similar_apps`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#similar_apps)

#### Source

main.ts:188529

***

### size?

> **`optional`** **size**: `string`

size of the app

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`size`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#size)

#### Source

main.ts:188507

***

### tags?

> **`optional`** **tags**: `string`[]

app tags
contains relevant app tags

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`tags`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#tags)

#### Source

main.ts:188538

***

### title?

> **`optional`** **title**: `string`

title of the app

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`title`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#title)

#### Source

main.ts:188467

***

### update\_notes?

> **`optional`** **update\_notes**: `string`

update notes
contains the latest update notes from the developer

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`update_notes`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#update_notes)

#### Source

main.ts:188520

***

### url?

> **`optional`** **url**: `string`

URL to the app page on Google Play

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`url`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#url)

#### Source

main.ts:188469

***

### version?

> **`optional`** **version**: `string`

current version of the app

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`version`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#version)

#### Source

main.ts:188503

***

### videos?

> **`optional`** **videos**: `string`[]

app videos
contains URLs to the video published on the app page on Google Play

#### Implementation of

[`IAppDataGooglePlayInfoOrganicSerpElementItem`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md).[`videos`](../interfaces/IAppDataGooglePlayInfoOrganicSerpElementItem.md#videos)

#### Source

main.ts:188526

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

main.ts:188547

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

main.ts:188621

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppDataGooglePlayInfoOrganicSerpElementItem`](AppDataGooglePlayInfoOrganicSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataGooglePlayInfoOrganicSerpElementItem`](AppDataGooglePlayInfoOrganicSerpElementItem.md)

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`fromJS`](BaseAppDataSerpElementItem.md#fromjs)

#### Source

main.ts:188614
