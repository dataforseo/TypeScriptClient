**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IAppDataAppStoreInfoOrganicSerpElementItem

# Interface: IAppDataAppStoreInfoOrganicSerpElementItem

## Extends

- [`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### advisories?

> **`optional`** **advisories**: `string`[]

age rating and age-based content advisories

#### Source

main.ts:194385

***

### app\_id?

> **`optional`** **app\_id**: `string`

ID of the app

#### Source

main.ts:194361

***

### categories?

> **`optional`** **categories**: `string`[]

all relevant categories/genres of the app

#### Source

main.ts:194381

***

### description?

> **`optional`** **description**: `string`

description of the app

#### Source

main.ts:194369

***

### developer?

> **`optional`** **developer**: `string`

name of the app developer

#### Source

main.ts:194387

***

### developer\_id?

> **`optional`** **developer\_id**: `string`

ID of the app developer

#### Source

main.ts:194389

***

### developer\_url?

> **`optional`** **developer\_url**: `string`

URL to the developer page on App Store

#### Source

main.ts:194391

***

### icon?

> **`optional`** **icon**: `string`

URL to the app icon

#### Source

main.ts:194367

***

### images?

> **`optional`** **images**: `string`[]

app images
contains URLs to the images used on the app page on App Store

#### Source

main.ts:194413

***

### is\_free?

> **`optional`** **is\_free**: `boolean`

indicates whether the app is free

#### Source

main.ts:194377

***

### languages?

> **`optional`** **languages**: `string`[]

languages supported in the app

#### Source

main.ts:194383

***

### last\_update\_date?

> **`optional`** **last\_update\_date**: `string`

date and time when the app was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:194407

***

### main\_category?

> **`optional`** **main\_category**: `string`

main category/genre of the app

#### Source

main.ts:194379

***

### minimum\_os\_version?

> **`optional`** **minimum\_os\_version**: `string`

minimum OS version required to install the app

#### Source

main.ts:194395

***

### more\_apps\_by\_developer?

> **`optional`** **more\_apps\_by\_developer**: [`AppsInfo`](../classes/AppsInfo.md)[]

similar apps
information about apps built by the same developer

#### Source

main.ts:194419

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values: left

#### Source

main.ts:194359

***

### price?

> **`optional`** **price**: [`PriceInfo`](../classes/PriceInfo.md)

price of the app

#### Source

main.ts:194375

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank among all the listed apps
absolute position among all apps on the list

#### Source

main.ts:194356

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:194353

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](../classes/RatingInfo.md)

average rating of the app

#### Source

main.ts:194373

***

### released\_date?

> **`optional`** **released\_date**: `string`

date and time when the app was released
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:194402

***

### reviews\_count?

> **`optional`** **reviews\_count**: `number`

the total number of reviews of the app

#### Source

main.ts:194371

***

### similar\_apps?

> **`optional`** **similar\_apps**: [`AppsInfo`](../classes/AppsInfo.md)[]

similar apps
displays apps similar to the app in a POST request

#### Source

main.ts:194416

***

### size?

> **`optional`** **size**: `string`

size of the app

#### Source

main.ts:194397

***

### title?

> **`optional`** **title**: `string`

title of the app

#### Source

main.ts:194363

***

### update\_notes?

> **`optional`** **update\_notes**: `string`

update notes
contains the latest update notes from the developer

#### Source

main.ts:194410

***

### url?

> **`optional`** **url**: `string`

URL to the app page on App Store

#### Source

main.ts:194365

***

### version?

> **`optional`** **version**: `string`

current version of the app

#### Source

main.ts:194393
