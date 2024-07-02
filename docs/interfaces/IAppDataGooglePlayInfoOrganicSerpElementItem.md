**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IAppDataGooglePlayInfoOrganicSerpElementItem

# Interface: IAppDataGooglePlayInfoOrganicSerpElementItem

## Extends

- [`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### app\_id?

> **`optional`** **app\_id**: `string`

ID of the app

#### Source

main.ts:189818

***

### description?

> **`optional`** **description**: `string`

description of the app

#### Source

main.ts:189826

***

### developer?

> **`optional`** **developer**: `string`

name of the app developer

#### Source

main.ts:189844

***

### developer\_address?

> **`optional`** **developer\_address**: `string`

physical address of the developer

#### Source

main.ts:189852

***

### developer\_email?

> **`optional`** **developer\_email**: `string`

email address of the developer

#### Source

main.ts:189850

***

### developer\_id?

> **`optional`** **developer\_id**: `string`

ID of the app developer

#### Source

main.ts:189846

***

### developer\_url?

> **`optional`** **developer\_url**: `string`

URL to the developer page on Google Play

#### Source

main.ts:189848

***

### developer\_website?

> **`optional`** **developer\_website**: `string`

official website of the developer

#### Source

main.ts:189854

***

### genres?

> **`optional`** **genres**: `string`[]

app genres
contains relevant app categories

#### Source

main.ts:189888

***

### icon?

> **`optional`** **icon**: `string`

URL to the app icon

#### Source

main.ts:189824

***

### images?

> **`optional`** **images**: `string`[]

app images
contains URLs to the images published on the app page on Google Play

#### Source

main.ts:189876

***

### installs?

> **`optional`** **installs**: `string`

number of installs of the app
approximate number of installs as displayed on the app page

#### Source

main.ts:189839

***

### installs\_count?

> **`optional`** **installs\_count**: `number`

number of installs of the app
the exact number of installs of the app

#### Source

main.ts:189842

***

### is\_free?

> **`optional`** **is\_free**: `boolean`

indicates whether the app is free

#### Source

main.ts:189834

***

### last\_update\_date?

> **`optional`** **last\_update\_date**: `string`

date and time when the app was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:189870

***

### main\_category?

> **`optional`** **main\_category**: `string`

main category of the app

#### Source

main.ts:189836

***

### minimum\_os\_version?

> **`optional`** **minimum\_os\_version**: `string`

minimum OS version required to install the app

#### Source

main.ts:189858

***

### more\_apps\_by\_developer?

> **`optional`** **more\_apps\_by\_developer**: [`AppsInfo`](../classes/AppsInfo.md)[]

similar apps
information about apps built by the same developer

#### Source

main.ts:189885

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values: left

#### Source

main.ts:189816

***

### price?

> **`optional`** **price**: [`PriceInfo`](../classes/PriceInfo.md)

price of the app

#### Source

main.ts:189832

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank among all the listed apps
absolute position among all apps on the list

#### Source

main.ts:189813

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:189810

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](../classes/RatingInfo.md)

average rating of the app

#### Source

main.ts:189830

***

### released\_date?

> **`optional`** **released\_date**: `string`

date and time when the app was released
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:189865

***

### reviews\_count?

> **`optional`** **reviews\_count**: `number`

the total number of reviews the app has

#### Source

main.ts:189828

***

### similar\_apps?

> **`optional`** **similar\_apps**: [`AppsInfo`](../classes/AppsInfo.md)[]

similar apps
displays apps similar to the app in a POST request

#### Source

main.ts:189882

***

### size?

> **`optional`** **size**: `string`

size of the app

#### Source

main.ts:189860

***

### tags?

> **`optional`** **tags**: `string`[]

app tags
contains relevant app tags

#### Source

main.ts:189891

***

### title?

> **`optional`** **title**: `string`

title of the app

#### Source

main.ts:189820

***

### update\_notes?

> **`optional`** **update\_notes**: `string`

update notes
contains the latest update notes from the developer

#### Source

main.ts:189873

***

### url?

> **`optional`** **url**: `string`

URL to the app page on Google Play

#### Source

main.ts:189822

***

### version?

> **`optional`** **version**: `string`

current version of the app

#### Source

main.ts:189856

***

### videos?

> **`optional`** **videos**: `string`[]

app videos
contains URLs to the video published on the app page on Google Play

#### Source

main.ts:189879
