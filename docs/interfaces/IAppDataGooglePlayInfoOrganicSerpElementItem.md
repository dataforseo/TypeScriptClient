[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IAppDataGooglePlayInfoOrganicSerpElementItem

# Interface: IAppDataGooglePlayInfoOrganicSerpElementItem

## Extends

- [`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### app\_id?

> `optional` **app\_id**: `string`

ID of the app

#### Defined in

main.ts:194343

***

### description?

> `optional` **description**: `string`

description of the app

#### Defined in

main.ts:194351

***

### developer?

> `optional` **developer**: `string`

name of the app developer

#### Defined in

main.ts:194369

***

### developer\_address?

> `optional` **developer\_address**: `string`

physical address of the developer

#### Defined in

main.ts:194377

***

### developer\_email?

> `optional` **developer\_email**: `string`

email address of the developer

#### Defined in

main.ts:194375

***

### developer\_id?

> `optional` **developer\_id**: `string`

ID of the app developer

#### Defined in

main.ts:194371

***

### developer\_url?

> `optional` **developer\_url**: `string`

URL to the developer page on Google Play

#### Defined in

main.ts:194373

***

### developer\_website?

> `optional` **developer\_website**: `string`

official website of the developer

#### Defined in

main.ts:194379

***

### genres?

> `optional` **genres**: `string`[]

app genres
contains relevant app categories

#### Defined in

main.ts:194413

***

### icon?

> `optional` **icon**: `string`

URL to the app icon

#### Defined in

main.ts:194349

***

### images?

> `optional` **images**: `string`[]

app images
contains URLs to the images published on the app page on Google Play

#### Defined in

main.ts:194401

***

### installs?

> `optional` **installs**: `string`

number of installs of the app
approximate number of installs as displayed on the app page

#### Defined in

main.ts:194364

***

### installs\_count?

> `optional` **installs\_count**: `number`

number of installs of the app
the exact number of installs of the app

#### Defined in

main.ts:194367

***

### is\_free?

> `optional` **is\_free**: `boolean`

indicates whether the app is free

#### Defined in

main.ts:194359

***

### last\_update\_date?

> `optional` **last\_update\_date**: `string`

date and time when the app was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:194395

***

### main\_category?

> `optional` **main\_category**: `string`

main category of the app

#### Defined in

main.ts:194361

***

### minimum\_os\_version?

> `optional` **minimum\_os\_version**: `string`

minimum OS version required to install the app

#### Defined in

main.ts:194383

***

### more\_apps\_by\_developer?

> `optional` **more\_apps\_by\_developer**: [`AppsInfo`](../classes/AppsInfo.md)[]

similar apps
information about apps built by the same developer

#### Defined in

main.ts:194410

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values: left

#### Defined in

main.ts:194341

***

### price?

> `optional` **price**: [`Price`](../classes/Price.md)

price of the app

#### Defined in

main.ts:194357

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank among all the listed apps
absolute position among all apps on the list

#### Defined in

main.ts:194338

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:194335

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

average rating of the app

#### Defined in

main.ts:194355

***

### released\_date?

> `optional` **released\_date**: `string`

date and time when the app was released
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:194390

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

the total number of reviews the app has

#### Defined in

main.ts:194353

***

### similar\_apps?

> `optional` **similar\_apps**: [`AppsInfo`](../classes/AppsInfo.md)[]

similar apps
displays apps similar to the app in a POST request

#### Defined in

main.ts:194407

***

### size?

> `optional` **size**: `string`

size of the app

#### Defined in

main.ts:194385

***

### tags?

> `optional` **tags**: `string`[]

app tags
contains relevant app tags

#### Defined in

main.ts:194416

***

### title?

> `optional` **title**: `string`

title of the app

#### Defined in

main.ts:194345

***

### update\_notes?

> `optional` **update\_notes**: `string`

update notes
contains the latest update notes from the developer

#### Defined in

main.ts:194398

***

### url?

> `optional` **url**: `string`

URL to the app page on Google Play

#### Defined in

main.ts:194347

***

### version?

> `optional` **version**: `string`

current version of the app

#### Defined in

main.ts:194381

***

### videos?

> `optional` **videos**: `string`[]

app videos
contains URLs to the video published on the app page on Google Play

#### Defined in

main.ts:194404
