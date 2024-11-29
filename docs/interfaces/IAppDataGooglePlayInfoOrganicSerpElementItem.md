[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAppDataGooglePlayInfoOrganicSerpElementItem

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

main.ts:202208

***

### description?

> `optional` **description**: `string`

description of the app

#### Defined in

main.ts:202214

***

### developer?

> `optional` **developer**: `string`

name of the app developer

#### Defined in

main.ts:202230

***

### developer\_address?

> `optional` **developer\_address**: `string`

physical address of the developer

#### Defined in

main.ts:202238

***

### developer\_email?

> `optional` **developer\_email**: `string`

email address of the developer

#### Defined in

main.ts:202236

***

### developer\_id?

> `optional` **developer\_id**: `string`

ID of the app developer

#### Defined in

main.ts:202232

***

### developer\_url?

> `optional` **developer\_url**: `string`

URL to the developer page on Google Play

#### Defined in

main.ts:202234

***

### developer\_website?

> `optional` **developer\_website**: `string`

official website of the developer

#### Defined in

main.ts:202240

***

### genres?

> `optional` **genres**: `string`[]

app genres
contains relevant app categories

#### Defined in

main.ts:202274

***

### icon?

> `optional` **icon**: `string`

URL to the app icon

#### Defined in

main.ts:202212

***

### images?

> `optional` **images**: `string`[]

app images
contains URLs to the images published on the app page on Google Play

#### Defined in

main.ts:202262

***

### installs?

> `optional` **installs**: `string`

number of installs of the app
approximate number of installs as displayed on the app page

#### Defined in

main.ts:202225

***

### installs\_count?

> `optional` **installs\_count**: `number`

number of installs of the app
the exact number of installs of the app

#### Defined in

main.ts:202228

***

### is\_free?

> `optional` **is\_free**: `boolean`

indicates whether the app is free

#### Defined in

main.ts:202220

***

### last\_update\_date?

> `optional` **last\_update\_date**: `string`

date and time when the app was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:202256

***

### main\_category?

> `optional` **main\_category**: `string`

main category of the app

#### Defined in

main.ts:202222

***

### minimum\_os\_version?

> `optional` **minimum\_os\_version**: `string`

minimum OS version required to install the app

#### Defined in

main.ts:202244

***

### more\_apps\_by\_developer?

> `optional` **more\_apps\_by\_developer**: [`AppsInfo`](../classes/AppsInfo.md)[]

similar apps
information about apps built by the same developer

#### Defined in

main.ts:202271

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Inherited from

[`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md).[`position`](IBaseAppDataSerpElementItem.md#position)

#### Defined in

main.ts:22971

***

### price?

> `optional` **price**: [`PriceInfo`](../classes/PriceInfo.md)

price of the app

#### Defined in

main.ts:202218

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md).[`rank_absolute`](IBaseAppDataSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:22967

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md).[`rank_group`](IBaseAppDataSerpElementItem.md#rank_group)

#### Defined in

main.ts:22964

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

average rating of the app

#### Inherited from

[`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md).[`rating`](IBaseAppDataSerpElementItem.md#rating)

#### Defined in

main.ts:22975

***

### released\_date?

> `optional` **released\_date**: `string`

date and time when the app was released
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:202251

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

the total number of reviews the app has

#### Defined in

main.ts:202216

***

### similar\_apps?

> `optional` **similar\_apps**: [`AppsInfo`](../classes/AppsInfo.md)[]

similar apps
displays apps similar to the app in a POST request

#### Defined in

main.ts:202268

***

### size?

> `optional` **size**: `string`

size of the app

#### Defined in

main.ts:202246

***

### tags?

> `optional` **tags**: `string`[]

app tags
contains relevant app tags

#### Defined in

main.ts:202277

***

### title?

> `optional` **title**: `string`

title of the app

#### Inherited from

[`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md).[`title`](IBaseAppDataSerpElementItem.md#title)

#### Defined in

main.ts:22973

***

### type?

> `optional` **type**: `string`

type of element

#### Inherited from

[`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md).[`type`](IBaseAppDataSerpElementItem.md#type)

#### Defined in

main.ts:22961

***

### update\_notes?

> `optional` **update\_notes**: `string`

update notes
contains the latest update notes from the developer

#### Defined in

main.ts:202259

***

### url?

> `optional` **url**: `string`

URL to the app page on Google Play

#### Defined in

main.ts:202210

***

### version?

> `optional` **version**: `string`

current version of the app

#### Defined in

main.ts:202242

***

### videos?

> `optional` **videos**: `string`[]

app videos
contains URLs to the video published on the app page on Google Play

#### Defined in

main.ts:202265
