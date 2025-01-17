[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataAppStoreInfoOrganicSerpElementItem

# Class: AppDataAppStoreInfoOrganicSerpElementItem

Defined in: main.ts:206562

## Extends

- [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)

## Implements

- [`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataAppStoreInfoOrganicSerpElementItem()

> **new AppDataAppStoreInfoOrganicSerpElementItem**(`data`?): [`AppDataAppStoreInfoOrganicSerpElementItem`](AppDataAppStoreInfoOrganicSerpElementItem.md)

Defined in: main.ts:206622

#### Parameters

##### data?

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md)

#### Returns

[`AppDataAppStoreInfoOrganicSerpElementItem`](AppDataAppStoreInfoOrganicSerpElementItem.md)

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`constructor`](BaseAppDataSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:22886

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`_discriminator`](BaseAppDataSerpElementItem.md#_discriminator)

***

### advisories?

> `optional` **advisories**: `string`[]

Defined in: main.ts:206584

age rating and age-based content advisories

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`advisories`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#advisories)

***

### app\_id?

> `optional` **app\_id**: `string`

Defined in: main.ts:206564

ID of the app

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`app_id`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#app_id)

***

### categories?

> `optional` **categories**: `string`[]

Defined in: main.ts:206580

all relevant categories/genres of the app

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`categories`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#categories)

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:206570

description of the app

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`description`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#description)

***

### developer?

> `optional` **developer**: `string`

Defined in: main.ts:206586

name of the app developer

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`developer`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#developer)

***

### developer\_id?

> `optional` **developer\_id**: `string`

Defined in: main.ts:206588

ID of the app developer

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`developer_id`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#developer_id)

***

### developer\_url?

> `optional` **developer\_url**: `string`

Defined in: main.ts:206590

URL to the developer page on App Store

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`developer_url`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#developer_url)

***

### icon?

> `optional` **icon**: `string`

Defined in: main.ts:206568

URL to the app icon

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`icon`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#icon)

***

### images?

> `optional` **images**: `string`[]

Defined in: main.ts:206612

app images
contains URLs to the images used on the app page on App Store

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`images`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#images)

***

### is\_free?

> `optional` **is\_free**: `boolean`

Defined in: main.ts:206576

indicates whether the app is free

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`is_free`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#is_free)

***

### languages?

> `optional` **languages**: `string`[]

Defined in: main.ts:206582

languages supported in the app

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`languages`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#languages)

***

### last\_update\_date?

> `optional` **last\_update\_date**: `string`

Defined in: main.ts:206606

date and time when the app was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`last_update_date`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#last_update_date)

***

### main\_category?

> `optional` **main\_category**: `string`

Defined in: main.ts:206578

main category/genre of the app

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`main_category`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#main_category)

***

### minimum\_os\_version?

> `optional` **minimum\_os\_version**: `string`

Defined in: main.ts:206594

minimum OS version required to install the app

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`minimum_os_version`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#minimum_os_version)

***

### more\_apps\_by\_developer?

> `optional` **more\_apps\_by\_developer**: [`AppsInfo`](AppsInfo.md)[]

Defined in: main.ts:206618

similar apps
information about apps built by the same developer

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`more_apps_by_developer`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#more_apps_by_developer)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:22880

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`position`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#position)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`position`](BaseAppDataSerpElementItem.md#position)

***

### price?

> `optional` **price**: [`PriceInfo`](PriceInfo.md)

Defined in: main.ts:206574

price of the app

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`price`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#price)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22876

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`rank_absolute`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`rank_absolute`](BaseAppDataSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22873

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`rank_group`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#rank_group)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`rank_group`](BaseAppDataSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:22884

average rating of the app

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`rating`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#rating)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`rating`](BaseAppDataSerpElementItem.md#rating)

***

### released\_date?

> `optional` **released\_date**: `string`

Defined in: main.ts:206601

date and time when the app was released
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`released_date`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#released_date)

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

Defined in: main.ts:206572

the total number of reviews of the app

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`reviews_count`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#reviews_count)

***

### similar\_apps?

> `optional` **similar\_apps**: [`AppsInfo`](AppsInfo.md)[]

Defined in: main.ts:206615

similar apps
displays apps similar to the app in a POST request

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`similar_apps`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#similar_apps)

***

### size?

> `optional` **size**: `string`

Defined in: main.ts:206596

size of the app

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`size`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#size)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:22882

title of the app

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`title`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#title)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`title`](BaseAppDataSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22870

type of element

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`type`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#type)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`type`](BaseAppDataSerpElementItem.md#type)

***

### update\_notes?

> `optional` **update\_notes**: `string`

Defined in: main.ts:206609

update notes
contains the latest update notes from the developer

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`update_notes`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#update_notes)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:206566

URL to the app page on App Store

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`url`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#url)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:206592

current version of the app

#### Implementation of

[`IAppDataAppStoreInfoOrganicSerpElementItem`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md).[`version`](../interfaces/IAppDataAppStoreInfoOrganicSerpElementItem.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:206627

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`init`](BaseAppDataSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:206691

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`toJSON`](BaseAppDataSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataAppStoreInfoOrganicSerpElementItem`](AppDataAppStoreInfoOrganicSerpElementItem.md)

Defined in: main.ts:206684

#### Parameters

##### data

`any`

#### Returns

[`AppDataAppStoreInfoOrganicSerpElementItem`](AppDataAppStoreInfoOrganicSerpElementItem.md)

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`fromJS`](BaseAppDataSerpElementItem.md#fromjs)
