[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / AppDataAppStoreInfoOrganicSerpElementItem

# Class: AppDataAppStoreInfoOrganicSerpElementItem

## Extends

- [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)

## Implements

- [`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataAppStoreInfoOrganicSerpElementItem()

> **new AppDataAppStoreInfoOrganicSerpElementItem**(`data`?): [`AppDataAppStoreInfoOrganicSerpElementItem`](AppDataAppStoreInfoOrganicSerpElementItem.md)

#### Parameters

• **data?**: [`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md)

#### Returns

[`AppDataAppStoreInfoOrganicSerpElementItem`](AppDataAppStoreInfoOrganicSerpElementItem.md)

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`constructor`](BaseAppDataSerpElementItem.md#constructors)

#### Defined in

main.ts:194179

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`_discriminator`](BaseAppDataSerpElementItem.md#_discriminator)

#### Defined in

main.ts:21983

***

### advisories?

> `optional` **advisories**: `string`[]

age rating and age-based content advisories

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`advisories`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#advisories)

#### Defined in

main.ts:194141

***

### app\_id?

> `optional` **app\_id**: `string`

ID of the app

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`app_id`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#app_id)

#### Defined in

main.ts:194121

***

### categories?

> `optional` **categories**: `string`[]

all relevant categories/genres of the app

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`categories`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#categories)

#### Defined in

main.ts:194137

***

### description?

> `optional` **description**: `string`

description of the app

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`description`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#description)

#### Defined in

main.ts:194127

***

### developer?

> `optional` **developer**: `string`

name of the app developer

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`developer`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#developer)

#### Defined in

main.ts:194143

***

### developer\_id?

> `optional` **developer\_id**: `string`

ID of the app developer

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`developer_id`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#developer_id)

#### Defined in

main.ts:194145

***

### developer\_url?

> `optional` **developer\_url**: `string`

URL to the developer page on App Store

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`developer_url`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#developer_url)

#### Defined in

main.ts:194147

***

### icon?

> `optional` **icon**: `string`

URL to the app icon

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`icon`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#icon)

#### Defined in

main.ts:194125

***

### images?

> `optional` **images**: `string`[]

app images
contains URLs to the images used on the app page on App Store

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`images`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#images)

#### Defined in

main.ts:194169

***

### is\_free?

> `optional` **is\_free**: `boolean`

indicates whether the app is free

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`is_free`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#is_free)

#### Defined in

main.ts:194133

***

### languages?

> `optional` **languages**: `string`[]

languages supported in the app

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`languages`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#languages)

#### Defined in

main.ts:194139

***

### last\_update\_date?

> `optional` **last\_update\_date**: `string`

date and time when the app was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`last_update_date`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#last_update_date)

#### Defined in

main.ts:194163

***

### main\_category?

> `optional` **main\_category**: `string`

main category/genre of the app

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`main_category`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#main_category)

#### Defined in

main.ts:194135

***

### minimum\_os\_version?

> `optional` **minimum\_os\_version**: `string`

minimum OS version required to install the app

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`minimum_os_version`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#minimum_os_version)

#### Defined in

main.ts:194151

***

### more\_apps\_by\_developer?

> `optional` **more\_apps\_by\_developer**: [`AppsInfo`](AppsInfo.md)[]

similar apps
information about apps built by the same developer

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`more_apps_by_developer`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#more_apps_by_developer)

#### Defined in

main.ts:194175

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`position`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#position)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`position`](BaseAppDataSerpElementItem.md#position)

#### Defined in

main.ts:21977

***

### price?

> `optional` **price**: [`Price`](Price.md)

price of the app

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`price`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#price)

#### Defined in

main.ts:194131

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`rank_absolute`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`rank_absolute`](BaseAppDataSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:21973

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`rank_group`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#rank_group)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`rank_group`](BaseAppDataSerpElementItem.md#rank_group)

#### Defined in

main.ts:21970

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

average rating of the app

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`rating`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#rating)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`rating`](BaseAppDataSerpElementItem.md#rating)

#### Defined in

main.ts:21981

***

### released\_date?

> `optional` **released\_date**: `string`

date and time when the app was released
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`released_date`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#released_date)

#### Defined in

main.ts:194158

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

the total number of reviews of the app

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`reviews_count`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#reviews_count)

#### Defined in

main.ts:194129

***

### similar\_apps?

> `optional` **similar\_apps**: [`AppsInfo`](AppsInfo.md)[]

similar apps
displays apps similar to the app in a POST request

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`similar_apps`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#similar_apps)

#### Defined in

main.ts:194172

***

### size?

> `optional` **size**: `string`

size of the app

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`size`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#size)

#### Defined in

main.ts:194153

***

### title?

> `optional` **title**: `string`

title of the app

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`title`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#title)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`title`](BaseAppDataSerpElementItem.md#title)

#### Defined in

main.ts:21979

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`type`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#type)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`type`](BaseAppDataSerpElementItem.md#type)

#### Defined in

main.ts:21967

***

### update\_notes?

> `optional` **update\_notes**: `string`

update notes
contains the latest update notes from the developer

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`update_notes`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#update_notes)

#### Defined in

main.ts:194166

***

### url?

> `optional` **url**: `string`

URL to the app page on App Store

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`url`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#url)

#### Defined in

main.ts:194123

***

### version?

> `optional` **version**: `string`

current version of the app

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`version`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#version)

#### Defined in

main.ts:194149

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

main.ts:194184

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

main.ts:194248

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataAppStoreInfoOrganicSerpElementItem`](AppDataAppStoreInfoOrganicSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataAppStoreInfoOrganicSerpElementItem`](AppDataAppStoreInfoOrganicSerpElementItem.md)

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`fromJS`](BaseAppDataSerpElementItem.md#fromjs)

#### Defined in

main.ts:194241
