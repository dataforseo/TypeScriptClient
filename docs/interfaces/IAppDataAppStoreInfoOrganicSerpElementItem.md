[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IAppDataAppStoreInfoOrganicSerpElementItem

# Interface: IAppDataAppStoreInfoOrganicSerpElementItem

## Extends

- [`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### advisories?

> `optional` **advisories**: `string`[]

age rating and age-based content advisories

#### Defined in

main.ts:198910

***

### app\_id?

> `optional` **app\_id**: `string`

ID of the app

#### Defined in

main.ts:198886

***

### categories?

> `optional` **categories**: `string`[]

all relevant categories/genres of the app

#### Defined in

main.ts:198906

***

### description?

> `optional` **description**: `string`

description of the app

#### Defined in

main.ts:198894

***

### developer?

> `optional` **developer**: `string`

name of the app developer

#### Defined in

main.ts:198912

***

### developer\_id?

> `optional` **developer\_id**: `string`

ID of the app developer

#### Defined in

main.ts:198914

***

### developer\_url?

> `optional` **developer\_url**: `string`

URL to the developer page on App Store

#### Defined in

main.ts:198916

***

### icon?

> `optional` **icon**: `string`

URL to the app icon

#### Defined in

main.ts:198892

***

### images?

> `optional` **images**: `string`[]

app images
contains URLs to the images used on the app page on App Store

#### Defined in

main.ts:198938

***

### is\_free?

> `optional` **is\_free**: `boolean`

indicates whether the app is free

#### Defined in

main.ts:198902

***

### languages?

> `optional` **languages**: `string`[]

languages supported in the app

#### Defined in

main.ts:198908

***

### last\_update\_date?

> `optional` **last\_update\_date**: `string`

date and time when the app was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:198932

***

### main\_category?

> `optional` **main\_category**: `string`

main category/genre of the app

#### Defined in

main.ts:198904

***

### minimum\_os\_version?

> `optional` **minimum\_os\_version**: `string`

minimum OS version required to install the app

#### Defined in

main.ts:198920

***

### more\_apps\_by\_developer?

> `optional` **more\_apps\_by\_developer**: [`AppsInfo`](../classes/AppsInfo.md)[]

similar apps
information about apps built by the same developer

#### Defined in

main.ts:198944

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values: left

#### Defined in

main.ts:198884

***

### price?

> `optional` **price**: [`Price`](../classes/Price.md)

price of the app

#### Defined in

main.ts:198900

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank among all the listed apps
absolute position among all apps on the list

#### Defined in

main.ts:198881

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:198878

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

average rating of the app

#### Defined in

main.ts:198898

***

### released\_date?

> `optional` **released\_date**: `string`

date and time when the app was released
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:198927

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

the total number of reviews of the app

#### Defined in

main.ts:198896

***

### similar\_apps?

> `optional` **similar\_apps**: [`AppsInfo`](../classes/AppsInfo.md)[]

similar apps
displays apps similar to the app in a POST request

#### Defined in

main.ts:198941

***

### size?

> `optional` **size**: `string`

size of the app

#### Defined in

main.ts:198922

***

### title?

> `optional` **title**: `string`

title of the app

#### Defined in

main.ts:198888

***

### update\_notes?

> `optional` **update\_notes**: `string`

update notes
contains the latest update notes from the developer

#### Defined in

main.ts:198935

***

### url?

> `optional` **url**: `string`

URL to the app page on App Store

#### Defined in

main.ts:198890

***

### version?

> `optional` **version**: `string`

current version of the app

#### Defined in

main.ts:198918
